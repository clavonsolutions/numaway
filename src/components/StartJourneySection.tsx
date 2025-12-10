import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import studentsImage from "@/assets/journey-students.jpg";
import agentsImage from "@/assets/journey-agents.jpg";
import institutionsImage from "@/assets/journey-institutions.jpg";

const journeyCards = [
  {
    id: "students",
    title: "Students",
    description: "We'll guide you to your dream course — from course selection to campus life.",
    image: studentsImage,
    buttonText: "Sign up",
    link: "/for-students",
  },
  {
    id: "agents",
    title: "Agents",
    description: "Get support to submit quick and compliant applications, and earn your commissions.",
    image: agentsImage,
    buttonText: "Become a partner",
    link: "/for-agents",
  },
  {
    id: "institutions",
    title: "Institutions",
    description: "Increase your reach and gain high-quality applications by partnering with us.",
    image: institutionsImage,
    buttonText: "Become a partner",
    link: "/for-institutions",
  },
];

const StartJourneySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Start your journey with us
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {journeyCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {card.description}
                  </p>
                  <Button
                    variant="default"
                    className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <Link to={card.link}>
                      {card.buttonText}
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartJourneySection;
