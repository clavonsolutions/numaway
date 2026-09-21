"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Download,
  Calendar,
  TrendingUp,
  Users,
  GraduationCap,
  FileText,
  Globe,
  DollarSign,
  BarChart3,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const AdminReports = () => {
  const kpis = [
    { label: "Total Revenue", value: "₦45.2M", change: "+18%", trend: "up", icon: DollarSign },
    { label: "New Students", value: "156", change: "+24%", trend: "up", icon: Users },
    { label: "Applications Submitted", value: "423", change: "+31%", trend: "up", icon: FileText },
    { label: "Conversion Rate", value: "18.2%", change: "-2%", trend: "down", icon: TrendingUp },
  ];

  const destinationData = [
    { country: "United Kingdom", students: 245, percentage: 35, color: "bg-blue-500" },
    { country: "Canada", students: 189, percentage: 27, color: "bg-red-500" },
    { country: "United States", students: 98, percentage: 14, color: "bg-purple-500" },
    { country: "Australia", students: 84, percentage: 12, color: "bg-green-500" },
    { country: "Germany", students: 56, percentage: 8, color: "bg-yellow-500" },
    { country: "Others", students: 28, percentage: 4, color: "bg-gray-400" },
  ];

  const pipelineData = [
    { stage: "Leads", count: 1284, value: "₦0" },
    { stage: "Qualified", count: 856, value: "₦12.8M" },
    { stage: "Documents", count: 423, value: "₦21.2M" },
    { stage: "Submitted", count: 312, value: "₦31.2M" },
    { stage: "Offer Received", count: 187, value: "₦37.4M" },
    { stage: "Visa Processing", count: 98, value: "₦39.2M" },
    { stage: "Enrolled", count: 67, value: "₦45.2M" },
  ];

  const topCounselors = [
    { name: "Sarah Adeyemi", students: 45, revenue: "₦9.2M", rating: 4.9 },
    { name: "John Davies", students: 38, revenue: "₦7.8M", rating: 4.8 },
    { name: "Mary Okonkwo", students: 32, revenue: "₦6.4M", rating: 4.9 },
    { name: "Ahmed Bello", students: 28, revenue: "₦5.6M", rating: 4.7 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground">Business intelligence and performance metrics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Last 30 Days
          </Button>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <kpi.icon className="w-6 h-6 text-primary" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  kpi.trend === "up" ? "text-green-600" : "text-red-600"
                }`}>
                  {kpi.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  {kpi.change}
                </div>
              </div>
              <p className="text-3xl font-display font-bold">{kpi.value}</p>
              <p className="text-sm text-muted-foreground">{kpi.label}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Destination Distribution */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-bold flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Students by Destination
            </h2>
          </div>
          <div className="space-y-4">
            {destinationData.map((item) => (
              <div key={item.country} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.country}</span>
                  <span className="text-muted-foreground">{item.students} students ({item.percentage}%)</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Counselors */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-bold flex items-center gap-2">
              <Users className="w-5 h-5" />
              Top Counselors
            </h2>
          </div>
          <div className="space-y-4">
            {topCounselors.map((counselor, index) => (
              <div key={counselor.name} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{counselor.name}</p>
                  <p className="text-sm text-muted-foreground">{counselor.students} students</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">{counselor.revenue}</p>
                  <p className="text-sm text-muted-foreground">⭐ {counselor.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Pipeline Funnel */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-display font-bold flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Sales Pipeline
          </h2>
        </div>
        <div className="overflow-x-auto">
          <div className="flex items-end gap-4 min-w-[800px] h-64 pb-8">
            {pipelineData.map((stage, index) => {
              const height = (stage.count / pipelineData[0].count) * 100;
              return (
                <div key={stage.stage} className="flex-1 flex flex-col items-center">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t-lg relative group cursor-pointer"
                    style={{ minHeight: "20px" }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {stage.count} ({stage.value})
                    </div>
                  </motion.div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">{stage.stage}</p>
                  <p className="text-sm font-bold">{stage.count}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Quick Reports */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Lead Sources Report", icon: Users, description: "Analyze where leads come from" },
          { title: "Revenue Analysis", icon: DollarSign, description: "Monthly revenue breakdown" },
          { title: "Application Status", icon: FileText, description: "Track application progress" },
          { title: "Counselor Performance", icon: GraduationCap, description: "Team performance metrics" },
        ].map((report, index) => (
          <motion.div
            key={report.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                <report.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-medium">{report.title}</h3>
              <p className="text-sm text-muted-foreground">{report.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminReports;
