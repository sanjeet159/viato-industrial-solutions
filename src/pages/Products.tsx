import { useState } from "react";
import Layout from "@/components/Layout";
import { AnimateIn, MagneticButton } from "@/components/animations";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { productCategories } from "@/data/products";
import IndustrialCTA from "@/components/IndustrialCTA";

const Products = () => {
  const [activeSlug, setActiveSlug] = useState(productCategories[0].slug);
  const navigate = useNavigate();
  const active = productCategories.find((c) => c.slug === activeSlug) ?? productCategories[0];
  const ActiveIcon = active.icon;

  return (
    <Layout>

      {/* Hero — compact */}
      <section className="bg-industrial-gradient py-10 md:py-14 relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 hero-mesh" />
        <div className="container-wide relative z-10">
          <motion.div
            className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold mb-3 border border-accent/20">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
                Our Products
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
                Industrial Products & <span className="text-accent">Equipment</span>
              </h1>
            </div>
            <p className="text-primary-foreground/60 text-sm md:text-base leading-relaxed md:max-w-sm">
              Complete solutions for Gas Pipeline, Packaging & Material Handling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabbed Catalog */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-wide relative z-10">

          {/* Header — full width */}
          <AnimateIn>
            <div className="w-full mb-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-2">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-3 border border-accent/20">
                    Product Categories
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                    Browse Our <span className="text-accent">Product Range</span>
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm md:text-base md:max-w-sm md:text-right leading-relaxed">
                  Pick a category to explore products. Click any card to request a quote.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Trust strip marquee */}
          <AnimateIn delay={0.1}>
            <div className="relative overflow-hidden rounded-full border border-border bg-card/60 backdrop-blur-sm mb-10">
              <div className="flex gap-10 py-3 px-6 animate-marquee whitespace-nowrap text-xs md:text-sm text-muted-foreground font-medium">
                {[
                  "ISO Certified Quality",
                  "Pan-India Delivery",
                  "Competitive Bulk Pricing",
                  "Dedicated Account Manager",
                  "On-Site Installation Support",
                  "AMC & Maintenance",
                  "ISO Certified Quality",
                  "Pan-India Delivery",
                  "Competitive Bulk Pricing",
                  "Dedicated Account Manager",
                ].map((t, i) => (
                  <span key={i} className="flex items-center gap-2 shrink-0">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Tabs + Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-10">

            {/* Left vertical tabs */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
              {productCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = cat.slug === activeSlug;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveSlug(cat.slug)}
                    className={`group text-left rounded-2xl p-4 lg:p-5 border transition-all shrink-0 lg:shrink min-w-[220px] lg:min-w-0 ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20"
                        : "bg-card border-border hover:border-accent/50 hover:bg-accent/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? "bg-accent text-accent-foreground"
                            : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className={`font-display font-bold text-sm leading-tight ${isActive ? "text-primary-foreground" : "text-foreground"}`}>
                          {cat.title}
                        </p>
                        <p className={`text-xs mt-0.5 truncate ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                          {cat.subProducts.length} products
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right content */}
            <div className="min-w-0">

              {/* Active category banner */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-2xl bg-primary text-primary-foreground p-6 md:p-7 mb-8 relative overflow-hidden"
                >
                  <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-6">
                    <div className="h-14 w-14 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center shrink-0 border border-primary-foreground/15">
                      <ActiveIcon className="h-7 w-7 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-2xl font-bold">{active.title}</h3>
                      <p className="text-primary-foreground/70 text-sm md:text-base mt-1">{active.desc}</p>
                    </div>
                    <Link
                      to={`/products/${active.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors shrink-0"
                    >
                      <TrendingUp className="h-4 w-4" />
                      View detailed insights
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Product grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.slug + "-grid"}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
                >
                  {active.subProducts.map((sub, i) => {
                    const SubIcon = sub.icon;
                    return (
                      <motion.button
                        key={sub.slug}
                        type="button"
                        onClick={() =>
                          navigate(`/request-quote?product=${encodeURIComponent(sub.name)}&category=${active.slug}`)
                        }
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                        whileHover={{ y: -4 }}
                        className="text-left rounded-2xl bg-card border border-border p-5 hover:border-accent/60 hover:shadow-xl hover:shadow-accent/5 transition-all group relative overflow-hidden"
                      >
                        <div className="absolute inset-x-0 top-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground text-accent transition-colors">
                          <SubIcon className="h-5 w-5" />
                        </div>
                        <h4 className="font-display font-bold text-foreground text-base leading-snug">
                          {sub.name}
                        </h4>
                        <p className="text-muted-foreground text-xs mt-1.5 line-clamp-2">
                          {sub.description}
                        </p>
                        <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                          Request Quote <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

          {/* View All CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MagneticButton className="inline-block">
              <Link to="/request-quote">
                <Button
                  size="lg"
                  className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold px-10 h-14 rounded-full shadow-xl shadow-accent/25"
                >
                  Request Quote for Any Product <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </MagneticButton>
          </motion.div>

        </div>
      </section>

      {/* Bottom CTA */}
      <IndustrialCTA
        title="Can't Find What You Need?"
        description="We source and supply a wide range of industrial products. Contact us with your specific requirements and our team will help you find it."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="Request Quote"
        secondaryTo="/request-quote"
      />

    </Layout>
  );
};

export default Products;
