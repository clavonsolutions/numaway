"use client";

/**
 * AuthContext — Custom JWT Auth
 * Provides auth state to the entire app.
 * Hydrates state from /api/auth/me endpoint.
 */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  useCallback,
} from "react";
import type { Profile } from "@/lib/database.types";
import { useRouter, usePathname } from "next/navigation";

interface AuthState {
  // session is kept for compatibility with old components, but is just a mock now
  session: { user: Profile } | null;
  user: Profile | null;
  profile: Profile | null;
  loading: boolean;
  signOut: () => Promise<void>;
  refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const fetchProfile = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me");
      if (res.ok) {
        const data = await res.json();
        setProfile(data.user);
      } else {
        setProfile(null);
      }
    } catch (error) {
      console.error("Auth fetch error:", error);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchProfile();
  }, [fetchProfile, pathname]); // Re-fetch on navigation to ensure sync (optional)

  async function signOut(): Promise<void> {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setProfile(null);
      router.push("/login");
    } catch (e) {
      console.error("Logout failed", e);
    }
  }

  // user and profile are effectively the same in this custom auth setup
  const user = profile;
  const session = profile ? { user: profile } : null;

  return (
    <AuthContext.Provider value={{ session, user, profile, loading, signOut, refreshAuth: fetchProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (ctx === undefined) {
    throw new Error("useAuth must be used inside <AuthProvider>");
  }
  return ctx;
}
