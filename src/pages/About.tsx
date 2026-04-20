import Layout from "@/components/Layout";
import { AnimateIn, StaggerContainer, StaggerItem, AnimatedCounter, MagneticButton } from "@/components/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutTeamImg from "@/assets/about-team.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, Users, ShieldCheck, ArrowRight, Star, Car, Pill, Cog, FlaskConical, Train, Shield, Factory, Building, HardHat, Wrench, Heart } from "lucide-react";
import IndustrialCTA from "@/components/IndustrialCTA";
import { useRef, useState } from "react";
import SEO from "@/components/SEO";

const industries = [
  { name: "Automotive", icon: Car },
  { name: "EPC", icon: Building },
  { name: "Pharma", icon: Pill },
  { name: "Chemical", icon: FlaskConical },
  { name: "Construction", icon: HardHat },
  { name: "Earthmoving", icon: Cog },
  { name: "Steel", icon: Factory },
  { name: "Railways", icon: Train },
  { name: "Defence", icon: Shield },
  { name: "Manufacturing", icon: Wrench },
];

const values = [
  { icon: Award, title: "Quality", desc: "ISO 9001:2015 certified", color: "28 90% 52%" },
  { icon: Users, title: "Customer First", desc: "Your success, our priority", color: "210 80% 55%" },
  { icon: ShieldCheck, title: "Safety", desc: "Zero compromise on safety", color: "150 60% 45%" },
  { icon: Heart, title: "Integrity", desc: "Honest in every deal", color: "0 70% 55%" },
];

