import { Flame, FlaskConical, Package, Wrench } from "lucide-react";
import type { ProductCategory } from "@/components/ProductCard";

export const productCategories: ProductCategory[] = [
  {
    title: "Gas Manifold & Pipeline",
    slug: "gas-pipeline",
    desc: "Complete industrial gas pipeline installation & manifold systems for uninterrupted gas supply with maximum safety.",
    icon: Flame,
    subProducts: [
      { name: "Industrial Gas Pipeline Systems", slug: "industrial-gas-pipeline" },
      { name: "Gas Manifold Systems", slug: "gas-manifold-systems" },
      { name: "Cryogenic Tank Pipeline", slug: "cryogenic-tank-pipeline" },
      { name: "Cylinder Filling Manifold", slug: "cylinder-filling-manifold" },
      { name: "Copper / SS / MS / GI Pipeline", slug: "copper-ss-ms-gi-pipeline" },
    ],
  },
  {
    title: "Chemical Products",
    slug: "chemical-products",
    desc: "High-performance industrial chemicals for welding protection, rust treatment, and equipment maintenance.",
    icon: FlaskConical,
    subProducts: [
      { name: "Water Based Anti Spatter V-125", slug: "anti-spatter-v125" },
      { name: "Water Based Nozzle Gel V-101", slug: "nozzle-gel-v101" },
      { name: "Rust Convertor V-301", slug: "rust-convertor-v301" },
      { name: "Degreasing Chemical V-401", slug: "degreasing-chemical-v401" },
    ],
  },
  {
    title: "Packaging Solutions",
    slug: "packaging-solutions",
    desc: "Durable, returnable industrial packaging designed for safe transportation and cost-effective storage.",
    icon: Package,
    subProducts: [
      { name: "Polypropylene Boxes", slug: "polypropylene-boxes" },
      { name: "PP Corrugated Crates", slug: "pp-corrugated-crates" },
      { name: "Returnable Packaging Boxes", slug: "returnable-packaging" },
      { name: "Industrial Packaging Boxes", slug: "industrial-packaging" },
    ],
  },
  {
    title: "Industrial Consumables",
    slug: "industrial-consumables",
    desc: "Essential industrial consumables for welding, rust protection, and facility maintenance operations.",
    icon: Wrench,
    subProducts: [
      { name: "Welding Anti Spatter Solution", slug: "welding-anti-spatter" },
      { name: "Nozzle Protection Gel", slug: "nozzle-protection-gel" },
      { name: "Industrial Cleaning Chemicals", slug: "industrial-cleaning" },
      { name: "Rust Protection Solutions", slug: "rust-protection" },
    ],
  },
];
