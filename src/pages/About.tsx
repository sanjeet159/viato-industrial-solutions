import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import aboutTeamImg from "@/assets/about-team.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Award, Users, ShieldCheck, ArrowRight } from "lucide-react";

const values = [
  { icon: Award, title: "Quality Excellence", desc: "We maintain the highest standards in every project we undertake." },
  { icon: Users, title: "Customer Focus", desc: "Your success is our priority. We build lasting partnerships." },
  { icon: ShieldCheck, title: "Safety First", desc: "Rigorous safety protocols and compliance across all operations." },
  { icon: Heart, title: "Integrity", desc: "Transparent, honest, and ethical in all business dealings." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img src={aboutTeamImg} alt="Our team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-industrial-gradient opacity-85" />
        </div>
        <div className="relative container-wide">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">About Us</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Building India's Industrial Future
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Viato Industries is a leading provider of turnkey industrial solutions based in Aurangabad, Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading badge="Who We Are" title="Your Trusted Industrial Partner" centered={false} />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Viato Industries provides comprehensive industrial solutions including gas pipeline systems, material handling equipment, packaging solutions, and engineering services to diverse industries across India.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 15 years of experience and a team of skilled engineers, we have successfully delivered 500+ projects for leading companies in automotive, pharmaceutical, steel, chemical, and manufacturing sectors.
              </p>
              <Link to="/services">
                <Button className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold">
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Projects Done" },
                { value: "100+", label: "Happy Clients" },
                { value: "8+", label: "Industries" },
              ].map((s) => (
                <div key={s.label} className="p-6 rounded-xl bg-card border border-border text-center">
                  <div className="font-display text-2xl font-bold text-accent">{s.value}</div>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-card border border-border">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class industrial solutions that enhance operational efficiency, safety, and productivity for our clients. We strive to be the most reliable turnkey solutions provider in India.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-card border border-border">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India's leading integrated industrial solutions company, recognized for innovation, quality, and customer satisfaction across all sectors we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading badge="Our Values" title="What Drives Us" description="Our core values shape every project we deliver and every relationship we build." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-xl bg-card border border-border text-center">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                  <v.icon className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-2">{v.title}</h4>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-industrial-gradient">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Partner With Viato Industries</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Let us help you optimize your industrial operations with our comprehensive solutions.
          </p>
          <Link to="/request-quote">
            <Button size="lg" className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold text-base px-8 h-12">
              Request Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
