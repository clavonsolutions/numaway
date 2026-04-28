import { useState, type FormEvent } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PageHead from "@/components/PageHead";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { Eye, EyeOff, Loader2, LogIn } from "lucide-react";

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? "/app";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    setLoading(false);

    if (authError) {
      setError("Invalid email or password. Please try again.");
      return;
    }

    navigate(from, { replace: true });
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHead
        title="Sign In to NUMAWAY"
        description="Sign in to your NUMAWAY student account to track applications, documents, and connect with your counsellor."
        canonical="/login"
      />

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo link */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-display font-bold text-primary">
                NUMA<span className="text-secondary">WAY</span>
              </span>
            </Link>
            <h1 className="text-3xl font-display font-bold mt-4 mb-2">Welcome back</h1>
            <p className="text-muted-foreground">Sign in to your student account</p>
          </div>

          <div className="bg-card rounded-2xl shadow-card p-8">
            {error && (
              <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
                {error}
              </div>
            )}

            <form onSubmit={(e) => { void handleSubmit(e); }} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                  Email address
                </label>
                <input
                  id="email"
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
                <label htmlFor="password" className="block text-sm font-medium mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
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
                <div className="text-right mt-1.5">
                  <Link
                    to="/forgot-password"
                    className="text-xs text-secondary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full gap-2"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <LogIn className="w-4 h-4" />
                )}
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              No account yet?{" "}
              <Link to="/register" className="text-secondary font-medium hover:underline">
                Create one free
              </Link>
            </p>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            By signing in you agree to our{" "}
            <Link to="/terms" className="hover:underline">Terms</Link> and{" "}
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
