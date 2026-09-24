import ResetPassword from "@/views/ResetPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | NUMAWAY",
  description: "Set a new password for your Numaway account.",
};

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12 flex flex-col justify-center">
      <ResetPassword />
    </div>
  );
}
