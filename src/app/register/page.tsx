import Register from "@/views/Register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an Account | NUMAWAY",
  description: "Create an account to start your study abroad application with Numaway.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12 flex flex-col justify-center">
      <Register />
    </div>
  );
}
