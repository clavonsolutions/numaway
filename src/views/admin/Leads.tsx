"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Plus, MoreVertical, Phone, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { format } from "date-fns";
import type { Lead } from "@/lib/database.types";

const AdminLeads = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const { data: leads = [], isLoading } = useQuery({
    queryKey: ["admin", "leads"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Lead[];
    },
  });

  const statuses = ["all", "new", "contacted", "qualified", "converted", "lost"];

  const filteredLeads = leads.filter(lead => {
    const searchString = `${lead.full_name} ${lead.email}`.toLowerCase();
    const matchesSearch = searchString.includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      "new": "bg-blue-100 text-blue-700",
      "contacted": "bg-yellow-100 text-yellow-700",
      "qualified": "bg-purple-100 text-purple-700",
      "proposal": "bg-orange-100 text-orange-700",
      "converted": "bg-green-100 text-green-700",
      "lost": "bg-red-100 text-red-700",
    };
    return colors[status.toLowerCase()] || "bg-gray-100 text-gray-700";
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
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors capitalize ${
                statusFilter === status
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table */}
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
                          {lead.full_name.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-medium">{lead.full_name}</p>
                          <p className="text-sm text-muted-foreground">{lead.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        {lead.phone && (
                          <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors" title={lead.phone}>
                            <Phone className="w-4 h-4" />
                          </button>
                        )}
                        <button className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors" title={lead.email}>
                          <Mail className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium">{lead.target_country || "Any"}</p>
                        <p className="text-sm text-muted-foreground">{lead.target_intake || "Any"}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-sm capitalize">{lead.source}</td>
                    <td className="py-4 px-6 text-sm text-muted-foreground">
                      {format(new Date(lead.created_at), "MMM d, yyyy")}
                    </td>
                    <td className="py-4 px-6">
                      <button className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
                {filteredLeads.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-8 text-muted-foreground">
                      No leads found matching your criteria.
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

export default AdminLeads;
