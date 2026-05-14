import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight, Package, Phone, FileText, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { productCategories } from "@/data/products";
import { storeCategories } from "@/data/storeProducts";

const navItems: { label: string; path: string; hasMega?: "products" | "store" }[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products", hasMega: "products" },
  { label: "Store", path: "/store", hasMega: "store" },
  { label: "Services", path: "/services" },
  { label: "Industries Served", path: "/industries" },
  { label: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState<string | false>(false);
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileStoreOpen, setMobileStoreOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const [mobileExpandedStoreCat, setMobileExpandedStoreCat] = useState<string | null>(null);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
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
    setMobileStoreOpen(false);
    setMobileExpandedCat(null);
    setMobileExpandedStoreCat(null);
    setActiveCat(null);
  }, [location.pathname]);

  const openMega = useCallback((type: string) => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(type);
    setActiveCat(null);
  }, []);

  const closeMega = useCallback(() => {
    megaTimeout.current = setTimeout(() => {
      setMegaOpen(false);
      setActiveCat(null);
    }, 200);
  }, []);

  const isActive = (path: string) =>
    location.pathname === path || (path !== "/" && location.pathname.startsWith(path));

  const activeCategory = productCategories.find((c) => c.slug === activeCat);
  const activeStoreCategory = storeCategories.find((c) => c.slug === activeCat);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-card backdrop-blur-md"
      }`}
    >
      {/* Top bar */}
      <motion.div
        className="bg-primary overflow-hidden"
        animate={{ height: scrolled ? 0 : "auto", opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between py-2 text-xs text-primary-foreground">
          <div className="flex items-center gap-4">
            <a href="tel:+919834731352" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="h-3 w-3" />
              <span>+91 98347 31352</span>
            </a>
            <span className="hidden sm:inline opacity-40">|</span>
            <span className="hidden sm:inline">Waluj MIDC, Aurangabad, Maharashtra</span>
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
      <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
        <img
        src="/logo.png"
        alt="Viato Industries Logo"
        className="h-14 w-auto object-contain"
        />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.path}
              className="relative"
              onMouseEnter={item.hasMega ? () => openMega(item.hasMega as string) : undefined}
              onMouseLeave={item.hasMega ? closeMega : undefined}
            >
              <Link
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-colors inline-flex items-center gap-1 rounded-lg ${
                  isActive(item.path)
                    ? "text-accent"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
                {item.hasMega && (
                  <motion.span animate={{ rotate: megaOpen === item.hasMega ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </motion.span>
                )}
              </Link>
            </div>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link to="/request-quote" className="hidden lg:block">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-6">
              Request Quote
            </Button>
          </Link>
          <button
            className="lg:hidden p-2 text-foreground rounded-lg hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* ========== Products Mega Menu ========== */}
      <AnimatePresence>
        {megaOpen === "products" && (
          <motion.div
            className="hidden lg:block absolute left-0 right-0 top-full z-50"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            onMouseEnter={() => openMega("products")}
            onMouseLeave={closeMega}
          >
            <div className="bg-card border-b border-border shadow-2xl shadow-foreground/5">
              <div className="container mx-auto max-w-7xl px-4 py-0">
                <div className="grid grid-cols-[280px_1fr] min-h-[420px]">
                  {/* Left Panel — Categories */}
                  <div className="border-r border-border py-6 pr-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-4 px-3">
                      Product Categories
                    </p>
                    <div className="space-y-1">
                      {productCategories.map((cat) => {
                        const Icon = cat.icon;
                        const isHovered = activeCat === cat.slug;
                        return (
                          <Link
                            key={cat.slug}
                            to={`/products/${cat.slug}`}
                            className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all group/cat ${
                              isHovered
                                ? "bg-accent/10 text-accent"
                                : "text-foreground/80 hover:bg-muted hover:text-foreground"
                            }`}
                            onMouseEnter={() => setActiveCat(cat.slug)}
                            onClick={() => setMegaOpen(false)}
                          >
                            <div
                              className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                isHovered ? "bg-accent/20" : "bg-muted"
                              }`}
                            >
                              <Icon className={`h-4.5 w-4.5 transition-colors ${isHovered ? "text-accent" : "text-muted-foreground"}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="block leading-tight">{cat.title}</span>
                              <span className="text-[11px] text-muted-foreground font-normal">
                                {cat.subProducts.length} products
                              </span>
                            </div>
                            <ChevronRight className={`h-4 w-4 shrink-0 transition-all ${isHovered ? "text-accent translate-x-0.5" : "text-border"}`} />
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Panel — Sub Products */}
                  <div className="py-6 pl-6 flex flex-col">
                    <div className="flex-1">
                      {!activeCat && (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                          <div className="h-16 w-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
                            <Package className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <h4 className="font-bold text-foreground text-lg mb-1">Explore Our Products</h4>
                          <p className="text-muted-foreground text-sm max-w-xs">
                            Hover over a category to discover products and solutions.
                          </p>
                        </div>
                      )}

                      {activeCategory && (
                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                                <activeCategory.icon className="h-5 w-5 text-accent" />
                              </div>
                              <div>
                                <h3 className="font-bold text-foreground text-base">{activeCategory.title}</h3>
                                <p className="text-muted-foreground text-xs">{activeCategory.description}</p>
                              </div>
                            </div>
                            <Link
                              to={`/products/${activeCategory.slug}`}
                              className="text-xs font-semibold text-accent hover:gap-2 inline-flex items-center gap-1 transition-all"
                              onClick={() => setMegaOpen(false)}
                            >
                              View All <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {activeCategory.subProducts.map((sub, i) => {
                              const SubIcon = sub.icon;
                              return (
                                <Link
                                  key={sub.slug}
                                  to={`/products/${activeCategory.slug}/${sub.slug}`}
                                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent/5 transition-all group/sub animate-fade-in"
                                  onClick={() => setMegaOpen(false)}
                                  style={{ animationDelay: `${i * 40}ms` }}
                                >
                                  <div className="h-9 w-9 rounded-lg bg-muted group-hover/sub:bg-accent/10 flex items-center justify-center shrink-0 transition-colors">
                                    <SubIcon className="h-4 w-4 text-muted-foreground group-hover/sub:text-accent transition-colors" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <span className="text-sm font-medium text-foreground block leading-tight group-hover/sub:text-accent transition-colors">
                                      {sub.name}
                                    </span>
                                    <span className="text-[11px] text-muted-foreground line-clamp-1">
                                      {sub.description}
                                    </span>
                                  </div>
                                  <ChevronRight className="h-3.5 w-3.5 text-border group-hover/sub:text-accent opacity-0 group-hover/sub:opacity-100 transition-all" />
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-border mt-4 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Link
                          to="/contact"
                          className="text-xs font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                          onClick={() => setMegaOpen(false)}
                        >
                          <Phone className="h-3.5 w-3.5" /> Talk to Experts
                        </Link>
                        <Link
                          to="/products"
                          className="text-xs font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                          onClick={() => setMegaOpen(false)}
                        >
                          <FileText className="h-3.5 w-3.5" /> Download Catalog
                        </Link>
                      </div>
                      <Link to="/request-quote" onClick={() => setMegaOpen(false)}>
                        <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-xs px-4">
                          Get a Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== Store Mega Menu ========== */}
      <AnimatePresence>
        {megaOpen === "store" && (
          <motion.div
            className="hidden lg:block absolute left-0 right-0 top-full z-50"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            onMouseEnter={() => openMega("store")}
            onMouseLeave={closeMega}
          >
            <div className="bg-card border-b border-border shadow-2xl shadow-foreground/5">
              <div className="container mx-auto max-w-7xl px-4 py-0">
                <div className="grid grid-cols-[280px_1fr] min-h-[420px]">
                  {/* Left Panel — Store Categories */}
                  <div className="border-r border-border py-6 pr-4">
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-4 px-3">
                      Store Categories
                    </p>
                    <div className="space-y-1">
                      {storeCategories.map((cat) => {
                        const Icon = cat.icon;
                        const isHovered = activeCat === cat.slug;
                        return (
                          <button
                            key={cat.slug}
                            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all group/cat text-left ${
                              isHovered
                                ? "bg-accent/10 text-accent"
                                : "text-foreground/80 hover:bg-muted hover:text-foreground"
                            }`}
                            onMouseEnter={() => setActiveCat(cat.slug)}
                          >
                            <div
                              className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 transition-colors`}
                              style={{
                                backgroundColor: isHovered
                                  ? `${cat.color.replace("hsl(", "hsla(").replace(")", " / 0.15)")}`
                                  : undefined,
                              }}
                            >
                              <Icon
                                className="h-4 w-4 transition-colors"
                                style={{ color: isHovered ? cat.color : undefined }}
                              />
                              {!isHovered && <span className="sr-only" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="block leading-tight">{cat.name}</span>
                              <span className="text-[11px] text-muted-foreground font-normal">
                                {cat.products.length} products
                              </span>
                            </div>
                            <ChevronRight className={`h-4 w-4 shrink-0 transition-all ${isHovered ? "text-accent translate-x-0.5" : "text-border"}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Panel — Store Products */}
                  <div className="py-6 pl-6 flex flex-col">
                    <div className="flex-1 overflow-y-auto max-h-[380px]">
                      {!activeCat && (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                          <div className="h-16 w-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
                            <ShoppingBag className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <h4 className="font-bold text-foreground text-lg mb-1">Browse Store Products</h4>
                          <p className="text-muted-foreground text-sm max-w-xs">
                            Hover over a category to see all available products in our offline store.
                          </p>
                        </div>
                      )}

                      {activeStoreCategory && (
                        <div>
                          {/* Category header */}
                          <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-3">
                              <div
                                className="h-10 w-10 rounded-xl flex items-center justify-center"
                                style={{
                                  backgroundColor: `${activeStoreCategory.color.replace("hsl(", "hsla(").replace(")", " / 0.12)")}`,
                                }}
                              >
                                <activeStoreCategory.icon className="h-5 w-5" style={{ color: activeStoreCategory.color }} />
                              </div>
                              <div>
                                <h3 className="font-bold text-foreground text-base">{activeStoreCategory.name}</h3>
                                <p className="text-muted-foreground text-xs">{activeStoreCategory.products.length} products available</p>
                              </div>
                            </div>
                            <Link
                              to="/store"
                              className="text-xs font-semibold text-accent hover:gap-2 inline-flex items-center gap-1 transition-all"
                              onClick={() => setMegaOpen(false)}
                            >
                              View All <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>

                          {/* Products grid */}
                          <div className="grid grid-cols-3 gap-1.5">
                            {activeStoreCategory.products.map((product, i) => (
                              <div
                                key={product.name}
                                className="flex items-center gap-2.5 p-2.5 rounded-lg hover:bg-accent/5 transition-all group/item animate-fade-in"
                                style={{ animationDelay: `${i * 20}ms` }}
                              >
                                <div
                                  className="h-7 w-7 rounded-md flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform"
                                  style={{
                                    backgroundColor: `${activeStoreCategory.color.replace("hsl(", "hsla(").replace(")", " / 0.08)")}`,
                                  }}
                                >
                                  <activeStoreCategory.icon
                                    className="h-3 w-3"
                                    style={{ color: activeStoreCategory.color }}
                                  />
                                </div>
                                <span className="text-xs font-medium text-foreground leading-snug line-clamp-1 group-hover/item:text-accent transition-colors">
                                  {product.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-border mt-4 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Link
                          to="/contact"
                          className="text-xs font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                          onClick={() => setMegaOpen(false)}
                        >
                          <Phone className="h-3.5 w-3.5" /> Visit Store
                        </Link>
                        <Link
                          to="/store"
                          className="text-xs font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                          onClick={() => setMegaOpen(false)}
                        >
                          <ShoppingBag className="h-3.5 w-3.5" /> Full Catalog
                        </Link>
                      </div>
                      <Link to="/request-quote" onClick={() => setMegaOpen(false)}>
                        <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-xs px-4">
                          Request Bulk Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== Mobile Menu ========== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden border-t border-border bg-card/95 backdrop-blur-xl overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="container mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) =>
                item.hasMega === "products" ? (
                  <div key={item.path}>
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive(item.path) ? "text-accent bg-accent/10" : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
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
                          <div className="pl-2 py-2 space-y-1">
                            {productCategories.map((cat) => {
                              const Icon = cat.icon;
                              return (
                                <div key={cat.slug}>
                                  <button
                                    onClick={() => setMobileExpandedCat(mobileExpandedCat === cat.slug ? null : cat.slug)}
                                    className="w-full flex items-center gap-2 justify-between px-3 py-2 text-sm font-semibold text-foreground/80 hover:bg-muted rounded-lg"
                                  >
                                    <span className="flex items-center gap-2">
                                      <Icon className="h-4 w-4 text-accent" />
                                      {cat.title}
                                    </span>
                                    <motion.span animate={{ rotate: mobileExpandedCat === cat.slug ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                      <ChevronDown className="h-3.5 w-3.5" />
                                    </motion.span>
                                  </button>
                                  <AnimatePresence>
                                    {mobileExpandedCat === cat.slug && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                      >
                                        <div className="pl-8 py-1 space-y-0.5">
                                          {cat.subProducts.map((sub) => {
                                            const SubIcon = sub.icon;
                                            return (
                                              <Link
                                                key={sub.slug}
                                                to={`/products/${cat.slug}/${sub.slug}`}
                                                onClick={() => setMobileOpen(false)}
                                                className="flex items-center gap-2 py-2 px-2 text-sm text-muted-foreground hover:text-accent rounded-lg hover:bg-accent/5 transition-colors"
                                              >
                                                <SubIcon className="h-3.5 w-3.5" />
                                                {sub.name}
                                              </Link>
                                            );
                                          })}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.hasMega === "store" ? (
                  <div key={item.path}>
                    <button
                      onClick={() => setMobileStoreOpen(!mobileStoreOpen)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive(item.path) ? "text-accent bg-accent/10" : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                      <motion.span animate={{ rotate: mobileStoreOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="h-4 w-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {mobileStoreOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-2 py-2 space-y-1">
                            {storeCategories.map((cat) => {
                              const Icon = cat.icon;
                              return (
                                <div key={cat.slug}>
                                  <button
                                    onClick={() => setMobileExpandedStoreCat(mobileExpandedStoreCat === cat.slug ? null : cat.slug)}
                                    className="w-full flex items-center gap-2 justify-between px-3 py-2 text-sm font-semibold text-foreground/80 hover:bg-muted rounded-lg"
                                  >
                                    <span className="flex items-center gap-2">
                                      <Icon className="h-4 w-4 text-accent" />
                                      {cat.name}
                                    </span>
                                    <motion.span animate={{ rotate: mobileExpandedStoreCat === cat.slug ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                      <ChevronDown className="h-3.5 w-3.5" />
                                    </motion.span>
                                  </button>
                                  <AnimatePresence>
                                    {mobileExpandedStoreCat === cat.slug && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                      >
                                        <div className="pl-8 py-1 space-y-0.5">
                                          {cat.products.map((product) => (
                                            <Link
                                              key={product.name}
                                              to="/store"
                                              onClick={() => setMobileOpen(false)}
                                              className="flex items-center gap-2 py-2 px-2 text-sm text-muted-foreground hover:text-accent rounded-lg hover:bg-accent/5 transition-colors"
                                            >
                                              <Icon className="h-3.5 w-3.5" />
                                              {product.name}
                                            </Link>
                                          ))}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium block transition-colors ${
                      isActive(item.path) ? "text-accent bg-accent/10" : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link to="/request-quote" onClick={() => setMobileOpen(false)}>
                <Button className="w-full mt-3 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full h-11">
                  Request Quote
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
