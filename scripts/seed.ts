import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";

// Ensure environment variables are loaded
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("❌ Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment variables.");
  console.error("Make sure to run this script with your Service Role Key (not anon key) to bypass RLS.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

async function upsertUser(email: string, name: string, role: string, password?: string) {
  console.log(`\nProcessing user: ${email} (${role})`);

  const userPassword = password || "Password123!";

  // Try to create the user
  const { data: authData, error: authErr } = await supabase.auth.admin.createUser({
    email: email,
    password: userPassword,
    email_confirm: true,
    user_metadata: { full_name: name },
  });

  let userId = authData?.user?.id;

  if (authErr) {
    if (authErr.message.includes("already registered") || authErr.message.includes("already been registered")) {
      console.log(`User ${email} already exists. Fetching ID...`);
      // Fetch the existing user ID
      const { data: listData } = await supabase.auth.admin.listUsers();
      const existingUser = listData.users.find((u: any) => u.email === email);
      if (existingUser) {
        userId = existingUser.id;
      }
    } else {
      console.error(`Error creating ${email}:`, authErr.message);
      return null;
    }
  } else {
    console.log(`✅ User created: ${userId}`);
  }

  if (userId) {
    // Upsert their profile to ensure it exists and has the correct role
    const { error: profileErr } = await supabase.from("profiles").upsert({
      id: userId,
      email: email,
      role: role,
      full_name: name,
    });

    if (profileErr) {
      console.error(`Error updating role for ${email}:`, profileErr.message);
    } else {
      console.log(`✅ Profile updated to role: ${role}`);
    }
  }

  return userId;
}

async function main() {
  console.log("🌱 Starting Numaway database seeding...");

  // 1. Create a Test Student User
  const studentId = await upsertUser("student@example.com", "John Doe", "student");

  if (studentId) {
    await supabase.from("profiles").update({
      nationality: "Nigeria",
      target_country: "United Kingdom",
      budget_range: "£15,000 - £20,000",
      highest_qualification: "BSc Computer Science",
      ndpa_consent: true,
      phone: "+2348000000000"
    }).eq("id", studentId);

    // Create a Test Application
    console.log("Checking test application...");
    const { data: apps } = await supabase.from("applications").select("id").eq("student_id", studentId);
    if (!apps || apps.length === 0) {
      const { data: appData, error: appErr } = await supabase.from("applications").insert([{
        student_id: studentId,
        university_name: "University of Manchester",
        university_country: "United Kingdom",
        programme_name: "MSc Artificial Intelligence",
        intake: "September 2025",
        status: "in_review",
        progress_pct: 25,
        deadline: "2025-01-15",
        notes: "Student is highly motivated."
      }]).select().single();

      if (appData) {
        console.log("✅ Application created");
        await supabase.from("documents").insert([{
          student_id: studentId,
          application_id: appData.id,
          document_type: "passport",
          file_name: "passport_john_doe.pdf",
          storage_path: `students/${studentId}/passport.pdf`,
          file_size_bytes: 1024500,
          status: "pending_review"
        }]);
        console.log("✅ Document created");
      }
    } else {
      console.log("✅ Application already exists");
    }
  }

  // 2. Create Staff Users
  await upsertUser("super@numaway.com", "Super Admin", "super_admin", "Super@numa098!#");
  await upsertUser("admin@numaway.com", "Admin User", "admin", "Admin@123#");
  await upsertUser("counsellor@numaway.com", "Test Counsellor", "counsellor", "Counsellor@456!");

  // 3. Create a Lead
  console.log("\nChecking test lead...");
  const { data: leads } = await supabase.from("leads").select("id").limit(1);
  if (!leads || leads.length === 0) {
    await supabase.from("leads").insert([{
      full_name: "Sarah Jane",
      email: "sarah@example.com",
      phone: "+447700900000",
      source: "website",
      target_country: "Canada",
      target_intake: "January 2026",
      status: "new",
      notes: "Interested in Nursing programs."
    }]);
    console.log("✅ Lead created.");
  } else {
    console.log("✅ Leads already exist.");
  }

  console.log("\n🎉 Seeding complete!");
}

main().catch(console.error);
