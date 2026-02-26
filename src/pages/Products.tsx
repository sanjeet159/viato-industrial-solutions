import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { AnimateIn, StaggerContainer, StaggerItem, MagneticButton } from "@/components/animations";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import gasPipelineImg from "@/assets/gas-pipeline.jpg";
import packagingImg from "@/assets/packaging.jpg";
import materialHandlingImg from "@/assets/material-handling.jpg";
import engineeringImg from "@/assets/engineering-services.jpg";
import { ArrowRight, ChevronRight } from "lucide-react";

const categories = [
  {
    title: "Gas Manifold Systems",
    desc: "High-quality gas manifold systems for industrial gas distribution. Includes cylinder filling manifolds, automatic changeover systems, and custom manifold configurations.",
    img: gasPipelineImg,
    products: ["Cylinder Filling Manifolds", "Automatic Changeover Systems", "Manual Manifold Systems", "Cryogenic Pipeline Systems", "Gas Distribution Panels"],
  },
  {
    title: "Packaging Products",
    desc: "Durable industrial packaging solutions designed for safe transportation and storage. Returnable and sustainable options available.",
    img: packagingImg,
    products: ["Polypropylene Boxes & Crates", "Corrugated Boxes", "Returnable Packaging Solutions", "Custom Industrial Packaging", "Protective Packaging Materials"],
  },
  {
    title: "Material Handling Equipment",
    desc: "Complete range of material handling solutions for warehouses, factories, and distribution centers.",
    img: materialHandlingImg,
    products: ["Forklifts (Electric & Diesel)", "Pallet Trucks", "Stackers", "Reach Trucks", "Tow Trucks"],
  },
  {
    title: "Welding Consumables",
    desc: "High-performance welding consumables and equipment protection products for industrial welding applications.",
    img: engineeringImg,
    products: ["Water-based Anti-spatter Solutions", "Equipment Protection Products", "Welding Accessories", "Safety Equipment"],
  },
];

const Products = () => {
  return (
    <Layout>
      <section className="bg-industrial-gradient py-24 md:py-36 relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 hero-mesh" />
        <div className="container-wide relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-accent text-sm font-semibold mb-6 border border-accent/20">
              Our Products
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-5 leading-tight">
              Industrial Products & <span className="text-accent">Equipment</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              Quality industrial products sourced and supplied to meet the demands of modern manufacturing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background relative overflow-hidden mesh-gradient">
        <div className="container-wide relative z-10">
          <SectionHeading badge="Product Categories" title="Browse Our Product Range" />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.15}>
            {categories.map((cat) => (
              <StaggerItem key={cat.title}>
                <motion.div
                  className="rounded-2xl border border-border/50 bg-card overflow-hidden group"
                  whileHover={{ y: -8, boxShadow: "0 25px 50px -12px hsl(215 80% 22% / 0.1)" }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <motion.img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 font-display text-xl font-bold text-primary-foreground">{cat.title}</h3>
                  </div>
                  <div className="p-7">
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{cat.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {cat.products.map((p) => (
                        <li key={p} className="text-sm text-foreground flex items-center gap-2.5">
                          <ChevronRight className="h-3.5 w-3.5 text-accent shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <MagneticButton>
                      <Link to="/request-quote">
                        <Button variant="outline" className="font-semibold text-sm rounded-full px-6 hover:bg-accent/5 hover:border-accent/30">
                          Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </MagneticButton>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

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

export default Products;
