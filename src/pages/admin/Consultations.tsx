import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Video,
  Phone,
  MapPin,
  User,
  CheckCircle,
  XCircle,
  MoreVertical,
  Filter,
  Plus,
} from "lucide-react";

interface Consultation {
  id: string;
  studentName: string;
  studentEmail: string;
  date: string;
  time: string;
  type: "video" | "phone" | "in-person";
  counselor: string;
  status: "scheduled" | "completed" | "cancelled" | "no-show";
  topic: string;
  notes?: string;
}

const AdminConsultations = () => {
  const [view, setView] = useState<"upcoming" | "past">("upcoming");

  const consultations: Consultation[] = [
    {
      id: "1",
      studentName: "Adaeze Okonkwo",
      studentEmail: "adaeze@email.com",
      date: "Dec 7, 2024",
      time: "2:00 PM",
      type: "video",
      counselor: "Sarah Adeyemi",
      status: "scheduled",
      topic: "UK University Selection",
    },
    {
      id: "2",
      studentName: "Tunde Bakare",
      studentEmail: "tunde@email.com",
      date: "Dec 7, 2024",
      time: "4:00 PM",
      type: "phone",
      counselor: "John Davies",
      status: "scheduled",
      topic: "Visa Documentation Review",
    },
    {
      id: "3",
      studentName: "Ngozi Eze",
      studentEmail: "ngozi@email.com",
      date: "Dec 8, 2024",
      time: "10:00 AM",
      type: "video",
      counselor: "Sarah Adeyemi",
      status: "scheduled",
      topic: "Scholarship Application",
    },
    {
      id: "4",
      studentName: "Chidi Obi",
      studentEmail: "chidi@email.com",
      date: "Dec 6, 2024",
      time: "3:00 PM",
      type: "video",
      counselor: "Mary Okonkwo",
      status: "completed",
      topic: "SOP Review",
      notes: "Student has strong profile. Recommended focusing on research experience.",
    },
    {
      id: "5",
      studentName: "Kemi Adeyemi",
      studentEmail: "kemi@email.com",
      date: "Dec 5, 2024",
      time: "11:00 AM",
      type: "in-person",
      counselor: "John Davies",
      status: "completed",
      topic: "Initial Consultation",
    },
    {
      id: "6",
      studentName: "Emeka Nwosu",
      studentEmail: "emeka@email.com",
      date: "Dec 5, 2024",
      time: "2:00 PM",
      type: "video",
      counselor: "Sarah Adeyemi",
      status: "no-show",
      topic: "Application Status Update",
    },
  ];

  const upcomingConsultations = consultations.filter(c => c.status === "scheduled");
  const pastConsultations = consultations.filter(c => c.status !== "scheduled");

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video": return <Video className="w-4 h-4" />;
      case "phone": return <Phone className="w-4 h-4" />;
      case "in-person": return <MapPin className="w-4 h-4" />;
      default: return <Video className="w-4 h-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Badge className="bg-blue-100 text-blue-700 border-blue-200">Scheduled</Badge>;
      case "completed":
        return <Badge className="bg-green-100 text-green-700 border-green-200">Completed</Badge>;
      case "cancelled":
        return <Badge className="bg-gray-100 text-gray-700 border-gray-200">Cancelled</Badge>;
      case "no-show":
        return <Badge className="bg-red-100 text-red-700 border-red-200">No Show</Badge>;
      default:
        return null;
    }
  };

  const displayedConsultations = view === "upcoming" ? upcomingConsultations : pastConsultations;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Consultations</h1>
          <p className="text-muted-foreground">Manage student consultations and appointments</p>
        </div>
        <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
          <Plus className="w-4 h-4 mr-2" />
          Schedule Consultation
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Today", value: 4, color: "bg-blue-500" },
          { label: "This Week", value: 18, color: "bg-purple-500" },
          { label: "Completed (Month)", value: 67, color: "bg-green-500" },
          { label: "No-Show Rate", value: "5%", color: "bg-red-500" },
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

      {/* View Toggle */}
      <div className="flex gap-2">
        <Button
          variant={view === "upcoming" ? "default" : "outline"}
          onClick={() => setView("upcoming")}
        >
          Upcoming ({upcomingConsultations.length})
        </Button>
        <Button
          variant={view === "past" ? "default" : "outline"}
          onClick={() => setView("past")}
        >
          Past ({pastConsultations.length})
        </Button>
      </div>

      {/* Consultations List */}
      <div className="space-y-4">
        {displayedConsultations.map((consultation, index) => (
          <motion.div
            key={consultation.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{consultation.studentName}</h3>
                    <p className="text-sm text-muted-foreground">{consultation.studentEmail}</p>
                    <p className="text-sm font-medium mt-1">{consultation.topic}</p>
                    {consultation.notes && (
                      <p className="text-sm text-muted-foreground mt-2 italic">
                        "{consultation.notes}"
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    {consultation.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    {consultation.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    {getTypeIcon(consultation.type)}
                    <span className="capitalize">{consultation.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">with</span>
                    {consultation.counselor}
                  </div>
                  {getStatusBadge(consultation.status)}
                </div>

                <div className="flex items-center gap-2">
                  {consultation.status === "scheduled" && (
                    <>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <Video className="w-4 h-4 mr-1" />
                        Join
                      </Button>
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                    </>
                  )}
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminConsultations;