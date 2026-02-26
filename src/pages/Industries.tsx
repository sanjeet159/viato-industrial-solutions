import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { AnimateIn, StaggerContainer, StaggerItem, MagneticButton } from "@/components/animations";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Pill, Cog, Factory, Building, FlaskConical, ArrowRight, ChevronRight } from "lucide-react";

const industries = [
  {
    name: "Automotive",
    icon: Car,
    desc: "Gas pipeline systems, material handling equipment, and packaging solutions for automotive OEMs and Tier-1 suppliers.",
    services: ["Gas Pipeline Installation", "Forklift Supply & Maintenance", "Returnable Packaging", "Engineering Services"],
    color: "from-accent/10 to-accent/5",
  },
  {
    name: "Pharmaceutical",
    icon: Pill,
    desc: "Clean gas pipeline systems, specialized material handling, and compliant packaging solutions for pharma manufacturing.",
    services: ["SS Gas Pipelines", "Clean Room Equipment", "Pharma-grade Packaging", "Safety Certification"],
    color: "from-industrial-light/10 to-industrial/5",
  },
  {
    name: "Steel & Metals",
    icon: Cog,
    desc: "Heavy-duty gas supply systems, industrial gas pipelines, and robust material handling solutions for steel plants.",
    services: ["Industrial Gas Pipelines", "Heavy-duty Forklifts", "Cryogenic Systems", "Maintenance & AMC"],
    color: "from-accent/10 to-accent/5",
  },
  {
    name: "Manufacturing",
    icon: Factory,
    desc: "Complete turnkey solutions for general manufacturing facilities — from gas supply to warehouse management.",
    services: ["Turnkey Gas Systems", "Warehouse Equipment", "Packaging Solutions", "Consultancy"],
    color: "from-industrial-light/10 to-industrial/5",
  },
  {
    name: "EPC & Construction",
    icon: Building,
    desc: "Gas pipeline installation, equipment supply, and engineering services for EPC projects across India.",
    services: ["Project-based Gas Pipelines", "Equipment Leasing", "On-site Engineering", "Commissioning"],
    color: "from-accent/10 to-accent/5",
  },
  {
    name: "Chemical",
    icon: FlaskConical,
    desc: "Specialized gas handling systems, corrosion-resistant pipelines, and safety-compliant equipment for chemical plants.",
    services: ["Corrosion-resistant Pipelines", "Safety Systems", "Material Handling", "Inspection Services"],
    color: "from-industrial-light/10 to-industrial/5",
  },
];

const Industries = () => {
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
              Industries
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-5 leading-tight">
              Industries We <span className="text-accent">Serve</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              Delivering specialized industrial solutions across diverse sectors with deep domain expertise.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background relative overflow-hidden mesh-gradient">
        <div className="container-wide relative z-10">
          <SectionHeading badge="Our Expertise" title="Sector-Specific Solutions" description="We understand the unique challenges of each industry and deliver tailored solutions." />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {industries.map((ind) => (
              <StaggerItem key={ind.name}>
                <motion.div
                  className={`p-7 rounded-2xl border border-border/50 bg-gradient-to-br ${ind.color} relative group overflow-hidden`}
                  whileHover={{ y: -8, boxShadow: "0 25px 50px -12px hsl(215 80% 22% / 0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-industrial-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <ind.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{ind.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{ind.desc}</p>
                  <ul className="space-y-2">
                    {ind.services.map((s) => (
                      <li key={s} className="text-sm text-foreground flex items-center gap-2">
                        <ChevronRight className="h-3.5 w-3.5 text-accent shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
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
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-5">Your Industry Not Listed?</h2>
            <p className="text-primary-foreground/70 mb-10 max-w-xl mx-auto text-lg">
              We serve many more sectors. Contact us to discuss how we can support your specific industrial needs.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <MagneticButton className="inline-block">
              <Link to="/contact">
                <Button size="lg" className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold px-10 h-14 rounded-full shadow-xl shadow-accent/25">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </MagneticButton>
          </AnimateIn>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
