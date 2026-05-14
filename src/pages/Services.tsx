import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { AnimateIn, StaggerContainer, StaggerItem, MagneticButton } from "@/components/animations";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import gasPipelineImg from "@/assets/gas-pipeline.jpg";
import IndustrialCTA from "@/components/IndustrialCTA";

import engineeringImg from "@/assets/engineering-services.jpg";
import { ArrowRight, CheckCircle, Flame, Wrench, HardHat, Settings } from "lucide-react";
import SEO from "@/components/SEO";

const servicesList = [
  {
    id: "gas-pipeline",
    title: "Gas Pipeline & Manifold Systems",
    icon: Flame,
    img: gasPipelineImg,
    desc: "We design, supply, install, and commission complete industrial gas pipeline systems for Oxygen, Nitrogen, Argon, CO2, LPG, and compressed air. Our systems include gas manifold installations, cryogenic tank pipelines, and cylinder filling manifold systems using Copper, SS, MS, GI, and HDPE pipelines.",
    benefits: [
      "Continuous uninterrupted gas supply",
      "Improved workplace safety",
      "Reduced gas wastage",
      "Increased operational efficiency",
      "Lower operating costs",
      "Turnkey installation & commissioning",
    ],
  },
  {
    id: "engineering",
    title: "Engineering Services",
    icon: HardHat,
    img: engineeringImg,
    desc: "Our experienced engineering team provides end-to-end services including installation & commissioning, preventive maintenance, equipment refurbishment, safety inspection & certification, and industrial consultancy for all your facility needs.",
    benefits: [
      "Installation & commissioning",
      "Preventive maintenance programs",
      "Equipment refurbishment",
      "Safety inspection & certification",
      "Industrial consultancy",
      "24/7 support available",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & AMC",
    icon: Settings,
    img: engineeringImg,
    desc: "Keep your industrial equipment running at optimal performance with our comprehensive maintenance services and Annual Maintenance Contracts. We ensure minimal downtime and maximum productivity for your facility.",
    benefits: [
      "Scheduled preventive maintenance",
      "Emergency breakdown support",
      "Spare parts management",
      "Performance monitoring",
      "Cost-effective AMC plans",
      "Experienced service technicians",
    ],
  },
];

const Services = () => {
  return (
    <Layout>

      <SEO
  title="Industrial Services – AMC, Gas Pipeline Installation & Repairs"
  description="Viato Industries offers gas pipeline installation, breakdown repairs, preventive maintenance, AMC contracts and equipment refurbishing services across India."
  slug="services"
  keywords="gas pipeline installation India, AMC service Maharashtra, industrial engineering services"
/>
      
      {/* Hero */}
      <section className="bg-industrial-gradient py-24 md:py-36 relative overflow-hidden grain-overlay">
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-primary-foreground/5 animate-float" />
        <div className="container-wide relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-accent text-sm font-semibold mb-6 border border-accent/20">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-5 leading-tight">
              Comprehensive Industrial{" "}
              <span className="text-accent">Services</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              From gas pipeline installation to engineering & AMC — we deliver end-to-end industrial solutions with precision and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {servicesList.map((s, i) => (
        <section key={s.id} id={s.id} className={`section-padding ${i % 2 === 0 ? "bg-background" : "bg-muted"} relative overflow-hidden`}>
          {i % 2 === 0 && <div className="absolute inset-0 mesh-gradient opacity-30" />}
          <div className="container-narrow relative z-10">
            <div className={`grid md:grid-cols-2 gap-14 items-center ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}>
              <AnimateIn direction={i % 2 === 0 ? "left" : "right"}>
                <motion.div
                  className="rounded-2xl overflow-hidden relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img src={s.img} alt={s.title} className="w-full h-auto object-cover rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                </motion.div>
              </AnimateIn>
              <AnimateIn direction={i % 2 === 0 ? "right" : "left"}>
                <div style={{ direction: "ltr" }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <s.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{s.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <StaggerContainer className="space-y-2.5 mb-8" staggerDelay={0.05}>
                    {s.benefits.map((b) => (
                      <StaggerItem key={b}>
                        <div className="flex items-center gap-3 text-sm text-foreground">
                          <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                          <span>{b}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                  <MagneticButton>
                    <Link to="/request-quote">
                      <Button className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold rounded-full px-8 h-12 shadow-lg shadow-accent/20">
                        Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </MagneticButton>
                </div>
              </AnimateIn>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <IndustrialCTA
        title="Need a Custom Solution?"
        description="Our engineering team can design and deliver tailored solutions for your specific industrial requirements."
      />
    </Layout>
  );
};

export default Services;
