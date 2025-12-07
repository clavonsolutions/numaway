import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  User, Mail, Phone, MapPin, GraduationCap, Briefcase, 
  Globe, Edit2, Save, Camera, Shield, Bell, Trash2
} from "lucide-react";

const StudentProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold">Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and preferences</p>
        </div>
        <Button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <Edit2 className="w-4 h-4 mr-2" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      {/* Profile Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-3xl font-display font-bold text-primary-foreground">JD</span>
              </div>
              {isEditing && (
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <Camera className="w-4 h-4 text-primary-foreground" />
                </button>
              )}
            </div>
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-2xl font-display font-bold">John Doe</h2>
              <p className="text-muted-foreground">john.doe@email.com</p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mt-3">
                <Badge>Student</Badge>
                <Badge variant="outline">Verified</Badge>
                <Badge variant="secondary">3 Active Applications</Badge>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-sm text-muted-foreground">Member since</p>
              <p className="font-medium">January 2025</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList>
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input defaultValue="John" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input defaultValue="Doe" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input defaultValue="john.doe@email.com" type="email" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input defaultValue="+1 234 567 8900" type="tel" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label>Date of Birth</Label>
                  <Input defaultValue="1998-05-15" type="date" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label>Nationality</Label>
                  <Select disabled={!isEditing}>
                    <SelectTrigger>
                      <SelectValue placeholder="Indian" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="indian">Indian</SelectItem>
                      <SelectItem value="nigerian">Nigerian</SelectItem>
                      <SelectItem value="pakistani">Pakistani</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Address</Label>
                <Textarea 
                  defaultValue="123 Main Street, Mumbai, Maharashtra 400001, India" 
                  disabled={!isEditing}
                  rows={2}
                />
              </div>
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
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Highest Qualification</Label>
                  <Select disabled={!isEditing}>
                    <SelectTrigger>
                      <SelectValue placeholder="Bachelor's Degree" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                      <SelectItem value="masters">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Field of Study</Label>
                  <Input defaultValue="Computer Science" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label>University/College</Label>
                  <Input defaultValue="University of Mumbai" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label>Graduation Year</Label>
                  <Input defaultValue="2024" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label>GPA/Percentage</Label>
                  <Input defaultValue="8.5/10" disabled={!isEditing} />
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4">Test Scores</h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">IELTS</p>
                    <p className="text-xl font-bold">7.5</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">GRE</p>
                    <p className="text-xl font-bold">320</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">TOEFL</p>
                    <p className="text-xl font-bold text-muted-foreground">N/A</p>
                  </div>
                </div>
              </div>
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
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Preferred Countries</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Canada</Badge>
                    <Badge>Germany</Badge>
                    <Badge>Australia</Badge>
                    {isEditing && <Badge variant="outline">+ Add</Badge>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Preferred Intake</Label>
                  <Select disabled={!isEditing}>
                    <SelectTrigger>
                      <SelectValue placeholder="Fall 2025" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fall-2025">Fall 2025</SelectItem>
                      <SelectItem value="spring-2026">Spring 2026</SelectItem>
                      <SelectItem value="fall-2026">Fall 2026</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Program Level</Label>
                  <Select disabled={!isEditing}>
                    <SelectTrigger>
                      <SelectValue placeholder="Master's" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelors">Bachelor's</SelectItem>
                      <SelectItem value="masters">Master's</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Budget Range</Label>
                  <Select disabled={!isEditing}>
                    <SelectTrigger>
                      <SelectValue placeholder="$20,000 - $40,000/year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Under $20,000/year</SelectItem>
                      <SelectItem value="mid">$20,000 - $40,000/year</SelectItem>
                      <SelectItem value="high">$40,000+/year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Bell className="w-4 h-4" />
                  Notification Preferences
                </h4>
                <div className="space-y-3">
                  {["Email notifications", "SMS alerts", "Application updates", "Scholarship alerts", "Newsletter"].map((pref) => (
                    <label key={pref} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4 rounded" disabled={!isEditing} />
                      <span>{pref}</span>
                    </label>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">Change Password</p>
                    <p className="text-sm text-muted-foreground">Update your account password</p>
                  </div>
                  <Button variant="outline">Change</Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline">Enable</Button>
                </div>
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">Active Sessions</p>
                    <p className="text-sm text-muted-foreground">Manage your logged in devices</p>
                  </div>
                  <Button variant="outline">View</Button>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-destructive mb-4">Danger Zone</h4>
                <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
                  <div>
                    <p className="font-medium">Delete Account</p>
                    <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                  </div>
                  <Button variant="destructive">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
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
