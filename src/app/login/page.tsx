import Login from "@/views/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | NUMAWAY",
  description: "Sign in to your Numaway account to track your study abroad application.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12 flex flex-col justify-center">
      <Login portalType="student" />
    </div>
  );
}
