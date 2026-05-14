import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { productCategories } from "@/data/products";

const Footer = () => {
  return (
    <footer className="bg-industrial-gradient text-primary-foreground relative overflow-hidden grain-overlay">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-industrial-light/10 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-wide section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <AnimateIn>
            <Link to="/" className="inline-block mb-5 group">
              <img
                src="/logo-white.png"
                alt="Viato Industries"
                className="h-16 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-sm opacity-70 leading-relaxed">
              Complete Industrial Solutions Partner. Your trusted source for gas pipeline systems, industrial chemicals, packaging and engineering services.
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
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-5 text-accent">Our Products</h4>
            <ul className="space-y-3 text-sm">
              {productCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/products/${cat.slug}`}
                    className="opacity-70 hover:opacity-100 hover:text-accent transition-all flex items-center gap-1 group"
                  >
                    {cat.title}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
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
                <a href="tel:+919834731352" className="flex items-center gap-3 hover:opacity-100 hover:text-accent transition-all">
                  <div className="h-8 w-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>+91 98347 31352</span>
                </a>
              </li>
              <li>
                <a href="tel:+917722090400" className="flex items-center gap-3 hover:opacity-100 hover:text-accent transition-all pl-11 text-sm opacity-80">
                  <span>+91 77220 90400</span>
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
          <p>
            Crafted by{" "}
            <a
              href="https://sanjeetfolio.framer.website/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100 hover:text-accent transition-colors"
            >
              Sanjeet
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
