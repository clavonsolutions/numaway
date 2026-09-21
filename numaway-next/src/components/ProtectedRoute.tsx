"use client";

/**
 * ProtectedRoute — redirects unauthenticated users to /login.
 * Supports an optional `requireRole` prop for admin-only surfaces.
 * Shows a spinner while the auth state is loading.
 */
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: JSX.Element;
  requireRole?: "admin" | "counsellor";
}

const ProtectedRoute = ({
  children,
  requireRole,
}: ProtectedRouteProps): JSX.Element | null => {
  const { session, profile, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading) {
      if (!session) {
        router.push(`/login?redirect=${encodeURIComponent(pathname || "/")}`);
      } else if (requireRole && profile?.role !== requireRole && profile?.role !== "admin") {
        router.push("/401");
      }
    }
  }, [loading, session, profile, requireRole, router, pathname]);

  if (loading || !session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (requireRole && profile?.role !== requireRole && profile?.role !== "admin") {
    return null;
  }

  return children;
};

export default ProtectedRoute;
