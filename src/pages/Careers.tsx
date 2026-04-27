import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Careers = () => (
  <div className="min-h-screen bg-background">
    <PageHead
      title="Careers at Numaway: Join Our Team"
      description="Numaway is building the world's most trusted education mobility platform. View open roles and join our team in Kano, Nigeria."
      canonical="/careers"
    />

    <Header />
    <main className="pt-20">
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container-default text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Build NUMAWAY With Us
          </motion.h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto">
            We're building a modern, student-first education agency. Join us.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-default">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-8">
              We are always interested in working with counsellors, advisors, operations specialists 
              and tech talent who care about students and ethics as much as we do.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container-default">
          <h2 className="text-2xl font-display font-bold text-center mb-8">Why Work With NUMAWAY?</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card p-6 rounded-xl shadow-soft text-center">
              <span className="text-4xl mb-4 block">🎯</span>
              <h3 className="font-display font-semibold mb-2">Impact</h3>
              <p className="text-sm text-muted-foreground">Help students transform their lives through education</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-soft text-center">
              <span className="text-4xl mb-4 block">✨</span>
              <h3 className="font-display font-semibold mb-2">Standards</h3>
              <p className="text-sm text-muted-foreground">Zero fraud, zero shortcuts – always ethical</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-soft text-center">
              <span className="text-4xl mb-4 block">🚀</span>
              <h3 className="font-display font-semibold mb-2">Growth</h3>
              <p className="text-sm text-muted-foreground">Be part of a fast-evolving education & tech ecosystem</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-default">
          <h2 className="text-2xl font-display font-bold mb-8">Open Positions</h2>
          <div className="space-y-4 max-w-4xl">
            {[
              { slug: "senior-student-counsellor", title: "Senior Student Counsellor", department: "Counselling", location: "Lagos, Nigeria", type: "Full-time" },
              { slug: "marketing-lead", title: "Marketing Lead", department: "Marketing", location: "Lagos, Nigeria", type: "Full-time" },
              { slug: "content-writer", title: "Content Writer", department: "Content", location: "Remote", type: "Full-time" },
              { slug: "frontend-developer", title: "Frontend Developer", department: "Technology", location: "Remote", type: "Full-time" },
              { slug: "admissions-officer", title: "Admissions Officer", department: "Operations", location: "Abuja, Nigeria", type: "Full-time" }
            ].map((job) => (
              <a 
                key={job.slug} 
                href={`/careers/${job.slug}`} 
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-all"
              >
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-lg font-display font-semibold group-hover:text-secondary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container-default text-center">
          <h2 className="text-2xl font-display font-bold mb-4">Don't See a Match?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We're always looking for talented people. Send us your CV and tell us how you'd like to contribute.
          </p>
          <Button variant="hero" asChild>
            <a href="mailto:careers@numaway.com">Send Your CV <ArrowRight className="w-4 h-4" /></a>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Careers;