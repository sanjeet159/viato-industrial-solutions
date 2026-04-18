import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { productCategories } from "@/data/products";
import { AnimateIn, StaggerContainer, StaggerItem, MagneticButton } from "@/components/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import IndustrialCTA from "@/components/IndustrialCTA";
import { useRef, useState } from "react";

const ProductCategory = () => {
  const { categorySlug } = useParams();
  const category = productCategories.find((c) => c.slug === categorySlug);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

      {/* ══════ HERO ══════ */}
      <section ref={heroRef} className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        {/* Parallax image */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-[120%] object-cover"
          />
        </motion.div>

        {/* Layered overlays for readability */}
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 to-transparent" />

        {/* Content */}
        <motion.div className="relative container-wide pb-12 md:pb-16 z-10" style={{ opacity: heroOpacity }}>

          {/* Breadcrumb */}
          <motion.div
            className="flex items-center gap-2 text-xs text-primary-foreground/50 mb-6 font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/products" className="hover:text-accent transition-colors inline-flex items-center gap-1.5">
              <ArrowLeft className="h-3.5 w-3.5" /> Products
            </Link>
            <ChevronRight className="h-3 w-3 opacity-40" />
            <span className="text-accent">{category.title}</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {/* Icon + title */}
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className="h-14 w-14 rounded-2xl bg-accent/20 backdrop-blur-md flex items-center justify-center border border-accent/30 shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="h-7 w-7 text-accent" />
                </motion.div>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                  {category.title}
                </h1>
              </div>
              <p className="text-primary-foreground/60 text-base md:text-lg max-w-xl leading-relaxed">
                {category.desc}
              </p>
            </motion.div>

            {/* Product count badge */}
            <motion.div
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-primary-foreground/8 backdrop-blur-md border border-primary-foreground/10 shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-primary-foreground leading-none">
                  {category.subProducts.length}
                </p>
                <p className="text-xs text-primary-foreground/50 mt-0.5">Products Available</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ══════ PRODUCTS GRID ══════ */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-wide relative z-10">

          {/* Section label */}
          <AnimateIn>
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] mb-3 bg-accent/10 text-accent border border-accent/20">
                  {category.title}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  All Products
                </h2>
              </div>
              <MagneticButton>
                <Link to="/request-quote">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-6 h-11 hidden md:inline-flex">
                    Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </MagneticButton>
            </div>
          </AnimateIn>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {category.subProducts.map((sub, i) => {
              const SubIcon = sub.icon;
              const isHovered = hoveredIndex === i;
              return (
                <motion.div
                  key={sub.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={{
                    opacity: hoveredIndex !== null && !isHovered ? 0.6 : 1,
                    scale: hoveredIndex !== null && !isHovered ? 0.98 : 1,
                  }}
                >
                  <Link to={`/products/${category.slug}/${sub.slug}`}>
                    <motion.div
                      className="rounded-2xl border bg-card overflow-hidden relative group cursor-pointer"
                      animate={{
                        borderColor: isHovered ? "hsl(28 90% 52% / 0.5)" : "hsl(214 20% 88% / 0.5)",
                        boxShadow: isHovered
                          ? "0 25px 60px -12px hsl(28 90% 52% / 0.2)"
                          : "0 4px 20px -4px hsl(215 80% 22% / 0.06)",
                        y: isHovered ? -8 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Top accent line */}
                      <motion.div
                        className="absolute top-0 left-0 right-0 h-[3px] bg-accent z-10"
                        animate={{ scaleX: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ originX: 0 }}
                      />

                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <motion.img
                          src={category.image}
                          alt={sub.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          animate={{ scale: isHovered ? 1.06 : 1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                        {/* Icon on image */}
                        <motion.div
                          className="absolute bottom-3 left-4 h-11 w-11 rounded-xl backdrop-blur-md flex items-center justify-center border"
                          animate={{
                            backgroundColor: isHovered ? "hsl(28 90% 52% / 0.25)" : "hsl(215 80% 22% / 0.15)",
                            borderColor: isHovered ? "hsl(28 90% 52% / 0.4)" : "hsl(214 20% 88% / 0.2)",
                          }}
                        >
                          <SubIcon
                            className="h-5 w-5 transition-colors duration-300"
                            style={{ color: isHovered ? "hsl(28 90% 52%)" : "white" }}
                          />
                        </motion.div>

                        {/* Product number */}
                        <div className="absolute top-3 right-4 px-2.5 py-1 rounded-full bg-foreground/40 backdrop-blur-sm border border-primary-foreground/10">
                          <span className="text-[10px] font-bold text-primary-foreground/70">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-display font-bold text-lg text-foreground mb-2 leading-snug">
                          {sub.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-5">
                          {sub.description}
                        </p>

                        {/* Footer row */}
                        <div className="flex items-center justify-between">
                          <motion.span
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                            animate={{ gap: isHovered ? "10px" : "6px" }}
                          >
                            View Details <ArrowRight className="h-4 w-4" />
                          </motion.span>
                          <motion.div
                            className="h-8 w-8 rounded-full border flex items-center justify-center"
                            animate={{
                              borderColor: isHovered ? "hsl(28 90% 52% / 0.5)" : "hsl(214 20% 88%)",
                              backgroundColor: isHovered ? "hsl(28 90% 52% / 0.1)" : "transparent",
                            }}
                          >
                            <ArrowRight
                              className="h-3.5 w-3.5 transition-colors duration-300"
                              style={{ color: isHovered ? "hsl(28 90% 52%)" : "hsl(215 20% 60%)" }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile quote CTA */}
          <div className="mt-10 text-center md:hidden">
            <Link to="/request-quote">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full px-8 h-12">
                Request Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

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
