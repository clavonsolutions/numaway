// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  FileText,
  TrendingUp,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Loader2,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { Link } from "@/lib/react-router-dom";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    leadsCount: 0,
    studentsCount: 0,
    appsCount: 0,
    conversionRate: "0.0",
  });
  const [recentLeads, setRecentLeads] = useState<any[]>([]);
  const [recentActivity, setRecentActivity] = useState<any[]>([]);
  const [pipeline, setPipeline] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch counts
        const [leadsRes, studentsRes, appsRes] = await Promise.all([
          supabase.from("leads").select("*", { count: "exact", head: true }),
          supabase.from("profiles").select("*", { count: "exact", head: true }).eq("role", "student"),
          supabase.from("applications").select("*", { count: "exact", head: true })
        ]);

        const leadsCount = leadsRes.count || 0;
        const studentsCount = studentsRes.count || 0;
        const appsCount = appsRes.count || 0;
        const conversionRate = leadsCount > 0 ? (appsCount / leadsCount) * 100 : 0;

        setStats({
          leadsCount,
          studentsCount,
          appsCount,
          conversionRate: conversionRate.toFixed(1),
        });

        // Fetch Recent Leads
        const { data: leadsData } = await supabase
          .from("leads")
          .select("full_name, email, target_country, status, created_at")
          .order("created_at", { ascending: false })
          .limit(4);
        setRecentLeads(leadsData || []);

        // Fetch Recent Activity (Recent Applications)
        const { data: activityData } = await supabase
          .from("applications")
          .select("id, university_name, programme_name, created_at, profiles!inner(full_name)")
          .order("created_at", { ascending: false })
          .limit(4);
        setRecentActivity(activityData || []);

        // Fetch Pipeline Stats
        const { data: allApps } = await supabase.from("applications").select("status");
        
        const pipelineCounts: Record<string, number> = {
          'draft': 0,
          'in_review': 0,
          'documents_pending': 0,
          'submitted': 0,
          'offer_received': 0,
          'accepted': 0,
          'rejected': 0,
          'deferred': 0
        };
        
        allApps?.forEach(app => {
          pipelineCounts[app.status] = (pipelineCounts[app.status] || 0) + 1;
        });
        
        const pipelineArray = [
          { stage: "Draft", count: pipelineCounts['draft'] || 0, color: "bg-gray-400" },
          { stage: "In Review", count: pipelineCounts['in_review'] || 0, color: "bg-blue-400" },
          { stage: "Docs Pending", count: pipelineCounts['documents_pending'] || 0, color: "bg-purple-400" },
          { stage: "Submitted", count: pipelineCounts['submitted'] || 0, color: "bg-orange-400" },
          { stage: "Offer", count: pipelineCounts['offer_received'] || 0, color: "bg-green-400" },
          { stage: "Accepted", count: pipelineCounts['accepted'] || 0, color: "bg-secondary" },
        ];
        setPipeline(pipelineArray);
      } catch (err) {
        console.error("Failed to load dashboard data:", err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // Format time ago
  const timeAgo = (dateStr: string) => {
    const diff = new Date().getTime() - new Date(dateStr).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes} min ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    return `${Math.floor(hours / 24)} days ago`;
  };

  const statCards = [
    {
      label: "Total Leads",
      value: stats.leadsCount.toLocaleString(),
      trend: "up",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      label: "Active Students",
      value: stats.studentsCount.toLocaleString(),
      trend: "up",
      icon: GraduationCap,
      color: "bg-green-500",
    },
    {
      label: "Applications",
      value: stats.appsCount.toLocaleString(),
      trend: "up",
      icon: FileText,
      color: "bg-purple-500",
    },
    {
      label: "Conversion Rate",
      value: `${stats.conversionRate}%`,
      trend: "up",
      icon: TrendingUp,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold">Analytics Dashboard</h1>
        <p className="text-muted-foreground">Live insights into your operations and growth.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-2xl p-6 shadow-soft"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center gap-1 text-sm text-green-600 opacity-0`}>
                {/* Placeholder for historical change indicator */}
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <p className="text-3xl font-display font-bold">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Leads */}
        <div className="lg:col-span-2 bg-card rounded-2xl p-6 shadow-soft">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-bold">Recent Leads</h2>
            <Link to="/admin/leads" className="text-sm text-secondary hover:underline">View all</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Name</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Country</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead, index) => (
                  <tr key={index} className="border-b border-border/50 last:border-0">
                    <td className="py-4">
                      <div>
                        <p className="font-medium">{lead.full_name}</p>
                        <p className="text-sm text-muted-foreground">{lead.email}</p>
                      </div>
                    </td>
                    <td className="py-4">{lead.target_country || "-"}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                        lead.status === "new" ? "bg-blue-100 text-blue-700" :
                        lead.status === "contacted" ? "bg-yellow-100 text-yellow-700" :
                        "bg-green-100 text-green-700"
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-muted-foreground whitespace-nowrap">{timeAgo(lead.created_at)}</td>
                  </tr>
                ))}
                {recentLeads.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-muted-foreground">
                      No leads found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-card rounded-2xl p-6 shadow-soft">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-bold">Recent Applications</h2>
            <Link to="/admin/applications" className="text-sm text-secondary hover:underline">View all</Link>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full mt-2 bg-secondary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{activity.profiles?.full_name}</p>
                  <p className="text-xs text-muted-foreground truncate">{activity.university_name} - {activity.programme_name}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <Clock className="w-3 h-3" />
                    {timeAgo(activity.created_at)}
                  </div>
                </div>
              </div>
            ))}
            {recentActivity.length === 0 && (
              <div className="py-8 text-center text-muted-foreground text-sm">
                No recent applications.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Application Pipeline */}
      <div className="bg-card rounded-2xl p-6 shadow-soft">
        <h2 className="text-lg font-display font-bold mb-6">Application Pipeline</h2>
        <div className="flex items-end gap-2 sm:gap-4 h-48">
          {pipeline.map((stage) => {
            const maxCount = Math.max(...pipeline.map(p => p.count), 1);
            const heightPct = (stage.count / maxCount) * 100;
            return (
              <div key={stage.stage} className="flex-1 flex flex-col items-center group relative">
                <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background text-xs px-2 py-1 rounded">
                  {stage.count} {stage.stage}
                </div>
                <div
                  className={`w-full ${stage.color} rounded-t-lg transition-all hover:opacity-80`}
                  style={{ height: `${heightPct}%`, minHeight: stage.count > 0 ? "20px" : "4px" }}
                />
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-2 text-center whitespace-nowrap overflow-hidden text-ellipsis w-full px-1">{stage.stage}</p>
                <p className="text-sm font-bold mt-1">{stage.count}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
