import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import gasPipelineImg from "@/assets/gas-pipeline.jpg";
import materialHandlingImg from "@/assets/material-handling.jpg";
import engineeringImg from "@/assets/engineering-services.jpg";
import { ArrowRight, CheckCircle, Flame, Wrench, HardHat, Settings } from "lucide-react";

const servicesList = [
  {
    id: "gas-pipeline",
    title: "Gas Pipeline & Manifold Systems",
    icon: Flame,
    img: gasPipelineImg,
    desc: "We design, supply, install, and commission complete industrial gas pipeline systems for Oxygen, Nitrogen, Argon, CO2, LPG, and compressed air. Our systems include gas manifold installations, cryogenic tank pipelines, and cylinder filling manifold systems using Copper, SS, MS, GI, and HDPE pipelines.",
    benefits: [
      "Continuous uninterrupted gas supply",
      "Improved workplace safety",
      "Reduced gas wastage",
      "Increased operational efficiency",
      "Lower operating costs",
      "Turnkey installation & commissioning",
    ],
  },
  {
    id: "material-handling",
    title: "Material Handling Equipment",
    icon: Wrench,
    img: materialHandlingImg,
    desc: "We supply, service, and maintain a complete range of material handling equipment including forklifts, pallet trucks, stackers, reach trucks, and tow trucks. Our comprehensive AMC services and spare parts supply ensure your equipment runs at peak performance.",
    benefits: [
      "Wide range of equipment options",
      "Expert maintenance & repair services",
      "Annual Maintenance Contracts (AMC)",
      "Genuine spare parts supply",
      "Reduced downtime",
      "Cost-effective solutions",
    ],
  },
  {
    id: "engineering",
    title: "Engineering Services",
    icon: HardHat,
    img: engineeringImg,
    desc: "Our experienced engineering team provides end-to-end services including installation & commissioning, preventive maintenance, equipment refurbishment, safety inspection & certification, and industrial consultancy for all your facility needs.",
    benefits: [
      "Installation & commissioning",
      "Preventive maintenance programs",
      "Equipment refurbishment",
      "Safety inspection & certification",
      "Industrial consultancy",
      "24/7 support available",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & AMC",
    icon: Settings,
    img: engineeringImg,
    desc: "Keep your industrial equipment running at optimal performance with our comprehensive maintenance services and Annual Maintenance Contracts. We ensure minimal downtime and maximum productivity for your facility.",
    benefits: [
      "Scheduled preventive maintenance",
      "Emergency breakdown support",
      "Spare parts management",
      "Performance monitoring",
      "Cost-effective AMC plans",
      "Experienced service technicians",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-industrial-gradient py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">Our Services</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Comprehensive Industrial Services
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              From gas pipeline installation to material handling — we deliver end-to-end industrial solutions with precision and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {servicesList.map((s, i) => (
        <section key={s.id} id={s.id} className={`section-padding ${i % 2 === 0 ? "bg-background" : "bg-muted"}`}>
          <div className="container-narrow">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "md:[direction:rtl] md:[&>*]:dir-ltr" : ""}`}>
              <div className="rounded-xl overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-auto object-cover rounded-xl" />
              </div>
              <div style={{ direction: "ltr" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">{s.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to="/request-quote">
                  <Button className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-industrial-gradient">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Need a Custom Solution?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Our engineering team can design and deliver tailored solutions for your specific industrial requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote">
              <Button size="lg" className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold px-8 h-12">
                Request Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 h-12">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
