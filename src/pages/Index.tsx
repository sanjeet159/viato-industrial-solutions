import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
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
  CheckCircle,
  Star,
  Quote,
} from "lucide-react";

/* ── data ── */
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
  { step: "01", title: "Consultation", desc: "We understand your requirements and site conditions." },
  { step: "02", title: "Design & Plan", desc: "Custom-engineered solutions with detailed project plans." },
  { step: "03", title: "Installation", desc: "Expert team executes the project with precision." },
  { step: "04", title: "Support & AMC", desc: "Ongoing maintenance and support for peak performance." },
];

/* ── Hero word-by-word animation ── */
const wordVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -40 },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { delay: 0.6 + i * 0.08, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOverlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 0.95]);

  const headlineWords = ["Complete", "Industrial", "Solutions", "for", "Modern", "Manufacturing"];

  return (
    <Layout>
      {/* ══════════ HERO ══════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax background */}
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img src={heroImg} alt="Industrial facility" className="w-full h-[120%] object-cover" />
        </motion.div>
        <motion.div className="absolute inset-0 bg-industrial-gradient" style={{ opacity: heroOverlayOpacity }} />
        <div className="absolute inset-0 hero-mesh" />

        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-primary-foreground/5"
              style={{ top: `${15 + i * 15}%`, left: 0, right: 0 }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 1.5, ease: "easeOut" }}
            />
          ))}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute w-px bg-primary-foreground/5"
              style={{ left: `${20 + i * 20}%`, top: 0, bottom: 0 }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.5 + i * 0.2, duration: 1.5, ease: "easeOut" }}
            />
          ))}
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-[15%] right-[10%] w-32 h-32 border border-accent/20 rounded-3xl"
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[25%] w-20 h-20 border border-primary-foreground/10 rounded-full"
          animate={{ scale: [1, 1.2, 1], y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[40%] right-[5%] w-3 h-3 bg-accent rounded-full"
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Content */}
        <div className="relative container-wide py-32 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen lg:min-h-[90vh]">
            {/* Left column - Text */}
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-accent text-sm font-semibold mb-8 border border-accent/20 backdrop-blur-sm"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
                Trusted by 100+ Industries Across India
              </motion.div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.05] mb-8" style={{ perspective: "800px" }}>
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    className={`inline-block mr-[0.3em] ${word === "Solutions" ? "text-accent" : ""}`}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={wordVariants}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                className="text-lg md:text-xl text-primary-foreground/60 mb-10 max-w-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                From gas pipeline systems to packaging solutions — Viato Industries delivers turnkey industrial excellence trusted by leading manufacturers.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <MagneticButton>
                  <Link to="/request-quote">
                    <Button size="lg" className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold text-base px-8 h-14 rounded-full shadow-xl shadow-accent/25">
                      Request Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link to="/products">
                    <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 h-14 rounded-full backdrop-blur-sm">
                      Explore Products
                    </Button>
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right column — Floating stat cards */}
            <div className="hidden lg:flex items-center justify-center relative">
              {/* Large accent ring */}
              <motion.div
                className="absolute w-[380px] h-[380px] rounded-full border-2 border-accent/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-[280px] h-[280px] rounded-full border border-primary-foreground/5"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />

              {/* Stat cards orbiting */}
              {[
                { value: "500+", label: "Projects", angle: -30, delay: 0.8 },
                { value: "100+", label: "Clients", angle: 90, delay: 1.0 },
                { value: "15+", label: "Years", angle: 210, delay: 1.2 },
              ].map((stat) => {
                const rad = (stat.angle * Math.PI) / 180;
                const r = 160;
                return (
                  <motion.div
                    key={stat.label}
                    className="absolute"
                    style={{ left: `calc(50% + ${Math.cos(rad) * r}px - 56px)`, top: `calc(50% + ${Math.sin(rad) * r}px - 40px)` }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                    transition={{ opacity: { delay: stat.delay, duration: 0.5 }, scale: { delay: stat.delay, duration: 0.5 }, y: { delay: stat.delay + 0.5, duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                  >
                    <div className="w-28 h-20 rounded-2xl bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/10 flex flex-col items-center justify-center">
                      <span className="font-display text-2xl font-bold text-accent">{stat.value}</span>
                      <span className="text-xs text-primary-foreground/60">{stat.label}</span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Center logo glow */}
              <motion.div
                className="relative h-24 w-24 rounded-3xl bg-accent/20 backdrop-blur-xl border border-accent/30 flex items-center justify-center"
                animate={{ boxShadow: ["0 0 30px hsl(28 90% 52% / 0.2)", "0 0 60px hsl(28 90% 52% / 0.4)", "0 0 30px hsl(28 90% 52% / 0.2)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="font-display text-4xl font-bold text-accent">V</span>
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
            <motion.div className="w-1.5 h-3 rounded-full bg-accent" />
          </div>
        </motion.div>
      </section>

      {/* ══════════ INDUSTRIES MARQUEE ══════════ */}
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

      {/* ══════════ SERVICES ══════════ */}
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
                <Link to={s.link} className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 block">
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <motion.img src={s.img} alt={s.title} className="w-full h-full object-cover" whileHover={{ scale: 1.08 }} transition={{ duration: 0.6 }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-semibold">{s.tag}</span>
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

      {/* ══════════ HOW WE WORK ══════════ */}
      <section className="section-padding bg-card border-y border-border relative overflow-hidden">
        <div className="container-wide relative z-10">
          <SectionHeading badge="Our Process" title="How We Deliver Excellence" description="A streamlined 4-step approach to every project." />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.12}>
            {processSteps.map((p, i) => (
              <StaggerItem key={p.step}>
                <div className="relative text-center group">
                  {/* Connector line */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
                  )}
                  <motion.div
                    className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 relative z-10 group-hover:bg-accent/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="font-display text-2xl font-bold text-accent">{p.step}</span>
                  </motion.div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ WHY CHOOSE US ══════════ */}
      <section className="section-padding bg-industrial-gradient relative overflow-hidden grain-overlay">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-primary-foreground/5" />
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full border border-accent/10" />

        <div className="container-wide relative z-10">
          <SectionHeading badge="Why Viato" title="Why Choose Viato Industries?" description="We bring decades of industrial expertise, delivering reliable and cost-effective solutions." light />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {whyUs.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="p-7 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm relative overflow-hidden group"
                  whileHover={{ y: -5, borderColor: "hsl(28 90% 52% / 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="absolute top-4 right-4 font-display text-5xl font-bold text-primary-foreground/5 group-hover:text-accent/10 transition-colors">{item.number}</span>
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

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="section-padding bg-background relative overflow-hidden mesh-gradient">
        <div className="container-wide relative z-10">
          <SectionHeading badge="Testimonials" title="What Our Clients Say" description="Hear from the industry leaders who trust Viato Industries." />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div
                  className="p-8 rounded-2xl bg-card border border-border/50 relative group hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
                  whileHover={{ y: -4 }}
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

      {/* ══════════ CTA ══════════ */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="container-narrow text-center relative z-10">
          <SectionHeading badge="Get Started" title="Ready to Optimize Your Industrial Operations?" description="Contact us today for a free consultation and discover how Viato Industries can transform your facility." />
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
