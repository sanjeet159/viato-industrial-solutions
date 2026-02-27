import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { AnimateIn, MagneticButton } from "@/components/animations";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { productCategories } from "@/data/products";

const Products = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-industrial-gradient py-24 md:py-36 relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full border border-primary-foreground/5 animate-float" />
        <div className="container-wide relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-accent text-sm font-semibold mb-6 border border-accent/20">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
              Our Products
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-5 leading-tight">
              Industrial Products & <span className="text-accent">Equipment</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              Complete industrial solutions for Gas Pipeline, Chemical, Packaging, and Material Handling — sourced and supplied to meet the demands of modern manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Product Grid */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="container-wide relative z-10">
          <SectionHeading
            badge="Product Categories"
            title="Browse Our Product Range"
            description="Hover over a category to explore sub-products. Click to view detailed product information."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {productCategories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                animate={{
                  opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.55 : 1,
                  scale: hoveredIndex !== null && hoveredIndex !== i ? 0.98 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard
                  category={cat}
                  isHovered={hoveredIndex === i}
                  onHover={() => setHoveredIndex(i)}
                  onLeave={() => setHoveredIndex(null)}
                  index={i}
                />
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MagneticButton className="inline-block">
              <Link to="/request-quote">
                <Button size="lg" className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold px-10 h-14 rounded-full shadow-xl shadow-accent/25">
                  Request Quote for Any Product <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-industrial-gradient relative overflow-hidden grain-overlay">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="container-narrow text-center relative z-10">
          <AnimateIn>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-5">Can't Find What You Need?</h2>
            <p className="text-primary-foreground/70 mb-10 max-w-xl mx-auto text-lg">
              We source and supply a wide range of industrial products. Contact us with your specific requirements.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <MagneticButton className="inline-block">
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-10 h-14 rounded-full">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </MagneticButton>
          </AnimateIn>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
