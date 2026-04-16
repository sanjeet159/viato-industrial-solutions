import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { productCategories } from "@/data/products";
import { AnimateIn, StaggerContainer, StaggerItem, MagneticButton } from "@/components/animations";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Shield, Truck, Award, Settings, ChevronRight, Factory, Zap, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ProductDetail = () => {
  const { categorySlug, productSlug } = useParams();
  const category = productCategories.find((c) => c.slug === categorySlug);
  const product = category?.subProducts.find((p) => p.slug === productSlug);
  const [activeTab, setActiveTab] = useState("overview");

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
    { text: "Expert technical support included", icon: Wrench },
    { text: "Fast delivery across India", icon: Truck },
  ];

  const highlights = [
    { label: "Quality", value: "Industrial Grade", icon: Award },
    { label: "Delivery", value: "Pan India", icon: Truck },
    { label: "Support", value: "24/7 Expert", icon: Phone },
    { label: "Compliance", value: "ISO Certified", icon: Shield },
  ];

  const applications = [
    "Automotive OEMs",
    "Pharmaceutical",
    "Steel Processing",
    "Chemical Plants",
    "Defence",
    "Railway Workshops",
    "Manufacturing",
    "Warehousing",
  ];

  const specifications = [
    { label: "Material", value: "Industrial Grade Steel / Alloy" },
    { label: "Standards", value: "IS / ISO / ASME Compliant" },
    { label: "Temperature Range", value: "-40°C to 200°C" },
    { label: "Pressure Rating", value: "Up to 300 Bar" },
    { label: "Connection Type", value: "Flanged / Threaded / Welded" },
    { label: "Warranty", value: "As per agreement" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "specifications", label: "Specifications" },
    { id: "applications", label: "Applications" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[380px] md:min-h-[440px] flex flex-col justify-end">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
            width={800}
            height={544}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(215,80%,6%)] via-[hsl(215,80%,8%/0.88)] to-[hsl(215,80%,12%/0.5)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(215,80%,6%/0.6)] to-transparent" />
        </div>

        <div className="container-wide relative z-10 pb-10 pt-28 md:pt-32">
          {/* Category badge */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-widest">
              <SubIcon className="h-3.5 w-3.5" />
              {category.title}
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl md:text-6xl font-bold text-primary-foreground tracking-tight mb-4 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}
          >
            {product.name}
          </motion.h1>

          <motion.p
            className="text-primary-foreground/70 text-lg max-w-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}
          >
            {product.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/request-quote">
              <Button size="lg" className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold rounded-xl h-12 px-8 shadow-xl shadow-accent/25">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="rounded-xl h-12 px-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm">
                <Phone className="mr-2 h-4 w-4" /> Contact Us
              </Button>
            </Link>
          </motion.div>

          {/* Breadcrumb at bottom */}
          <motion.nav
            className="mt-8 text-sm text-primary-foreground/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <span className="mx-1.5">/</span>
            <Link to={`/products/${category.slug}`} className="hover:text-accent transition-colors">{category.title}</Link>
            <span className="mx-1.5">/</span>
            <span className="text-primary-foreground/70">{product.name}</span>
          </motion.nav>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="border-b border-border/50 bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                className={`flex items-center justify-center gap-3 py-6 px-4 text-center ${i < highlights.length - 1 ? "md:border-r border-border/50" : ""} ${i < 2 ? "border-b md:border-b-0 border-border/50" : ""}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.4 }}
              >
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <h.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium">{h.label}</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12">
            {/* Left content */}
            <div className="space-y-8">
              {/* Product image */}
              <AnimateIn>
                <div className="rounded-2xl overflow-hidden border border-border/50 bg-card group relative">
                  <motion.img
                    src={category.image}
                    alt={product.name}
                    className="w-full h-72 md:h-96 object-cover"
                    loading="lazy"
                    width={800}
                    height={544}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/90 text-accent-foreground text-xs font-semibold shadow-lg">
                      <SubIcon className="h-3.5 w-3.5" />
                      {category.title}
                    </span>
                  </div>
                </div>
              </AnimateIn>

              {/* Tabs */}
              <AnimateIn delay={0.05}>
                <div className="flex gap-2 border-b border-border/50 mb-0">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-3 px-5 text-sm font-semibold transition-all relative ${
                        activeTab === tab.id
                          ? "text-accent"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                          layoutId="activeTab"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </AnimateIn>

              {/* Tab content */}
              {activeTab === "overview" && (
                <div className="space-y-8">
                  <AnimateIn delay={0.08}>
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

                  <AnimateIn delay={0.12}>
                    <div className="rounded-2xl border border-border/50 bg-card p-8 md:p-10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="h-1 w-8 rounded-full bg-accent" />
                        <h2 className="font-display text-2xl font-bold text-foreground">Key Benefits</h2>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {benefits.map((b) => {
                          const BIcon = b.icon;
                          return (
                            <div
                              key={b.text}
                              className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/30 hover:border-accent/20 transition-colors"
                            >
                              <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                                <BIcon className="h-4 w-4 text-accent" />
                              </div>
                              <span className="text-sm text-foreground/80 leading-relaxed pt-1">{b.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </AnimateIn>
                </div>
              )}

              {activeTab === "specifications" && (
                <AnimateIn>
                  <div className="rounded-2xl border border-border/50 bg-card p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-1 w-8 rounded-full bg-accent" />
                      <h2 className="font-display text-2xl font-bold text-foreground">Technical Specifications</h2>
                    </div>
                    <div className="divide-y divide-border/50">
                      {specifications.map((spec) => (
                        <div key={spec.label} className="flex items-center justify-between py-4">
                          <span className="text-sm text-muted-foreground font-medium">{spec.label}</span>
                          <span className="text-sm font-semibold text-foreground">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-6 italic">
                      * Specifications may vary based on custom requirements. Contact us for detailed technical datasheets.
                    </p>
                  </div>
                </AnimateIn>
              )}

              {activeTab === "applications" && (
                <AnimateIn>
                  <div className="rounded-2xl border border-border/50 bg-card p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-1 w-8 rounded-full bg-accent" />
                      <h2 className="font-display text-2xl font-bold text-foreground">Industry Applications</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-[15px] mb-6">
                      Widely used across manufacturing plants, warehouses, production lines, and industrial facilities.
                      Suitable for a broad range of industries requiring robust, reliable solutions.
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {applications.map((app) => (
                        <span
                          key={app}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-muted/40 border border-border/40 text-sm text-foreground/70 font-medium hover:border-accent/30 hover:text-accent transition-colors"
                        >
                          <Factory className="h-3.5 w-3.5" />
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* CTA Card */}
                <AnimateIn delay={0.15}>
                  <div className="rounded-2xl border-2 border-accent/15 bg-gradient-to-b from-card to-accent/[0.03] p-8 shadow-lg shadow-accent/5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-xl bg-accent/15 flex items-center justify-center">
                        <SubIcon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground">Get a Quote</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      Request a custom quote for {product.name} tailored to your project needs.
                    </p>
                    <MagneticButton className="w-full">
                      <Link to="/request-quote" className="block">
                        <Button className="w-full bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold rounded-full h-12 shadow-lg shadow-accent/20 text-sm">
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
                    <div className="space-y-1">
                      {category.subProducts
                        .filter((p) => p.slug !== product.slug)
                        .map((p) => {
                          const PIcon = p.icon;
                          return (
                            <Link
                              key={p.slug}
                              to={`/products/${category.slug}/${p.slug}`}
                              className="flex items-center gap-3 py-3 px-3 rounded-xl text-sm hover:bg-accent/5 transition-all group"
                            >
                              <div className="h-9 w-9 rounded-lg bg-muted/60 group-hover:bg-accent/10 flex items-center justify-center shrink-0 transition-colors">
                                <PIcon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="font-medium text-foreground/80 group-hover:text-accent block truncate transition-colors">{p.name}</span>
                                <span className="text-xs text-muted-foreground line-clamp-1">{p.description}</span>
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                </AnimateIn>

                {/* Why Viato */}
                <AnimateIn delay={0.3}>
                  <div className="rounded-2xl border border-border/50 bg-card p-7">
                    <h3 className="font-display font-bold text-lg text-foreground mb-4">Why Viato?</h3>
                    <ul className="space-y-3">
                      {[
                        { icon: Award, text: "15+ years of industrial expertise" },
                        { icon: Zap, text: "Quick turnaround & delivery" },
                        { icon: Shield, text: "Quality assured & certified" },
                      ].map((item) => (
                        <li key={item.text} className="flex items-center gap-3 text-sm text-foreground/70">
                          <item.icon className="h-4 w-4 text-accent shrink-0" />
                          {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-industrial-gradient relative overflow-hidden grain-overlay">
        <div className="container-narrow text-center relative z-10">
          <AnimateIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-5">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Let our experts help you select and integrate the perfect solution for your most demanding applications.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <MagneticButton className="inline-block">
              <Link to="/request-quote">
                <Button size="lg" className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold px-10 h-14 rounded-full shadow-xl shadow-accent/25">
                  Consult Our Team <ArrowRight className="ml-2 h-5 w-5" />
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
