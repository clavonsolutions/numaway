import Login from "@/views/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login | NUMAWAY",
  description: "Sign in to the Numaway Admin Dashboard.",
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12 flex flex-col justify-center">
      <Login portalType="admin" />
    </div>
  );
}
