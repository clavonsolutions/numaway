"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/lib/react-router-dom";
import {
  FileText, Upload, Clock, CheckCircle, AlertCircle,
  Calendar, Sparkles, ArrowRight, Bell,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import type { Application } from "@/lib/database.types";

const STATUS_VARIANT: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  submitted: "default",
  in_review: "secondary",
  offer_received: "default",
  accepted: "default",
  rejected: "destructive",
  documents_pending: "outline",
  draft: "outline",
  deferred: "outline",
};

const STATUS_LABEL: Record<string, string> = {
  draft: "Draft",
  in_review: "In Review",
  documents_pending: "Docs Pending",
  submitted: "Submitted",
  offer_received: "Offer Received",
  accepted: "Accepted",
  rejected: "Rejected",
  deferred: "Deferred",
};

const StudentDashboard = (): JSX.Element => {
  const { profile } = useAuth();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!profile) return;

    // Fetch all applications (no limit) so stats are accurate.
    // The recent-list in the UI shows at most 3 via .slice(0, 3).
    supabase
      .from("applications")
      .select("*")
      .eq("student_id", profile.id)
      .order("updated_at", { ascending: false })
      .then(({ data }) => {
        setApplications(data ?? []);
        setLoading(false);
      });
  }, [profile]);

  const firstName = profile?.full_name?.split(" ")[0] ?? "there";
  const activeCount = applications.filter(
    (a) => !["rejected", "deferred"].includes(a.status)
  ).length;
  const pendingDocsCount = applications.filter(
    (a) => a.status === "documents_pending"
  ).length;

  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-hero text-primary-foreground rounded-2xl p-6 lg:p-8"
      >
        <h1 className="text-2xl lg:text-3xl font-display font-bold mb-2">
          Welcome back, {firstName}!
        </h1>
        <p className="text-primary-foreground/70 mb-4">
          {loading
            ? "Loading your applications..."
            : applications.length === 0
            ? "You have no active applications yet. Start by booking a consultation."
            : `You have ${activeCount} active application${activeCount !== 1 ? "s" : ""}${pendingDocsCount > 0 ? ` and ${pendingDocsCount} awaiting documents` : ""}.`}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button variant="hero" size="sm" asChild>
            <Link to="/app/sage">
              <Sparkles className="w-4 h-4 mr-2" />
              Ask Sage
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <Link to="/app/applications">View Applications</Link>
          </Button>
        </div>
      </motion.div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Applications", value: applications.length, icon: FileText, color: "text-primary" },
          { label: "Documents", value: "—", icon: Upload, color: "text-secondary" },
          { label: "Pending Docs", value: pendingDocsCount, icon: Clock, color: "text-amber-500" },
          { label: "Submitted", value: applications.filter((a) => ["submitted", "offer_received", "accepted"].includes(a.status)).length, icon: CheckCircle, color: "text-green-500" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{loading ? "…" : stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Applications list */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-display font-bold">Your Applications</h2>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/app/applications">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-28 bg-muted animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : applications.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <FileText className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
                <p className="font-medium text-muted-foreground mb-4">
                  No applications yet
                </p>
                <Button asChild variant="default" size="sm">
                  <a href="/consultation">Book a free consultation</a>
                </Button>
              </CardContent>
            </Card>
          ) : (
            applications.slice(0, 3).map((app, i) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{app.university_name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {app.programme_name} · {app.university_country}
                        </p>
                      </div>
                      <Badge variant={STATUS_VARIANT[app.status] ?? "outline"}>
                        {STATUS_LABEL[app.status] ?? app.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{app.progress_pct}%</span>
                      </div>
                      <Progress value={app.progress_pct} className="h-2" />
                    </div>
                    {app.deadline && (
                      <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Deadline: {new Date(app.deadline).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick actions */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link to="/app/documents">
                  <Upload className="w-4 h-4 mr-2" /> Upload a document
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <a href="/consultation">
                  <Calendar className="w-4 h-4 mr-2" /> Book consultation
                </a>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link to="/app/profile">
                  <Bell className="w-4 h-4 mr-2" /> Update profile
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Sage CTA */}
          <Card className="bg-gradient-to-br from-secondary/10 to-primary/5 border-secondary/20">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-display font-semibold mb-1">Need guidance?</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Ask NUMAWAY Sage for personalised advice on universities, visas, and more.
              </p>
              <Button variant="hero" size="sm" className="w-full" asChild>
                <Link to="/app/sage">Chat with Sage</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;


