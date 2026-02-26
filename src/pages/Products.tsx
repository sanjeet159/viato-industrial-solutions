import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import gasPipelineImg from "@/assets/gas-pipeline.jpg";
import packagingImg from "@/assets/packaging.jpg";
import materialHandlingImg from "@/assets/material-handling.jpg";
import engineeringImg from "@/assets/engineering-services.jpg";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Gas Manifold Systems",
    desc: "High-quality gas manifold systems for industrial gas distribution. Includes cylinder filling manifolds, automatic changeover systems, and custom manifold configurations.",
    img: gasPipelineImg,
    products: ["Cylinder Filling Manifolds", "Automatic Changeover Systems", "Manual Manifold Systems", "Cryogenic Pipeline Systems", "Gas Distribution Panels"],
  },
  {
    title: "Packaging Products",
    desc: "Durable industrial packaging solutions designed for safe transportation and storage. Returnable and sustainable options available.",
    img: packagingImg,
    products: ["Polypropylene Boxes & Crates", "Corrugated Boxes", "Returnable Packaging Solutions", "Custom Industrial Packaging", "Protective Packaging Materials"],
  },
  {
    title: "Material Handling Equipment",
    desc: "Complete range of material handling solutions for warehouses, factories, and distribution centers.",
    img: materialHandlingImg,
    products: ["Forklifts (Electric & Diesel)", "Pallet Trucks", "Stackers", "Reach Trucks", "Tow Trucks"],
  },
  {
    title: "Welding Consumables",
    desc: "High-performance welding consumables and equipment protection products for industrial welding applications.",
    img: engineeringImg,
    products: ["Water-based Anti-spatter Solutions", "Equipment Protection Products", "Welding Accessories", "Safety Equipment"],
  },
];

const Products = () => {
  return (
    <Layout>
      <section className="bg-industrial-gradient py-20 md:py-28">
        <div className="container-wide">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">Our Products</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Industrial Products & Equipment
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Quality industrial products sourced and supplied to meet the demands of modern manufacturing.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <SectionHeading badge="Product Categories" title="Browse Our Product Range" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.title} className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{cat.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{cat.desc}</p>
                  <ul className="space-y-1.5 mb-6">
                    {cat.products.map((p) => (
                      <li key={p} className="text-sm text-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link to="/request-quote">
                    <Button variant="outline" className="font-semibold text-sm">
                      Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-industrial-gradient">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Can't Find What You Need?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            We source and supply a wide range of industrial products. Contact us with your specific requirements.
          </p>
          <Link to="/request-quote">
            <Button size="lg" className="bg-industrial-gradient-accent text-accent-foreground hover:opacity-90 font-semibold px-8 h-12">
              Request Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
