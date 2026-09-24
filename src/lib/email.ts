import { Resend } from "resend";
import WelcomeEmail from "@/emails/WelcomeEmail";
import ResetPasswordEmail from "@/emails/ResetPasswordEmail";
import InviteEmail from "@/emails/InviteEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
const COMPANY_EMAIL = process.env.NEXT_PUBLIC_COMPANY_EMAIL || "connect@numaway.com";

export async function sendWelcomeEmail(email: string, name: string) {
  try {
    const data = await resend.emails.send({
      from: `Numaway <${COMPANY_EMAIL}>`,
      to: [email],
      subject: "Welcome to Numaway!",
      react: WelcomeEmail({ userName: name }),
    });
    return { success: true, data };
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return { success: false, error };
  }
}

export async function sendResetPasswordEmail(email: string, resetToken: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SAGE_API_BASE_URL || "http://localhost:3000";
    const resetLink = `${baseUrl}/reset-password?token=${resetToken}`;
    
    const data = await resend.emails.send({
      from: `Numaway <${COMPANY_EMAIL}>`,
      to: [email],
      subject: "Reset your Numaway password",
      react: ResetPasswordEmail({ resetLink }),
    });
    return { success: true, data };
  } catch (error) {
    console.error("Error sending reset password email:", error);
    return { success: false, error };
  }
}

export async function sendInviteEmail(email: string, inviteUrl: string) {
  try {
    const data = await resend.emails.send({
      from: `Numaway <${COMPANY_EMAIL}>`,
      to: [email],
      subject: "You have been invited to Numaway",
      react: InviteEmail({ inviteUrl }),
    });
    return { success: true, data };
  } catch (error) {
    console.error("Error sending invite email:", error);
    return { success: false, error };
  }
}
