import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Consultation from "./pages/Consultation";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Countries from "./pages/Countries";
import CountryDetail from "./pages/CountryDetail";
import Universities from "./pages/Universities";
import UniversityDetail from "./pages/UniversityDetail";
import UniversityCompare from "./pages/UniversityCompare";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import AreaOfStudy from "./pages/AreaOfStudy";
import Exams from "./pages/Exams";
import ExamDetail from "./pages/ExamDetail";
import Accommodation from "./pages/Accommodation";
import Resources from "./pages/Resources";
import ResourceDetail from "./pages/ResourceDetail";
import Careers from "./pages/Careers";
import CareerDetail from "./pages/CareerDetail";
import AppPage from "./pages/AppPage";
import GeniePage from "./pages/GeniePage";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Sitemap from "./pages/Sitemap";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Team from "./pages/Team";
import WhyNumaway from "./pages/WhyNumaway";
import ForgotPassword from "./pages/ForgotPassword";
import Disclaimer from "./pages/Disclaimer";
import Scholarships from "./pages/Scholarships";
import Search from "./pages/Search";
import ForStudents from "./pages/ForStudents";
import ForAgents from "./pages/ForAgents";
import ForInstitutions from "./pages/ForInstitutions";

// Admin
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminLeads from "./pages/admin/Leads";
import AdminStudents from "./pages/admin/Students";
import AdminApplications from "./pages/admin/Applications";
import AdminTasks from "./pages/admin/Tasks";
import AdminConsultations from "./pages/admin/Consultations";
import AdminMessages from "./pages/admin/Messages";
import AdminReports from "./pages/admin/Reports";
import AdminSettings from "./pages/admin/Settings";

// Student App Portal
import StudentLayout from "./layouts/StudentLayout";
import StudentDashboard from "./pages/app/Dashboard";
import StudentApplications from "./pages/app/Applications";
import StudentDocuments from "./pages/app/Documents";
import StudentProfile from "./pages/app/Profile";
import GenieChat from "./pages/app/Genie";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />
          
          {/* About & Legal */}
          <Route path="/about" element={<About />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/why-numaway" element={<WhyNumaway />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/for-students" element={<ForStudents />} />
          <Route path="/for-agents" element={<ForAgents />} />
          <Route path="/for-institutions" element={<ForInstitutions />} />
          
          {/* Services */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/scholarships" element={<Scholarships />} />
          
          {/* Countries */}
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:slug" element={<CountryDetail />} />
          
          {/* Universities */}
          <Route path="/universities" element={<Universities />} />
          <Route path="/universities/compare" element={<UniversityCompare />} />
          <Route path="/universities/:slug" element={<UniversityDetail />} />
          
          {/* Courses */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/area/:slug" element={<AreaOfStudy />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          
          {/* Exams */}
          <Route path="/exams" element={<Exams />} />
          <Route path="/exams/:slug" element={<ExamDetail />} />
          
          {/* Accommodation */}
          <Route path="/accommodation" element={<Accommodation />} />
          
          {/* Resources */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ResourceDetail />} />
          
          {/* Careers */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:slug" element={<CareerDetail />} />
          
          {/* Student App Portal */}
          <Route path="/app" element={<StudentLayout />}>
            <Route index element={<StudentDashboard />} />
            <Route path="applications" element={<StudentApplications />} />
            <Route path="documents" element={<StudentDocuments />} />
            <Route path="genie" element={<GenieChat />} />
            <Route path="profile" element={<StudentProfile />} />
          </Route>
          <Route path="/genie" element={<GeniePage />} />
          
          {/* Search */}
          <Route path="/search" element={<Search />} />
          
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
{/* Admin Portal */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="leads" element={<AdminLeads />} />
            <Route path="students" element={<AdminStudents />} />
            <Route path="applications" element={<AdminApplications />} />
            <Route path="tasks" element={<AdminTasks />} />
            <Route path="consultations" element={<AdminConsultations />} />
            <Route path="messages" element={<AdminMessages />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
