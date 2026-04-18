import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { AnimateIn, StaggerContainer, StaggerItem, AnimatedCounter, MagneticButton } from "@/components/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutTeamImg from "@/assets/about-team.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Award, Users, ShieldCheck, ArrowRight, Star, CheckCircle, MapPin, Phone, Mail, Car, Pill, Cog, FlaskConical, Train, Shield, Factory, Building, HardHat, Wrench } from "lucide-react";
import IndustrialCTA from "@/components/IndustrialCTA";
import { useRef, useState } from "react";

const values = [
  { icon: Award, title: "Quality Excellence", desc: "ISO 9001:2015 certified company maintaining highest standards in every project.", color: "28 90% 52%" },
  { icon: Users, title: "Customer First", desc: "Our core value — becoming a complete solution provider with customer priority.", color: "210 80% 55%" },
  { icon: ShieldCheck, title: "Safety First", desc: "Rigorous safety protocols including pneumatic testing at 1.5x working pressure.", color: "150 60% 45%" },
  { icon: Heart, title: "Integrity", desc: "Transparent, honest and ethical in all business dealings across western India.", color: "0 70% 55%" },
];

const industries = [
  { name: "Automotive", icon: Car, desc: "Gas pipelines & material handling for auto plants" },
  { name: "EPC", icon: Building, desc: "Turnkey engineering, procurement & construction" },
  { name: "Pharmaceutical", icon: Pill, desc: "Medical gas manifold systems & clean packaging" },
  { name: "Chemical", icon: FlaskConical, desc: "Safe gas distribution & handling solutions" },
  { name: "Construction", icon: HardHat, desc: "Heavy equipment & material storage systems" },
  { name: "Earthmoving", icon: Cog, desc: "Robust pallet trucks & handling equipment" },
  { name: "Steel", icon: Factory, desc: "Industrial gas pipelines & crane systems" },
  { name: "Railways", icon: Train, desc: "Precision engineering & safety compliance" },
  { name: "Defence", icon: Shield, desc: "High-security gas & handling installations" },
  { name: "Manufacturing", icon: Wrench, desc: "End-to-end packaging & warehousing solutions" },
];

const solutions = [
  { title: "Gas Manifold & Pipeline", desc: "Turnkey installation for Oxygen, Nitrogen, Argon, CO2, LPG and compressed air applications.", color: "28 90% 52%", num: "01" },
  { title: "Material Handling Equipment", desc: "Complete Viato-branded pallet trucks, stackers, dock levelers, EOT cranes and hoists.", color: "210 80% 55%", num: "02" },
  { title: "Packaging Solutions", desc: "PP corrugated boxes, returnable crates and wooden pallets from our own facility.", color: "150 60% 45%", num: "03" },
  { title: "Industrial Chemicals", desc: "ISO certified anti spatter, nozzle gel, rust convertor and degreasing chemicals.", color: "270 60% 55%", num: "04" },
  { title: "Industrial Consumables", desc: "Welding consumables, grinding wheels, safety PPE, gloves and general hardware.", color: "0 70% 55%", num: "05" },
  { title: "After-Sales Services", desc: "Breakdown repairs, AMC/CMC contracts, refurbishing and spare parts supply.", color: "180 60% 45%", num: "06" },
];

