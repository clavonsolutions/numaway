"use client";
import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  FileText,
  TrendingUp,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    {
      label: "Total Leads",
      value: "1,284",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      label: "Active Students",
      value: "856",
      change: "+8%",
      trend: "up",
      icon: GraduationCap,
      color: "bg-green-500",
    },
    {
      label: "Applications",
      value: "423",
      change: "+24%",
      trend: "up",
      icon: FileText,
      color: "bg-purple-500",
    },
    {
      label: "Conversion Rate",
      value: "18.2%",
      change: "-2%",
      trend: "down",
      icon: TrendingUp,
      color: "bg-orange-500",
    },
  ];

  const recentLeads = [
    { name: "Adaeze Okonkwo", email: "adaeze@email.com", country: "UK", status: "New", time: "2 min ago" },
    { name: "Tunde Bakare", email: "tunde@email.com", country: "Canada", status: "Contacted", time: "15 min ago" },
    { name: "Ngozi Eze", email: "ngozi@email.com", country: "USA", status: "New", time: "1 hour ago" },
    { name: "Chidi Obi", email: "chidi@email.com", country: "Australia", status: "Qualified", time: "2 hours ago" },
  ];

  const upcomingTasks = [
    { task: "Follow up with Adaeze", due: "Today, 2:00 PM", priority: "high" },
    { task: "Submit documents for Tunde", due: "Today, 5:00 PM", priority: "high" },
    { task: "Schedule call with Ngozi", due: "Tomorrow, 10:00 AM", priority: "medium" },
    { task: "Review Chidi's application", due: "Tomorrow, 3:00 PM", priority: "low" },
  ];

  const applicationsByStage = [
    { stage: "Lead", count: 245, color: "bg-gray-400" },
    { stage: "Qualified", count: 180, color: "bg-blue-400" },
    { stage: "Documents", count: 120, color: "bg-purple-400" },
    { stage: "Submitted", count: 85, color: "bg-orange-400" },
    { stage: "Offer", count: 45, color: "bg-green-400" },
    { stage: "Visa", count: 30, color: "bg-teal-400" },
    { stage: "Enrolled", count: 20, color: "bg-secondary" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
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
              <div className={`flex items-center gap-1 text-sm ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {stat.change}
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
            <a href="/admin/leads" className="text-sm text-secondary hover:underline">View all</a>
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
                        <p className="font-medium">{lead.name}</p>
                        <p className="text-sm text-muted-foreground">{lead.email}</p>
                      </div>
                    </td>
                    <td className="py-4">{lead.country}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        lead.status === "New" ? "bg-blue-100 text-blue-700" :
                        lead.status === "Contacted" ? "bg-yellow-100 text-yellow-700" :
                        "bg-green-100 text-green-700"
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-muted-foreground">{lead.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-card rounded-2xl p-6 shadow-soft">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-bold">Upcoming Tasks</h2>
            <a href="/admin/tasks" className="text-sm text-secondary hover:underline">View all</a>
          </div>
          <div className="space-y-4">
            {upcomingTasks.map((task, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  task.priority === "high" ? "bg-red-500" :
                  task.priority === "medium" ? "bg-yellow-500" :
                  "bg-gray-400"
                }`} />
                <div className="flex-1">
                  <p className="font-medium text-sm">{task.task}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <Clock className="w-3 h-3" />
                    {task.due}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Pipeline */}
      <div className="bg-card rounded-2xl p-6 shadow-soft">
        <h2 className="text-lg font-display font-bold mb-6">Application Pipeline</h2>
        <div className="flex items-end gap-4 h-48">
          {applicationsByStage.map((stage) => (
            <div key={stage.stage} className="flex-1 flex flex-col items-center">
              <div
                className={`w-full ${stage.color} rounded-t-lg transition-all hover:opacity-80`}
                style={{ height: `${(stage.count / 245) * 100}%`, minHeight: "20px" }}
              />
              <p className="text-xs text-muted-foreground mt-2 text-center">{stage.stage}</p>
              <p className="text-sm font-bold">{stage.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

