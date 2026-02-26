import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
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
  },
  {
    title: "Material Handling",
    desc: "Forklifts, pallet trucks, stackers, reach trucks with maintenance, repair and AMC services.",
    icon: Wrench,
    img: materialHandlingImg,
    link: "/services",
  },
  {
    title: "Packaging Solutions",
    desc: "PP boxes, corrugated packaging, returnable solutions and industrial packaging materials.",
    icon: Package,
    img: packagingImg,
    link: "/products",
  },
  {
    title: "Engineering Services",
    desc: "Installation, commissioning, maintenance, safety inspection, certification and industrial consultancy.",
    icon: HardHat,
    img: engineeringImg,
    link: "/services",
  },
];

const whyUs = [
  { title: "Turnkey Solutions", desc: "End-to-end project execution from design to commissioning.", icon: Zap },
  { title: "Experienced Team", desc: "Skilled engineers with deep industrial domain expertise.", icon: Users },
  { title: "Quality Assurance", desc: "Rigorous quality standards and safety compliance.", icon: Award },
  { title: "Trusted Partner", desc: "Serving leading industrial clients across India.", icon: ShieldCheck },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Industrial facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-industrial-gradient opacity-85" />
        </div>
        <div className="relative container-wide py-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 animate-fade-in">
              Complete Material Handling & Packaging Solution
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
              Complete Industrial Material Handling & Gas Pipeline Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Viato Industries delivers turnkey industrial solutions — from gas pipeline installation to material handling equipment — trusted by leading manufacturers across India.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/request-quote">
                <Button size="lg" className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold text-base px-8 h-12">
                  Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 h-12">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served Ticker */}
      <section className="bg-card border-b border-border">
        <div className="container-wide py-8">
          <p className="text-sm text-muted-foreground text-center mb-6 uppercase tracking-wider font-medium">
            Trusted by industries across India
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {industries.map((ind) => (
              <div key={ind.name} className="flex items-center gap-2 text-foreground/70">
                <ind.icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading
            badge="Our Services"
            title="Industrial Solutions You Can Count On"
            description="From gas pipeline systems to material handling equipment, we deliver comprehensive industrial solutions with excellence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.link}
                className="group relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <s.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-accent text-sm font-medium group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-industrial-gradient">
        <div className="container-wide">
          <SectionHeading
            badge="Why Viato"
            title="Why Choose Viato Industries?"
            description="We bring decades of industrial expertise, delivering reliable and cost-effective solutions."
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
              >
                <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card border-y border-border">
        <div className="container-wide py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "8+", label: "Industries Served" },
              { value: "100+", label: "Happy Clients" },
              { value: "15+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl md:text-4xl font-bold text-accent">{stat.value}</div>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <SectionHeading
            badge="Get Started"
            title="Ready to Optimize Your Industrial Operations?"
            description="Contact us today for a free consultation and discover how Viato Industries can transform your facility."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote">
              <Button size="lg" className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold text-base px-8 h-12">
                Request Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="font-semibold text-base px-8 h-12">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
