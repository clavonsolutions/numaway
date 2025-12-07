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
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/faq" element={<FAQ />} />
          
          {/* Services */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          
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
          
          {/* App & Genie */}
          <Route path="/app" element={<AppPage />} />
          <Route path="/genie" element={<GeniePage />} />
          
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
