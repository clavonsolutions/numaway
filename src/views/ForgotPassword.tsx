"use client";
import { useState, type FormEvent } from "react";
import { Link } from "@/lib/react-router-dom";
import PageHead from "@/components/PageHead";
import { Button } from "@/components/ui/button";
import { Mail, ArrowLeft, CheckCircle, Loader2 } from "lucide-react";

const ForgotPassword = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }
    } catch {
      setError("An unexpected error occurred.");
      setLoading(false);
      return;
    }
    
    setLoading(false);
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHead
        title="Reset Your Password"
        description="Request a password reset link for your NUMAWAY account."
        canonical="/forgot-password"
      />

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to sign in
          </Link>

          {!sent ? (
            <div className="bg-card rounded-2xl shadow-card p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h1 className="text-2xl font-display font-bold mb-2">Reset your password</h1>
                <p className="text-muted-foreground text-sm">
                  Enter your email and we will send you a secure reset link.
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
                  {error}
                </div>
              )}

              <form onSubmit={(e) => { void handleSubmit(e); }} className="space-y-4">
                <div>
                  <label htmlFor="reset-email" className="block text-sm font-medium mb-1.5">
                    Email address
                  </label>
                  <input
                    id="reset-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full gap-2"
                  disabled={loading}
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  {loading ? "Sending..." : "Send reset link"}
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-6">
                Remembered it?{" "}
                <Link to="/login" className="text-secondary font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          ) : (
            <div className="bg-card rounded-2xl shadow-card p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-2xl font-display font-bold mb-2">Check your email</h2>
              <p className="text-muted-foreground text-sm mb-6">
                A password reset link has been sent to <strong>{email}</strong>.
                It expires in 1 hour.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/login">Back to sign in</Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Didn&apos;t receive it?{" "}
                <button
                  onClick={() => setSent(false)}
                  className="text-secondary hover:underline"
                  type="button"
                >
                  Try again
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
