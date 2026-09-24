"use client";
import { useState, type FormEvent } from "react";
import { Link, useSearchParams } from "@/lib/react-router-dom";
import PageHead from "@/components/PageHead";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Loader2, KeyRound } from "lucide-react";

const ResetPasswordInner = (): JSX.Element => {
  const [params] = useSearchParams();
  const token = params.get("token");


  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!token) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md">
          <KeyRound className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Invalid Reset Link</h1>
          <p className="text-muted-foreground mb-6">This password reset link is missing or malformed.</p>
          <Button asChild><Link to="/forgot-password">Request New Link</Link></Button>
        </div>
      </div>
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();
      
      if (!res.ok) {
        setError(data.error || "Failed to reset password. Your link may have expired.");
      } else {
        setSuccess(true);
      }
    } catch {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHead
        title="Set New Password"
        description="Set a new password for your NUMAWAY account."
        canonical="/reset-password"
      />

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {!success ? (
            <div className="bg-card rounded-2xl shadow-card p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <KeyRound className="w-8 h-8 text-secondary" />
                </div>
                <h1 className="text-2xl font-display font-bold mb-2">Set new password</h1>
                <p className="text-muted-foreground text-sm">
                  Enter your new password below.
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
                  {error}
                </div>
              )}

              <form onSubmit={(e) => { void handleSubmit(e); }} className="space-y-4">
                <div>
                  <label htmlFor="new-password" className="block text-sm font-medium mb-1.5">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      id="new-password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      minLength={8}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="At least 8 characters"
                      className="w-full px-4 py-3 pr-11 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full gap-2"
                  disabled={loading || password.length < 8}
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  {loading ? "Saving..." : "Set Password"}
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-card rounded-2xl shadow-card p-8 text-center">
              <h2 className="text-2xl font-display font-bold mb-2">Success!</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Your password has been reset successfully.
              </p>
              <Button variant="default" className="w-full" asChild>
                <Link to="/login">Go to Sign In</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import { Suspense } from "react";
const ResetPassword = () => (
  <Suspense fallback={
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
    </div>
  }>
    <ResetPasswordInner />
  </Suspense>
);

export default ResetPassword;
