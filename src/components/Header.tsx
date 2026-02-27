import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin, ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { productCategories } from "@/data/products";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Products", path: "/products", hasMega: true },
  { label: "Industries", path: "/industries" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTimeout = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  const openMega = () => {
    clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

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
          {navLinks.map((l) =>
            l.hasMega ? (
              <div
                key={l.path}
                className="relative"
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
                ref={megaRef}
              >
                <Link
                  to={l.path}
                  className={`nav-link-animated px-4 py-2 text-sm font-medium transition-colors relative inline-flex items-center gap-1 ${
                    location.pathname.startsWith("/products")
                      ? "text-accent active"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {l.label}
                  <motion.span animate={{ rotate: megaOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </motion.span>
                </Link>
              </div>
            ) : (
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
            )
          )}
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

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            className="hidden lg:block absolute left-0 right-0 top-full z-50"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
          >
            <div className="bg-card/98 backdrop-blur-2xl border-b border-border shadow-2xl shadow-foreground/5">
              <div className="container-wide py-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">Our Products</h3>
                    <p className="text-muted-foreground text-sm">Complete industrial solutions across 4 categories</p>
                  </div>
                  <Link
                    to="/products"
                    className="text-sm font-semibold text-accent hover:gap-3 inline-flex items-center gap-1.5 transition-all"
                  >
                    View All Products <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-4 gap-6">
                  {productCategories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <div key={cat.slug} className="group/cat">
                        <Link
                          to={`/products/${cat.slug}`}
                          className="flex items-center gap-3 mb-4 p-3 rounded-xl hover:bg-accent/5 transition-colors"
                        >
                          <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover/cat:bg-accent/20 transition-colors shrink-0">
                            <Icon className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <span className="font-display font-bold text-sm text-foreground block leading-tight">
                              {cat.title}
                            </span>
                            <span className="text-[11px] text-muted-foreground line-clamp-1">{cat.desc}</span>
                          </div>
                        </Link>
                        <ul className="space-y-0.5 pl-1">
                          {cat.subProducts.map((sub) => (
                            <li key={sub.slug}>
                              <Link
                                to={`/products/${cat.slug}/${sub.slug}`}
                                className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-foreground/70 hover:text-accent hover:bg-accent/5 transition-all group/sub"
                              >
                                <span className="h-1 w-1 rounded-full bg-border group-hover/sub:bg-accent group-hover/sub:scale-150 transition-all" />
                                <span className="flex-1">{sub.name}</span>
                                <ChevronRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-accent" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <nav className="container-wide py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((l, i) =>
                l.hasMega ? (
                  <motion.div
                    key={l.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => setMobileProductsOpen((v) => !v)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        location.pathname.startsWith("/products")
                          ? "text-accent bg-accent/10"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {l.label}
                      <motion.span animate={{ rotate: mobileProductsOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="h-4 w-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {mobileProductsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-3">
                            <Link
                              to="/products"
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 text-sm font-semibold text-accent"
                            >
                              View All Products →
                            </Link>
                            {productCategories.map((cat) => {
                              const Icon = cat.icon;
                              return (
                                <div key={cat.slug}>
                                  <Link
                                    to={`/products/${cat.slug}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-2.5 px-3 py-2 text-sm font-semibold text-foreground"
                                  >
                                    <Icon className="h-4 w-4 text-accent" />
                                    {cat.title}
                                  </Link>
                                  <ul className="pl-9 space-y-0.5">
                                    {cat.subProducts.map((sub) => (
                                      <li key={sub.slug}>
                                        <Link
                                          to={`/products/${cat.slug}/${sub.slug}`}
                                          onClick={() => setMobileOpen(false)}
                                          className="block py-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                                        >
                                          {sub.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
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
                )
              )}
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
