import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ConsultationNotification } from "@/emails/ConsultationNotification";
import { ConsultationAutoReply } from "@/emails/ConsultationAutoReply";

const resend = new Resend(process.env.RESEND_API_KEY || "re_123");
const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL || "connect@numaway.com";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { full_name, email, phone, destination, message, source, userType, studyLevel } = body;

    if (!full_name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "re_123456789_placeholder") {
      // Send Notification to Company
      await resend.emails.send({
        from: `NUMAWAY Leads <onboarding@resend.dev>`, // Must be verified domain in production
        to: [companyEmail],
        subject: `New Lead: ${source || "Consultation Request"}`,
        react: ConsultationNotification({
          fullName: full_name,
          email,
          phone,
          userType,
          studyLevel,
          destination,
          source,
        }),
      });

      // Send Auto-Reply to User
      await resend.emails.send({
        from: `NUMAWAY Education <onboarding@resend.dev>`, // Must be verified domain in production
        to: [email],
        subject: "We received your request!",
        react: ConsultationAutoReply({
          fullName: full_name.split(" ")[0] || full_name,
        }),
      });
    } else {
      console.log("No valid Resend API key found. Skipping email sending.");
      console.log("Would have sent notification to:", companyEmail);
      console.log("Would have sent auto-reply to:", email);
    }

    // You could also save the lead to Supabase here if needed!

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
