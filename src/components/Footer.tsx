import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/animations";

const Footer = () => {
  return (
    <footer className="bg-industrial-gradient text-primary-foreground relative overflow-hidden grain-overlay">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-industrial-light/10 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-wide section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <AnimateIn>
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <div className="h-14 w-14 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform">
                <img
                  src="/logo.png"
                  alt="Viato Industries Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Viato Industries</span>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed">
              Complete Material Handling & Packaging Solution. Your trusted partner for industrial gas pipeline systems, material handling equipment, and engineering services.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-5 text-accent">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Products", path: "/products" },
                { label: "Industries", path: "/industries" },
                { label: "Contact", path: "/contact" },
                { label: "Request Quote", path: "/request-quote" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="opacity-70 hover:opacity-100 hover:text-accent transition-all flex items-center gap-1 group">
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-5 text-accent">Our Services</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li>Gas Pipeline Systems</li>
              <li>Material Handling Equipment</li>
              <li>Packaging Solutions</li>
              <li>Engineering Services</li>
              <li>Maintenance & AMC</li>
              <li>Safety Inspection</li>
            </ul>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-5 text-accent">Contact Us</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li>
                <a
                  href="https://maps.app.goo.gl/iCD7tSd6Rp9ecY7q6?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:opacity-100 hover:text-accent transition-all"
                >
                  <div className="h-8 w-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>K-217, Waluj MIDC, Aurangabad – 431136, Maharashtra, India</span>
                </a>
              </li>
              <li>
                <a href="tel:+917722090400" className="flex items-center gap-3 hover:opacity-100 hover:text-accent transition-all">
                  <div className="h-8 w-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>+91 77220 90400 / +91 98347 31352</span>
                </a>
              </li>
              <li>
                <a href="mailto:viatoindustries@gmail.com" className="flex items-center gap-3 hover:opacity-100 hover:text-accent transition-all">
                  <div className="h-8 w-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>viatoindustries@gmail.com</span>
                </a>
              </li>
            </ul>
          </AnimateIn>
        </div>

        <div className="border-t border-primary-foreground/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-50">
          <p>© {new Date().getFullYear()} Viato Industries. All rights reserved.</p>
          <p>Complete Material Handling & Packaging Solution</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
