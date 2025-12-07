import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const leadership = [
    {
      name: "Dr. Adewale Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Former university professor with 15+ years in international education. Passionate about helping Nigerian students access global opportunities.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Chioma Okonkwo",
      role: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Operations expert with experience at leading EdTech companies. Ensures seamless student experiences from application to enrollment.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Oluwaseun Adebayo",
      role: "Head of Counselling",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Certified education counsellor who has helped 1000+ students successfully study abroad. Expert in UK and Canadian admissions.",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Fatima Ibrahim",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Tech visionary building AI-powered tools for education. Previously led engineering teams at major fintech companies.",
      linkedin: "#",
      twitter: "#",
    },
  ];

  const counsellors = [
    {
      name: "Emeka Nwachukwu",
      role: "Senior Counsellor - UK",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      specialization: "UK Admissions Specialist",
    },
    {
      name: "Aisha Bello",
      role: "Senior Counsellor - USA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      specialization: "US Visa Expert",
    },
    {
      name: "David Obi",
      role: "Counsellor - Canada",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      specialization: "Canadian Immigration",
    },
    {
      name: "Grace Adeola",
      role: "Counsellor - Australia",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      specialization: "Australian Universities",
    },
    {
      name: "Tunde Bakare",
      role: "Counsellor - Europe",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
      specialization: "Germany & Netherlands",
    },
    {
      name: "Ngozi Eze",
      role: "Scholarships Specialist",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      specialization: "Funding & Scholarships",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <Breadcrumbs 
              items={[
                { label: "About", href: "/about" },
                { label: "Our Team" }
              ]} 
              className="mb-8 text-primary-foreground/70"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
                Meet Our Team
              </h1>
              <p className="text-xl text-primary-foreground/70">
                Dedicated professionals committed to helping Nigerian students achieve their global education dreams.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">Leadership Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our leaders bring decades of experience in education, technology, and operations.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 mx-auto rounded-2xl object-cover shadow-card"
                    />
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 bg-card rounded-full flex items-center justify-center shadow-soft hover:bg-secondary hover:text-secondary-foreground transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.twitter}
                        className="w-8 h-8 bg-card rounded-full flex items-center justify-center shadow-soft hover:bg-secondary hover:text-secondary-foreground transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Counsellors */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">Our Counsellors</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Expert counsellors specializing in different regions and visa types.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {counsellors.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card rounded-2xl p-6 shadow-soft flex items-center gap-4"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-display font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                      {member.specialization}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-display font-bold mb-4">Join Our Team</h2>
              <p className="text-muted-foreground mb-8">
                We're always looking for passionate people to help students achieve their dreams. Check out our open positions.
              </p>
              <a
                href="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-secondary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                View Open Positions
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Team;
