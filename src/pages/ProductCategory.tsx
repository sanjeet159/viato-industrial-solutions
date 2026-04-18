import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { productCategories } from "@/data/products";
import { AnimateIn, StaggerContainer, StaggerItem, MagneticButton } from "@/components/animations";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
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
      {/* Hero with category image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
            width={800}
            height={544}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,80%,10%/0.95)] via-[hsl(215,80%,10%/0.85)] to-[hsl(215,80%,10%/0.7)]" />
          <div className="absolute inset-0 bg-[hsl(215,80%,10%/0.5)]" />
        </div>
        <div className="container-wide relative z-10 py-24 md:py-32" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.6)" }}>
          <Link to="/products" className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-accent text-sm font-medium mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Products
          </Link>
          <motion.div className="flex items-center gap-4 mb-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="h-16 w-16 rounded-2xl bg-accent/15 backdrop-blur-md flex items-center justify-center border border-accent/20">
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
            {category.subProducts.map((sub) => {
              const SubIcon = sub.icon;
              return (
                <StaggerItem key={sub.slug}>
                  <Link to={`/products/${category.slug}/${sub.slug}`}>
                    <motion.div
                      className="rounded-2xl border border-border/50 bg-card overflow-hidden hover:border-accent/30 transition-all group"
                      whileHover={{ y: -6, boxShadow: "0 20px 50px -12px hsl(28 90% 52% / 0.12)" }}
                    >
                      {/* Product image */}
                      <div className="relative h-44 overflow-hidden">
                        <motion.img
                          src={category.image}
                          alt={sub.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          width={800}
                          height={544}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                        <div className="absolute bottom-3 left-4">
                          <div className="h-10 w-10 rounded-lg bg-accent/15 backdrop-blur-md flex items-center justify-center border border-accent/20">
                            <SubIcon className="h-5 w-5 text-accent" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-display font-bold text-lg text-foreground mb-1.5">{sub.name}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{sub.description}</p>
                        <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                          View Details <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <IndustrialCTA
        title="Need a Custom Solution?"
        description="Contact us with your specific requirements and our engineering team will help you find the perfect solution."
      />
    </Layout>
  );
};

export default ProductCategory;
