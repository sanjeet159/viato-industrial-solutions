import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { productCategories } from "@/data/products";
import { AnimateIn, StaggerContainer, StaggerItem, MagneticButton } from "@/components/animations";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Shield, Truck, Award, Settings, ChevronRight } from "lucide-react";
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

  const SubIcon = product.icon;
  const benefits = [
    { text: "High-quality industrial grade materials", icon: Award },
    { text: "Tested for safety and compliance", icon: Shield },
    { text: "Available in custom specifications", icon: Settings },
    { text: "Bulk order discounts available", icon: CheckCircle },
    { text: "Expert technical support included", icon: CheckCircle },
    { text: "Fast delivery across India", icon: Truck },
  ];

  const highlights = [
    { label: "Quality", value: "Industrial Grade", icon: Award },
    { label: "Delivery", value: "Pan India", icon: Truck },
    { label: "Support", value: "24/7 Expert", icon: Phone },
    { label: "Compliance", value: "ISO Certified", icon: Shield },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[400px] md:min-h-[480px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
            width={800}
            height={544}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215,80%,6%)] via-[hsl(215,80%,8%/0.9)] to-[hsl(215,80%,10%/0.6)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,80%,6%/0.7)] to-transparent" />
        </div>
        <div className="container-wide relative z-10 pb-12 pt-28 md:pb-16 md:pt-32">
          {/* Breadcrumb */}
          <motion.nav
            className="flex items-center gap-1.5 text-sm mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link to="/products" className="text-primary-foreground/50 hover:text-accent transition-colors">Products</Link>
            <ChevronRight className="h-3.5 w-3.5 text-primary-foreground/30" />
            <Link to={`/products/${category.slug}`} className="text-primary-foreground/50 hover:text-accent transition-colors">{category.title}</Link>
            <ChevronRight className="h-3.5 w-3.5 text-primary-foreground/30" />
            <span className="text-accent font-medium">{product.name}</span>
          </motion.nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-14 w-14 rounded-xl bg-accent/15 backdrop-blur-md flex items-center justify-center border border-accent/25 shadow-lg shadow-accent/10">
                  <SubIcon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <p className="text-accent/80 text-xs font-semibold uppercase tracking-wider mb-0.5">{category.title}</p>
                  <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
                    {product.name}
                  </h1>
                </div>
              </div>
              <p className="text-primary-foreground/60 text-lg max-w-xl" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.3)" }}>
                {product.description}
              </p>
            </motion.div>

            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/request-quote">
                <Button size="lg" className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold rounded-full h-12 px-8 shadow-xl shadow-accent/25">
                  Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="rounded-full h-12 px-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm">
                  <Phone className="mr-2 h-4 w-4" /> Contact
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick highlights strip */}
      <section className="border-b border-border/50 bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/50">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                className="flex items-center gap-3 py-5 px-4 md:px-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.4 }}
              >
                <div className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <h.icon className="h-4.5 w-4.5 text-accent" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">{h.label}</p>
                  <p className="text-sm font-bold text-foreground">{h.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Product image */}
              <AnimateIn>
                <div className="rounded-2xl overflow-hidden border border-border/50 bg-card group">
                  <div className="relative h-72 md:h-96 overflow-hidden">
                    <motion.img
                      src={category.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={800}
                      height={544}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/90 text-accent-foreground text-xs font-semibold backdrop-blur-sm shadow-lg">
                        <SubIcon className="h-3.5 w-3.5" />
                        {category.title}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              {/* Overview */}
              <AnimateIn delay={0.05}>
                <div className="rounded-2xl border border-border/50 bg-card p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-1 w-8 rounded-full bg-accent" />
                    <h2 className="font-display text-2xl font-bold text-foreground">Product Overview</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {product.name} from Viato Industries is engineered to meet the highest industrial standards.
                    As part of our {category.title.toLowerCase()} range, this product delivers reliable performance,
                    superior quality, and exceptional value for industrial applications across automotive, pharma,
                    steel, manufacturing, and chemical sectors.
                  </p>
                </div>
              </AnimateIn>

              {/* Benefits */}
              <AnimateIn delay={0.1}>
                <div className="rounded-2xl border border-border/50 bg-card p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-1 w-8 rounded-full bg-accent" />
                    <h2 className="font-display text-2xl font-bold text-foreground">Key Benefits</h2>
                  </div>
                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.05}>
                    {benefits.map((b) => {
                      const BIcon = b.icon;
                      return (
                        <StaggerItem key={b.text}>
                          <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 border border-border/30 hover:border-accent/20 transition-colors">
                            <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                              <BIcon className="h-4 w-4 text-accent" />
                            </div>
                            <span className="text-sm text-foreground/80 leading-relaxed pt-1">{b.text}</span>
                          </div>
                        </StaggerItem>
                      );
                    })}
                  </StaggerContainer>
                </div>
              </AnimateIn>

              {/* Applications */}
              <AnimateIn delay={0.15}>
                <div className="rounded-2xl border border-border/50 bg-card p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-1 w-8 rounded-full bg-accent" />
                    <h2 className="font-display text-2xl font-bold text-foreground">Applications</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-[15px] mb-6">
                    Widely used across manufacturing plants, warehouses, production lines, and industrial facilities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Automotive OEMs", "Pharmaceutical", "Steel Processing", "Chemical Plants", "Defence", "Railway Workshops"].map((app) => (
                      <span key={app} className="px-4 py-2 rounded-full bg-muted/50 border border-border/40 text-sm text-foreground/70 font-medium">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Sticky sidebar */}
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* CTA Card */}
                <AnimateIn delay={0.15}>
                  <div className="rounded-2xl border border-accent/20 bg-gradient-to-b from-card to-accent/[0.03] p-7 shadow-lg shadow-accent/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-xl bg-accent/15 flex items-center justify-center">
                        <SubIcon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground">Get a Quote</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      Interested in {product.name}? Request a custom quote tailored to your requirements.
                    </p>
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

                {/* Related products */}
                <AnimateIn delay={0.25}>
                  <div className="rounded-2xl border border-border/50 bg-card p-7">
                    <h3 className="font-display font-bold text-lg text-foreground mb-5">Related Products</h3>
                    <ul className="space-y-1">
                      {category.subProducts
                        .filter((p) => p.slug !== product.slug)
                        .map((p) => {
                          const PIcon = p.icon;
                          return (
                            <li key={p.slug}>
                              <Link
                                to={`/products/${category.slug}/${p.slug}`}
                                className="flex items-center gap-3 py-3 px-3 rounded-xl text-sm text-foreground/80 hover:bg-accent/8 hover:text-accent transition-all group"
                              >
                                <div className="h-8 w-8 rounded-lg bg-muted/60 group-hover:bg-accent/10 flex items-center justify-center shrink-0 transition-colors">
                                  <PIcon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="font-medium block truncate">{p.name}</span>
                                  <span className="text-xs text-muted-foreground line-clamp-1">{p.description}</span>
                                </div>
                                <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding bg-industrial-gradient relative overflow-hidden grain-overlay">
        <div className="container-narrow text-center relative z-10">
          <AnimateIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-5">Need a Custom Solution?</h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Contact us with your specific requirements and our engineering team will help you find the perfect solution.
            </p>
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

export default ProductDetail;
