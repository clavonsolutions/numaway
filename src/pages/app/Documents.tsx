import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { 
  Upload, FileText, CheckCircle, Clock, AlertCircle, 
  Download, Trash2, Eye, Search, Filter, FolderOpen
} from "lucide-react";

const documents = [
  { id: 1, name: "Passport.pdf", type: "Identity", size: "2.4 MB", status: "verified", uploadDate: "Jan 5, 2025" },
  { id: 2, name: "Bachelor_Degree.pdf", type: "Academic", size: "1.8 MB", status: "verified", uploadDate: "Jan 5, 2025" },
  { id: 3, name: "Transcripts.pdf", type: "Academic", size: "3.2 MB", status: "verified", uploadDate: "Jan 6, 2025" },
  { id: 4, name: "IELTS_Score.pdf", type: "Test Scores", size: "0.8 MB", status: "verified", uploadDate: "Jan 8, 2025" },
  { id: 5, name: "SOP_Toronto.docx", type: "SOP", size: "0.5 MB", status: "pending", uploadDate: "Jan 10, 2025" },
  { id: 6, name: "LOR_Professor.pdf", type: "Recommendation", size: "0.3 MB", status: "pending", uploadDate: "Jan 12, 2025" },
  { id: 7, name: "Resume.pdf", type: "CV", size: "0.4 MB", status: "verified", uploadDate: "Jan 5, 2025" },
  { id: 8, name: "Bank_Statement.pdf", type: "Financial", size: "1.1 MB", status: "review", uploadDate: "Jan 15, 2025" },
];

const requiredDocs = [
  { name: "Statement of Purpose (Melbourne)", status: "missing" },
  { name: "Letter of Recommendation #2", status: "missing" },
  { name: "GRE Score Report", status: "missing" },
];

const statusConfig: Record<string, { icon: any; color: string; label: string }> = {
  verified: { icon: CheckCircle, color: "text-green-500", label: "Verified" },
  pending: { icon: Clock, color: "text-amber-500", label: "Pending" },
  review: { icon: AlertCircle, color: "text-blue-500", label: "Under Review" },
  missing: { icon: AlertCircle, color: "text-red-500", label: "Missing" },
};

const StudentDocuments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const filteredDocs = documents.filter(doc => 
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const verifiedCount = documents.filter(d => d.status === "verified").length;
  const totalRequired = documents.length + requiredDocs.length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold">Documents</h1>
          <p className="text-muted-foreground">Upload and manage your application documents</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{documents.length}</p>
                <p className="text-sm text-muted-foreground">Uploaded</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{verifiedCount}</p>
                <p className="text-sm text-muted-foreground">Verified</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{documents.filter(d => d.status === "pending").length}</p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{requiredDocs.length}</p>
                <p className="text-sm text-muted-foreground">Missing</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upload Area */}
      <Card>
        <CardContent className="p-6">
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
              dragActive ? "border-primary bg-primary/5" : "border-border"
            }`}
            onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
            onDragLeave={() => setDragActive(false)}
            onDrop={(e) => { e.preventDefault(); setDragActive(false); }}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">Upload Documents</h3>
            <p className="text-muted-foreground mb-4">Drag and drop files here, or click to browse</p>
            <Button>
              <Upload className="w-4 h-4 mr-2" />
              Choose Files
            </Button>
            <p className="text-xs text-muted-foreground mt-4">Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
          </div>
        </CardContent>
      </Card>

      {/* Missing Documents Alert */}
      {requiredDocs.length > 0 && (
        <Card className="border-amber-500/20 bg-amber-500/5">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2 text-amber-600">
              <AlertCircle className="w-5 h-5" />
              Missing Documents ({requiredDocs.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {requiredDocs.map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="text-sm">{doc.name}</span>
                  <Button size="sm" variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Document List */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <CardTitle className="text-lg">All Documents</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {filteredDocs.map((doc, i) => {
              const StatusIcon = statusConfig[doc.status].icon;
              return (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{doc.name}</p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{doc.type}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span>{doc.uploadDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={`${statusConfig[doc.status].color} bg-transparent`}>
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {statusConfig[doc.status].label}
                    </Badge>
                    <Button variant="ghost" size="icon">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDocuments;
