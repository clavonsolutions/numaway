import type { RouteRecord } from "vite-react-ssg";
import RootLayout from "@/layouts/RootLayout";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Consultation from "./pages/Consultation";
import Services from "./pages/Services";
import ServiceDomainDetail from "./pages/ServiceDomainDetail";
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
import Loans from "./pages/Loans";
import Resources from "./pages/Resources";
import ResourceDetail from "./pages/ResourceDetail";
import Careers from "./pages/Careers";
import CareerDetail from "./pages/CareerDetail";
import AppPage from "./pages/AppPage";
import SagePage from "./pages/SagePage";
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
import Complaints from "./pages/Complaints";
import FraudPrevention from "./pages/FraudPrevention";
import Refunds from "./pages/Refunds";
import AcceptableUse from "./pages/AcceptableUse";
import Accessibility from "./pages/Accessibility";
import Dpa from "./pages/legal/Dpa";
import Scholarships from "./pages/Scholarships";
import Search from "./pages/Search";
import ForStudents from "./pages/ForStudents";
import ForAgents from "./pages/ForAgents";
import ForInstitutions from "./pages/ForInstitutions";
import ServerError from "./pages/ServerError";
import Forbidden from "./pages/Forbidden";
import Unauthorized from "./pages/Unauthorized";
import Maintenance from "./pages/Maintenance";
import Offline from "./pages/Offline";
import Credits from "./pages/Credits";
import ServiceDetail from "./pages/ServiceDetail";
import LocaleRedirect from "./pages/LocaleRedirect";
import PillarPage from "./pages/PillarPage";
import ResourceArticle from "./pages/ResourceArticle";

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
import SageChat from "./pages/app/Sage";

// Static path data for prerender enumeration
const pillarPaths = [
  "study-in-uk", "study-in-canada", "scholarships-guide",
  "english-tests-guide", "visa-interview-guide",
];

const articlePaths: string[] = [
  "study-in-uk/ucas-application-guide",
  "study-in-uk/uk-student-visa-guide",
  "study-in-uk/uk-tuition-living-costs",
  "study-in-uk/best-uk-universities-for-nigerians",
  "study-in-uk/uk-graduate-route-visa",
  "study-in-canada/apply-to-canadian-universities",
  "study-in-canada/canada-study-permit-guide",
  "study-in-canada/canada-tuition-living-costs",
  "study-in-canada/pgwp-canada-guide",
  "study-in-canada/top-canadian-universities",
  "scholarships-guide/chevening-scholarship-guide",
  "scholarships-guide/commonwealth-scholarship-guide",
  "scholarships-guide/daad-scholarship-germany",
  "scholarships-guide/winning-scholarship-essay",
  "scholarships-guide/fully-funded-scholarships-african-students",
  "english-tests-guide/ielts-preparation-guide",
  "english-tests-guide/ielts-vs-toefl",
  "english-tests-guide/gre-exam-guide",
  "english-tests-guide/gmat-exam-guide",
  "english-tests-guide/english-language-waivers",
  "visa-interview-guide/uk-visa-interview-questions",
  "visa-interview-guide/us-f1-visa-interview",
  "visa-interview-guide/canada-study-permit-interview",
  "visa-interview-guide/visa-refusal-appeal-guide",
  "visa-interview-guide/student-visa-document-checklist",
];

const countryPaths = [
  "united-kingdom", "united-states", "canada", "australia",
  "germany", "ireland", "netherlands", "france", "uae",
  "singapore", "malaysia", "italy", "spain", "cyprus",
  "china", "new-zealand", "sweden", "poland", "japan",
  "south-korea", "switzerland",
];

const examPaths = ["ielts", "toefl", "gre", "gmat", "sat", "pte", "det"];

