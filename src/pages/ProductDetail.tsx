import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { productCategories } from "@/data/products";
import { AnimateIn, MagneticButton } from "@/components/animations";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, Shield, Truck, Award, Settings, ChevronRight, Factory, Zap, Wrench, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
    "Automotive OEMs", "Pharmaceutical", "Steel Processing", "Chemical Plants",
    "Defence", "Railway Workshops", "Manufacturing", "Warehousing",
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

  const heroImage = product.images?.[0];
  const galleryImages = product.images && product.images.length > 1 ? product.images : [];

  return (
    <Layout>
      {/* Hero — split layout with product image */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_80%,hsl(var(--accent)/0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,hsl(var(--accent)/0.05),transparent)]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="container-wide relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
          {/* Breadcrumb */}
          <motion.nav
            className="flex items-center gap-2 text-sm text-primary-foreground/50 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/products" className="hover:text-accent transition-colors flex items-center gap-1">
              <ArrowLeft className="h-3.5 w-3.5" /> Products
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to={`/products/${category.slug}`} className="hover:text-accent transition-colors">{category.title}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-primary-foreground/80">{product.name}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: copy */}
            <div>
              <motion.span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <SubIcon className="h-3.5 w-3.5" />
                {category.title}
              </motion.span>

              <motion.h1
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight mb-5 leading-[1.05]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {product.name}
              </motion.h1>

              <motion.p
                className="text-primary-foreground/70 text-lg leading-relaxed mb-8 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {product.description}
              </motion.p>

              {/* Quick trust strip */}
              <motion.div
                className="flex flex-wrap gap-2 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                {["ISO Certified", "Pan India Delivery", "Bulk Pricing", "Expert Support"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/80 text-xs font-medium">
                    <CheckCircle className="h-3 w-3 text-accent" /> {t}
                  </span>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link to="/request-quote">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-xl h-12 px-8 shadow-xl shadow-accent/25">
                    Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="rounded-xl h-12 px-6 border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground">
                    <Phone className="mr-2 h-4 w-4" /> Contact Us
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right: hero image / icon panel */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-[2rem] blur-2xl" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-primary-foreground/10 bg-primary-foreground/5 shadow-2xl shadow-primary/40">
                {heroImage ? (
                  <img src={heroImage} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-foreground/5 to-accent/10">
                    <SubIcon className="h-32 w-32 text-accent/40" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-background/95 backdrop-blur-sm shadow-xl">
                    <div className="h-8 w-8 rounded-lg bg-accent/15 flex items-center justify-center">
                      <Award className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold leading-none">Industrial Grade</p>
                      <p className="text-xs font-bold text-foreground mt-0.5">Premium Quality</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="border-b border-border/50 bg-card">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                className={`flex items-center justify-center gap-3 py-5 px-4 ${i < highlights.length - 1 ? "md:border-r border-border/50" : ""} ${i < 2 ? "border-b md:border-b-0 border-border/50" : ""}`}
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

      {/* Product image gallery — only when there are additional shots beyond the hero */}
      {galleryImages.length > 0 && (
        <section className="py-14 md:py-20 bg-muted/20 border-b border-border/50">
          <div className="container-wide">
            <AnimateIn>
              <div className="mb-10 text-center">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-3">
                  Product Gallery
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  Available Pack Sizes & Variants
                </h2>
              </div>
            </AnimateIn>
            <div className={`grid gap-4 md:gap-6 ${
              galleryImages.length === 2 ? "grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto" :
              galleryImages.length === 3 ? "grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto" :
              "grid-cols-2 md:grid-cols-4"
            }`}>
              {galleryImages.map((img, i) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 transition-all"
                >
                  <img
                    src={img}
                    alt={`${product.name} - view ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-10">
            {/* Left content */}
            <div className="space-y-6">
              {/* Tabs */}
              <AnimateIn>
                <div className="flex gap-1 bg-muted/50 rounded-xl p-1 w-fit">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                        activeTab === tab.id
                          ? "bg-background text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </AnimateIn>

              {/* Tab content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div className="rounded-2xl border border-border/50 bg-card p-8">
                      <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <div className="h-1 w-6 rounded-full bg-accent" />
                        Product Overview
                      </h2>
                      {product.overview && product.overview.length > 0 ? (
                        <div className="space-y-4">
                          {product.overview.map((para, i) => (
                            <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground leading-relaxed">
                          {product.name} from Viato Industries is engineered to meet the highest industrial standards.
                          As part of our {category.title.toLowerCase()} range, this product delivers reliable performance,
                          superior quality, and exceptional value for industrial applications across automotive, pharma,
                          steel, manufacturing, and chemical sectors.
                        </p>
                      )}
                    </div>

                    <div className="rounded-2xl border border-border/50 bg-card p-8">
                      <h2 className="font-display text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                        <div className="h-1 w-6 rounded-full bg-accent" />
                        {product.features && product.features.length > 0 ? "Key Features" : "Key Benefits"}
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {(product.features && product.features.length > 0
                          ? product.features.map((text) => ({ text, icon: CheckCircle }))
                          : benefits
                        ).map((b) => {
                          const BIcon = b.icon;
                          return (
                            <div
                              key={b.text}
                              className="flex items-start gap-3 p-3.5 rounded-xl bg-muted/30 border border-border/30 hover:border-accent/20 transition-colors"
                            >
                              <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                                <BIcon className="h-4 w-4 text-accent" />
                              </div>
                              <span className="text-sm text-foreground/80 leading-relaxed">{b.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "specifications" && (
                  <div className="rounded-2xl border border-border/50 bg-card p-8">
                    <h2 className="font-display text-xl font-bold text-foreground mb-5 flex items-center gap-2">
                      <div className="h-1 w-6 rounded-full bg-accent" />
                      Technical Specifications
                    </h2>
                    <div className="divide-y divide-border/50">
                      {specifications.map((spec, i) => (
                        <div key={spec.label} className={`flex items-center justify-between py-4 ${i % 2 === 0 ? "bg-muted/20 -mx-4 px-4 rounded-lg" : ""}`}>
                          <span className="text-sm text-muted-foreground font-medium">{spec.label}</span>
                          <span className="text-sm font-semibold text-foreground">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-6 italic">
                      * Specifications may vary based on custom requirements. Contact us for detailed technical datasheets.
                    </p>
                  </div>
                )}

                {activeTab === "applications" && (
                  <div className="rounded-2xl border border-border/50 bg-card p-8">
                    <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <div className="h-1 w-6 rounded-full bg-accent" />
                      Industry Applications
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Widely used across manufacturing plants, warehouses, production lines, and industrial facilities.
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {applications.map((app) => (
                        <span
                          key={app}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-muted/40 border border-border/40 text-sm text-foreground/70 font-medium hover:border-accent/30 hover:text-accent transition-colors cursor-default"
                        >
                          <Factory className="h-3.5 w-3.5" />
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 space-y-5 h-fit">
              {/* CTA Card */}
              <AnimateIn delay={0.15}>
                <div className="rounded-2xl border-2 border-accent/15 bg-gradient-to-b from-card to-accent/[0.03] p-7 shadow-lg shadow-accent/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-xl bg-accent/15 flex items-center justify-center">
                      <SubIcon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground">Get a Quote</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    Request a custom quote for {product.name} tailored to your project needs.
                  </p>
                  <MagneticButton className="w-full">
                    <Link to="/request-quote" className="block">
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full h-12 shadow-lg shadow-accent/20 text-sm">
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
                <div className="rounded-2xl border border-border/50 bg-card p-6">
                  <h3 className="font-display font-bold text-base text-foreground mb-4">Related Products</h3>
                  <div className="space-y-1">
                    {category.subProducts
                      .filter((p) => p.slug !== product.slug)
                      .map((p) => {
                        const PIcon = p.icon;
                        return (
                          <Link
                            key={p.slug}
                            to={`/products/${category.slug}/${p.slug}`}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-sm hover:bg-accent/5 transition-all group"
                          >
                            <div className="h-8 w-8 rounded-lg bg-muted/60 group-hover:bg-accent/10 flex items-center justify-center shrink-0 transition-colors">
                              <PIcon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="font-medium text-foreground/80 group-hover:text-accent block truncate text-sm transition-colors">{p.name}</span>
                            </div>
                            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-accent transition-all shrink-0" />
                          </Link>
                        );
                      })}
                  </div>
                </div>
              </AnimateIn>

              {/* Why Viato */}
              <AnimateIn delay={0.3}>
                <div className="rounded-2xl border border-border/50 bg-card p-6">
                  <h3 className="font-display font-bold text-base text-foreground mb-4">Why Viato?</h3>
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
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,hsl(var(--accent)/0.06),transparent)]" />
        <div className="container-narrow text-center relative z-10">
          <AnimateIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/60 mb-8 max-w-xl mx-auto">
              Let our experts help you select the perfect solution for your most demanding applications.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <MagneticButton className="inline-block">
              <Link to="/request-quote">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-10 h-14 rounded-full shadow-xl shadow-accent/25">
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
