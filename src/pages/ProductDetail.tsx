import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { productCategories } from "@/data/products";
import { AnimateIn, MagneticButton } from "@/components/animations";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { categorySlug, productSlug } = useParams();
  const category = productCategories.find((c) => c.slug === categorySlug);
  const product = category?.subProducts.find((p) => p.slug === productSlug);

  if (!category || !product) {
    return (
      <Layout>
        <div className="section-padding container-wide text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="text-accent font-semibold">← Back to Products</Link>
        </div>
      </Layout>
    );
  }

  const Icon = category.icon;
  const SubIcon = product.icon;
  const benefits = [
    "High-quality industrial grade materials",
    "Tested for safety and compliance",
    "Available in custom specifications",
    "Bulk order discounts available",
    "Expert technical support included",
    "Fast delivery across India",
  ];

  return (
    <Layout>
      {/* Hero with image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
            width={800}
            height={544}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,80%,10%)] via-[hsl(215,80%,12%/0.95)] to-[hsl(215,80%,14%/0.8)]" />
          <div className="absolute inset-0 bg-[hsl(215,80%,10%/0.4)]" />
        </div>
        <div className="container-wide relative z-10 py-20 md:py-28" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
          <div className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-6">
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <span>/</span>
            <Link to={`/products/${category.slug}`} className="hover:text-accent transition-colors">{category.title}</Link>
            <span>/</span>
            <span className="text-primary-foreground/80">{product.name}</span>
          </div>
          <motion.div className="flex items-center gap-5 mb-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="h-16 w-16 rounded-2xl bg-accent/15 backdrop-blur-md flex items-center justify-center border border-accent/20">
              <SubIcon className="h-8 w-8 text-accent" />
            </div>
            <div>
              <p className="text-accent text-sm font-semibold mb-1">{category.title}</p>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">{product.name}</h1>
            </div>
          </motion.div>
          <motion.p
            className="text-primary-foreground/60 text-lg max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {product.description}
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-background mesh-gradient">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Product image card */}
              <AnimateIn>
                <div className="rounded-2xl border border-border/50 overflow-hidden bg-card">
                  <div className="relative h-64 md:h-80">
                    <img
                      src={category.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={800}
                      height={544}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <div className="absolute bottom-5 left-6 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-accent/20 backdrop-blur-md flex items-center justify-center">
                        <SubIcon className="h-5 w-5 text-accent" />
                      </div>
                      <span className="text-foreground font-display font-bold text-lg">{product.name}</span>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.05}>
                <div className="rounded-2xl border border-border/50 bg-card p-8 md:p-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Product Overview</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {product.name} from Viato Industries is engineered to meet the highest industrial standards.
                    As part of our {category.title.toLowerCase()} range, this product delivers reliable performance,
                    superior quality, and exceptional value for industrial applications across automotive, pharma,
                    steel, manufacturing, and chemical sectors.
                  </p>
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">Key Benefits</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <div className="rounded-2xl border border-border/50 bg-card p-8 md:p-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Applications</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Widely used across manufacturing plants, warehouses, production lines, and industrial facilities.
                    Suitable for automotive OEMs, pharmaceutical manufacturing, steel processing, chemical plants,
                    defence establishments, and railway workshops.
                  </p>
                </div>
              </AnimateIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimateIn delay={0.15}>
                <div className="rounded-2xl border border-accent/20 bg-card p-7 industrial-glow">
                  <h3 className="font-display font-bold text-lg text-foreground mb-4">Get a Quote</h3>
                  <p className="text-muted-foreground text-sm mb-6">Interested in {product.name}? Request a custom quote tailored to your requirements.</p>
                  <MagneticButton className="w-full">
                    <Link to="/request-quote" className="block">
                      <Button className="w-full bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold rounded-full h-12 shadow-lg shadow-accent/20">
                        Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </MagneticButton>
                  <Link to="/contact" className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground hover:text-accent transition-colors">
                    <Phone className="h-4 w-4" /> Or call us directly
                  </Link>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.25}>
                <div className="rounded-2xl border border-border/50 bg-card p-7">
                  <h3 className="font-display font-bold text-lg text-foreground mb-4">Related Products</h3>
                  <ul className="space-y-2">
                    {category.subProducts
                      .filter((p) => p.slug !== product.slug)
                      .map((p) => (
                        <li key={p.slug}>
                          <Link
                            to={`/products/${category.slug}/${p.slug}`}
                            className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm text-foreground/80 hover:bg-accent/8 hover:text-accent transition-all group"
                          >
                            <span>{p.name}</span>
                            <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
