import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-industrial-gradient text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-lg bg-accent flex items-center justify-center">
                <span className="font-display font-bold text-accent-foreground text-lg">V</span>
              </div>
              <span className="font-display font-bold text-lg">Viato Industries</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Complete Material Handling & Packaging Solution. Your trusted partner for industrial gas pipeline systems, material handling equipment, and engineering services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              {[
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Products", path: "/products" },
                { label: "Industries", path: "/industries" },
                { label: "Contact", path: "/contact" },
                { label: "Request Quote", path: "/request-quote" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Gas Pipeline Systems</li>
              <li>Material Handling Equipment</li>
              <li>Packaging Solutions</li>
              <li>Engineering Services</li>
              <li>Maintenance & AMC</li>
              <li>Safety Inspection</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Waluj MIDC, Aurangabad, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@viatoindustries.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-60">
          <p>© {new Date().getFullYear()} Viato Industries. All rights reserved.</p>
          <p>Complete Material Handling & Packaging Solution</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
