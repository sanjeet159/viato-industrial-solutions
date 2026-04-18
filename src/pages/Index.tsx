import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import IndustrialCTA from "@/components/IndustrialCTA";
import { AnimateIn, StaggerContainer, StaggerItem, AnimatedCounter, MagneticButton } from "@/components/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-industrial-new.jpg";
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
  Zap,
  Car,
  Pill,
  Cog,
  FlaskConical,
  Train,
  Shield,
  Building,
  HardHat,
  Star,
  Quote,
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
  { title: "Gas Pipeline Systems", desc: "Complete industrial gas pipeline installation including Oxygen, Nitrogen, Argon, CO2, LPG & compressed air systems.", icon: Flame, img: gasPipelineImg, link: "/services", tag: "Most Popular" },
  { title: "Material Handling", desc: "Forklifts, pallet trucks, stackers, reach trucks with maintenance, repair and AMC services.", icon: Wrench, img: materialHandlingImg, link: "/services", tag: "Full Range" },
  { title: "Packaging Solutions", desc: "PP boxes, corrugated packaging, returnable solutions and industrial packaging materials.", icon: Package, img: packagingImg, link: "/products", tag: "Sustainable" },
  { title: "Engineering Services", desc: "Installation, commissioning, maintenance, safety inspection, certification and industrial consultancy.", icon: HardHat, img: engineeringImg, link: "/services", tag: "End-to-End" },
];

const whyUs = [
  { title: "Turnkey Solutions", desc: "End-to-end project execution from design to commissioning.", icon: Zap, number: "01" },
  { title: "Experienced Team", desc: "Skilled engineers with deep industrial domain expertise.", icon: Users, number: "02" },
  { title: "Quality Assurance", desc: "Rigorous quality standards and safety compliance.", icon: Award, number: "03" },
  { title: "Trusted Partner", desc: "Serving leading industrial clients across India.", icon: ShieldCheck, number: "04" },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Plant Manager, Tata Motors", text: "Viato Industries delivered our gas pipeline project ahead of schedule with exceptional quality. Highly recommended." },
  { name: "Sunil Patil", role: "Operations Head, Bajaj Auto", text: "Their material handling solutions have dramatically improved our warehouse efficiency. Truly a reliable partner." },
  { name: "Amita Deshmukh", role: "Purchase Manager, Thermax Ltd", text: "Outstanding packaging solutions that reduced our logistics costs by 30%. The returnable packaging was a game changer." },
];

