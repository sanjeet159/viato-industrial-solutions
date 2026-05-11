import { Flame, FlaskConical, Package, Wrench, PipetteIcon, Droplets, ShieldCheck, SprayCan, Box, Layers, RotateCcw, Warehouse, Zap, CircleDot, Beaker, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import gasPipelineImg from "@/assets/products/gas-pipeline.jpg";
import chemicalImg from "@/assets/products/chemical-products.jpg";
import packagingImg from "@/assets/products/packaging-solutions.jpg";
import consumablesImg from "@/assets/products/industrial-consumables.jpg";

import v125_5l from "@/assets/products/v125-anti-spatter-5l.jpg";
import v125_5l_front from "@/assets/products/v125-anti-spatter-5l-front.jpg";
import v125_35l_drum from "@/assets/products/v125-anti-spatter-35l-drum.jpg";
import v125_spray from "@/assets/products/v125-anti-spatter-spray-500ml.jpg";
import nozzleGel from "@/assets/products/nozzle-gel-v101.jpg";
import rustConvertor from "@/assets/products/rust-convertor-v301.jpg";
import degreasingChem from "@/assets/products/degreasing-chemical-v401.jpg";

import gasPipelineSystems from "@/assets/products/gas-pipeline-systems.jpg";
import gasManifoldSystems from "@/assets/products/gas-manifold-systems.jpg";
import cryogenicTank from "@/assets/products/cryogenic-tank-pipeline.jpg";
import cylinderFilling from "@/assets/products/cylinder-filling-manifold.jpg";
import gasInstallation from "@/assets/products/industrial-gas-installation.jpg";
import polypropyleneBoxes from "@/assets/products/polypropylene-boxes.jpg";
import ppCorrugated from "@/assets/products/pp-corrugated-crates.jpg";
import returnablePackaging from "@/assets/products/returnable-packaging.jpg";
import industrialPackaging from "@/assets/products/industrial-packaging.jpg";
import weldingAntiSpatter from "@/assets/products/welding-anti-spatter.jpg";
import nozzleGelGeneric from "@/assets/products/nozzle-gel.jpg";
import industrialChemicals from "@/assets/products/industrial-chemicals.jpg";
import cleaningSolutions from "@/assets/products/cleaning-solutions.jpg";

export interface SubProduct {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  images?: string[];
  overview?: string[];
  features?: string[];
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
    image: gasPipelineImg,
    subProducts: [
      { name: "Gas Pipeline Systems", slug: "gas-pipeline-systems", description: "Complete industrial gas pipeline installation", icon: PipetteIcon, images: [gasPipelineSystems] },
      { name: "Gas Manifold Systems", slug: "gas-manifold-systems", description: "Multi-cylinder manifold configurations", icon: Layers, images: [gasManifoldSystems] },
      { name: "Cryogenic Tank Pipeline", slug: "cryogenic-tank-pipeline", description: "Specialized cryogenic gas delivery systems", icon: Zap, images: [cryogenicTank] },
      { name: "Cylinder Filling Manifold", slug: "cylinder-filling-manifold", description: "High-pressure cylinder filling stations", icon: CircleDot, images: [cylinderFilling] },
      { name: "Industrial Gas Installation", slug: "industrial-gas-installation", description: "Full-service gas infrastructure setup", icon: Wrench, images: [gasInstallation] },
    ],
  },
  {
    title: "Chemical Products",
    slug: "chemical-products",
    desc: "High-performance industrial chemicals for welding protection, rust treatment, and equipment maintenance.",
    description: "Specialized chemicals for welding, rust treatment & maintenance.",
    icon: FlaskConical,
    image: chemicalImg,
    subProducts: [
      { name: "Water Based Anti Spatter V-125", slug: "anti-spatter-v125", description: "Premium anti-spatter for MIG/MAG welding. Available in 500ml spray bottle, 5L can, and 35L drum.", icon: SprayCan, images: [v125_spray, v125_5l_front, v125_5l, v125_35l_drum] },
      { name: "Water Based Nozzle Gel V-101", slug: "nozzle-gel-v101", description: "Extends nozzle life & reduces downtime", icon: Droplets, images: [nozzleGel] },
      { name: "Rust Convertor V-301", slug: "rust-convertor-v301", description: "Converts rust into protective coating", icon: ShieldCheck, images: [rustConvertor] },
      { name: "Degreasing Chemical V-401", slug: "degreasing-chemical-v401", description: "Industrial-strength surface degreaser", icon: Beaker, images: [degreasingChem] },
    ],
  },
  {
    title: "Packaging Solutions",
    slug: "packaging-solutions",
    desc: "Durable, returnable industrial packaging designed for safe transportation and cost-effective storage.",
    description: "Returnable & durable packaging for industrial logistics.",
    icon: Package,
    image: packagingImg,
    subProducts: [
      { name: "Polypropylene Boxes", slug: "polypropylene-boxes", description: "Lightweight, durable PP containers", icon: Box, images: [polypropyleneBoxes] },
      { name: "PP Corrugated Crates", slug: "pp-corrugated-crates", description: "Corrugated polypropylene storage crates", icon: Layers, images: [ppCorrugated] },
      { name: "Returnable Packaging Boxes", slug: "returnable-packaging", description: "Cost-effective reusable packaging", icon: RotateCcw, images: [returnablePackaging] },
      { name: "Industrial Packaging Boxes", slug: "industrial-packaging", description: "Heavy-duty industrial containers", icon: Warehouse, images: [industrialPackaging] },
    ],
  },
  {
    title: "Industrial Consumables",
    slug: "industrial-consumables",
    desc: "Essential industrial consumables for welding, rust protection, and facility maintenance operations.",
    description: "Welding, cleaning & maintenance consumables for industry.",
    icon: Wrench,
    image: consumablesImg,
    subProducts: [
      { name: "Welding Anti Spatter Solution", slug: "welding-anti-spatter", description: "Prevents spatter adhesion during welding", icon: SprayCan, images: [weldingAntiSpatter] },
      { name: "Nozzle Gel", slug: "nozzle-gel", description: "Protective gel for welding nozzles", icon: Droplets, images: [nozzleGelGeneric] },
      { name: "Industrial Chemicals", slug: "industrial-chemicals", description: "Broad-spectrum industrial chemical solutions", icon: Beaker, images: [industrialChemicals] },
      { name: "Cleaning Solutions", slug: "cleaning-solutions", description: "Professional-grade cleaning products", icon: Sparkles, images: [cleaningSolutions] },
    ],
  },
];
