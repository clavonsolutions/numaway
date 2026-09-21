import { render } from "@react-email/render";
import { WelcomeEmail } from "../src/emails/WelcomeEmail.js";
import { ResetPasswordEmail } from "../src/emails/ResetPasswordEmail.js";
import { InviteEmail } from "../src/emails/InviteEmail.js";
import * as fs from "fs";
import * as path from "path";

async function generateHtml() {
  const outputDir = path.join(process.cwd(), "supabase-email-templates");
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // Generate Welcome HTML
  const welcomeHtml = await render(WelcomeEmail());
  fs.writeFileSync(path.join(outputDir, "welcome.html"), welcomeHtml);
  console.log("✅ Generated welcome.html");

  // Generate Reset Password HTML
  const resetPasswordHtml = await render(ResetPasswordEmail());
  fs.writeFileSync(path.join(outputDir, "reset-password.html"), resetPasswordHtml);
  console.log("✅ Generated reset-password.html");

  // Generate Invite HTML
  const inviteHtml = await render(InviteEmail());
  fs.writeFileSync(path.join(outputDir, "invite.html"), inviteHtml);
  console.log("✅ Generated invite.html");

  console.log("\nDone! You can now copy the contents of these files into your Supabase Dashboard -> Authentication -> Email Templates.");
}

generateHtml().catch(console.error);
