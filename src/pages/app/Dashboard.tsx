import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  FileText, Upload, Clock, CheckCircle, AlertCircle, 
  GraduationCap, Calendar, Sparkles, ArrowRight, Bell
} from "lucide-react";

const applications = [
  { id: 1, university: "University of Toronto", program: "Computer Science", status: "In Review", progress: 65, deadline: "Mar 15, 2025" },
  { id: 2, university: "University of Melbourne", program: "Data Science", status: "Documents Pending", progress: 40, deadline: "Apr 1, 2025" },
  { id: 3, university: "TU Munich", program: "Engineering", status: "Submitted", progress: 100, deadline: "Feb 28, 2025" },
];

const tasks = [
  { id: 1, task: "Upload SOP for Toronto", due: "2 days", priority: "high" },
  { id: 2, task: "Pay application fee - Melbourne", due: "5 days", priority: "medium" },
  { id: 3, task: "Schedule IELTS exam", due: "1 week", priority: "low" },
];

const notifications = [
  { id: 1, message: "Toronto application moved to review stage", time: "2 hours ago", read: false },
  { id: 2, message: "New scholarship match found!", time: "1 day ago", read: false },
  { id: 3, message: "Document verified successfully", time: "2 days ago", read: true },
];

const StudentDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-hero text-primary-foreground rounded-2xl p-6 lg:p-8"
      >
        <h1 className="text-2xl lg:text-3xl font-display font-bold mb-2">Welcome back, John! 👋</h1>
        <p className="text-primary-foreground/70 mb-4">You have 3 active applications and 2 pending tasks.</p>
        <div className="flex flex-wrap gap-3">
          <Link to="/app/genie">
            <Button variant="hero" size="sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Ask Genie
            </Button>
          </Link>
          <Link to="/app/applications">
            <Button variant="outline" size="sm" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              View Applications
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Applications", value: "3", icon: FileText, color: "text-primary" },
          { label: "Documents", value: "12", icon: Upload, color: "text-secondary" },
          { label: "Pending Tasks", value: "2", icon: Clock, color: "text-amber-500" },
          { label: "Completed", value: "8", icon: CheckCircle, color: "text-green-500" },
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
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Applications */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-display font-bold">Your Applications</h2>
            <Link to="/app/applications">
              <Button variant="ghost" size="sm">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          
          {applications.map((app, i) => (
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
                      <h3 className="font-semibold">{app.university}</h3>
                      <p className="text-sm text-muted-foreground">{app.program}</p>
                    </div>
                    <Badge variant={app.status === "Submitted" ? "default" : app.status === "In Review" ? "secondary" : "outline"}>
                      {app.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{app.progress}%</span>
                    </div>
                    <Progress value={app.progress} className="h-2" />
                  </div>
                  <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>Deadline: {app.deadline}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Tasks */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" />
                Pending Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    task.priority === "high" ? "bg-destructive" : 
                    task.priority === "medium" ? "bg-amber-500" : "bg-green-500"
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{task.task}</p>
                    <p className="text-xs text-muted-foreground">Due in {task.due}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Recent Updates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {notifications.map((notif) => (
                <div key={notif.id} className={`p-3 rounded-lg ${notif.read ? "bg-muted/30" : "bg-primary/5 border border-primary/20"}`}>
                  <p className="text-sm">{notif.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Genie CTA */}
          <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-3">Ask Genie for personalized guidance</p>
              <Link to="/app/genie">
                <Button variant="hero" size="sm" className="w-full">
                  Chat with Genie
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
