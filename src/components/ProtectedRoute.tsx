/**
 * ProtectedRoute — redirects unauthenticated users to /login.
 * Supports an optional `requireRole` prop for admin-only surfaces.
 * Shows a spinner while the auth state is loading.
 */
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
  children: JSX.Element;
  requireRole?: "admin" | "counsellor";
}

const ProtectedRoute = ({
  children,
  requireRole,
}: ProtectedRouteProps): JSX.Element => {
  const { session, profile, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!session) {
    // Preserve the attempted URL so login can redirect back
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  if (requireRole && profile?.role !== requireRole && profile?.role !== "admin") {
    return <Navigate to="/401" replace />;
  }

  return children;
};

export default ProtectedRoute;