const servicePaths = [
  "student-services", "university-partnerships", "digital-services",
  "compliance-services", "community-services", "consulting-services",
  "events-services", "premium-services", "future-services",
];

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // Home
      { index: true, element: <Index /> },

      // About
      { path: "about", element: <About /> },
      { path: "about/team", element: <Team /> },
      { path: "about/why-numaway", element: <WhyNumaway /> },

      // Contact & Consultation
      { path: "contact", element: <Contact /> },
      { path: "consultation", element: <Consultation /> },

      // Legal pages
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "terms", element: <Terms /> },
      { path: "cookies", element: <Cookies /> },
      { path: "disclaimer", element: <Disclaimer /> },
      { path: "complaints", element: <Complaints /> },
      { path: "fraud-prevention", element: <FraudPrevention /> },
      { path: "refunds", element: <Refunds /> },
      { path: "acceptable-use", element: <AcceptableUse /> },
      { path: "accessibility", element: <Accessibility /> },
      { path: "legal/dpa", element: <Dpa /> },

      // Services
      { path: "services", element: <Services /> },
      // Individual STU sub-service pages (static, take precedence over domain :slug)
      { path: "services/study-abroad-counselling", element: <ServiceDetail /> },
      { path: "services/application-support", element: <ServiceDetail /> },
      { path: "services/offer-decision-support", element: <ServiceDetail /> },
      { path: "services/visa-preparation", element: <ServiceDetail /> },
      { path: "services/accommodation-landing", element: <ServiceDetail /> },
      { path: "services/exams-support", element: <ServiceDetail /> },
      { path: "services/scholarships-funding", element: <ServiceDetail /> },
      { path: "services/genie", element: <ServiceDetail /> },
      { path: "services/student-profiling", element: <ServiceDetail /> },
      { path: "services/program-selection", element: <ServiceDetail /> },
      { path: "services/exam-support", element: <ServiceDetail /> },
      { path: "services/pre-departure", element: <ServiceDetail /> },
      { path: "services/post-arrival", element: <ServiceDetail /> },
      // Service domain pages (dynamic)
      {
        path: "services/:slug",
        element: <ServiceDomainDetail />,
        getStaticPaths: () => servicePaths.map((s) => `/services/${s}`),
      },
      { path: "scholarships", element: <Scholarships /> },

      // Countries
      { path: "countries", element: <Countries /> },
      {
        path: "countries/:slug",
        element: <CountryDetail />,
        getStaticPaths: () => countryPaths.map((c) => `/countries/${c}`),
      },

      // Universities
      { path: "universities", element: <Universities /> },
      { path: "universities/compare", element: <UniversityCompare /> },
      { path: "universities/:slug", element: <UniversityDetail /> },

      // Courses
      { path: "courses", element: <Courses /> },
      { path: "courses/area/:slug", element: <AreaOfStudy /> },
      { path: "courses/:slug", element: <CourseDetail /> },

      // Exams
      { path: "exams", element: <Exams /> },
      {
        path: "exams/:slug",
        element: <ExamDetail />,
        getStaticPaths: () => examPaths.map((e) => `/exams/${e}`),
      },

      // Other public
      { path: "accommodation", element: <Accommodation /> },
      { path: "loans", element: <Loans /> },
      { path: "resources", element: <Resources /> },
      // Pillar pages (Phase 7)
      {
        path: "resources/:pillarSlug",
        element: <PillarPage />,
        getStaticPaths: () => pillarPaths.map((s) => `/resources/${s}`),
      },
      // Cluster articles (Phase 7)
      {
        path: "resources/:pillarSlug/:articleSlug",
        element: <ResourceArticle />,
        getStaticPaths: () => articlePaths.map((p) => `/resources/${p}`),
      },
      // Legacy resource detail (pre-Phase-7 article slugs)
      { path: "resources/:slug", element: <ResourceDetail /> },
      { path: "careers", element: <Careers /> },
      { path: "careers/:slug", element: <CareerDetail /> },
      { path: "faq", element: <FAQ /> },
      { path: "sage", element: <SagePage /> },
      { path: "search", element: <Search /> },
      { path: "sitemap", element: <Sitemap /> },
      { path: "credits", element: <Credits /> },
      { path: "for-students", element: <ForStudents /> },
      { path: "for-agents", element: <ForAgents /> },
      { path: "for-institutions", element: <ForInstitutions /> },

      // Error pages
      { path: "500", element: <ServerError /> },
      { path: "403", element: <Forbidden /> },
      { path: "401", element: <Unauthorized /> },
      { path: "maintenance", element: <Maintenance /> },
      { path: "offline", element: <Offline /> },

      // Auth (SPA only, excluded from SSG via ssgOptions in vite.config.ts)
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> },

      // Student App Portal (SPA, excluded from SSG)
      {
        path: "app",
        element: <StudentLayout />,
        children: [
          { index: true, element: <StudentDashboard /> },
          { path: "applications", element: <StudentApplications /> },
          { path: "documents", element: <StudentDocuments /> },
          { path: "sage", element: <SageChat /> },
          { path: "profile", element: <StudentProfile /> },
        ],
      },
      { path: "app/page", element: <AppPage /> },

      // Admin Portal (SPA, excluded from SSG)
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: "leads", element: <AdminLeads /> },
          { path: "students", element: <AdminStudents /> },
          { path: "applications", element: <AdminApplications /> },
          { path: "tasks", element: <AdminTasks /> },
          { path: "consultations", element: <AdminConsultations /> },
          { path: "messages", element: <AdminMessages /> },
          { path: "reports", element: <AdminReports /> },
          { path: "settings", element: <AdminSettings /> },
        ],
      },

      // French locale routes, provisioned, content deferred (ADR-014, MRS §14.3)
      { path: "fr-ca/*", element: <LocaleRedirect locale="fr-CA" /> },
      { path: "fr-fr/*", element: <LocaleRedirect locale="fr-FR" /> },

      // 404 catch-all
      { path: "*", element: <NotFound /> },
    ],
  },
];
