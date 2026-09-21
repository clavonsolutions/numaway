"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Plus, MoreVertical, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AdminLeads = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const leads = [
    { id: 1, name: "Adaeze Okonkwo", email: "adaeze@email.com", phone: "+234 801 234 5678", country: "UK", course: "MSc Computer Science", status: "New", source: "Website", createdAt: "2024-12-07" },
    { id: 2, name: "Tunde Bakare", email: "tunde@email.com", phone: "+234 802 345 6789", country: "Canada", course: "MBA", status: "Contacted", source: "Referral", createdAt: "2024-12-06" },
    { id: 3, name: "Ngozi Eze", email: "ngozi@email.com", phone: "+234 803 456 7890", country: "USA", course: "BEng Mechanical", status: "Qualified", source: "Instagram", createdAt: "2024-12-05" },
    { id: 4, name: "Chidi Obi", email: "chidi@email.com", phone: "+234 804 567 8901", country: "Australia", course: "MSc Data Science", status: "Proposal", source: "WhatsApp", createdAt: "2024-12-04" },
    { id: 5, name: "Fatima Ibrahim", email: "fatima@email.com", phone: "+234 805 678 9012", country: "Germany", course: "BSc Engineering", status: "New", source: "Website", createdAt: "2024-12-03" },
  ];

  const statuses = ["all", "New", "Contacted", "Qualified", "Proposal", "Converted", "Lost"];

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          lead.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      "New": "bg-blue-100 text-blue-700",
      "Contacted": "bg-yellow-100 text-yellow-700",
      "Qualified": "bg-purple-100 text-purple-700",
      "Proposal": "bg-orange-100 text-orange-700",
      "Converted": "bg-green-100 text-green-700",
      "Lost": "bg-red-100 text-red-700",
    };
    return colors[status] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Leads</h1>
          <p className="text-muted-foreground">Manage and track your leads pipeline</p>
        </div>
        <Button variant="gold" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Lead
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search leads..."
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {statuses.map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                statusFilter === status
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {status === "all" ? "All" : status}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Lead</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Contact</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Interest</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Source</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Date</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead, index) => (
                <motion.tr
                  key={lead.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-border/50 last:border-0 hover:bg-muted/30"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                        {lead.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-medium">{lead.name}</p>
                        <p className="text-sm text-muted-foreground">{lead.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium">{lead.country}</p>
                      <p className="text-sm text-muted-foreground">{lead.course}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm">{lead.source}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{lead.createdAt}</td>
                  <td className="py-4 px-6">
                    <button className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center">
                      <MoreVertical className="w-4 h-4" />
                    </button>
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

export default AdminLeads;

