import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, Calendar, MapPin, Clock, CheckCircle, 
  AlertCircle, FileText, ChevronRight, Plus
} from "lucide-react";

const applications = [
  { 
    id: 1, 
    university: "University of Toronto", 
    country: "Canada",
    program: "MSc Computer Science", 
    intake: "Fall 2025",
    status: "in-review", 
    statusLabel: "In Review",
    progress: 65, 
    deadline: "Mar 15, 2025",
    appliedDate: "Jan 10, 2025",
    documents: { uploaded: 8, required: 10 },
    nextStep: "Upload Statement of Purpose"
  },
  { 
    id: 2, 
    university: "University of Melbourne", 
    country: "Australia",
    program: "Master of Data Science", 
    intake: "Feb 2026",
    status: "pending", 
    statusLabel: "Documents Pending",
    progress: 40, 
    deadline: "Apr 1, 2025",
    appliedDate: "Jan 15, 2025",
    documents: { uploaded: 5, required: 12 },
    nextStep: "Pay application fee"
  },
  { 
    id: 3, 
    university: "Technical University of Munich", 
    country: "Germany",
    program: "MSc Mechanical Engineering", 
    intake: "Winter 2025",
    status: "submitted", 
    statusLabel: "Submitted",
    progress: 100, 
    deadline: "Feb 28, 2025",
    appliedDate: "Dec 20, 2024",
    documents: { uploaded: 10, required: 10 },
    nextStep: "Awaiting university response"
  },
  { 
    id: 4, 
    university: "Imperial College London", 
    country: "UK",
    program: "MSc Artificial Intelligence", 
    intake: "Sep 2025",
    status: "accepted", 
    statusLabel: "Accepted",
    progress: 100, 
    deadline: "Jan 15, 2025",
    appliedDate: "Nov 1, 2024",
    documents: { uploaded: 12, required: 12 },
    nextStep: "Accept offer & pay deposit"
  },
];

const statusColors: Record<string, string> = {
  "in-review": "bg-blue-500/10 text-blue-600 border-blue-500/20",
  "pending": "bg-amber-500/10 text-amber-600 border-amber-500/20",
  "submitted": "bg-purple-500/10 text-purple-600 border-purple-500/20",
  "accepted": "bg-green-500/10 text-green-600 border-green-500/20",
  "rejected": "bg-red-500/10 text-red-600 border-red-500/20",
};

const StudentApplications = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredApps = activeTab === "all" 
    ? applications 
    : applications.filter(app => app.status === activeTab);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold">My Applications</h1>
          <p className="text-muted-foreground">Track and manage your university applications</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Application
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="all">All ({applications.length})</TabsTrigger>
          <TabsTrigger value="in-review">In Review</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="accepted">Accepted</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <div className="space-y-4">
            {filteredApps.map((app, i) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      {/* University Info */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                            <GraduationCap className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-display font-semibold text-lg">{app.university}</h3>
                              <Badge variant="outline" className={statusColors[app.status]}>
                                {app.statusLabel}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground">{app.program}</p>
                            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {app.country}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {app.intake}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                Deadline: {app.deadline}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Progress & Actions */}
                      <div className="lg:w-72 space-y-3">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{app.progress}%</span>
                          </div>
                          <Progress value={app.progress} className="h-2" />
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="w-4 h-4 text-muted-foreground" />
                          <span>{app.documents.uploaded}/{app.documents.required} documents</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg text-sm">
                          {app.status === "accepted" ? (
                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                          )}
                          <span className="text-muted-foreground">Next: {app.nextStep}</span>
                        </div>
                      </div>

                      <Button variant="ghost" size="icon" className="shrink-0">
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentApplications;
