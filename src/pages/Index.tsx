import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { AnimateIn, StaggerContainer, StaggerItem, AnimatedCounter, MagneticButton, Parallax } from "@/components/animations";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-industrial.jpg";
import gasPipelineImg from "@/assets/gas-pipeline.jpg";
import materialHandlingImg from "@/assets/material-handling.jpg";
import packagingImg from "@/assets/packaging.jpg";
import engineeringImg from "@/assets/engineering-services.jpg";
import {
  ArrowRight,
  Wrench,
  Factory,
  Package,
  Flame,
  ShieldCheck,
  Users,
  Award,
  CheckCircle,
  Zap,
  Car,
  Pill,
  Cog,
  FlaskConical,
  Train,
  Shield,
  Building,
  HardHat,
  ChevronRight,
} from "lucide-react";

const industries = [
  { name: "Automotive", icon: Car },
  { name: "Pharma", icon: Pill },
  { name: "Steel", icon: Cog },
  { name: "Chemical", icon: FlaskConical },
  { name: "Railways", icon: Train },
  { name: "Defence", icon: Shield },
  { name: "Manufacturing", icon: Factory },
  { name: "EPC", icon: Building },
];

const services = [
  {
    title: "Gas Pipeline Systems",
    desc: "Complete industrial gas pipeline installation including Oxygen, Nitrogen, Argon, CO2, LPG & compressed air systems.",
    icon: Flame,
    img: gasPipelineImg,
    link: "/services",
    tag: "Most Popular",
  },
  {
    title: "Material Handling",
    desc: "Forklifts, pallet trucks, stackers, reach trucks with maintenance, repair and AMC services.",
    icon: Wrench,
    img: materialHandlingImg,
    link: "/services",
    tag: "Full Range",
  },
  {
    title: "Packaging Solutions",
    desc: "PP boxes, corrugated packaging, returnable solutions and industrial packaging materials.",
    icon: Package,
    img: packagingImg,
    link: "/products",
    tag: "Sustainable",
  },
  {
    title: "Engineering Services",
    desc: "Installation, commissioning, maintenance, safety inspection, certification and industrial consultancy.",
    icon: HardHat,
    img: engineeringImg,
    link: "/services",
    tag: "End-to-End",
  },
];

const whyUs = [
  { title: "Turnkey Solutions", desc: "End-to-end project execution from design to commissioning.", icon: Zap, number: "01" },
  { title: "Experienced Team", desc: "Skilled engineers with deep industrial domain expertise.", icon: Users, number: "02" },
  { title: "Quality Assurance", desc: "Rigorous quality standards and safety compliance.", icon: Award, number: "03" },
  { title: "Trusted Partner", desc: "Serving leading industrial clients across India.", icon: ShieldCheck, number: "04" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={heroImg}
            alt="Industrial facility"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-industrial-gradient opacity-80" />
          <div className="absolute inset-0 hero-mesh" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full border border-primary-foreground/5 animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full border border-accent/10 animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative container-wide py-20">
          <div className="max-w-3xl">
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-accent text-sm font-semibold mb-8 border border-accent/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
              Complete Material Handling & Packaging Solution
            </motion.span>

            <motion.h1
              className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Complete Industrial{" "}
              <span className="relative inline-block">
                <span className="text-accent">Material Handling</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>{" "}
              & Gas Pipeline Solutions
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Viato Industries delivers turnkey industrial solutions — from gas pipeline installation to material handling equipment — trusted by leading manufacturers across India.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <MagneticButton>
                <Link to="/request-quote">
                  <Button size="lg" className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold text-base px-8 h-14 rounded-full shadow-xl shadow-accent/25">
                    Request Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 h-14 rounded-full backdrop-blur-sm">
                    Contact Us
                  </Button>
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              className="flex gap-8 mt-14 pt-8 border-t border-primary-foreground/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[
                { value: 500, suffix: "+", label: "Projects" },
                { value: 100, suffix: "+", label: "Clients" },
                { value: 15, suffix: "+", label: "Years" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-primary-foreground/50 text-sm">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/20 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-accent" />
          </div>
        </motion.div>
      </section>

      {/* Industries Served Marquee */}
      <section className="bg-card border-b border-border relative overflow-hidden">
        <div className="container-wide py-10">
          <AnimateIn>
            <p className="text-xs text-muted-foreground text-center mb-8 uppercase tracking-[0.2em] font-semibold">
              Trusted by industries across India
            </p>
          </AnimateIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-4 md:gap-6" staggerDelay={0.05}>
            {industries.map((ind) => (
              <StaggerItem key={ind.name}>
                <motion.div
                  className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-muted/50 border border-border/50 text-foreground/70 hover:border-accent/30 hover:bg-accent/5 transition-all cursor-default"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <ind.icon className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">{ind.name}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background relative overflow-hidden mesh-gradient">
        <div className="container-wide relative z-10">
          <SectionHeading
            badge="Our Services"
            title="Industrial Solutions You Can Count On"
            description="From gas pipeline systems to material handling equipment, we deliver comprehensive industrial solutions with excellence."
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.15}>
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <Link
                  to={s.link}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 block"
                >
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <motion.img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-semibold">
                      {s.tag}
                    </span>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <s.icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-foreground">{s.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    <span className="inline-flex items-center gap-1.5 mt-5 text-accent text-sm font-semibold group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us - Horizontal scroll cards */}
      <section className="section-padding bg-industrial-gradient relative overflow-hidden grain-overlay">
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-primary-foreground/5" />
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full border border-accent/10" />

        <div className="container-wide relative z-10">
          <SectionHeading
            badge="Why Viato"
            title="Why Choose Viato Industries?"
            description="We bring decades of industrial expertise, delivering reliable and cost-effective solutions."
            light
          />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {whyUs.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="p-7 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm relative overflow-hidden group"
                  whileHover={{ y: -5, borderColor: "hsl(28 90% 52% / 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="absolute top-4 right-4 font-display text-5xl font-bold text-primary-foreground/5 group-hover:text-accent/10 transition-colors">
                    {item.number}
                  </span>
                  <div className="h-12 w-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent/25 transition-colors">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-primary-foreground mb-2 text-lg">{item.title}</h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="container-wide py-20 relative z-10">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" staggerDelay={0.1}>
            {[
              { value: 500, suffix: "+", label: "Projects Completed" },
              { value: 8, suffix: "+", label: "Industries Served" },
              { value: 100, suffix: "+", label: "Happy Clients" },
              { value: 15, suffix: "+", label: "Years Experience" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="p-6">
                  <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container-narrow text-center relative z-10">
          <SectionHeading
            badge="Get Started"
            title="Ready to Optimize Your Industrial Operations?"
            description="Contact us today for a free consultation and discover how Viato Industries can transform your facility."
          />
          <AnimateIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton>
                <Link to="/request-quote">
                  <Button size="lg" className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold text-base px-10 h-14 rounded-full shadow-xl shadow-accent/20">
                    Request Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="font-semibold text-base px-10 h-14 rounded-full">
                    Contact Us
                  </Button>
                </Link>
              </MagneticButton>
            </div>
          </AnimateIn>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
