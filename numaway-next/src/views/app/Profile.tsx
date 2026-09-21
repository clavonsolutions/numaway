"use client";
import { useState, type FormEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  User, GraduationCap, Globe, Shield, Loader2, Save,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

const COUNTRIES = [
  "United Kingdom", "Canada", "United States", "Australia",
  "Germany", "Ireland", "Netherlands", "UAE", "Other",
];
const INTAKES = ["September 2025", "January 2026", "May 2026", "September 2026", "Later"];
const QUALIFICATIONS = ["O-Level / WAEC", "A-Level / NABTEB", "Diploma / HND", "Bachelor's Degree", "Master's Degree", "PhD"];
const BUDGETS = ["Under $10,000/yr", "$10,000–$20,000/yr", "$20,000–$40,000/yr", "$40,000+/yr"];

const StudentProfile = (): JSX.Element => {
  const { profile } = useAuth();
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);

  // Form fields
  const [fullName, setFullName] = useState(profile?.full_name ?? "");
  const [phone, setPhone] = useState(profile?.phone ?? "");
  const [nationality, setNationality] = useState(profile?.nationality ?? "");
  const [dob, setDob] = useState(profile?.date_of_birth ?? "");
  const [qualification, setQualification] = useState(profile?.highest_qualification ?? "");
  const [targetCountry, setTargetCountry] = useState(profile?.target_country ?? "");
  const [targetIntake, setTargetIntake] = useState(profile?.target_intake ?? "");
  const [budget, setBudget] = useState(profile?.budget_range ?? "");

  async function handleSave(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (!profile) return;
    setSaving(true);

    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: fullName.trim(),
        phone: phone.trim() || null,
        nationality: nationality || null,
        date_of_birth: dob || null,
        highest_qualification: qualification || null,
        target_country: targetCountry || null,
        target_intake: targetIntake || null,
        budget_range: budget || null,
      })
      .eq("id", profile.id);

    setSaving(false);

    if (error) {
      toast({ title: "Save failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Profile updated", description: "Your changes have been saved." });
    }
  }

  const initials = (profile?.full_name ?? "S")
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const memberSince = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString("en-GB", { month: "long", year: "numeric" })
    : "";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold">Profile</h1>
        <p className="text-muted-foreground">Manage your personal information and study preferences</p>
      </div>

      {/* Profile header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-3xl font-display font-bold text-primary-foreground">{initials}</span>
            </div>
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-2xl font-display font-bold">{profile?.full_name ?? "Student"}</h2>
              <p className="text-muted-foreground">{profile?.email}</p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-3">
                <Badge>Student</Badge>
                {profile?.target_country && (
                  <Badge variant="outline">{profile.target_country}</Badge>
                )}
              </div>
            </div>
            {memberSince && (
              <div className="text-center sm:text-right">
                <p className="text-sm text-muted-foreground">Member since</p>
                <p className="font-medium">{memberSince}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList>
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* Personal + Academic + Preferences all save together */}
        <form onSubmit={(e) => { void handleSave(e); }}>
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="prof-name">Full name</Label>
                    <Input
                      id="prof-name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Amina Abubakar"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prof-email">Email</Label>
                    <Input id="prof-email" value={profile?.email ?? ""} disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prof-phone">Phone</Label>
                    <Input
                      id="prof-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prof-dob">Date of birth</Label>
                    <Input
                      id="prof-dob"
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prof-nationality">Nationality</Label>
                    <Input
                      id="prof-nationality"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                      placeholder="Nigerian"
                    />
                  </div>
                </div>
                <Button type="submit" className="gap-2" disabled={saving}>
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  {saving ? "Saving..." : "Save changes"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="academic">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Academic Background
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="prof-qual">Highest qualification</Label>
                    <Select value={qualification} onValueChange={setQualification}>
                      <SelectTrigger id="prof-qual">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {QUALIFICATIONS.map((q) => (
                          <SelectItem key={q} value={q}>{q}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button type="submit" className="gap-2" disabled={saving}>
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  {saving ? "Saving..." : "Save changes"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Study Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="prof-country">Target country</Label>
                    <Select value={targetCountry} onValueChange={setTargetCountry}>
                      <SelectTrigger id="prof-country">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {COUNTRIES.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prof-intake">Target intake</Label>
                    <Select value={targetIntake} onValueChange={setTargetIntake}>
                      <SelectTrigger id="prof-intake">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {INTAKES.map((i) => (
                          <SelectItem key={i} value={i}>{i}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prof-budget">Budget range</Label>
                    <Select value={budget} onValueChange={setBudget}>
                      <SelectTrigger id="prof-budget">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {BUDGETS.map((b) => (
                          <SelectItem key={b} value={b}>{b}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button type="submit" className="gap-2" disabled={saving}>
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  {saving ? "Saving..." : "Save changes"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </form>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Change password</p>
                  <p className="text-sm text-muted-foreground">
                    Reset via the forgot-password flow
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <a href="/forgot-password">Reset</a>
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
                <div>
                  <p className="font-medium text-destructive">Delete account</p>
                  <p className="text-sm text-muted-foreground">
                    Contact connect@numaway.com to request account deletion per the NDPA.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentProfile;

