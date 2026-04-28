import { useEffect, useState, useRef, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Upload, FileText, CheckCircle, Clock, AlertCircle,
  Download, Trash2, Search, Loader2, FolderOpen,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import type { Document } from "@/lib/database.types";
import { useToast } from "@/hooks/use-toast";

const STATUS_CONFIG: Record<
  string,
  { icon: typeof CheckCircle; color: string; label: string }
> = {
  approved: { icon: CheckCircle, color: "text-green-500", label: "Approved" },
  pending_review: { icon: Clock, color: "text-amber-500", label: "Pending review" },
  rejected: { icon: AlertCircle, color: "text-destructive", label: "Rejected" },
};

const DOC_BUCKET = "student-documents";
const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const StudentDocuments = (): JSX.Element => {
  const { profile } = useAuth();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dragActive, setDragActive] = useState(false);

  async function fetchDocuments(): Promise<void> {
    if (!profile) return;
    const { data } = await supabase
      .from("documents")
      .select("*")
      .eq("student_id", profile.id)
      .order("uploaded_at", { ascending: false });
    setDocuments(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    void fetchDocuments();
  }, [profile]);

  async function uploadFile(file: File): Promise<void> {
    if (!profile) return;
    if (file.size > MAX_FILE_BYTES) {
      toast({ title: "File too large", description: "Maximum size is 10 MB.", variant: "destructive" });
      return;
    }

    setUploading(true);
    const ext = file.name.split(".").pop() ?? "bin";
    const path = `${profile.id}/${Date.now()}.${ext}`;

    const { error: storageError } = await supabase.storage
      .from(DOC_BUCKET)
      .upload(path, file, { cacheControl: "3600", upsert: false });

    if (storageError) {
      setUploading(false);
      toast({ title: "Upload failed", description: storageError.message, variant: "destructive" });
      return;
    }

    const { error: dbError } = await supabase.from("documents").insert({
      student_id: profile.id,
      document_type: "other",
      file_name: file.name,
      storage_path: path,
      file_size_bytes: file.size,
      status: "pending_review",
    });

    setUploading(false);

    if (dbError) {
      toast({ title: "Record failed", description: dbError.message, variant: "destructive" });
    } else {
      toast({ title: "Uploaded", description: `${file.name} is now pending review.` });
      void fetchDocuments();
    }
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>): void {
    const file = e.target.files?.[0];
    if (file) void uploadFile(file);
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) void uploadFile(file);
  }

  async function handleDownload(doc: Document): Promise<void> {
    const { data } = await supabase.storage
      .from(DOC_BUCKET)
      .createSignedUrl(doc.storage_path, 60);
    if (data?.signedUrl) {
      window.open(data.signedUrl, "_blank");
    }
  }

  async function handleDelete(doc: Document): Promise<void> {
    if (!window.confirm(`Delete "${doc.file_name}"?`)) return;

    await supabase.storage.from(DOC_BUCKET).remove([doc.storage_path]);
    await supabase.from("documents").delete().eq("id", doc.id);
    setDocuments((prev) => prev.filter((d) => d.id !== doc.id));
    toast({ title: "Deleted", description: `${doc.file_name} removed.` });
  }

  const filtered = documents.filter((d) =>
    d.file_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.document_type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const approvedCount = documents.filter((d) => d.status === "approved").length;
  const pendingCount = documents.filter((d) => d.status === "pending_review").length;
  const rejectedCount = documents.filter((d) => d.status === "rejected").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold">Documents</h1>
        <p className="text-muted-foreground">Upload and manage your application documents</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Uploaded", value: documents.length, icon: FileText, color: "text-primary", bg: "bg-primary/10" },
          { label: "Approved", value: approvedCount, icon: CheckCircle, color: "text-green-500", bg: "bg-green-500/10" },
          { label: "Pending", value: pendingCount, icon: Clock, color: "text-amber-500", bg: "bg-amber-500/10" },
          { label: "Rejected", value: rejectedCount, icon: AlertCircle, color: "text-destructive", bg: "bg-destructive/10" },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{loading ? "…" : stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upload zone */}
      <Card>
        <CardContent className="p-6">
          <div
            className={[
              "border-2 border-dashed rounded-xl p-8 text-center transition-colors",
              dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/40",
            ].join(" ")}
            onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
          >
            {uploading ? (
              <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-3" />
            ) : (
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-primary" />
              </div>
            )}
            <h3 className="font-display font-semibold text-lg mb-2">
              {uploading ? "Uploading..." : "Upload a document"}
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Drag and drop, or click to browse
            </p>
            <Button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="gap-2"
            >
              <Upload className="w-4 h-4" />
              Choose file
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="hidden"
              onChange={handleFileChange}
            />
            <p className="text-xs text-muted-foreground mt-4">
              PDF, DOC, DOCX, JPG, PNG — max 10 MB
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Document list */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <CardTitle className="text-lg">All Documents</CardTitle>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-muted animate-pulse rounded-xl" />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-12 text-center">
              <FolderOpen className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
              <p className="text-muted-foreground">
                {searchQuery ? "No documents match your search." : "No documents uploaded yet."}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {filtered.map((doc, i) => {
                const cfg = STATUS_CONFIG[doc.status] ?? STATUS_CONFIG.pending_review;
                const StatusIcon = cfg.icon;
                return (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{doc.file_name}</p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="capitalize">{doc.document_type.replace("_", " ")}</span>
                        <span>•</span>
                        <span>{formatBytes(doc.file_size_bytes)}</span>
                        <span>•</span>
                        <span>
                          {new Date(doc.uploaded_at).toLocaleDateString("en-GB", {
                            day: "numeric", month: "short", year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={`${cfg.color} bg-transparent hidden sm:flex items-center gap-1`}
                      >
                        <StatusIcon className="w-3 h-3" />
                        {cfg.label}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => { void handleDownload(doc); }}
                        aria-label="Download"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive"
                        onClick={() => { void handleDelete(doc); }}
                        aria-label="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDocuments;
