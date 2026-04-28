/**
 * Sage AI proxy — ADR-016 / MRS §7.5
 *
 * POST /api/sage/chat
 *
 * Security model:
 *   - Validates Supabase Bearer token before any AI call
 *   - ANTHROPIC_API_KEY is NEVER sent to the browser
 *   - Internal error details are stripped before returning to client
 *   - No PII is logged
 *
 * IMPORTANT: When you update content/sage/system-prompt.md, sync SYSTEM_PROMPT below.
 *
 * Environment variables required (Vercel dashboard or .env.local):
 *   ANTHROPIC_API_KEY         — Anthropic secret key (server-side only)
 *   ANTHROPIC_MODEL           — Optional; defaults to claude-3-5-haiku-20241022
 *   SUPABASE_URL              — Supabase project URL (or reuse VITE_SUPABASE_URL)
 *   SUPABASE_ANON_KEY         — Supabase anon key (or reuse VITE_SUPABASE_ANON_KEY)
 */

import { createClient } from "@supabase/supabase-js";

// ---------------------------------------------------------------------------
// Minimal handler types — avoids requiring @vercel/node in dependencies.
// Vercel Node.js runtime provides objects that satisfy these shapes.
// ---------------------------------------------------------------------------
interface SageRequest {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body: unknown;
}

interface SageResponse {
  status(code: number): SageResponse;
  json(data: unknown): void;
  setHeader(name: string, value: string): void;
}

// ---------------------------------------------------------------------------
// System prompt — sync with content/sage/system-prompt.md on every update.
// ESCALATE TO FOUNDER before changing this content (CLAUDE.md policy).
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
// Config
// ---------------------------------------------------------------------------
const SUPABASE_URL =
  process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY =
  process.env.SUPABASE_ANON_KEY ?? process.env.VITE_SUPABASE_ANON_KEY ?? "";
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY ?? "";
const ANTHROPIC_MODEL =
  process.env.ANTHROPIC_MODEL ?? "claude-3-5-haiku-20241022";
const MAX_TOKENS = 1024;
const MAX_MESSAGES = 40; // cap conversation history to prevent abuse

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
  error?: { message: string };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function extractBearerToken(
  authorization: string | string[] | undefined
): string {
  const header = Array.isArray(authorization)
    ? authorization[0]
    : (authorization ?? "");
  return header.startsWith("Bearer ") ? header.slice(7).trim() : "";
}

function isValidMessage(value: unknown): value is ChatMessage {
  if (typeof value !== "object" || value === null) return false;
  const msg = value as Record<string, unknown>;
  return (
    (msg.role === "user" || msg.role === "assistant") &&
    typeof msg.content === "string" &&
    msg.content.trim().length > 0
  );
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------
export default async function handler(
  req: SageRequest,
  res: SageResponse
): Promise<void> {
  // CORS header — Vercel adds this automatically for same-origin, but be explicit
  res.setHeader("Content-Type", "application/json");

  // Only POST
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // Extract and validate Bearer token
  const token = extractBearerToken(req.headers["authorization"]);
  if (!token) {
    res.status(401).json({ error: "Missing authorisation token" });
    return;
  }

  // Validate Supabase session — uses anon key + user JWT; no service-role key needed
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    res.status(503).json({ error: "Auth service is not configured" });
    return;
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  const { data: authData, error: authError } =
    await supabase.auth.getUser(token);

  if (authError ?? !authData.user) {
    res.status(401).json({ error: "Invalid or expired session" });
    return;
  }

  // Validate request body
  const body = req.body;
  if (typeof body !== "object" || body === null) {
    res.status(400).json({ error: "Request body must be a JSON object" });
    return;
  }

  const rawMessages = (body as Record<string, unknown>).messages;
  if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
    res.status(400).json({ error: "messages must be a non-empty array" });
    return;
  }

  // Validate each message shape and enforce length cap
  const messages = rawMessages.slice(-MAX_MESSAGES);
  for (const msg of messages) {
    if (!isValidMessage(msg)) {
      res.status(400).json({
        error:
          "Each message must have role ('user'|'assistant') and non-empty content string",
      });
      return;
    }
  }

  // Ensure last message is from the user
  const lastMsg = messages[messages.length - 1];
  if (!isValidMessage(lastMsg) || lastMsg.role !== "user") {
    res.status(400).json({ error: "Last message must be from the user" });
    return;
  }

  // Anthropic API key must be configured
  if (!ANTHROPIC_API_KEY) {
    res.status(503).json({ error: "AI service is not configured" });
    return;
  }

  // Call Anthropic Messages API
  let anthropicRes: Response;
  try {
    anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
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
  } catch {
    // Network-level error — do not expose details
    res.status(502).json({ error: "Could not reach AI service" });
    return;
  }

  if (!anthropicRes.ok) {
    // Log status code only — never log API key or response body that may contain secrets
    console.error("[sage-proxy] Anthropic responded", anthropicRes.status);
    res.status(502).json({ error: "AI service returned an error" });
    return;
  }

  let anthropicData: AnthropicResponse;
  try {
    anthropicData = (await anthropicRes.json()) as AnthropicResponse;
  } catch {
    res.status(502).json({ error: "Could not parse AI service response" });
    return;
  }

  const reply =
    anthropicData.content.find((c) => c.type === "text")?.text ?? "";

  if (!reply) {
    res.status(502).json({ error: "AI service returned an empty response" });
    return;
  }

  res.status(200).json({ reply });
}
