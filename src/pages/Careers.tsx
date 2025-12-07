import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";

const jobs = [
  { slug: "senior-student-counsellor", title: "Senior Student Counsellor", department: "Counselling", location: "Lagos, Nigeria", type: "Full-time", level: "Senior" },
  { slug: "marketing-lead", title: "Marketing Lead", department: "Marketing", location: "Lagos, Nigeria", type: "Full-time", level: "Mid-Senior" },
  { slug: "content-writer", title: "Content Writer", department: "Content", location: "Remote", type: "Full-time", level: "Mid" },
  { slug: "frontend-developer", title: "Frontend Developer", department: "Technology", location: "Remote", type: "Full-time", level: "Mid" },
  { slug: "admissions-officer", title: "Admissions Officer", department: "Operations", location: "Abuja, Nigeria", type: "Full-time", level: "Junior" }
];

const Careers = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">Join Our Team</motion.h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">Help Nigerian students achieve their global education dreams</p>
        </div>
      </section>
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-display font-bold mb-4">Why Work at NUMAWAY?</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card p-6 rounded-xl shadow-soft"><span className="text-3xl mb-3 block">🚀</span><h3 className="font-semibold mb-2">Meaningful Impact</h3><p className="text-sm text-muted-foreground">Transform students' lives daily</p></div>
            <div className="bg-card p-6 rounded-xl shadow-soft"><span className="text-3xl mb-3 block">🌍</span><h3 className="font-semibold mb-2">Global Exposure</h3><p className="text-sm text-muted-foreground">Work with international partners</p></div>
            <div className="bg-card p-6 rounded-xl shadow-soft"><span className="text-3xl mb-3 block">📈</span><h3 className="font-semibold mb-2">Growth Opportunities</h3><p className="text-sm text-muted-foreground">Develop your career with us</p></div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold mb-8">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <a key={job.slug} href={`/careers/${job.slug}`} className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-all">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-lg font-display font-semibold group-hover:text-secondary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />{job.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{job.type}</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-secondary" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Careers;
