import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { storeCategories } from "@/data/storeProducts";
import { ArrowRight, Search, ShoppingBag, X, Grid3X3, List } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Store = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

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
      {/* Hero */}
      <section className="bg-industrial-gradient grain-overlay relative pt-32 pb-16">
        <div className="hero-mesh absolute inset-0" />
        <div className="container-wide relative z-10">
          <AnimateIn>
            <span className="inline-block text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Offline Store Catalog
            </span>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-[1.1]">
              Industrial Products
              <br />
              <span className="text-accent">&amp; Supplies</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-primary-foreground/50 text-base md:text-lg max-w-lg mb-8">
              Browse {totalProducts}+ products across {storeCategories.length} categories. Available at our physical store.
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
                <Button size="lg" variant="outline" className="bg-primary-foreground text-foreground border-primary-foreground hover:bg-primary-foreground/10 rounded-full font-semibold text-sm transition-none">
                  Request Bulk Quote
                </Button>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Sticky Search & Filters */}
      <section className="bg-background/95 backdrop-blur-md border-b border-border sticky top-[72px] z-30">
        <div className="container-wide py-3">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center flex-1">
              <div className="relative w-full sm:w-64">
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
                      : "bg-card text-muted-foreground border-border hover:border-accent/30"
                  }`}
                >
                  All ({totalProducts})
                </button>
                {storeCategories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveCategory(activeCategory === cat.slug ? null : cat.slug)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border inline-flex items-center gap-1.5 ${
                      activeCategory === cat.slug
                        ? "bg-accent text-accent-foreground border-accent"
                        : "bg-card text-muted-foreground border-border hover:border-accent/30"
                    }`}
                  >
                    <cat.icon className="h-3 w-3" />
                    {cat.name.split("(")[0].trim()}
                  </button>
                ))}
              </div>
            </div>

            {/* View toggle */}
            <div className="hidden sm:flex items-center gap-1 border border-border rounded-lg p-0.5 bg-muted/50">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-md transition-all ${viewMode === "grid" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-md transition-all ${viewMode === "list" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Products */}
      <section className="py-12 bg-background">
        <div className="container-wide">
          {filteredCategories.length === 0 && (
            <div className="text-center py-24">
              <ShoppingBag className="h-14 w-14 text-muted-foreground/20 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg font-medium">No products found for "{search}"</p>
              <button
                onClick={() => { setSearch(""); setActiveCategory(null); }}
                className="text-accent text-sm font-semibold mt-3 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          <div className="space-y-14">
            {filteredCategories.map((cat, catIndex) => (
              <AnimateIn key={cat.slug} delay={catIndex * 0.05}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center shadow-sm"
                    style={{
                      backgroundColor: `${cat.color.replace("hsl(", "hsla(").replace(")", " / 0.12)")}`,
                    }}
                  >
                    <cat.icon className="h-5 w-5" style={{ color: cat.color }} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">
                      {cat.name}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {cat.products.length} products available
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="h-12 w-20 object-cover rounded-lg opacity-60"
                    />
                  </div>
                </div>

                {/* Products */}
                {viewMode === "grid" ? (
                  <StaggerContainer
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
                    staggerDelay={0.015}
                  >
                    <AnimatePresence>
                      {cat.products.map((product, i) => (
                        <StaggerItem key={product.name}>
                          <motion.div
                            className="group relative bg-card rounded-xl border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
                            whileHover={{ y: -3, scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            {/* Colored top bar */}
                            <div
                              className="h-1 w-full"
                              style={{ backgroundColor: cat.color }}
                            />
                            {/* Product image */}
                            <div className="relative aspect-square overflow-hidden bg-muted/30">
                              <img
                                src={product.image}
                                alt={product.name}
                                loading="lazy"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute top-2 right-2 h-7 w-7 rounded-full backdrop-blur-md flex items-center justify-center shadow-sm"
                                style={{ backgroundColor: `${cat.color.replace("hsl(", "hsla(").replace(")", " / 0.92)")}` }}
                              >
                                <cat.icon className="h-3.5 w-3.5 text-white" />
                              </div>
                            </div>
                            <div className="p-3">
                              <p className="text-xs font-semibold text-foreground text-center leading-snug line-clamp-2 min-h-[2rem]">
                                {product.name}
                              </p>
                              <div className="mt-2 pt-2 border-t border-border/50">
                                <span className="block text-[10px] font-medium text-accent text-center uppercase tracking-wider">
                                  In Stock
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </AnimatePresence>
                  </StaggerContainer>
                ) : (
                  /* List view */
                  <StaggerContainer className="space-y-1.5" staggerDelay={0.01}>
                    <AnimatePresence>
                      {cat.products.map((product) => (
                        <StaggerItem key={product.name}>
                          <motion.div
                            className="group flex items-center gap-3 bg-card rounded-lg border border-border hover:border-accent/40 hover:shadow-sm transition-all duration-200 pl-2 pr-4 py-2"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.15 }}
                          >
                            <div className="h-12 w-12 rounded-lg flex-shrink-0 overflow-hidden bg-muted/30 border border-border/40">
                              <img
                                src={product.image}
                                alt={product.name}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                            </div>
                            <p className="text-sm font-medium text-foreground flex-1">
                              {product.name}
                            </p>
                            <span className="text-[10px] font-semibold text-accent uppercase tracking-wider px-2 py-1 rounded-full bg-accent/10">
                              In Stock
                            </span>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </AnimatePresence>
                  </StaggerContainer>
                )}
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card border-t border-border">
        <div className="container-narrow py-16 text-center">
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
