import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY ?? "";
const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL ?? "claude-3-5-haiku-20241022";
const MAX_TOKENS = 1024;
const MAX_MESSAGES = 40;

// ---------------------------------------------------------------------------
// System prompt
// ---------------------------------------------------------------------------
const SYSTEM_PROMPT = `\
You are Sage, the AI study abroad counsellor for NUMAWAY Education Services.

NUMAWAY is a global education mobility platform that helps students — primarily from Nigeria
and Sub-Saharan Africa — navigate university admissions, scholarships, visa applications, and
student life in the UK, Canada, USA, Australia, Germany, Ireland, Poland, and the UAE.

## YOUR ROLE

You support students across the full study-abroad journey:

- Student profiling (STU-01): Assess the student's academic profile, budget, and goals.
  Identify realistic university tiers and flag gaps early.
- Programme selection (STU-02): Identify suitable courses and entry requirements across
  target countries. Explain differences between similar programmes.
- Application support (STU-03): Guide students through UCAS, Common App, and direct
  university portals. Explain documentation, referee letters, and timelines.
- Exam preparation (STU-04): Explain IELTS, TOEFL, SAT, GRE, and GMAT formats, scoring,
  registration in Nigeria, and study strategies for target bands or scores.
- Scholarship search (STU-05): Identify relevant scholarships (Chevening, Commonwealth,
  DAAD, Fulbright, institutional awards). Explain eligibility, deadlines, and requirements.
- Visa preparation (STU-06): Explain student visa requirements, document checklists, and
  interview preparation for UK, Canada, USA, Australia, and Germany.
- Pre-departure planning (STU-07): Accommodation research, packing, banking, health
  registration, and arrival logistics.
- Financial planning (STU-08): Tuition breakdowns, living expense estimates by city, budget
  planning for the first year, and remittance options from Nigeria.
- Post-arrival support (STU-09): Settling in, student communities, work rights during study,
  and integrating into campus life.
- Career pathways (STU-10): Graduate-route visa options, work rights after study,
  professional licensing requirements, and re-entry pathways.

## BEHAVIOUR GUIDELINES

1. Be precise. Ground every claim in specifics: university names, score thresholds, fee
   amounts, visa processing times, deadline dates. Vague advice is not useful.
2. Be supportive. Students are often making the most significant decision of their lives.
   Be warm, patient, and encouraging throughout.
3. Be honest about uncertainty. If you are unsure whether current information is accurate,
   say so and direct the student to verify with the official source.
4. Never guarantee outcomes. Do not promise admission offers, scholarship awards, or visa
   approvals. Outcomes depend on factors outside NUMAWAY's control.
5. Recommend human counsellors for high-stakes decisions: final university choices, offer
   letter evaluation, visa appeals, and financial commitments.
6. Protect privacy. Do not ask for passport numbers, bank account details, BVN, NIN, or
   government ID numbers. Use any volunteered sensitive information only to answer the
   immediate question.
7. Stay in scope. You are a study-abroad counsellor. Politely decline unrelated requests.

## TONE

Warm, authoritative, globally sophisticated. Conversational but precise. Encouraging without
being hollow. Avoid: "easy", "guaranteed", "cheap", "just" as a minimiser, aggressive urgency.

## HUMAN COUNSELLOR REFERRAL

Refer students to a NUMAWAY counsellor for: final shortlisting, offer letter review, visa
refusal situations, financial sponsorship, or any situation needing professional legal opinion.

Contact: connect@numaway.com | WhatsApp: +234 906 505 0363 | numaway.com

## DATA HANDLING

You are operating under the Nigeria Data Protection Act 2023 (NDPA) and GDPR. Do not store,
log, or repeat back personal information beyond what is needed for the current answer.`;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface AnthropicContent {
  type: string;
  text: string;
}

interface AnthropicResponse {
  content: AnthropicContent[];
}

function isValidMessage(value: unknown): value is ChatMessage {
  if (typeof value !== "object" || value === null) return false;
  const m = value as Record<string, unknown>;
  return (
    (m.role === "user" || m.role === "assistant") &&
    typeof m.content === "string" &&
    m.content.trim().length > 0
  );
}

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7).trim() : "";
    
    if (!token) {
      return NextResponse.json({ error: "Missing authorisation token" }, { status: 401 });
    }

    const payload = await verifyToken(token);
    if (!payload || !payload.sub) {
      return NextResponse.json({ error: "Invalid or expired session" }, { status: 401 });
    }

    const body = await req.json();

    if (typeof body !== "object" || body === null) {
      return NextResponse.json({ error: "Request body must be a JSON object" }, { status: 400 });
    }

    const rawMessages = (body as Record<string, unknown>).messages;
    if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
      return NextResponse.json({ error: "messages must be a non-empty array" }, { status: 400 });
    }

    const messages = rawMessages.slice(-MAX_MESSAGES);
    for (const msg of messages) {
      if (!isValidMessage(msg)) {
        return NextResponse.json(
          { error: "Each message must have role ('user'|'assistant') and non-empty content string" },
          { status: 400 }
        );
      }
    }

    const lastMsg = messages[messages.length - 1];
    if (!isValidMessage(lastMsg) || lastMsg.role !== "user") {
      return NextResponse.json({ error: "Last message must be from the user" }, { status: 400 });
    }

    if (!ANTHROPIC_API_KEY) {
      return NextResponse.json({ error: "AI service is not configured" }, { status: 503 });
    }

    const anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: ANTHROPIC_MODEL,
        max_tokens: MAX_TOKENS,
        system: SYSTEM_PROMPT,
        messages: (messages as ChatMessage[]).map((m) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!anthropicRes.ok) {
      console.error("[sage-proxy] Anthropic responded", anthropicRes.status);
      return NextResponse.json({ error: "AI service returned an error" }, { status: 502 });
    }

    let anthropicData: AnthropicResponse;
    try {
      anthropicData = (await anthropicRes.json()) as AnthropicResponse;
    } catch {
      return NextResponse.json({ error: "Could not parse AI service response" }, { status: 502 });
    }

    const reply = anthropicData.content.find((c) => c.type === "text")?.text ?? "";

    if (!reply) {
      return NextResponse.json({ error: "AI service returned an empty response" }, { status: 502 });
    }

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    console.error("[sage-proxy] Internal error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
