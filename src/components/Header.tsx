import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Products", path: "/products" },
  { label: "Industries", path: "/industries" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-industrial-gradient">
        <div className="container-wide flex items-center justify-between py-2 text-sm text-primary-foreground">
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" />
            <span>+91 XXXXX XXXXX</span>
          </div>
          <span className="hidden sm:inline">Waluj MIDC, Aurangabad, Maharashtra, India</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-wide flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-industrial-gradient flex items-center justify-center">
            <span className="font-display font-bold text-primary-foreground text-lg">V</span>
          </div>
          <div>
            <span className="font-display font-bold text-lg text-foreground leading-none block">Viato Industries</span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Industrial Solutions</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === l.path
                  ? "text-accent bg-accent/10"
                  : "text-foreground hover:text-accent hover:bg-accent/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/request-quote">
            <Button className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold">
              Request Quote
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container-wide py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium ${
                  location.pathname === l.path
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/request-quote" onClick={() => setMobileOpen(false)}>
              <Button className="w-full mt-2 bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold">
                Request Quote
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
