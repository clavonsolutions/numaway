"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Search, Plus, Loader2, Shield, User, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  role: "student" | "admin" | "counsellor" | "super_admin";
  created_at: string;
};

const AdminUsers = () => {
  const { profile } = useAuth();
  const { toast } = useToast();
  
  const [users, setUsers] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  
  // Invite state
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteName, setInviteName] = useState("");
  const [inviteRole, setInviteRole] = useState<"admin" | "counsellor">("counsellor");
  const [inviting, setInviting] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, email, full_name, role, created_at")
        .order("created_at", { ascending: false });
        
      if (!error && data) {
        setUsers(data as Profile[]);
      }
      setLoading(false);
    }
    void fetchUsers();
  }, []);

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      (u.full_name?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === "all" || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "super_admin": return <Shield className="w-4 h-4 text-primary" />;
      case "admin": return <Shield className="w-4 h-4 text-blue-500" />;
      case "counsellor": return <User className="w-4 h-4 text-purple-500" />;
      default: return <GraduationCap className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "super_admin": return "bg-primary/10 text-primary";
      case "admin": return "bg-blue-100 text-blue-700";
      case "counsellor": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    setInviting(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${session?.access_token || ""}`
        },
        body: JSON.stringify({ email: inviteEmail, name: inviteName, role: inviteRole })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to invite user");
      
      toast({ title: "User Invited", description: "An invitation email has been sent." });
      setShowInviteForm(false);
      setInviteEmail("");
      setInviteName("");
      
      // Optimistically add to UI (they'll be in DB immediately too via the API)
      setUsers([{
        id: data.user.id,
        email: inviteEmail,
        full_name: inviteName,
        role: inviteRole,
        created_at: new Date().toISOString()
      }, ...users]);
    } catch (err: any) {
      toast({ title: "Invite Failed", description: err.message, variant: "destructive" });
    } finally {
      setInviting(false);
    }
  };

  if (profile?.role !== "super_admin") {
    return (
      <div className="py-12 text-center">
        <Shield className="w-12 h-12 text-destructive mx-auto mb-4" />
        <h2 className="text-xl font-bold">Access Denied</h2>
        <p className="text-muted-foreground mt-2">Only Super Admins can manage users.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Manage Users</h1>
          <p className="text-muted-foreground">Add and manage staff roles</p>
        </div>
        <Button onClick={() => setShowInviteForm(!showInviteForm)} className="gap-2">
          <Plus className="w-4 h-4" />
          {showInviteForm ? "Cancel" : "Add Staff"}
        </Button>
      </div>

      {/* Invite Form */}
      {showInviteForm && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-card p-6 rounded-2xl shadow-soft">
          <h2 className="text-lg font-bold mb-4">Invite New Staff</h2>
          <form onSubmit={handleInvite} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Full Name</label>
              <Input required value={inviteName} onChange={(e) => setInviteName(e.target.value)} placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <Input required type="email" value={inviteEmail} onChange={(e) => setInviteEmail(e.target.value)} placeholder="jane@numaway.com" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Role</label>
              <select 
                className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                value={inviteRole}
                onChange={(e) => setInviteRole(e.target.value as any)}
              >
                <option value="counsellor">Counsellor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <Button type="submit" disabled={inviting} className="w-full gap-2">
              {inviting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              Send Invite
            </Button>
          </form>
        </motion.div>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search users..."
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["all", "super_admin", "admin", "counsellor", "student"].map((status) => (
            <button
              key={status}
              onClick={() => setRoleFilter(status)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                roleFilter === status
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              <span className="capitalize">{status.replace("_", " ")}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">User</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Role</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Joined</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={3} className="py-8 text-center"><Loader2 className="w-6 h-6 animate-spin mx-auto text-primary" /></td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-8 text-center text-muted-foreground">No users found.</td>
                </tr>
              ) : (
                filteredUsers.map((user, index) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: Math.min(index * 0.05, 0.5) }}
                    className="border-b border-border/50 last:border-0 hover:bg-muted/30"
                  >
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium">{user.full_name || "Unknown"}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                        {getRoleIcon(user.role)}
                        <span className="capitalize">{user.role.replace("_", " ")}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-sm text-muted-foreground">
                      {new Date(user.created_at).toLocaleDateString()}
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
