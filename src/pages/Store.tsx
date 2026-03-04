import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { storeCategories } from "@/data/storeProducts";
import { ArrowRight, Search, ShoppingBag, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Store = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const toggleExpand = (slug: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  const filteredCategories = useMemo(
    () =>
      storeCategories
        .map((cat) => ({
          ...cat,
          products: cat.products.filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
          ),
        }))
        .filter(
          (cat) =>
            (!activeCategory || cat.slug === activeCategory) &&
            (search === "" || cat.products.length > 0)
        ),
    [search, activeCategory]
  );

  const totalProducts = storeCategories.reduce((sum, c) => sum + c.products.length, 0);

  return (
    <Layout>
      {/* Hero — compact */}
      <section className="bg-primary pt-32 pb-14">
        <div className="container-wide">
          <AnimateIn>
            <span className="inline-block text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Offline Store Catalog
            </span>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-3 leading-tight">
              Industrial Products & Supplies
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-primary-foreground/60 text-base md:text-lg max-w-xl mb-6">
              Browse {totalProducts}+ products available at our store. Welding, PPE, tools & more.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold text-sm">
                  Visit Our Store <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/request-quote">
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-full font-semibold text-sm">
                  Request Bulk Quote
                </Button>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Search & Filter — sticky */}
      <section className="bg-background border-b border-border sticky top-[72px] z-30">
        <div className="container-wide py-3">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-9 py-2 rounded-full border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                  !activeCategory
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-card text-foreground/60 border-border hover:border-accent/30"
                }`}
              >
                All
              </button>
              {storeCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(activeCategory === cat.slug ? null : cat.slug)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border inline-flex items-center gap-1.5 ${
                    activeCategory === cat.slug
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-card text-foreground/60 border-border hover:border-accent/30"
                  }`}
                >
                  <cat.icon className="h-3 w-3" />
                  {cat.name.split("(")[0].trim()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Products */}
      <section className="py-10 bg-background">
        <div className="container-wide">
          {filteredCategories.length === 0 && (
            <div className="text-center py-20">
              <ShoppingBag className="h-12 w-12 text-muted-foreground/20 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No products found for "{search}"</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory(null); }}
                className="text-accent text-sm font-semibold mt-2 hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

          <div className="space-y-10">
            {filteredCategories.map((cat) => {
              const isExpanded = expandedCategories.has(cat.slug) || search !== "";
              const INITIAL_SHOW = 12;
              const visibleProducts = isExpanded ? cat.products : cat.products.slice(0, INITIAL_SHOW);
              const hasMore = cat.products.length > INITIAL_SHOW;

              return (
                <AnimateIn key={cat.slug}>
                  <div className="rounded-2xl border border-border bg-card overflow-hidden">
                    {/* Category header with image */}
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="h-11 w-11 rounded-xl flex items-center justify-center border border-primary-foreground/20"
                            style={{ backgroundColor: `${cat.color} / 0.25)`.replace(")", " / 0.25)").replace("hsl(", "hsla(") }}
                          >
                            <cat.icon className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <div>
                            <h2 className="font-display text-xl md:text-2xl font-bold text-primary-foreground">
                              {cat.name}
                            </h2>
                            <p className="text-xs text-primary-foreground/60 mt-0.5">
                              {cat.products.length} products available
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product grid */}
                    <div className="p-4 md:p-5">
                      <StaggerContainer
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5"
                        staggerDelay={0.02}
                      >
                        <AnimatePresence>
                          {visibleProducts.map((product) => (
                            <StaggerItem key={product.name}>
                              <motion.div
                                layout
                                className="group relative p-3.5 rounded-xl border border-border/60 bg-background hover:border-accent/40 hover:shadow-md transition-all duration-200 cursor-default"
                                whileHover={{ y: -2 }}
                                transition={{ duration: 0.15 }}
                              >
                                <div className="flex items-start gap-2.5">
                                  <div className="h-8 w-8 rounded-lg flex-shrink-0 flex items-center justify-center transition-colors"
                                    style={{
                                      backgroundColor: `${cat.color.replace(")", " / 0.08)").replace("hsl(", "hsla(")}`,
                                    }}
                                  >
                                    <cat.icon
                                      className="h-3.5 w-3.5 transition-colors"
                                      style={{ color: cat.color }}
                                    />
                                  </div>
                                  <p className="text-xs font-medium text-foreground leading-snug pt-1">
                                    {product.name}
                                  </p>
                                </div>
                              </motion.div>
                            </StaggerItem>
                          ))}
                        </AnimatePresence>
                      </StaggerContainer>

                      {/* Show more / less */}
                      {hasMore && search === "" && (
                        <div className="flex justify-center mt-4">
                          <button
                            onClick={() => toggleExpand(cat.slug)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                          >
                            {isExpanded ? (
                              <>Show less <ChevronUp className="h-3.5 w-3.5" /></>
                            ) : (
                              <>Show all {cat.products.length} products <ChevronDown className="h-3.5 w-3.5" /></>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card border-t border-border">
        <div className="container-narrow py-14 text-center">
          <SectionHeading
            badge="Need Something Specific?"
            title="Can't Find What You're Looking For?"
            description="Contact us for custom requirements, bulk orders, or products not listed here."
          />
          <AnimateIn delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold text-sm">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/request-quote">
                <Button size="lg" variant="outline" className="rounded-full font-semibold text-sm">
                  Request Quote
                </Button>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </Layout>
  );
};

export default Store;
