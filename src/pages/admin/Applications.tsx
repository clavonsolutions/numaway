import { motion } from "framer-motion";
import { FileText, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminApplications = () => {
  const applications = [
    { id: 1, student: "Adaeze Okonkwo", university: "University of Manchester", course: "MSc Computer Science", country: "UK", status: "Submitted", deadline: "Jan 15, 2025" },
    { id: 2, student: "Tunde Bakare", university: "University of Toronto", course: "MBA", country: "Canada", status: "Offer Received", deadline: "Dec 20, 2024" },
    { id: 3, student: "Ngozi Eze", university: "MIT", course: "MSc Data Science", country: "USA", status: "Documents Pending", deadline: "Feb 1, 2025" },
    { id: 4, student: "Chidi Obi", university: "University of Melbourne", course: "BEng Mechanical", country: "Australia", status: "Visa Processing", deadline: "Mar 15, 2025" },
    { id: 5, student: "Fatima Ibrahim", university: "TU Munich", course: "MSc Engineering", country: "Germany", status: "Enrolled", deadline: "Completed" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Enrolled":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "Offer Received":
        return <CheckCircle className="w-4 h-4 text-blue-600" />;
      case "Documents Pending":
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case "Rejected":
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-orange-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      "Submitted": "bg-orange-100 text-orange-700",
      "Documents Pending": "bg-yellow-100 text-yellow-700",
      "Offer Received": "bg-blue-100 text-blue-700",
      "Visa Processing": "bg-purple-100 text-purple-700",
      "Enrolled": "bg-green-100 text-green-700",
      "Rejected": "bg-red-100 text-red-700",
    };
    return colors[status] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold">Applications</h1>
        <p className="text-muted-foreground">Track and manage student applications</p>
      </div>

      <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
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
              {applications.map((app, index) => (
                <motion.tr
                  key={app.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-border/50 last:border-0 hover:bg-muted/30"
                >
                  <td className="py-4 px-6 font-medium">{app.student}</td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium">{app.university}</p>
                      <p className="text-sm text-muted-foreground">{app.country}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">{app.course}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                      {getStatusIcon(app.status)}
                      {app.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm">{app.deadline}</td>
                  <td className="py-4 px-6">
                    <Button variant="outline" size="sm">View Details</Button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminApplications;
