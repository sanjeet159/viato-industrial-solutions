import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { AnimateIn, StaggerContainer, StaggerItem, AnimatedCounter, MagneticButton } from "@/components/animations";
import { motion } from "framer-motion";
import aboutTeamImg from "@/assets/about-team.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Award, Users, ShieldCheck, ArrowRight, Star, CheckCircle } from "lucide-react";

const values = [
  { icon: Award, title: "Quality Excellence", desc: "ISO 9001:2015 certified company maintaining highest standards in every project." },
  { icon: Users, title: "Customer First", desc: "Our core value — becoming a complete solution provider with customer priority." },
  { icon: ShieldCheck, title: "Safety First", desc: "Rigorous safety protocols including pneumatic testing at 1.5x working pressure." },
  { icon: Heart, title: "Integrity", desc: "Transparent, honest and ethical in all business dealings across western India." },
];

const industries = [
  "Automotive",
  "EPC",
  "Pharmaceutical",
  "Chemical",
  "Construction",
  "Earthmoving Equipment",
  "Consumer Durables",
  "Additive Manufacturing",
  "Steel",
  "Railways",
  "Defence",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={aboutTeamImg}
            alt="Viato Industries Team"
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
              Just Best,{" "}
              <span className="text-accent">Just Legendary</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              Viato Industries is a complete material handling, gas pipeline and packaging solution provider based in Aurangabad, Maharashtra — serving industries across western India since 2013.
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
            <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
              {[
                { value: 90, suffix: "+", label: "Projects Completed" },
                { value: 50, suffix: "+", label: "Happy Clients" },
                { value: 8, suffix: "+", label: "Years Experience" },
                { value: 7, suffix: "+", label: "Industries Served" },
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

      {/* What We Do */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <SectionHeading
            badge="What We Do"
            title="Complete Industrial Solutions"
            description="From gas pipeline installation to material handling equipment and packaging — we deliver end-to-end solutions."
          />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              {
                title: "Gas Manifold & Pipeline",
                desc: "Turnkey installation of industrial and medical gas manifold systems and pipelines for Oxygen, Nitrogen, Argon, CO2, LPG and compressed air applications.",
              },
              {
                title: "Material Handling Equipment",
                desc: "Complete range of Viato-branded pallet trucks, stackers, dock levelers, EOT cranes, hoists and storage racking systems.",
              },
              {
                title: "Packaging Solutions",
                desc: "Polypropylene (PP) corrugated boxes, returnable crates, corrugated cardboard boxes and wooden pallets manufactured at our own facility.",
              },
              {
                title: "Industrial Chemicals",
                desc: "ISO 9001:2015 certified water-based anti spatter, nozzle gel, rust convertor and degreasing chemicals for the welding and manufacturing industry.",
              },
              {
                title: "Industrial Consumables",
                desc: "Complete supply of welding consumables, cutting & grinding wheels, safety PPE, gloves and general hardware for manufacturing industries.",
              },
              {
                title: "After-Sales Services",
                desc: "Breakdown repairs, preventive maintenance, AMC/CMC contracts, equipment refurbishing and spare parts for forklifts, stackers and reach trucks.",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  className="p-7 rounded-2xl bg-card border border-border/50 relative group h-full"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-industrial-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-t-2xl" />
                  <h4 className="font-display font-bold text-foreground mb-3 text-lg">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <SectionHeading badge="Industries We Serve" title="Across All Major Sectors" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-8">
                We serve all major industrial segments, providing complete solutions that bring peace of mind and help customers focus on their core activity.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((ind) => (
                  <div key={ind} className="flex items-center gap-2.5 text-sm text-foreground/80">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                    {ind}
                  </div>
                ))}
              </div>
            </AnimateIn>
            <AnimateIn direction="right">
              <div className="p-8 rounded-2xl bg-card border border-border/50">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Our Offices</h3>
                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-accent font-semibold">Registered Office</span>
                    <p className="text-foreground font-medium mt-1">K-217, Waluj MIDC</p>
                    <p className="text-muted-foreground text-sm">Aurangabad – 431136, Maharashtra</p>
                    <p className="text-muted-foreground text-sm mt-1">Tel: +91 7722090400</p>
                    <p className="text-muted-foreground text-sm">Email: viatoindustries@gmail.com</p>
                  </div>
                  <div className="border-t border-border pt-6">
                    <span className="text-xs uppercase tracking-widest text-accent font-semibold">Pune Branch</span>
                    <p className="text-foreground font-medium mt-1">Phoenix Properties</p>
                    <p className="text-muted-foreground text-sm">At. Post – Shikrapur, Pune</p>
                    <p className="text-muted-foreground text-sm mt-1">GSTIN: 27AATFV0946P1Z6</p>
                    <p className="text-muted-foreground text-sm">Contact: Mr. Bharat Gundhale</p>
                    <p className="text-muted-foreground text-sm">Cell: 7722090400 / 9834731352</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.15}>
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To provide complete industrial solutions to customer needs which bring peace of mind and help customers focus on their core activity. We strive to be the most trusted turnkey solution provider across western India.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To become the most legendary industrial solutions brand in India — recognized for quality, reliability and customer-first approach in material handling, gas pipeline and packaging solutions.",
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
      <section className="section-padding bg-background">
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
      <IndustrialCTA />
    </Layout>
  );
};

export default About;
