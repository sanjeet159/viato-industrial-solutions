import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { productCategories } from "@/data/products";
import { AnimateIn, StaggerContainer, StaggerItem, MagneticButton } from "@/components/animations";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductCategory = () => {
  const { categorySlug } = useParams();
  const category = productCategories.find((c) => c.slug === categorySlug);

  if (!category) {
    return (
      <Layout>
        <div className="section-padding container-wide text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Category Not Found</h1>
          <Link to="/products" className="text-accent font-semibold">← Back to Products</Link>
        </div>
      </Layout>
    );
  }

  const Icon = category.icon;

  return (
    <Layout>
      <section className="bg-industrial-gradient py-24 md:py-32 relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 hero-mesh" />
        <div className="container-wide relative z-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-accent text-sm font-medium mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Products
          </Link>
          <motion.div className="flex items-center gap-4 mb-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="h-16 w-16 rounded-2xl bg-accent/15 flex items-center justify-center">
              <Icon className="h-8 w-8 text-accent" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">{category.title}</h1>
          </motion.div>
          <motion.p className="text-primary-foreground/70 text-lg max-w-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            {category.desc}
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-background mesh-gradient">
        <div className="container-wide">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {category.subProducts.map((sub) => (
              <StaggerItem key={sub.slug}>
                <Link to={`/products/${category.slug}/${sub.slug}`}>
                  <motion.div
                    className="p-7 rounded-2xl border border-border/50 bg-card hover:border-accent/30 transition-all group"
                    whileHover={{ y: -6, boxShadow: "0 20px 50px -12px hsl(28 90% 52% / 0.12)" }}
                  >
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">{sub.name}</h3>
                    <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                      View Details <ArrowRight className="h-4 w-4" />
                    </span>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-industrial-gradient relative overflow-hidden grain-overlay">
        <div className="container-narrow text-center relative z-10">
          <AnimateIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-5">Need a Custom Solution?</h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">Contact us with your specific requirements and our engineering team will help you find the perfect solution.</p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <MagneticButton className="inline-block">
              <Link to="/request-quote">
                <Button size="lg" className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold px-10 h-14 rounded-full shadow-xl shadow-accent/25">
                  Request Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </MagneticButton>
          </AnimateIn>
        </div>
      </section>
    </Layout>
  );
};

export default ProductCategory;
