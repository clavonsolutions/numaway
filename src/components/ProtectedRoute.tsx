"use client";

/**
 * ProtectedRoute — redirects unauthenticated users to /login.
 * Supports an optional `requireRole` prop for admin-only surfaces.
 * Shows a spinner while the auth state is loading.
 */
import { useNavigate, useLocation } from "@/lib/react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: JSX.Element;
  allowedRoles?: ("student" | "counsellor" | "admin" | "super_admin")[];
}

const ProtectedRouteInner = ({
  children,
  allowedRoles,
}: ProtectedRouteProps): JSX.Element | null => {
  const { session, profile, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  // If we're already on a login page, bypass protection entirely
  const isLoginPage = pathname?.endsWith("/login");

  useEffect(() => {
    if (isLoginPage) return;

    if (!loading) {
      if (!session) {
        // Redirect to /admin/login if the route is for staff, otherwise /login
        const isStaffRoute = allowedRoles && !allowedRoles.includes("student");
        const loginPath = isStaffRoute ? "/admin/login" : "/login";
        navigate(`${loginPath}?redirect=${encodeURIComponent(pathname || "/")}`, { replace: true });
      } else if (allowedRoles && profile?.role) {
        // super_admin overrides automatically
        if (profile.role !== "super_admin" && !allowedRoles.includes(profile.role)) {
          navigate("/401", { replace: true }); // unauthorized
        }
      }
    }
  }, [loading, session, profile, allowedRoles, navigate, pathname]);

  if (isLoginPage) {
    return children;
  }

  if (loading || !session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (allowedRoles) {
    if (!profile?.role) {
      // Still loading profile, or profile doesn't exist
      return (
        <div className="min-h-screen bg-background flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      );
    }
    if (profile.role !== "super_admin" && !allowedRoles.includes(profile.role)) {
      return null;
    }
  }

  return <>{children}</>;
};

import { Suspense } from "react";
const ProtectedRoute = (props: ProtectedRouteProps) => (
  <Suspense fallback={
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
    </div>
  }>
    <ProtectedRouteInner {...props} />
  </Suspense>
);

export default ProtectedRoute;