const About = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);
  const [activeValue, setActiveValue] = useState<number | null>(null);

  return (
    <Layout>

      <SEO
  title="About Us – Viato Industries Since 2013"
  description="Established in 2013 under Shri Balaji Group, Viato Industries delivers complete material handling, gas pipeline and packaging solutions to industries across western India."
  slug="about"
  keywords="about Viato Industries, Shri Balaji Group Aurangabad, industrial solutions Maharashtra"
/>

      {/* ══════ HERO ══════ */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img src={aboutTeamImg} alt="Viato Industries" className="w-full h-[120%] object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/20" />

        <motion.div className="relative container-wide" style={{ opacity: heroOpacity }}>
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-8 border border-accent/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Star className="h-3.5 w-3.5 fill-accent" /> Est. 2013 · Shri Balaji Group
            </motion.span>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.05] mb-6">
              Just Best,{" "}
              <br />
              <span className="text-accent">Just Legendary</span>
            </h1>

            <p className="text-primary-foreground/60 text-lg leading-relaxed mb-10 max-w-lg">
              Complete material handling, gas pipeline & packaging solutions — trusted by industries across western India.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 h-12 rounded-full">
                  Our Products <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
  <Button size="lg" variant="outline" className="border-white/60 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white font-semibold px-8 h-12 rounded-full transition-all duration-300 group">
    Get in Touch <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
  </Button>
</motion.div>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating stats — bottom right */}
        <motion.div
          className="absolute bottom-10 right-8 md:right-16 hidden md:grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[
            { value: 500, suffix: "+", label: "Projects" },
            { value: 100, suffix: "+", label: "Clients" },
            { value: 11,  suffix: "+", label: "Years" },
            { value: 10,  suffix: "+", label: "Industries" },
          ].map((s) => (
            <motion.div
              key={s.label}
              className="px-5 py-4 rounded-2xl bg-primary-foreground/8 backdrop-blur-md border border-primary-foreground/10 text-center min-w-[100px]"
              whileHover={{ scale: 1.05, borderColor: "hsl(28 90% 52% / 0.4)" }}
            >
              <div className="font-display text-2xl font-bold text-accent">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="text-xs text-primary-foreground/50 mt-0.5">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════ STORY STRIP ══════ */}
      <section className="bg-primary py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {[
              { num: "01", title: "Who We Are", desc: "Part of Shri Balaji Group, Viato Industries is a trusted name in industrial solutions across western India since 2013." },
              { num: "02", title: "What We Do", desc: "Gas pipelines, material handling equipment, packaging solutions, industrial chemicals and consumables — end to end." },
              { num: "03", title: "Our Promise", desc: "Complete solutions that bring peace of mind — letting customers focus on their core business." },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                className="relative pl-0 md:pl-6 border-0 md:border-l border-primary-foreground/10 first:border-0 md:first:border-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <span className="font-display text-4xl font-bold text-accent/20 block mb-2">{item.num}</span>
                <h3 className="font-display font-bold text-primary-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-primary-foreground/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ INDUSTRIES — Interactive ══════ */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimateIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] mb-4 bg-accent/10 text-accent border border-accent/20">
                Industries We Serve
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                Across All Major Sectors
              </h2>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              const isActive = activeIndustry === i;
              return (
                <motion.div
                  key={ind.name}
                  className="relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border cursor-default overflow-hidden"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  animate={{
                    borderColor: isActive ? "hsl(28 90% 52% / 0.6)" : "hsl(214 20% 88% / 0.5)",
                    y: isActive ? -8 : 0,
                    boxShadow: isActive
                      ? "0 24px 48px -12px hsl(28 90% 52% / 0.25)"
                      : "0 2px 8px -2px hsl(215 80% 22% / 0.06)",
                  }}
                  onMouseEnter={() => setActiveIndustry(i)}
                  onMouseLeave={() => setActiveIndustry(null)}
                >
                  {/* Glow bg */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={{ opacity: isActive ? 1 : 0 }}
                    style={{ background: "radial-gradient(circle at 50% 50%, hsl(28 90% 52% / 0.08), transparent 70%)" }}
                  />

                  <motion.div
                    className="h-12 w-12 rounded-xl flex items-center justify-center relative z-10"
                    animate={{ backgroundColor: isActive ? "hsl(28 90% 52% / 0.15)" : "hsl(214 20% 94%)" }}
                  >
                    <Icon
                      className="h-5 w-5 transition-colors duration-300"
                      style={{ color: isActive ? "hsl(28 90% 52%)" : "hsl(215 20% 50%)" }}
                    />
                  </motion.div>
                  <p className="font-display font-bold text-sm text-foreground relative z-10 text-center">
                    {ind.name}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ VALUES — Horizontal scroll feel ══════ */}
      <section className="section-padding bg-muted overflow-hidden">
        <div className="container-narrow">
          <AnimateIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] mb-4 bg-accent/10 text-accent border border-accent/20">
                Our Values
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
                What Drives Us
              </h2>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => {
              const isActive = activeValue === i;
              return (
                <motion.div
                  key={v.title}
                  className="relative p-7 rounded-2xl border bg-card text-center cursor-default overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  animate={{
                    borderColor: isActive ? `hsl(${v.color} / 0.5)` : "hsl(214 20% 88% / 0.5)",
                    y: isActive ? -8 : 0,
                  }}
                  onMouseEnter={() => setActiveValue(i)}
                  onMouseLeave={() => setActiveValue(null)}
                >
                  {/* Top line */}
                  <motion.div
                    className="absolute top-0 left-0 h-[3px] rounded-t-2xl"
                    style={{ backgroundColor: `hsl(${v.color})` }}
                    animate={{ width: isActive ? "100%" : "30%" }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Glow */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ opacity: isActive ? 1 : 0 }}
                    style={{ background: `radial-gradient(circle at 50% 0%, hsl(${v.color} / 0.08), transparent 70%)` }}
                  />

                  <motion.div
                    className="h-14 w-14 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10"
                    animate={{ backgroundColor: `hsl(${v.color} / ${isActive ? 0.2 : 0.1})` }}
                  >
                    <v.icon className="h-7 w-7" style={{ color: `hsl(${v.color})` }} />
                  </motion.div>
                  <h4 className="font-display font-bold text-foreground mb-1 text-base relative z-10">{v.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed relative z-10">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ MISSION & VISION ══════ */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
            {[
              {
                icon: Target,
                label: "Mission",
                title: "Complete Solutions,\nPeace of Mind",
                desc: "To be the most trusted turnkey industrial solution provider — helping customers focus on their core business.",
                color: "28 90% 52%",
              },
              {
                icon: Eye,
                label: "Vision",
                title: "India's Most\nLegendary Brand",
                desc: "Recognized for quality, reliability and customer-first approach across material handling, gas pipeline and packaging.",
                color: "210 80% 55%",
              },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <motion.div
                  className="relative p-10 rounded-3xl border border-border/50 bg-card overflow-hidden group"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Large icon watermark */}
                  <item.icon
                    className="absolute -bottom-4 -right-4 h-32 w-32 opacity-5 transition-opacity duration-500 group-hover:opacity-10"
                    style={{ color: `hsl(${item.color})` }}
                  />

                  {/* Top accent */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-industrial-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

                  <span
                    className="text-xs font-bold uppercase tracking-widest mb-4 block"
                    style={{ color: `hsl(${item.color})` }}
                  >
                    {item.label}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight whitespace-pre-line">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <IndustrialCTA />
    </Layout>
  );
};

export default About;
