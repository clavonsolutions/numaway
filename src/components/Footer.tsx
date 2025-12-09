import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import numawayLogo from "@/assets/numaway-logo.png";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const footerLinks = {
    destinations: [
      { label: "🇬🇧 United Kingdom", href: "/countries/united-kingdom" },
      { label: "🇺🇸 United States", href: "/countries/united-states" },
      { label: "🇨🇦 Canada", href: "/countries/canada" },
      { label: "🇦🇺 Australia", href: "/countries/australia" },
      { label: "🇩🇪 Germany", href: "/countries/germany" },
      { label: "🇮🇪 Ireland", href: "/countries/ireland" },
    ],
    services: [
      { label: "Study Abroad Counselling", href: "/services/study-abroad-counselling" },
      { label: "Application Support", href: "/services/application-support" },
      { label: "Visa Preparation", href: "/services/visa-preparation" },
      { label: "Accommodation Support", href: "/services/accommodation-landing" },
      { label: "Scholarship Guidance", href: "/services/scholarships-funding" },
      { label: "Exams Support", href: "/services/exams-support" },
    ],
    company: [
      { label: "About NUMAWAY", href: "/about" },
      { label: "Why NUMAWAY", href: "/about/why-numaway" },
      { label: "Our Team", href: "/about/team" },
      { label: "Careers", href: "/careers" },
      { label: "Resources", href: "/resources" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/faq" },
      { label: "Admin Portal", href: "/admin" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/numaway", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/numaway", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/numaway", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/numaway", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/numaway", label: "YouTube" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full animate-float-slow"
          style={{
            background: 'radial-gradient(circle, hsl(179 75% 41% / 0.08) 0%, transparent 70%)',
            top: '10%',
            right: '-10%',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, hsl(40 68% 55% / 0.06) 0%, transparent 70%)',
            bottom: '20%',
            left: '-5%',
          }}
        />
      </div>

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-1">
        <svg viewBox="0 0 1440 60" className="w-full h-auto fill-background" preserveAspectRatio="none">
          <path d="M0,30 C360,60 720,0 1080,40 C1260,55 1380,45 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12">
          {/* Brand Column */}
          <ScrollReveal animation="fade-up" className="lg:col-span-2">
            <a href="/" className="inline-block mb-6 group">
              <img 
                src={numawayLogo} 
                alt="NUMAWAY Education" 
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
              />
            </a>
            <p className="text-white/70 mb-6 leading-relaxed text-base">
              A Nigeria-born, tech-powered education agency helping students unlock 
              global study opportunities with human experts and intelligent AI guidance.
            </p>
            
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm text-white/80">Powered by AI Genie</span>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@numaway.com" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>hello@numaway.com</span>
              </a>
              <a href="https://wa.me/2348000000000" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>WhatsApp Support</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Destinations */}
          <ScrollReveal animation="fade-up" delay={0.1}>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Study Destinations</h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal animation="fade-up" delay={0.2}>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Company */}
          <ScrollReveal animation="fade-up" delay={0.3}>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Newsletter */}
          <ScrollReveal animation="fade-up" delay={0.4}>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Stay Updated</h4>
            <p className="text-white/70 mb-4 text-sm leading-relaxed">
              Get updates on scholarships, deadlines, and study abroad tips for Nigerian students.
            </p>
            <form className="space-y-3">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/40 to-gold/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="relative w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-secondary/50 focus:bg-white/15 transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3.5 bg-gradient-to-r from-gold to-gold/80 text-gold-foreground font-semibold rounded-xl hover:shadow-gold/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-white/50 mt-3">
              No spam. Honest guidance, transparent options.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} NUMAWAY Education. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/70 hover:bg-secondary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
