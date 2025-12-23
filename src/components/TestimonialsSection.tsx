import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

// Import custom testimonial images
import testimonialChioma from "@/assets/testimonial-chioma.jpg";
import testimonialEmeka from "@/assets/testimonial-emeka.jpg";
import testimonialAisha from "@/assets/testimonial-aisha.jpg";

const testimonials = [
  {
    name: "Chioma Okonkwo",
    university: "University of Manchester",
    country: "UK",
    image: testimonialChioma,
    quote: "NUMAWAY made my dream of studying in the UK a reality. Their guidance through the visa process was invaluable. I'm now pursuing my Master's in Data Science!",
    rating: 5,
  },
  {
    name: "Emeka Adeyemi",
    university: "University of Toronto",
    country: "Canada",
    image: testimonialEmeka,
    quote: "The team at NUMAWAY went above and beyond. From university selection to scholarship applications, they were with me every step of the way.",
    rating: 5,
  },
  {
    name: "Aisha Mohammed",
    university: "Technical University of Munich",
    country: "Germany",
    image: testimonialAisha,
    quote: "I was overwhelmed by the application process until I found NUMAWAY. Their AI tool and counsellors helped me secure admission to my dream university in Germany!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Students Love NUMAWAY
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of Nigerian students who have achieved their global education
            dreams with our support.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    {/* Glassmorphism card */}
                    <div className="relative h-full bg-card/70 dark:bg-card/50 backdrop-blur-xl rounded-2xl p-8 shadow-card border border-border/50 hover:border-secondary/30 transition-all duration-500 hover:shadow-glow group">
                      {/* Gradient border effect on hover */}
                      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-secondary/20 via-transparent to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                      
                      {/* Quote icon with glow */}
                      <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <Quote className="w-5 h-5 text-secondary" />
                      </div>

                      {/* Rating with animation */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                          >
                            <Star className="w-5 h-5 fill-gold text-gold" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-foreground/80 leading-relaxed mb-8 text-base">
                        "{testimonial.quote}"
                      </p>

                      {/* Author with glass effect */}
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-gold rounded-full opacity-50 blur-sm group-hover:opacity-75 transition-opacity" />
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="relative w-14 h-14 rounded-full object-cover border-2 border-background"
                          />
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.university}, {testimonial.country}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative inset-auto translate-x-0 translate-y-0 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300" />
              <CarouselNext className="relative inset-auto translate-x-0 translate-y-0 bg-card/80 backdrop-blur-sm border-border/50 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
