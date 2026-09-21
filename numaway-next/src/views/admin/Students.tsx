"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Eye, FileText, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AdminStudents = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const students = [
    { id: 1, name: "Adaeze Okonkwo", email: "adaeze@email.com", counsellor: "Emeka N.", applications: 3, status: "Active", stage: "Documents", country: "UK" },
    { id: 2, name: "Tunde Bakare", email: "tunde@email.com", counsellor: "Aisha B.", applications: 2, status: "Active", stage: "Submitted", country: "Canada" },
    { id: 3, name: "Ngozi Eze", email: "ngozi@email.com", counsellor: "David O.", applications: 1, status: "Active", stage: "Offer", country: "USA" },
    { id: 4, name: "Chidi Obi", email: "chidi@email.com", counsellor: "Grace A.", applications: 4, status: "Active", stage: "Visa", country: "Australia" },
    { id: 5, name: "Fatima Ibrahim", email: "fatima@email.com", counsellor: "Tunde B.", applications: 2, status: "Inactive", stage: "Enrolled", country: "Germany" },
  ];

  const getStageColor = (stage: string) => {
    const colors: Record<string, string> = {
      "Documents": "bg-purple-100 text-purple-700",
      "Submitted": "bg-orange-100 text-orange-700",
      "Offer": "bg-green-100 text-green-700",
      "Visa": "bg-blue-100 text-blue-700",
      "Enrolled": "bg-secondary/20 text-secondary",
    };
    return colors[stage] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Students</h1>
          <p className="text-muted-foreground">Manage active student profiles and applications</p>
        </div>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search students..."
          className="pl-10"
        />
      </div>

      <div className="grid gap-4">
        {students.map((student, index) => (
          <motion.div
            key={student.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-card rounded-2xl p-6 shadow-soft"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                  {student.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h3 className="font-display font-bold">{student.name}</h3>
                  <p className="text-sm text-muted-foreground">{student.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div>
                  <p className="text-muted-foreground">Counsellor</p>
                  <p className="font-medium">{student.counsellor}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Applications</p>
                  <p className="font-medium">{student.applications}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Country</p>
                  <p className="font-medium">{student.country}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStageColor(student.stage)}`}>
                  {student.stage}
                </span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Eye className="w-4 h-4" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <FileText className="w-4 h-4" />
                    Docs
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminStudents;

