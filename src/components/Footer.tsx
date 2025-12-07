import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube, 
  MapPin, 
  Mail, 
  Phone 
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    destinations: [
      { label: "United Kingdom", href: "/countries/uk" },
      { label: "United States", href: "/countries/usa" },
      { label: "Canada", href: "/countries/canada" },
      { label: "Australia", href: "/countries/australia" },
      { label: "Germany", href: "/countries/germany" },
      { label: "Ireland", href: "/countries/ireland" },
    ],
    services: [
      { label: "University Admissions", href: "/services/admissions" },
      { label: "Visa Assistance", href: "/services/visa" },
      { label: "Accommodation", href: "/accommodation" },
      { label: "Scholarships", href: "/services/scholarships" },
      { label: "Test Preparation", href: "/services/test-prep" },
      { label: "Career Counseling", href: "/services/career" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about/team" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/resources" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/faq" },
      { label: "Admin Portal", href: "/admin" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
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
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-gold rounded-xl flex items-center justify-center">
                <span className="font-display font-bold text-primary text-lg">N</span>
              </div>
              <span className="font-display font-bold text-xl">NUMAWAY</span>
            </a>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Nigeria's leading study abroad consultancy. We help students discover
              and achieve their global education dreams with transparency, expertise,
              and AI-powered guidance.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@numaway.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors">
                <Mail className="w-5 h-5" />
                hello@numaway.com
              </a>
              <a href="tel:+2348000000000" className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors">
                <Phone className="w-5 h-5" />
                +234 800 000 0000
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Education Street, Victoria Island, Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Destinations</h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Stay Updated</h4>
            <p className="text-primary-foreground/70 mb-4 text-sm">
              Get the latest updates on scholarships, university deadlines, and study abroad tips.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-secondary transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} NUMAWAY Education Technology. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
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
