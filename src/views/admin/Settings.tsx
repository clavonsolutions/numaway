"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Building,
  Bell,
  Shield,
  Mail,
  Globe,
  Users,
  Save,
} from "lucide-react";

const AdminSettings = () => {
  const [notifications, setNotifications] = useState({
    newLeads: true,
    applications: true,
    messages: true,
    dailyDigest: false,
    weeklyReport: true,
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account and system preferences</p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2 h-auto p-1">
          <TabsTrigger value="profile" className="gap-2">
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Profile</span>
          </TabsTrigger>
          <TabsTrigger value="company" className="gap-2">
            <Building className="w-4 h-4" />
            <span className="hidden sm:inline">Company</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="w-4 h-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="team" className="gap-2">
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">Team</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2">
            <Shield className="w-4 h-4" />
            <span className="hidden sm:inline">Security</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card className="p-6">
            <h2 className="text-xl font-display font-bold mb-6">Profile Settings</h2>
            <div className="grid gap-6 max-w-2xl">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  AJ
                </div>
                <div>
                  <Button variant="outline" size="sm">Change Photo</Button>
                  <p className="text-sm text-muted-foreground mt-1">JPG, PNG or GIF. Max 2MB.</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Admin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="User" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="admin@numaway.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" defaultValue="+234 800 000 0000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue="Super Admin" disabled />
              </div>
              <Button className="w-fit bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="company">
          <Card className="p-6">
            <h2 className="text-xl font-display font-bold mb-6">Company Settings</h2>
            <div className="grid gap-6 max-w-2xl">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" defaultValue="NUMAWAY Education" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" defaultValue="https://numaway.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="Lagos, Nigeria" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="supportEmail">Support Email</Label>
                  <Input id="supportEmail" defaultValue="support@numaway.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supportPhone">Support Phone</Label>
                  <Input id="supportPhone" defaultValue="+234 800 000 0000" />
                </div>
              </div>
              <Button className="w-fit bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="p-6">
            <h2 className="text-xl font-display font-bold mb-6">Notification Preferences</h2>
            <div className="space-y-6 max-w-2xl">
              {[
                { key: "newLeads", label: "New Leads", description: "Get notified when a new lead is created" },
                { key: "applications", label: "Application Updates", description: "Updates on application status changes" },
                { key: "messages", label: "New Messages", description: "Notifications for new student messages" },
                { key: "dailyDigest", label: "Daily Digest", description: "Receive a daily summary email" },
                { key: "weeklyReport", label: "Weekly Report", description: "Receive weekly performance report" },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <Switch
                    checked={notifications[item.key as keyof typeof notifications]}
                    onCheckedChange={(checked) => 
                      setNotifications(prev => ({ ...prev, [item.key]: checked }))
                    }
                  />
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-display font-bold">Team Members</h2>
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Invite Member
              </Button>
            </div>
            <div className="space-y-4">
              {[
                { name: "Sarah Adeyemi", email: "sarah@numaway.com", role: "Senior Counselor", status: "Active" },
                { name: "John Davies", email: "john@numaway.com", role: "Counselor", status: "Active" },
                { name: "Mary Okonkwo", email: "mary@numaway.com", role: "Counselor", status: "Active" },
                { name: "Ahmed Bello", email: "ahmed@numaway.com", role: "Junior Counselor", status: "Active" },
              ].map((member) => (
                <div key={member.email} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{member.role}</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                      {member.status}
                    </span>
                    <Button variant="ghost" size="sm">Edit</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="p-6">
            <h2 className="text-xl font-display font-bold mb-6">Security Settings</h2>
            <div className="space-y-6 max-w-2xl">
              <div className="space-y-4">
                <h3 className="font-medium">Change Password</h3>
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Update Password
                </Button>
              </div>

              <hr />

              <div className="space-y-4">
                <h3 className="font-medium">Two-Factor Authentication</h3>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account
                </p>
                <Button variant="outline">Enable 2FA</Button>
              </div>

              <hr />

              <div className="space-y-4">
                <h3 className="font-medium text-red-600">Danger Zone</h3>
                <p className="text-sm text-muted-foreground">
                  Irreversible actions that affect your account
                </p>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettings;
