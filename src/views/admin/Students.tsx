"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye, FileText, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import type { Profile } from "@/lib/database.types";

const AdminStudents = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: students = [], isLoading } = useQuery({
    queryKey: ["admin", "students"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select(`
          *,
          applications (
            id,
            status
          )
        `)
        .eq("role", "student")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const getHighestAppStage = (applications: any[]) => {
    if (!applications || applications.length === 0) return "No Application";
    // simplified for UI
    const statuses = applications.map(a => a.status);
    if (statuses.includes("accepted")) return "Accepted";
    if (statuses.includes("offer_received")) return "Offer";
    if (statuses.includes("submitted") || statuses.includes("in_review")) return "In Review";
    if (statuses.includes("documents_pending")) return "Documents Pending";
    return "Draft";
  };

  const getStageColor = (stage: string) => {
    const colors: Record<string, string> = {
      "Draft": "bg-gray-100 text-gray-700",
      "Documents Pending": "bg-orange-100 text-orange-700",
      "In Review": "bg-yellow-100 text-yellow-700",
      "Offer": "bg-green-100 text-green-700",
      "Accepted": "bg-secondary/20 text-secondary",
      "No Application": "bg-muted text-muted-foreground",
    };
    return colors[stage] || "bg-gray-100 text-gray-700";
  };

  const filteredStudents = students.filter((student: any) => {
    const searchString = `${student.full_name} ${student.email}`.toLowerCase();
    return searchString.includes(searchQuery.toLowerCase());
  });

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

      <div className="grid gap-4 min-h-[400px] relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <>
            {filteredStudents.map((student: any, index: number) => {
              const stage = getHighestAppStage(student.applications);
              return (
                <motion.div
                  key={student.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card rounded-2xl p-6 shadow-soft"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold shrink-0">
                        {student.full_name ? student.full_name.split(" ").map((n: string) => n[0]).join("").substring(0, 2).toUpperCase() : student.email[0].toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-display font-bold">{student.full_name || "Unknown"}</h3>
                        <p className="text-sm text-muted-foreground">{student.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm">
                      <div>
                        <p className="text-muted-foreground">Target Country</p>
                        <p className="font-medium">{student.target_country || "Not set"}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Applications</p>
                        <p className="font-medium">{student.applications?.length || 0}</p>
                      </div>
                      
                      <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStageColor(stage)}`}>
                        {stage}
                      </span>
                      
                      <div className="flex gap-2 shrink-0">
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
              );
            })}
            
            {filteredStudents.length === 0 && (
              <div className="text-center py-12 text-muted-foreground bg-card rounded-2xl border border-dashed">
                No students found matching your search.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminStudents;
