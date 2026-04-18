import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { productCategories } from "@/data/products";
import { MagneticButton } from "@/components/animations";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronRight, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import IndustrialCTA from "@/components/IndustrialCTA";
import { useRef, useState } from "react";

const ProductCategory = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const category = productCategories.find((c) => c.slug === categorySlug);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!category) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <h1 className="font-display text-3xl font-bold">Category Not Found</h1>
          <Link to="/products" className="text-accent font-semibold inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  const Icon = category.icon;

  return (
    <Layout>

      {/* ══════════════════════════════════════
          HERO — Cinematic full-screen
      ══════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">

        {/* Parallax BG */}
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-foreground/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />

        {/* Animated mesh circles */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-accent/8 blur-2xl" />

        {/* Content */}
        <motion.div className="relative container-wide z-10" style={{ opacity: heroOpacity }}>
          <div className="max-w-3xl">

            {/* Breadcrumb */}
            <motion.div
              className="flex items-center gap-2 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link
                to="/products"
                className="flex items-center gap-1.5 text-xs font-semibold text-primary-foreground/40 hover:text-accent transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Products
              </Link>
              <ChevronRight className="h-3 w-3 text-primary-foreground/20" />
              <span className="text-xs font-semibold text-accent">{category.title}</span>
            </motion.div>

            {/* Icon pill */}
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-accent/15 border border-accent/25 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="h-7 w-7 rounded-lg bg-accent/20 flex items-center justify-center">
                <Icon className="h-4 w-4 text-accent" />
              </div>
              <span className="text-accent text-sm font-bold">{category.subProducts.length} Products Available</span>
              <Sparkles className="h-3.5 w-3.5 text-accent/60" />
            </motion.div>

            {/* Title */}
            <motion.h1
              className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.02] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              {category.title}
            </motion.h1>

            {/* Desc */}
            <motion.p
              className="text-primary-foreground/55 text-lg leading-relaxed max-w-xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              {category.desc}
            </motion.p>

            {/* CTA row */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Link to="/request-quote">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-7 h-12 rounded-full shadow-xl shadow-accent/30">
                  Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white/20 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 font-semibold px-7 h-12 rounded-full">
                  <Phone className="mr-2 h-4 w-4" /> Talk to Expert
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom fade into content */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ══════════════════════════════════════
          PRODUCTS — Extraordinary grid
      ══════════════════════════════════════ */}
      <section className="pt-4 pb-24 bg-background relative overflow-hidden">

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent/4 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="container-wide relative z-10">

          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <motion.span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] mb-3 bg-accent/10 text-accent border border-accent/20"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {category.subProducts.length} Products
              </motion.span>
              <motion.h2
                className="font-display text-3xl md:text-5xl font-bold text-foreground"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Explore the Range
              </motion.h2>
            </div>
            <motion.p
              className="text-muted-foreground text-sm max-w-xs leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Hover any card to preview. Click to view full details or request a custom quote.
            </motion.p>
          </div>

          {/* ── Product Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.subProducts.map((sub, i) => {
              const SubIcon = sub.icon;
              const isHovered = hoveredIndex === i;
              const isDimmed = hoveredIndex !== null && !isHovered;

              return (
                <motion.div
                  key={sub.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.55, delay: i * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
                  animate={{
                    opacity: isDimmed ? 0.45 : 1,
                    scale: isDimmed ? 0.97 : 1,
                    filter: isDimmed ? "blur(1px)" : "blur(0px)",
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group"
                >
                  <Link to={`/products/${category.slug}/${sub.slug}`}>
                    <motion.div
                      className="relative rounded-3xl border bg-card overflow-hidden cursor-pointer h-full"
                      animate={{
                        borderColor: isHovered
                          ? "hsl(28 90% 52% / 0.6)"
                          : "hsl(214 20% 88% / 0.4)",
                        y: isHovered ? -10 : 0,
                        boxShadow: isHovered
                          ? "0 30px 70px -15px hsl(28 90% 52% / 0.25), 0 0 0 1px hsl(28 90% 52% / 0.15)"
                          : "0 4px 24px -4px hsl(215 80% 22% / 0.08)",
                      }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >

                      {/* Animated top bar */}
                      <motion.div
                        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-accent/80 to-accent/40 z-20"
                        animate={{ scaleX: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.45 }}
                        style={{ originX: 0 }}
                      />

                      {/* Image with overlay */}
                      <div className="relative h-52 overflow-hidden">
                        <motion.img
                          src={category.image}
                          alt={sub.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          animate={{ scale: isHovered ? 1.08 : 1 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                        />

                        {/* Dark overlay */}
                        <motion.div
                          className="absolute inset-0"
                          animate={{
                            background: isHovered
                              ? "linear-gradient(to top, hsl(var(--card)) 0%, hsl(var(--card)/0.4) 50%, transparent 100%)"
                              : "linear-gradient(to top, hsl(var(--card)) 0%, hsl(var(--card)/0.15) 40%, transparent 100%)",
                          }}
                        />

                        {/* Number badge */}
                        <motion.div
                          className="absolute top-3 left-4 px-2.5 py-1 rounded-full backdrop-blur-md border"
                          animate={{
                            backgroundColor: isHovered ? "hsl(28 90% 52% / 0.2)" : "hsl(215 80% 10% / 0.4)",
                            borderColor: isHovered ? "hsl(28 90% 52% / 0.4)" : "hsl(214 20% 88% / 0.15)",
                          }}
                        >
                          <span className="font-display text-xs font-bold text-primary-foreground">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </motion.div>

                        {/* Icon bottom left */}
                        <motion.div
                          className="absolute bottom-4 left-4 h-12 w-12 rounded-2xl backdrop-blur-md flex items-center justify-center border"
                          animate={{
                            backgroundColor: isHovered ? "hsl(28 90% 52% / 0.2)" : "hsl(215 80% 10% / 0.3)",
                            borderColor: isHovered ? "hsl(28 90% 52% / 0.5)" : "hsl(214 20% 88% / 0.15)",
                            scale: isHovered ? 1.1 : 1,
                          }}
                        >
                          <SubIcon
                            className="h-5 w-5 transition-colors duration-300"
                            style={{ color: isHovered ? "hsl(28 90% 52%)" : "white" }}
                          />
                        </motion.div>

                        {/* Arrow indicator top right */}
                        <motion.div
                          className="absolute top-3 right-4 h-8 w-8 rounded-full bg-accent flex items-center justify-center"
                          animate={{
                            opacity: isHovered ? 1 : 0,
                            scale: isHovered ? 1 : 0.5,
                          }}
                          transition={{ duration: 0.25 }}
                        >
                          <ArrowRight className="h-3.5 w-3.5 text-accent-foreground" />
                        </motion.div>
                      </div>

                      {/* Text content */}
                      <div className="p-6">
                        <motion.h3
                          className="font-display font-bold text-xl text-foreground mb-2 leading-snug"
                          animate={{ color: isHovered ? "hsl(28 90% 52%)" : "hsl(var(--foreground))" }}
                          transition={{ duration: 0.3 }}
                        >
                          {sub.name}
                        </motion.h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-5">
                          {sub.description}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-border/40">
                          <motion.span
                            className="inline-flex items-center gap-2 text-sm font-bold"
                            animate={{ color: isHovered ? "hsl(28 90% 52%)" : "hsl(215 20% 55%)" }}
                          >
                            View Details
                            <motion.span animate={{ x: isHovered ? 4 : 0 }} transition={{ duration: 0.2 }}>
                              <ArrowRight className="h-4 w-4" />
                            </motion.span>
                          </motion.span>

                          <motion.div
                            className="text-xs font-semibold px-3 py-1 rounded-full"
                            animate={{
                              backgroundColor: isHovered ? "hsl(28 90% 52% / 0.12)" : "hsl(214 20% 94%)",
                              color: isHovered ? "hsl(28 90% 52%)" : "hsl(215 20% 55%)",
                            }}
                          >
                            {category.title}
                          </motion.div>
                        </div>
                      </div>

                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* ── Bottom CTA strip ── */}
          <motion.div
            className="mt-16 rounded-3xl bg-primary relative overflow-hidden p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-accent/8 blur-3xl pointer-events-none" />
            <div className="absolute -left-10 bottom-0 w-48 h-48 rounded-full bg-primary-foreground/3 blur-2xl pointer-events-none" />

            <div className="relative z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/25 mb-3">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span className="text-accent text-xs font-bold">Custom Solutions Available</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                Can't find what you need?
              </h3>
              <p className="text-primary-foreground/50 text-sm mt-1">
                We source and supply custom industrial products across India.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-3 justify-center">
              <MagneticButton>
                <Link to="/request-quote">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12 rounded-full shadow-xl shadow-accent/30">
                    Request Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </MagneticButton>
              <Link to="/contact">
                <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 h-12 rounded-full">
                  <Phone className="mr-2 h-4 w-4" /> Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

    </Layout>
  );
};

export default ProductCategory;
