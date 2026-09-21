"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Plus,
  Clock,
  User,
  Calendar,
  Filter,
  ChevronDown,
  MoreVertical,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

interface Task {
  id: string;
  title: string;
  description: string;
  assignee: string;
  student?: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
  status: "pending" | "in-progress" | "completed";
  category: string;
}

const AdminTasks = () => {
  const [filter, setFilter] = useState("all");

  const tasks: Task[] = [
    {
      id: "1",
      title: "Follow up with Adaeze Okonkwo",
      description: "Call to discuss UK university options and scholarship opportunities",
      assignee: "Sarah A.",
      student: "Adaeze Okonkwo",
      dueDate: "Today, 2:00 PM",
      priority: "high",
      status: "pending",
      category: "Follow-up",
    },
    {
      id: "2",
      title: "Submit documents for Tunde Bakare",
      description: "Submit final application documents to University of Toronto",
      assignee: "John D.",
      student: "Tunde Bakare",
      dueDate: "Today, 5:00 PM",
      priority: "high",
      status: "in-progress",
      category: "Documents",
    },
    {
      id: "3",
      title: "Schedule visa mock interview",
      description: "Prepare Ngozi for Canadian visa interview",
      assignee: "Sarah A.",
      student: "Ngozi Eze",
      dueDate: "Tomorrow, 10:00 AM",
      priority: "medium",
      status: "pending",
      category: "Visa",
    },
    {
      id: "4",
      title: "Review Chidi's SOP",
      description: "Review and provide feedback on Statement of Purpose",
      assignee: "Mary O.",
      student: "Chidi Obi",
      dueDate: "Tomorrow, 3:00 PM",
      priority: "low",
      status: "pending",
      category: "Documents",
    },
    {
      id: "5",
      title: "Process scholarship application",
      description: "Submit DAAD scholarship for Kemi",
      assignee: "John D.",
      student: "Kemi Adeyemi",
      dueDate: "Dec 10, 2024",
      priority: "high",
      status: "pending",
      category: "Scholarship",
    },
    {
      id: "6",
      title: "Send payment reminder",
      description: "Remind student about tuition deposit deadline",
      assignee: "Mary O.",
      student: "Emeka Nwosu",
      dueDate: "Dec 12, 2024",
      priority: "medium",
      status: "pending",
      category: "Finance",
    },
  ];

  const categories = ["All", "Follow-up", "Documents", "Visa", "Scholarship", "Finance"];
  
  const filteredTasks = filter === "all" 
    ? tasks 
    : tasks.filter(t => t.category.toLowerCase() === filter.toLowerCase());

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-700 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "low": return "bg-gray-100 text-gray-700 border-gray-200";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case "in-progress": return <Clock className="w-5 h-5 text-blue-500" />;
      default: return <AlertCircle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Tasks</h1>
          <p className="text-muted-foreground">Manage your daily tasks and follow-ups</p>
        </div>
        <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Task
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Tasks", value: tasks.length, color: "bg-blue-500" },
          { label: "Pending", value: tasks.filter(t => t.status === "pending").length, color: "bg-yellow-500" },
          { label: "In Progress", value: tasks.filter(t => t.status === "in-progress").length, color: "bg-purple-500" },
          { label: "Completed Today", value: 12, color: "bg-green-500" },
        ].map((stat, i) => (
          <Card key={i} className="p-4">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${stat.color}`} />
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={filter === cat.toLowerCase() ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(cat.toLowerCase())}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Tasks List */}
      <div className="space-y-3">
        {filteredTasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <Checkbox className="mt-1" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-medium">{task.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="shrink-0">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <Badge variant="outline" className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <User className="w-3 h-3" />
                      {task.assignee}
                    </div>
                    {task.student && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <span>→</span>
                        {task.student}
                      </div>
                    )}
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {task.dueDate}
                    </div>
                    <Badge variant="secondary">{task.category}</Badge>
                  </div>
                </div>
                {getStatusIcon(task.status)}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminTasks;