const About = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);
  const [activeSolution, setActiveSolution] = useState<number | null>(null);

  return (
    <Layout>

      {/* ══════════ HERO ══════════ */}
      <section ref={heroRef} className="relative py-28 md:py-44 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img src={aboutTeamImg} alt="Viato Industries Team" className="w-full h-[120%] object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-foreground/75" />
        <div className="absolute inset-0 hero-mesh" />

        {/* Floating badge top right */}
        <motion.div
          className="absolute top-12 right-8 md:right-16 hidden md:flex flex-col items-center gap-1 px-5 py-4 rounded-2xl bg-accent/15 border border-accent/25 backdrop-blur-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="font-display text-2xl font-bold text-accent">2013</span>
          <span className="text-xs text-primary-foreground/60 font-medium">Est. Year</span>
        </motion.div>

        <div className="relative container-wide">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-accent text-sm font-semibold mb-6 border border-accent/20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Star className="h-3.5 w-3.5" /> About Viato Industries
            </motion.span>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Just Best,{" "}
              <span className="text-accent">Just Legendary</span>
            </h1>
            <p className="text-primary-foreground/65 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Viato Industries is a complete material handling, gas pipeline and packaging solution provider — serving industries across western India since 2013.
            </p>

            {/* Inline stats row */}
            <motion.div
              className="flex flex-wrap gap-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {[
                { value: 500, suffix: "+", label: "Projects" },
                { value: 100, suffix: "+", label: "Clients" },
                { value: 11, suffix: "+", label: "Years" },
                { value: 10, suffix: "+", label: "Industries" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-accent">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-xs text-primary-foreground/50 mt-0.5 font-medium uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ WHO WE ARE ══════════ */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="container-narrow relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <SectionHeading badge="Who We Are" title="Your Trusted Industrial Partner" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Shri Balaji Group was established in 2013 and has grown and diversified into multi-products and services with presence across western India. We value integrity, trust, service and respect for individuals and for the environment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The core value of Viato Industries is <strong className="text-foreground">customer first</strong> — to become a complete solution provider with priority. We offer the best product for every required application, winning the trust of prestigious customers across western India.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The company has core competency in providing solutions to the industry in secondary packaging with its own manufacturing facility. For material handling and warehousing solutions, we offer our own Viato-branded products.
              </p>
              <MagneticButton>
                <Link to="/services">
                  <Button className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold rounded-full px-8 h-12 shadow-lg shadow-accent/20">
                    Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </MagneticButton>
            </AnimateIn>

            {/* Right — certifications + highlights */}
            <AnimateIn direction="right">
              <div className="space-y-4">
                {[
                  { title: "ISO 9001:2015 Certified", desc: "Quality management systems certified for all our products and services." },
                  { title: "Own Manufacturing Facility", desc: "In-house production for PP boxes, corrugated packaging and Viato-brand equipment." },
                  { title: "Turnkey Project Execution", desc: "Complete EPC — from design and fabrication to installation and commissioning." },
                  { title: "Pan-India Service Network", desc: "Offices in Aurangabad and Pune with service reach across western India." },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50 group hover:border-accent/30 transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="h-10 w-10 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center shrink-0 transition-colors">
                      <CheckCircle className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground text-sm mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ══════════ SOLUTIONS — Interactive numbered cards ══════════ */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <SectionHeading
            badge="What We Do"
            title="Complete Industrial Solutions"
            description="Hover over each solution to explore what we deliver."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((item, i) => (
              <motion.div
                key={item.title}
                className="relative p-7 rounded-2xl bg-card border cursor-default overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                animate={{
                  borderColor: activeSolution === i ? `hsl(${item.color} / 0.5)` : "hsl(214 20% 88% / 0.5)",
                  boxShadow: activeSolution === i ? `0 20px 40px -10px hsl(${item.color} / 0.2)` : "none",
                }}
                onMouseEnter={() => setActiveSolution(i)}
                onMouseLeave={() => setActiveSolution(null)}
              >
                {/* Big background number */}
                <span
                  className="absolute top-4 right-5 font-display text-6xl font-bold transition-all duration-300"
                  style={{ color: activeSolution === i ? `hsl(${item.color} / 0.15)` : "hsl(214 20% 88% / 0.4)" }}
                >
                  {item.num}
                </span>

                {/* Top accent line */}
                <motion.div
                  className="absolute top-0 left-0 h-[3px] rounded-t-2xl"
                  style={{ backgroundColor: `hsl(${item.color})` }}
                  animate={{ width: activeSolution === i ? "100%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />

                <div
                  className="h-11 w-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{ backgroundColor: `hsl(${item.color} / ${activeSolution === i ? 0.2 : 0.1})` }}
                >
                  <span className="font-display font-bold text-sm" style={{ color: `hsl(${item.color})` }}>{item.num}</span>
                </div>
                <h4 className="font-display font-bold text-foreground mb-2 text-lg leading-tight">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ INDUSTRIES — Interactive grid ══════════ */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading
            badge="Industries We Serve"
            title="Across All Major Sectors"
            description="Hover over an industry to see what we deliver for that sector."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              const isActive = activeIndustry === i;
              return (
                <motion.div
                  key={ind.name}
                  className="relative p-5 rounded-2xl border cursor-default overflow-hidden text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  animate={{
                    borderColor: isActive ? "hsl(28 90% 52% / 0.5)" : "hsl(214 20% 88% / 0.5)",
                    backgroundColor: isActive ? "hsl(28 90% 52% / 0.05)" : "hsl(var(--card))",
                    y: isActive ? -6 : 0,
                    boxShadow: isActive ? "0 20px 40px -10px hsl(28 90% 52% / 0.2)" : "none",
                  }}
                  onMouseEnter={() => setActiveIndustry(i)}
                  onMouseLeave={() => setActiveIndustry(null)}
                >
                  <motion.div
                    className="h-12 w-12 rounded-xl mx-auto mb-3 flex items-center justify-center transition-colors duration-300"
                    animate={{ backgroundColor: isActive ? "hsl(28 90% 52% / 0.15)" : "hsl(214 20% 94%)" }}
                  >
                    <Icon className="h-5 w-5 transition-colors duration-300" style={{ color: isActive ? "hsl(28 90% 52%)" : "hsl(215 20% 55%)" }} />
                  </motion.div>
                  <p className="font-display font-bold text-sm text-foreground mb-1">{ind.name}</p>

                  {/* Tooltip desc on hover */}
                  <motion.p
                    className="text-xs text-muted-foreground leading-snug"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: isActive ? 1 : 0, height: isActive ? "auto" : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {ind.desc}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ MISSION & VISION ══════════ */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <SectionHeading badge="Our Purpose" title="Mission & Vision" />
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To provide complete industrial solutions to customer needs which bring peace of mind and help customers focus on their core activity. We strive to be the most trusted turnkey solution provider across western India.",
                color: "28 90% 52%",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To become the most legendary industrial solutions brand in India — recognized for quality, reliability and customer-first approach in material handling, gas pipeline and packaging solutions.",
                color: "210 80% 55%",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="p-8 rounded-2xl bg-card border border-border/50 relative overflow-hidden group"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-industrial-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <div
                    className="h-14 w-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300"
                    style={{ backgroundColor: `hsl(${item.color} / 0.1)` }}
                  >
                    <item.icon className="h-7 w-7" style={{ color: `hsl(${item.color})` }} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ VALUES ══════════ */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading badge="Our Values" title="What Drives Us" description="Our core values shape every project we deliver and every relationship we build." />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <motion.div
                  className="p-7 rounded-2xl bg-card border border-border/50 text-center relative group overflow-hidden"
                  whileHover={{ y: -8 }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 50% 0%, hsl(${v.color} / 0.06), transparent 70%)` }}
                  />
                  <div
                    className="h-14 w-14 rounded-2xl flex items-center justify-center mb-5 mx-auto transition-colors duration-300"
                    style={{ backgroundColor: `hsl(${v.color} / 0.1)` }}
                  >
                    <v.icon className="h-7 w-7" style={{ color: `hsl(${v.color})` }} />
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-2 text-lg">{v.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ══════════ OFFICES ══════════ */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <SectionHeading badge="Find Us" title="Our Offices" description="Two locations serving clients across western India." />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                tag: "Registered Office",
                name: "Aurangabad HQ",
                address: "K-217, Waluj MIDC, Aurangabad – 431136, Maharashtra",
                phone: "+91 7722090400",
                email: "viatoindustries@gmail.com",
                color: "28 90% 52%",
              },
              {
                tag: "Pune Branch",
                name: "Phoenix Properties",
                address: "At. Post – Shikrapur, Pune, Maharashtra",
                phone: "7722090400 / 9834731352",
                email: "rajnish@viato.in",
                gstin: "27AATFV0946P1Z6",
                contact: "Mr. Bharat Gundhale",
                color: "210 80% 55%",
              },
            ].map((office, i) => (
              <motion.div
                key={office.name}
                className="p-8 rounded-2xl bg-card border border-border/50 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 transition-transform duration-400 scale-x-0 group-hover:scale-x-100 origin-left" style={{ backgroundColor: `hsl(${office.color})` }} />
                <span className="text-xs uppercase tracking-widest font-bold mb-2 block" style={{ color: `hsl(${office.color})` }}>{office.tag}</span>
                <h3 className="font-display text-xl font-bold text-foreground mb-5">{office.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0" style={{ color: `hsl(${office.color})` }} />
                    <p className="text-muted-foreground text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0" style={{ color: `hsl(${office.color})` }} />
                    <p className="text-muted-foreground text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0" style={{ color: `hsl(${office.color})` }} />
                    <p className="text-muted-foreground text-sm">{office.email}</p>
                  </div>
                  {office.gstin && (
                    <p className="text-xs text-muted-foreground pt-2 border-t border-border">
                      GSTIN: <span className="font-mono font-medium text-foreground">{office.gstin}</span>
                      {office.contact && <span className="ml-3">· {office.contact}</span>}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <IndustrialCTA />
    </Layout>
  );
};

export default About;
