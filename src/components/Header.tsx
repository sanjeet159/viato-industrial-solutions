import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-card/70 backdrop-blur-md"
      }`}
    >
      {/* Top bar */}
      <motion.div
        className="bg-industrial-gradient overflow-hidden"
        animate={{ height: scrolled ? 0 : "auto", opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-wide flex items-center justify-between py-2 text-xs text-primary-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Phone className="h-3 w-3" />
              <span>+91 XXXXX XXXXX</span>
            </div>
            <span className="hidden sm:inline opacity-40">|</span>
            <div className="hidden sm:flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              <span>Waluj MIDC, Aurangabad, Maharashtra</span>
            </div>
          </div>
          <Link
            to="/request-quote"
            className="flex items-center gap-1 text-accent hover:gap-2 transition-all font-medium"
          >
            Get a Free Quote <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </motion.div>

      {/* Main nav */}
      <div className="container-wide flex items-center justify-between h-16 md:h-[72px]">
        <Link to="/" className="flex items-center gap-2.5 group">
          <motion.div
            className="h-10 w-10 rounded-xl bg-industrial-gradient flex items-center justify-center relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-display font-bold text-primary-foreground text-xl relative z-10">V</span>
            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
          <div>
            <span className="font-display font-bold text-lg text-foreground leading-none block">
              Viato Industries
            </span>
            <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
              Industrial Solutions
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`nav-link-animated px-4 py-2 text-sm font-medium transition-colors relative ${
                location.pathname === l.path
                  ? "text-accent active"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/request-quote">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold rounded-full px-6 shadow-lg shadow-accent/20">
                Request Quote
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* Mobile toggle */}
        <motion.button
          className="lg:hidden p-2 text-foreground rounded-lg hover:bg-muted"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden border-t border-border bg-card/95 backdrop-blur-xl overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="container-wide py-4 flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={l.path}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium block transition-colors ${
                      location.pathname === l.path
                        ? "text-accent bg-accent/10"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                <Link to="/request-quote" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full mt-3 bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold rounded-full h-11">
                    Request Quote
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