const processSteps = [
  { step: "01", title: "Survey & Consultation", desc: "Site assessment, requirement analysis and feasibility study tailored to your facility.", icon: Users, accent: "210 80% 55%" },
  { step: "02", title: "Engineering & Design", desc: "Detailed engineering drawings, BOQ preparation and project planning by certified engineers.", icon: Cog, accent: "28 90% 52%" },
  { step: "03", title: "Procurement & Fabrication", desc: "Sourcing quality materials and precision fabrication at our in-house workshop.", icon: Factory, accent: "150 60% 45%" },
  { step: "04", title: "Installation & Commissioning", desc: "On-site installation, testing, safety certification and seamless project handover.", icon: Wrench, accent: "270 60% 55%" },
  { step: "05", title: "AMC & Lifecycle Support", desc: "Annual maintenance contracts, spare parts supply and 24/7 breakdown support.", icon: ShieldCheck, accent: "0 70% 55%" },
];

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <Layout>

      {/* ══════════ HERO ══════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img src={heroImg} alt="Industrial facility" className="w-full h-[120%] object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-foreground/70" />

        <div className="relative container-wide py-32 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen lg:min-h-[90vh]">

            {/* Left column */}
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium mb-8 border border-primary-foreground/15"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
                Trusted by 50+ Clients Across India
              </motion.div>

              <motion.h1
                className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.08] mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Complete Industrial{" "}
                <span className="text-accent">Solutions</span>{" "}
                for Modern Manufacturing
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-primary-foreground/60 mb-10 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                From gas pipeline systems to packaging solutions — Viato Industries delivers turnkey industrial excellence trusted by leading manufacturers.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
              >
                <Link to="/request-quote">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 h-14 rounded-full">
                    Request Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button size="lg" variant="outline" className="bg-primary-foreground text-foreground border-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 h-14 rounded-full transition-none">
                    Explore Products
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right column — stat cards */}
            <div className="hidden lg:flex items-center justify-center">
            <motion.div
            className="grid grid-cols-2 gap-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {[
                  { value: 90, suffix: "+", label: "Projects Completed" },
                  { value: 50,  suffix: "+", label: "Happy Clients" },
                  { value: 8,  suffix: "+", label: "Years Experience" },
                  { value: 7,  suffix: "+", label: "Industries Served" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="w-44 h-36 rounded-2xl bg-primary-foreground/8 backdrop-blur-sm border border-primary-foreground/10 flex flex-col items-center justify-center text-center p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                    whileHover={{ y: -4, borderColor: "hsl(28 90% 52% / 0.3)" }}
                  >
                    <span className="font-display text-3xl font-bold text-accent mb-1">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </span>
                    <span className="text-xs text-primary-foreground/50 font-medium">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

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

      {/* ══════════ INDUSTRIES STRIP ══════════ */}
      <section className="bg-card border-b border-border">
        <div className="container-wide py-10">
          <AnimateIn>
            <p className="text-xs text-muted-foreground text-center mb-8 uppercase tracking-[0.2em] font-semibold">
              Trusted by industries across India
            </p>
          </AnimateIn>
          <StaggerContainer className="flex flex-wrap justify-center gap-4 md:gap-6" staggerDelay={0.05}>
            {industries.map((ind) => (
              <StaggerItem key={ind.name}>
                <div className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-muted/50 border border-border text-foreground/70 hover:border-accent/30 hover:text-foreground transition-all cursor-default">
                  <ind.icon className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">{ind.name}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            badge="Our Services"
            title="Industrial Solutions You Can Count On"
            description="From gas pipeline systems to material handling equipment, we deliver comprehensive industrial solutions with excellence."
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.15}>
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <Link to={s.link} className="group relative overflow-hidden rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 block">
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <motion.img src={s.img} alt={s.title} className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} />
                    <div className="absolute inset-0 bg-foreground/40" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">{s.tag}</span>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center">
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

      {/* ══════════ EPC PROCESS ══════════ */}
      <section className="section-padding bg-card border-y border-border overflow-hidden">
        <div className="container-wide">
          <SectionHeading
            badge="End-to-End EPC"
            title="Our EPC Project Lifecycle"
            description="From initial survey to lifecycle support — we handle every phase of your industrial project under one roof."
          />

          <TooltipProvider delayDuration={200}>
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {[
                { letter: "E", word: "Engineering", tip: "Site surveys, feasibility studies & detailed engineering design" },
                { letter: "P", word: "Procurement", tip: "Quality material sourcing, vendor management & in-house fabrication" },
                { letter: "C", word: "Construction", tip: "On-site installation, commissioning & safety certification" },
              ].map((item, i) => (
                <Tooltip key={item.letter}>
                  <TooltipTrigger asChild>
                    <motion.div
                      className="flex items-center gap-2 cursor-default"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                    >
                      <span className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center font-display font-bold text-accent text-lg">{item.letter}</span>
                      <span className="text-sm font-medium text-foreground/70">{item.word}</span>
                      {i < 2 && <span className="text-muted-foreground/40 ml-2 text-lg hidden sm:inline">•</span>}
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-[220px] text-center text-xs">
                    {item.tip}
                  </TooltipContent>
                </Tooltip>
              ))}
            </motion.div>
          </TooltipProvider>

          {/* Desktop */}
          <div className="hidden lg:block relative mt-12">
            <div className="absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-border z-0" />
            <StaggerContainer className="grid grid-cols-5 gap-4 relative z-10" staggerDelay={0.12}>
              {processSteps.map((p) => (
                <StaggerItem key={p.step}>
                  <motion.div className="flex flex-col items-center text-center group" whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
                    <div className="h-[104px] w-[104px] rounded-full flex flex-col items-center justify-center mb-6 border-2 bg-card relative" style={{ borderColor: `hsl(${p.accent})` }}>
                      <div className="absolute inset-0 rounded-full opacity-10" style={{ backgroundColor: `hsl(${p.accent})` }} />
                      <p.icon className="h-6 w-6 mb-1 relative z-10" style={{ color: `hsl(${p.accent})` }} />
                      <span className="text-xs font-bold text-muted-foreground relative z-10">STEP {p.step}</span>
                    </div>
                    <h3 className="font-display font-bold text-foreground text-base mb-2 leading-tight">{p.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed max-w-[200px]">{p.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Mobile */}
          <div className="lg:hidden mt-8">
            <StaggerContainer className="relative pl-8" staggerDelay={0.1}>
              <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-border" />
              {processSteps.map((p) => (
                <StaggerItem key={p.step}>
                  <div className="relative flex gap-5 mb-8 last:mb-0">
                    <div className="absolute -left-8 top-0 h-10 w-10 rounded-full flex items-center justify-center border-2 bg-card shrink-0 z-10" style={{ borderColor: `hsl(${p.accent})` }}>
                      <p.icon className="h-4 w-4" style={{ color: `hsl(${p.accent})` }} />
                    </div>
                    <div className="ml-6 pt-0.5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Step {p.step}</span>
                      <h3 className="font-display font-bold text-foreground text-lg mt-0.5 mb-1">{p.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ══════════ WHY CHOOSE US ══════════ */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="container-wide relative z-10">
          <SectionHeading badge="Why Viato" title="Why Choose Viato Industries?" description="We bring decades of industrial expertise, delivering reliable and cost-effective solutions." light />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {whyUs.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="p-7 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 relative overflow-hidden group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="absolute top-4 right-4 font-display text-5xl font-bold text-primary-foreground/5">{item.number}</span>
                  <div className="h-12 w-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
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

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading badge="Testimonials" title="What Our Clients Say" description="Hear from the industry leaders who trust Viato Industries." />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div
                  className="p-8 rounded-2xl bg-card border border-border relative group hover:shadow-md transition-shadow duration-300"
                  whileHover={{ y: -3 }}
                >
                  <Quote className="h-8 w-8 text-accent/20 mb-4" />
                  <p className="text-foreground/80 text-sm leading-relaxed mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="font-display font-bold text-accent text-sm">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-sm text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ STATS ══════════ */}
      <section className="bg-card border-y border-border">
        <div className="container-wide py-20">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center" staggerDelay={0.1}>
            {[
              { value: 90, suffix: "+", label: "Projects Completed" },
                  { value: 50,  suffix: "+", label: "Happy Clients" },
                  { value: 8,  suffix: "+", label: "Years Experience" },
                  { value: 7,  suffix: "+", label: "Industries Served" },
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

      {/* ══════════ CTA ══════════ */}
      <IndustrialCTA
        title="Ready to Optimize Your Industrial Operations?"
        description="Contact us today for a free consultation and discover how Viato Industries can transform your facility — across gas, packaging, material handling and engineering."
      />

    </Layout>
  );
};

export default Index;
