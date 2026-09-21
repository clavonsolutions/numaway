"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GraduationCap, Calendar, MapPin, Clock, CheckCircle,
  AlertCircle, FileText, ChevronRight,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import type { Application } from "@/lib/database.types";

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

const STATUS_CSS: Record<string, string> = {
  in_review: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  documents_pending: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  submitted: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  offer_received: "bg-secondary/10 text-secondary border-secondary/20",
  accepted: "bg-green-500/10 text-green-600 border-green-500/20",
  rejected: "bg-destructive/10 text-destructive border-destructive/20",
  draft: "bg-muted text-muted-foreground border-border",
  deferred: "bg-muted text-muted-foreground border-border",
};

const NEXT_STEP: Record<string, string> = {
  draft: "Complete your application profile",
  in_review: "Awaiting counsellor review",
  documents_pending: "Upload outstanding documents",
  submitted: "Awaiting university response",
  offer_received: "Review and accept your offer",
  accepted: "Confirm acceptance and pay deposit",
  rejected: "Discuss reapplication options with counsellor",
  deferred: "Review deferral conditions",
};

const StudentApplications = (): JSX.Element => {
  const { profile } = useAuth();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    if (!profile) return;

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

  const tabCounts = {
    all: applications.length,
    in_review: applications.filter((a) => a.status === "in_review").length,
    documents_pending: applications.filter((a) => a.status === "documents_pending").length,
    accepted: applications.filter((a) => a.status === "accepted").length,
  };

  const filtered =
    activeTab === "all" ? applications : applications.filter((a) => a.status === activeTab);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold">My Applications</h1>
          <p className="text-muted-foreground">Track and manage your university applications</p>
        </div>
        <Button asChild>
          <a href="/consultation">Book consultation to apply</a>
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="all">All ({tabCounts.all})</TabsTrigger>
          <TabsTrigger value="in_review">In Review ({tabCounts.in_review})</TabsTrigger>
          <TabsTrigger value="documents_pending">Pending ({tabCounts.documents_pending})</TabsTrigger>
          <TabsTrigger value="accepted">Accepted ({tabCounts.accepted})</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-36 bg-muted animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <GraduationCap className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
                <p className="font-medium text-muted-foreground mb-4">
                  {activeTab === "all"
                    ? "No applications yet. Book a consultation to get started."
                    : `No applications in this status.`}
                </p>
                {activeTab === "all" && (
                  <Button asChild>
                    <a href="/consultation">Book free consultation</a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filtered.map((app, i) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                        {/* University info */}
                        <div className="flex-1">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                              <GraduationCap className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="font-display font-semibold text-lg">
                                  {app.university_name}
                                </h3>
                                <Badge
                                  variant="outline"
                                  className={STATUS_CSS[app.status] ?? ""}
                                >
                                  {STATUS_LABEL[app.status] ?? app.status}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground">{app.programme_name}</p>
                              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {app.university_country}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {app.intake}
                                </span>
                                {app.deadline && (
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    Deadline:{" "}
                                    {new Date(app.deadline).toLocaleDateString("en-GB", {
                                      day: "numeric",
                                      month: "short",
                                      year: "numeric",
                                    })}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Progress + next step */}
                        <div className="lg:w-72 space-y-3">
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="font-medium">{app.progress_pct}%</span>
                            </div>
                            <Progress value={app.progress_pct} className="h-2" />
                          </div>
                          <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg text-sm">
                            {["accepted", "offer_received"].includes(app.status) ? (
                              <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                            )}
                            <span className="text-muted-foreground">
                              {NEXT_STEP[app.status] ?? "Contact your counsellor"}
                            </span>
                          </div>
                          {app.notes && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <FileText className="w-4 h-4 shrink-0" />
                              <span className="line-clamp-1">{app.notes}</span>
                            </div>
                          )}
                        </div>

                        <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0 hidden lg:block" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentApplications;

