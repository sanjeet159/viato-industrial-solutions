import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { storeCategories } from "@/data/storeProducts";
import { ArrowRight, Search, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const Store = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = storeCategories
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
    );

  const totalProducts = storeCategories.reduce((sum, c) => sum + c.products.length, 0);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary pt-32 pb-16">
        <div className="container-wide">
          <AnimateIn>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
              Offline Store Catalog
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Industrial Products & Supplies
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-primary-foreground/60 text-lg max-w-2xl mb-8">
              Browse our complete range of {totalProducts}+ industrial products available at our offline store. From welding supplies to hand tools — everything you need under one roof.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold">
                  Visit Our Store <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/request-quote">
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-full font-semibold">
                  Request Bulk Quote
                </Button>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-background border-b border-border sticky top-[72px] z-30">
        <div className="container-wide py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/50 transition-all"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                  !activeCategory
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-card text-foreground/70 border-border hover:border-accent/30"
                }`}
              >
                All ({totalProducts})
              </button>
              {storeCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(activeCategory === cat.slug ? null : cat.slug)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                    activeCategory === cat.slug
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-card text-foreground/70 border-border hover:border-accent/30"
                  }`}
                >
                  {cat.name} ({cat.products.length})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {filteredCategories.length === 0 && (
            <div className="text-center py-20">
              <ShoppingBag className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No products found matching "{search}"</p>
              <button onClick={() => { setSearch(""); setActiveCategory(null); }} className="text-accent text-sm font-semibold mt-2 hover:underline">
                Clear filters
              </button>
            </div>
          )}

          <div className="space-y-16">
            {filteredCategories.map((cat) => (
              <div key={cat.slug}>
                <AnimateIn>
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img src={cat.image} alt={cat.name} className="w-full h-48 md:h-56 object-cover" />
                    <div className="absolute inset-0 bg-foreground/50" />
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-xl bg-primary-foreground/15 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
                          <cat.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h2 className="font-display text-2xl font-bold text-primary-foreground">{cat.name}</h2>
                          <p className="text-sm text-primary-foreground/70">{cat.products.length} products available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateIn>

                <StaggerContainer
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
                  staggerDelay={0.03}
                >
                  {cat.products.map((product) => (
                    <StaggerItem key={product.name}>
                      <motion.div
                        className="p-4 rounded-xl border border-border bg-card hover:border-accent/30 hover:shadow-sm transition-all group cursor-default"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center mb-3 group-hover:bg-accent/10 transition-colors">
                          <cat.icon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                        </div>
                        <p className="text-sm font-medium text-foreground leading-snug">{product.name}</p>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
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
            description="Contact us for custom requirements, bulk orders, or products not listed here. We source a wide range of industrial supplies."
          />
          <AnimateIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-semibold">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/request-quote">
                <Button size="lg" variant="outline" className="rounded-full font-semibold">
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
