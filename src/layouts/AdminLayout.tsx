"use client";
import { useLocation, Link, useNavigate } from "@/lib/react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  FileText,
  Calendar,
  MessageSquare,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard, roles: ["counsellor", "admin", "super_admin"] },
  { label: "Leads", href: "/admin/leads", icon: Users, roles: ["admin", "super_admin"] },
  { label: "Students", href: "/admin/students", icon: GraduationCap, roles: ["counsellor", "admin", "super_admin"] },
  { label: "Applications", href: "/admin/applications", icon: FileText, roles: ["counsellor", "admin", "super_admin"] },
  { label: "Consultations", href: "/admin/consultations", icon: Calendar, roles: ["counsellor", "admin", "super_admin"] },
  { label: "Messages", href: "/admin/messages", icon: MessageSquare, roles: ["counsellor", "admin", "super_admin"] },
  { label: "Reports", href: "/admin/reports", icon: BarChart3, roles: ["admin", "super_admin"] },
  { label: "Users", href: "/admin/users", icon: Users, roles: ["super_admin"] },
  { label: "Settings", href: "/admin/settings", icon: Settings, roles: ["super_admin"] },
];

const AdminLayoutInner = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const { profile, signOut } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const isActive = (href: string): boolean => {
    if (href === "/admin") return location.pathname === "/admin";
    return location.pathname.startsWith(href);
  };

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
    : "AD";

  return (
    <div className="min-h-screen bg-muted">
      {/* Mobile overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={[
          "fixed top-0 left-0 h-full bg-primary text-primary-foreground z-50 transition-all duration-300",
          sidebarOpen ? "w-64" : "w-20",
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        ].join(" ")}
      >
        {/* Logo row */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-primary-foreground/10">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="font-display font-bold text-lg">
              {sidebarOpen ? "NUMAWAY Admin" : "N"}
            </span>
          </Link>
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navItems
            .filter((item) => profile?.role && item.roles.includes(profile.role))
            .map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors",
                isActive(item.href)
                  ? "bg-primary-foreground/20 text-secondary"
                  : "hover:bg-primary-foreground/10 text-primary-foreground/80",
              ].join(" ")}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* User + sign out */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-primary-foreground/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-secondary-foreground">{initials}</span>
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{profile?.full_name ?? "Admin"}</p>
                <p className="text-xs text-primary-foreground/60 truncate">{profile?.email ?? ""}</p>
              </div>
            )}
          </div>
          {sidebarOpen && (
            <button
              onClick={() => { void handleSignOut(); }}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 text-sm transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          )}
        </div>
      </aside>

      {/* Main content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-20"}`}>
        {/* Top bar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden"
              aria-label="Open sidebar"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={() => setSidebarOpen((v) => !v)}
              className="hidden lg:block"
              aria-label="Toggle sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden sm:flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-48"
                aria-label="Search"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
              <Bell className="w-5 h-5" />
            </Button>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              View site
            </Link>
          </div>
        </header>

        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

import { Suspense } from "react";
const AdminLayout = (props: { children: React.ReactNode }) => (
  <Suspense fallback={
    <div className="min-h-screen bg-muted flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  }>
    <AdminLayoutInner {...props} />
  </Suspense>
);

export default AdminLayout;
