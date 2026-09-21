"use client";
import { motion } from "framer-motion";
import { FileText, Clock, CheckCircle, XCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { format } from "date-fns";

const AdminApplications = () => {
  const { data: applications = [], isLoading } = useQuery({
    queryKey: ["admin", "applications"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("applications")
        .select(`
          *,
          profiles (
            full_name,
            email
          )
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "accepted":
      case "enrolled":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "offer_received":
        return <CheckCircle className="w-4 h-4 text-blue-600" />;
      case "documents_pending":
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case "rejected":
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-orange-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      "submitted": "bg-orange-100 text-orange-700",
      "documents_pending": "bg-yellow-100 text-yellow-700",
      "offer_received": "bg-blue-100 text-blue-700",
      "accepted": "bg-green-100 text-green-700",
      "enrolled": "bg-green-100 text-green-700",
      "rejected": "bg-red-100 text-red-700",
    };
    return colors[status] || "bg-gray-100 text-gray-700";
  };

  const formatStatus = (status: string) => {
    return status.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold">Applications</h1>
        <p className="text-muted-foreground">Track and manage student applications</p>
      </div>

      <div className="bg-card rounded-2xl shadow-soft overflow-hidden min-h-[400px] relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Student</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">University</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Course</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Deadline</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app: any, index: number) => (
                  <motion.tr
                    key={app.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-border/50 last:border-0 hover:bg-muted/30"
                  >
                    <td className="py-4 px-6 font-medium">
                      <div>
                        {app.profiles?.full_name || "Unknown"}
                        <p className="text-xs text-muted-foreground font-normal">{app.profiles?.email}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium">{app.university_name}</p>
                        <p className="text-sm text-muted-foreground">{app.university_country}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">{app.programme_name}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(app.status)}`}>
                        {getStatusIcon(app.status)}
                        {formatStatus(app.status)}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm whitespace-nowrap">
                      {app.deadline ? format(new Date(app.deadline), "MMM d, yyyy") : "Not set"}
                    </td>
                    <td className="py-4 px-6">
                      <Button variant="outline" size="sm">View Details</Button>
                    </td>
                  </motion.tr>
                ))}
                {applications.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-muted-foreground">
                      No applications found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminApplications;
