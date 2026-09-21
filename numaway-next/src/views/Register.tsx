"use client";
import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "@/lib/react-router-dom";
import PageHead from "@/components/PageHead";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { Eye, EyeOff, Loader2, UserPlus } from "lucide-react";

const TARGET_COUNTRIES = [
  "United Kingdom",
  "Canada",
  "United States",
  "Australia",
  "Germany",
  "Ireland",
  "Netherlands",
  "United Arab Emirates",
  "Other",
];

const INTAKES = ["September 2025", "January 2026", "May 2026", "September 2026", "Later"];

const Register = (): JSX.Element => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [targetCountry, setTargetCountry] = useState("");
  const [targetIntake, setTargetIntake] = useState("");
  const [ndpaConsent, setNdpaConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (!ndpaConsent) {
      setError("You must consent to data processing to create an account.");
      return;
    }
    setError(null);
    setLoading(true);

    // 1. Create the Supabase auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          full_name: fullName.trim(),
          phone: phone.trim(),
        },
      },
    });

    if (authError) {
      setLoading(false);
      setError(authError.message);
      return;
    }

    const userId = authData.user?.id;

    if (userId) {
      // 2. Upsert profile row (trigger also creates one, but we want the extra fields)
      await supabase.from("profiles").upsert({
        id: userId,
        email: email.trim(),
        full_name: fullName.trim(),
        phone: phone.trim() || null,
        target_country: targetCountry || null,
        target_intake: targetIntake || null,
        ndpa_consent: true,
        ndpa_consent_at: new Date().toISOString(),
        role: "student",
      });
    }

    setLoading(false);
    setSuccess(true);

    // If email confirmation is disabled (dev), navigate immediately
    if (authData.session) {
      navigate("/app", { replace: true });
    }
  }

  if (success && !supabase.auth) {
    // Unreachable branch — just satisfies TS
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHead
        title="Create a Free NUMAWAY Account"
        description="Register for a free NUMAWAY student account and start your study abroad journey with personalised guidance and application tracking."
        canonical="/register"
      />

      <div className="flex-1 flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-display font-bold text-primary">
                NUMA<span className="text-secondary">WAY</span>
              </span>
            </Link>
            <h1 className="text-3xl font-display font-bold mt-4 mb-2">Create your account</h1>
            <p className="text-muted-foreground">Start your study abroad journey today</p>
          </div>

          {success ? (
            <div className="bg-card rounded-2xl shadow-card p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-xl font-display font-bold mb-2">Check your inbox</h2>
              <p className="text-muted-foreground text-sm mb-6">
                We sent a confirmation link to <strong>{email}</strong>. Click it to activate
                your account, then sign in.
              </p>
              <Button asChild variant="default" size="lg" className="w-full">
                <Link to="/login">Go to sign in</Link>
              </Button>
            </div>
          ) : (
            <div className="bg-card rounded-2xl shadow-card p-8">
              {error && (
                <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
                  {error}
                </div>
              )}

              <form onSubmit={(e) => { void handleSubmit(e); }} className="space-y-4">
                <div>
                  <label htmlFor="full-name" className="block text-sm font-medium mb-1.5">
                    Full name
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    autoComplete="name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Amina Abubakar"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="reg-email" className="block text-sm font-medium mb-1.5">
                    Email address
                  </label>
                  <input
                    id="reg-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                    Phone number <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="reg-password" className="block text-sm font-medium mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="reg-password"
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

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="target-country" className="block text-sm font-medium mb-1.5">
                      Target country
                    </label>
                    <select
                      id="target-country"
                      value={targetCountry}
                      onChange={(e) => setTargetCountry(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                    >
                      <option value="">Select...</option>
                      {TARGET_COUNTRIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="target-intake" className="block text-sm font-medium mb-1.5">
                      Target intake
                    </label>
                    <select
                      id="target-intake"
                      value={targetIntake}
                      onChange={(e) => setTargetIntake(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                    >
                      <option value="">Select...</option>
                      {INTAKES.map((i) => (
                        <option key={i} value={i}>{i}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* NDPA consent — required under Nigeria Data Protection Act 2023 */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={ndpaConsent}
                    onChange={(e) => setNdpaConsent(e.target.checked)}
                    className="mt-0.5 accent-secondary w-4 h-4 flex-shrink-0"
                  />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    I consent to NUMAWAY processing my personal data to provide study abroad
                    guidance services, per the{" "}
                    <Link to="/privacy-policy" className="text-secondary hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and the Nigeria Data Protection Act 2023 (NDPA). I understand I may
                    withdraw consent at any time.
                  </span>
                </label>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full gap-2"
                  disabled={loading || !ndpaConsent}
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <UserPlus className="w-4 h-4" />
                  )}
                  {loading ? "Creating account..." : "Create account"}
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-6">
                Already have an account?{" "}
                <Link to="/login" className="text-secondary font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;


