import { Flame, FlaskConical, Package, Wrench, PipetteIcon, Droplets, ShieldCheck, SprayCan, Box, Layers, RotateCcw, Warehouse, Zap, CircleDot, Beaker, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import gasPipelineImg from "@/assets/products/gas-pipeline.jpg";
import chemicalImg from "@/assets/products/chemical-products.jpg";
import packagingImg from "@/assets/products/packaging-solutions.jpg";
import consumablesImg from "@/assets/products/industrial-consumables.jpg";

export interface SubProduct {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
}

export interface ProductCategory {
  title: string;
  slug: string;
  desc: string;
  description: string;
  icon: LucideIcon;
  image: string;
  subProducts: SubProduct[];
}

export const productCategories: ProductCategory[] = [
  {
    title: "Gas Manifold & Pipeline",
    slug: "gas-pipeline",
    desc: "Complete industrial gas pipeline installation & manifold systems for uninterrupted gas supply with maximum safety.",
    description: "End-to-end gas infrastructure solutions for industrial facilities.",
    icon: Flame,
    subProducts: [
      { name: "Gas Pipeline Systems", slug: "gas-pipeline-systems", description: "Complete industrial gas pipeline installation", icon: PipetteIcon },
      { name: "Gas Manifold Systems", slug: "gas-manifold-systems", description: "Multi-cylinder manifold configurations", icon: Layers },
      { name: "Cryogenic Tank Pipeline", slug: "cryogenic-tank-pipeline", description: "Specialized cryogenic gas delivery systems", icon: Zap },
      { name: "Cylinder Filling Manifold", slug: "cylinder-filling-manifold", description: "High-pressure cylinder filling stations", icon: CircleDot },
      { name: "Industrial Gas Installation", slug: "industrial-gas-installation", description: "Full-service gas infrastructure setup", icon: Wrench },
    ],
  },
  {
    title: "Chemical Products",
    slug: "chemical-products",
    desc: "High-performance industrial chemicals for welding protection, rust treatment, and equipment maintenance.",
    description: "Specialized chemicals for welding, rust treatment & maintenance.",
    icon: FlaskConical,
    subProducts: [
      { name: "Water Based Anti Spatter V-125", slug: "anti-spatter-v125", description: "Premium anti-spatter for MIG/MAG welding", icon: SprayCan },
      { name: "Water Based Nozzle Gel V-101", slug: "nozzle-gel-v101", description: "Extends nozzle life & reduces downtime", icon: Droplets },
      { name: "Rust Convertor V-301", slug: "rust-convertor-v301", description: "Converts rust into protective coating", icon: ShieldCheck },
      { name: "Degreasing Chemical V-401", slug: "degreasing-chemical-v401", description: "Industrial-strength surface degreaser", icon: Beaker },
    ],
  },
  {
    title: "Packaging Solutions",
    slug: "packaging-solutions",
    desc: "Durable, returnable industrial packaging designed for safe transportation and cost-effective storage.",
    description: "Returnable & durable packaging for industrial logistics.",
    icon: Package,
    subProducts: [
      { name: "Polypropylene Boxes", slug: "polypropylene-boxes", description: "Lightweight, durable PP containers", icon: Box },
      { name: "PP Corrugated Crates", slug: "pp-corrugated-crates", description: "Corrugated polypropylene storage crates", icon: Layers },
      { name: "Returnable Packaging Boxes", slug: "returnable-packaging", description: "Cost-effective reusable packaging", icon: RotateCcw },
      { name: "Industrial Packaging Boxes", slug: "industrial-packaging", description: "Heavy-duty industrial containers", icon: Warehouse },
    ],
  },
  {
    title: "Industrial Consumables",
    slug: "industrial-consumables",
    desc: "Essential industrial consumables for welding, rust protection, and facility maintenance operations.",
    description: "Welding, cleaning & maintenance consumables for industry.",
    icon: Wrench,
    subProducts: [
      { name: "Welding Anti Spatter Solution", slug: "welding-anti-spatter", description: "Prevents spatter adhesion during welding", icon: SprayCan },
      { name: "Nozzle Gel", slug: "nozzle-gel", description: "Protective gel for welding nozzles", icon: Droplets },
      { name: "Industrial Chemicals", slug: "industrial-chemicals", description: "Broad-spectrum industrial chemical solutions", icon: Beaker },
      { name: "Cleaning Solutions", slug: "cleaning-solutions", description: "Professional-grade cleaning products", icon: Sparkles },
    ],
  },
];
