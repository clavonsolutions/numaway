"use client";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Home, FileText, Upload, User, Sparkles, Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

const navItems = [
  { icon: Home, label: "Dashboard", path: "/app" },
  { icon: FileText, label: "Applications", path: "/app/applications" },
  { icon: Upload, label: "Documents", path: "/app/documents" },
  { icon: Sparkles, label: "Sage", path: "/app/sage" },
  { icon: User, label: "Profile", path: "/app/profile" },
];

const StudentLayout = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile, signOut } = useAuth();

  async function handleSignOut(): Promise<void> {
    await signOut();
    navigate("/login", { replace: true });
  }

  const initials = profile?.full_name
    ? profile.full_name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "S";

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Top Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 lg:px-6 h-16">
          <Link to="/app" className="flex items-center gap-2">
            <span className="font-display font-bold text-lg text-primary">
              NUMA<span className="text-secondary">WAY</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
              <Bell className="w-5 h-5" />
            </Button>
            {/* Avatar */}
            <div
              className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center text-xs font-bold text-secondary select-none"
              title={profile?.full_name ?? "Student"}
            >
              {initials}
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar — Desktop */}
        <aside className="hidden lg:flex w-64 bg-card border-r border-border min-h-[calc(100vh-4rem)] flex-col">
          {/* Profile summary */}
          {profile && (
            <div className="p-4 border-b border-border">
              <p className="font-semibold text-sm truncate">{profile.full_name ?? "Student"}</p>
              <p className="text-xs text-muted-foreground truncate">{profile.email}</p>
            </div>
          )}

          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-border space-y-1">
            <Link to="/" className="flex items-center gap-3 px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted text-sm transition-colors">
              ← Back to website
            </Link>
            <button
              onClick={() => { void handleSignOut(); }}
              className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 text-sm transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </aside>

        {/* Mobile Bottom Nav */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
          <div className="flex justify-around py-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6 pb-24 lg:pb-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default StudentLayout;
