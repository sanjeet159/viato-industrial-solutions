import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Pill, Cog, Factory, Building, FlaskConical, ArrowRight } from "lucide-react";

const industries = [
  {
    name: "Automotive",
    icon: Car,
    desc: "Gas pipeline systems, material handling equipment, and packaging solutions for automotive OEMs and Tier-1 suppliers.",
    services: ["Gas Pipeline Installation", "Forklift Supply & Maintenance", "Returnable Packaging", "Engineering Services"],
  },
  {
    name: "Pharmaceutical",
    icon: Pill,
    desc: "Clean gas pipeline systems, specialized material handling, and compliant packaging solutions for pharma manufacturing.",
    services: ["SS Gas Pipelines", "Clean Room Equipment", "Pharma-grade Packaging", "Safety Certification"],
  },
  {
    name: "Steel & Metals",
    icon: Cog,
    desc: "Heavy-duty gas supply systems, industrial gas pipelines, and robust material handling solutions for steel plants.",
    services: ["Industrial Gas Pipelines", "Heavy-duty Forklifts", "Cryogenic Systems", "Maintenance & AMC"],
  },
  {
    name: "Manufacturing",
    icon: Factory,
    desc: "Complete turnkey solutions for general manufacturing facilities — from gas supply to warehouse management.",
    services: ["Turnkey Gas Systems", "Warehouse Equipment", "Packaging Solutions", "Consultancy"],
  },
  {
    name: "EPC & Construction",
    icon: Building,
    desc: "Gas pipeline installation, equipment supply, and engineering services for EPC projects across India.",
    services: ["Project-based Gas Pipelines", "Equipment Leasing", "On-site Engineering", "Commissioning"],
  },
  {
    name: "Chemical",
    icon: FlaskConical,
    desc: "Specialized gas handling systems, corrosion-resistant pipelines, and safety-compliant equipment for chemical plants.",
    services: ["Corrosion-resistant Pipelines", "Safety Systems", "Material Handling", "Inspection Services"],
  },
];

const Industries = () => {
  return (
    <Layout>
      <section className="bg-industrial-gradient py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">Industries</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Industries We Serve
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Delivering specialized industrial solutions across diverse sectors with deep domain expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading badge="Our Expertise" title="Sector-Specific Solutions" description="We understand the unique challenges of each industry and deliver tailored solutions." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.name} className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <ind.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{ind.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{ind.desc}</p>
                <ul className="space-y-1.5">
                  {ind.services.map((s) => (
                    <li key={s} className="text-sm text-foreground flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-industrial-gradient">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Your Industry Not Listed?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            We serve many more sectors. Contact us to discuss how we can support your specific industrial needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold px-8 h-12">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
