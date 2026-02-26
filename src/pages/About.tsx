import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { AnimateIn, StaggerContainer, StaggerItem, AnimatedCounter, MagneticButton } from "@/components/animations";
import { motion } from "framer-motion";
import aboutTeamImg from "@/assets/about-team.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Award, Users, ShieldCheck, ArrowRight, Star } from "lucide-react";

const values = [
  { icon: Award, title: "Quality Excellence", desc: "We maintain the highest standards in every project we undertake." },
  { icon: Users, title: "Customer Focus", desc: "Your success is our priority. We build lasting partnerships." },
  { icon: ShieldCheck, title: "Safety First", desc: "Rigorous safety protocols and compliance across all operations." },
  { icon: Heart, title: "Integrity", desc: "Transparent, honest, and ethical in all business dealings." },
];

const milestones = [
  { year: "2009", event: "Company Founded" },
  { year: "2012", event: "100th Project Delivered" },
  { year: "2016", event: "Expanded to 6+ Industries" },
  { year: "2020", event: "500+ Projects Milestone" },
  { year: "2024", event: "Serving 100+ Active Clients" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={aboutTeamImg}
            alt="Our team"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-industrial-gradient opacity-85" />
          <div className="absolute inset-0 hero-mesh" />
        </div>
        <div className="relative container-wide">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-accent text-sm font-semibold mb-6 border border-accent/20">
              <Star className="h-3.5 w-3.5" /> About Us
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-5 leading-tight">
              Building India's Industrial{" "}
              <span className="text-accent">Future</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              Viato Industries is a leading provider of turnkey industrial solutions based in Aurangabad, Maharashtra — delivering excellence since 2009.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background relative overflow-hidden mesh-gradient">
        <div className="container-narrow relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <SectionHeading badge="Who We Are" title="Your Trusted Industrial Partner" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Viato Industries provides comprehensive industrial solutions including gas pipeline systems, material handling equipment, packaging solutions, and engineering services to diverse industries across India.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With over 15 years of experience and a team of skilled engineers, we have successfully delivered 500+ projects for leading companies in automotive, pharmaceutical, steel, chemical, and manufacturing sectors.
              </p>
              <MagneticButton>
                <Link to="/services">
                  <Button className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold rounded-full px-8 h-12 shadow-lg shadow-accent/20">
                    Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </MagneticButton>
            </AnimateIn>
            <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
              {[
                { value: 15, suffix: "+", label: "Years Experience" },
                { value: 500, suffix: "+", label: "Projects Done" },
                { value: 100, suffix: "+", label: "Happy Clients" },
                { value: 8, suffix: "+", label: "Industries" },
              ].map((s) => (
                <StaggerItem key={s.label}>
                  <motion.div
                    className="p-6 rounded-2xl glass-card text-center"
                    whileHover={{ y: -5, boxShadow: "0 20px 40px -10px hsl(28 90% 52% / 0.15)" }}
                  >
                    <div className="font-display text-3xl font-bold text-accent">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 font-medium">{s.label}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <SectionHeading badge="Our Journey" title="Milestones That Define Us" />
          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8 md:space-y-0">
              {milestones.map((m, i) => (
                <AnimateIn key={m.year} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`md:flex items-center gap-8 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="p-6 rounded-2xl bg-card border border-border inline-block">
                        <span className="font-display text-2xl font-bold text-accent">{m.year}</span>
                        <p className="text-foreground font-medium mt-1">{m.event}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex h-4 w-4 rounded-full bg-accent border-4 border-background shrink-0 relative z-10" />
                    <div className="flex-1" />
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To provide world-class industrial solutions that enhance operational efficiency, safety, and productivity for our clients. We strive to be the most reliable turnkey solutions provider in India.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To become India's leading integrated industrial solutions company, recognized for innovation, quality, and customer satisfaction across all sectors we serve.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="p-8 rounded-2xl bg-card border border-border/50 relative overflow-hidden group"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-industrial-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <SectionHeading badge="Our Values" title="What Drives Us" description="Our core values shape every project we deliver and every relationship we build." />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <motion.div
                  className="p-7 rounded-2xl bg-card border border-border/50 text-center relative group"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -10px hsl(215 80% 22% / 0.1)" }}
                >
                  <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-accent/20 transition-colors">
                    <v.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-2 text-lg">{v.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-industrial-gradient relative overflow-hidden grain-overlay">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
        <div className="container-narrow text-center relative z-10">
          <AnimateIn>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-5">Partner With Viato Industries</h2>
            <p className="text-primary-foreground/70 mb-10 max-w-xl mx-auto text-lg">
              Let us help you optimize your industrial operations with our comprehensive solutions.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <MagneticButton className="inline-block">
              <Link to="/request-quote">
                <Button size="lg" className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold text-base px-10 h-14 rounded-full shadow-xl shadow-accent/25">
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

export default About;
