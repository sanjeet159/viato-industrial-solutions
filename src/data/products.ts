import { Flame, FlaskConical, Package, Wrench, PipetteIcon, Droplets, ShieldCheck, SprayCan, Box, Layers, RotateCcw, Warehouse, Zap, CircleDot, Beaker, Sparkles, Paintbrush, Palette } from "lucide-react";
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

import aerosolSprayPaints from "@/assets/products/aerosol-spray-paints.jpg";
import vmaxGalvaSpray from "@/assets/products/vmax-galva-spray.jpg";
import vmaxColorSprayRal from "@/assets/products/vmax-color-spray-ral.jpg";

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
      {
        name: "Gas Pipeline Systems",
        slug: "gas-pipeline-systems",
        description: "Complete industrial gas pipeline installation",
        icon: PipetteIcon,
        images: [gasPipelineSystems],
        overview: [
          "High-pressure pigtails, hose assemblies and CGA fittings engineered for safe, leak-proof gas distribution across industrial facilities.",
          "Stainless steel corrugated hoses with pre-assembled cylinder valve adaptors, designed for working pressures up to 300 bar in compliance with ISO 10380.",
        ],
        features: [
          "SS 304/316 corrugated hoses with stainless steel braid and safety line",
          "Flexible rubber, Teflon and thermoplastic hose options",
          "Pre-assembled cylinder valve adaptors as per national standards",
          "Outlet connections: W21.8 for air gases & CO2, W21.SLH for flammable gases",
          "Pressure-leak tested before dispatch",
          "Custom hose assemblies supplied to client specification",
        ],
      },
      {
        name: "Gas Manifold Systems",
        slug: "gas-manifold-systems",
        description: "Multi-cylinder manifold configurations",
        icon: Layers,
        images: [gasManifoldSystems],
        overview: [
          "Gas manifold systems are essential components in the efficient and safe distribution of gases from a central supply to multiple points of use. They consist of valves, regulators and piping that control the flow of gases, ensuring a stable and reliable supply to end-users.",
          "VIATO is the indigenous manufacturer of a complete range of industrial gas cylinder manifolds, designed and tested in compliance with industry standards using best-quality materials.",
        ],
        features: [
          "Modular, portable assembly designed to connect to cylinders with fittings and pressure gauge",
          "Available with normal use and auto-changeover systems",
          "Constructed in SS 304, SS 316, Brass-Copper and MS materials",
          "Gas applications: Argon, Nitrogen, Oxygen, Hydrogen, Compressed Air, LPG, Natural Gas, Ammonia, CH4, CO2 and more",
          "Working pressure range: 0 to 400 Bar",
          "High purity and ultra pure gas manifolds also supplied",
          "All components meet relevant Technical Standards / Specifications",
        ],
      },
      {
        name: "Cryogenic Tank Pipeline",
        slug: "cryogenic-tank-pipeline",
        description: "Specialized cryogenic gas delivery systems",
        icon: Zap,
        images: [cryogenicTank],
        overview: [
          "End-to-end Cryogenic Storage Tank Installation Service delivered by our highly qualified professionals using premium-grade tools and advanced technology, executed within scheduled timeframes.",
          "Our Cryogenic Liquid Pipeline Installation services use the latest equipment and machines and can be fully customised to client requirements, valued for promptness, cost-effectiveness and on-time delivery for critical deadlines.",
        ],
        features: [
          "Cryogenic storage tank installation with precise execution",
          "Cryogenic liquid pipeline design and commissioning",
          "Customisation as per client process requirements",
          "Use of advanced tools, latest technology and best-grade materials",
          "Cost-effective service with timely project completion",
        ],
      },
      {
        name: "Cylinder Filling Manifold",
        slug: "cylinder-filling-manifold",
        description: "High-pressure cylinder filling stations",
        icon: CircleDot,
        images: [cylinderFilling],
        overview: [
          "VIATO is the indigenous manufacturer of a complete range of Industrial and Medical Gas Cylinder Filling Stations, including mobile filling stations and advanced filling station configurations.",
          "Filling panels and manifolds are specially designed for efficient gas filling, manufactured and supplied in full compliance with industry standards and stringently tested on standard quality parameters prior to installation.",
        ],
        features: [
          "Mobile filling stations and advanced filling station configurations",
          "Filling panels and manifolds engineered for industrial & medical gases",
          "Built using best-quality materials with full QA testing",
          "Compliant with all relevant Technical Standards / Specifications",
          "Supplied, installed and commissioned by experienced technicians",
        ],
      },
      {
        name: "Industrial Gas Installation",
        slug: "industrial-gas-installation",
        description: "Cylinder Quad & Skid Manifold systems",
        icon: Wrench,
        images: [gasInstallation],
        overview: [
          "VIATO is the indigenous manufacturer of a complete range of Industrial Gas Cylinder Quads, including mobile vehicle-mounted Skid Banks, specially designed for safe storage and transport of gases.",
          "Manifold cylinder pallet/bundle is a modular design — a portable assembly designed to be routinely lifted, consisting of a frame and 20/16/12/9 high-pressure gas cylinders stacked and connected to a common manifold by cylinder valves, fittings and pressure gauge, allowing cylinders to be filled, transported and emptied without disassembly.",
        ],
        features: [
          "Mobile vehicle-mounted Skid Bank configurations",
          "Modular cylinder quad design (20 / 16 / 12 / 9 cylinder formats)",
          "Common manifold with cylinder valves, fittings and pressure gauge",
          "Designed for routine lifting, transport and storage",
          "Stringently tested on standard quality parameters before dispatch",
          "All components meet relevant Technical Standards / Specifications",
        ],
      },
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
      {
        name: "Water Based Anti Spatter V-125",
        slug: "anti-spatter-v125",
        description: "Premium anti-spatter for MIG/MAG welding. Available in 500ml spray bottle, 5L can, and 35L drum.",
        icon: SprayCan,
        images: [v125_spray, v125_5l_front, v125_5l, v125_35l_drum],
        overview: [
          "Viato water-based anti-spatter V-125 is a non-flammable, silicone-free solution designed to prevent welding spatter from adhering to metal surfaces, tips and nozzles.",
          "It enables easy, cleaner post-weld clean-up, improves welding efficiency and is safe for applications requiring subsequent painting or galvanising.",
        ],
        features: [
          "Easy to use with a long shelf life — also acts as a cleaning agent",
          "Non-explosive; withstands 150-200°C",
          "Prevents adhesion of weld spatter to surfaces, nozzles and equipment",
          "Offers temporary corrosion protection — economical thin protective film",
          "Made of natural extracts — non-hazardous and skin-friendly",
          "Silicone-free — no issues during painting or galvanising",
          "Non-flammable, no silicone, non-corrosive",
          "Apply on nozzles, diffusers, tips and surfaces adjacent to weld",
        ],
      },
      {
        name: "Water Based Nozzle Gel V-101",
        slug: "nozzle-gel-v101",
        description: "Extends nozzle life & reduces downtime",
        icon: Droplets,
        images: [nozzleGel],
        overview: [
          "Viato's Water Based V-101 nozzle tip dip extends the life of welding consumables by protecting them during the welding operation.",
          "Spatter forming inside the nozzle will not adhere and can be easily removed. Tip dip can also be brushed onto parts as needed.",
        ],
        features: [
          "Water-based, safe to handle formulation",
          "Extends life of nozzles, tips and diffusers",
          "Prevents spatter adhesion inside the nozzle",
          "Easy removal of any residual spatter",
          "Can be applied by dipping or brushing",
        ],
      },
      {
        name: "Rust Convertor V-301",
        slug: "rust-convertor-v301",
        description: "Converts rust into protective coating",
        icon: ShieldCheck,
        images: [rustConvertor],
        overview: [
          "A water-based chemical rust converter — typically containing phosphoric or tannic acid — that transforms iron oxide (rust) into a stable phosphate protective layer (iron phosphate or tannate).",
          "Acts as both a rust inhibitor and a protective primer, sealing metal surfaces to prevent future corrosion without requiring extensive surface grinding.",
        ],
        features: [
          "Water-based, easy-to-apply formulation",
          "Converts existing rust into a stable protective layer",
          "Functions as both rust inhibitor and primer",
          "Eliminates the need for extensive surface grinding",
          "Seals metal surfaces against future corrosion",
        ],
      },
      {
        name: "Degreasing Chemical V-401",
        slug: "degreasing-chemical-v401",
        description: "Industrial-strength neutral pH degreaser & washing chemical",
        icon: Beaker,
        images: [degreasingChem],
        overview: [
          "Neutral pH degreasers are specialised, safe-to-handle industrial cleaners with a pH between 6.0 and 8.0, designed to remove oil and grease without damaging delicate surfaces such as MS, CS (HR/CR), aluminium, brass, copper or painted finishes.",
          "Industrial cleaning / washing chemicals are heavy-duty formulations designed to remove stubborn grease, oils, soot and carbon deposits from machinery, surfaces and production equipment.",
        ],
        features: [
          "Neutral pH (6.0 - 8.0) — safe on sensitive substrates",
          "Effective on MS, CS (HR/CR), aluminium, brass, copper and painted surfaces",
          "Suitable for automotive exteriors, aviation parts and sensitive machinery",
          "More environmentally friendly than harsh alkaline degreasers",
          "Heavy-duty washing formulation removes grease, oil, soot and carbon deposits",
        ],
      },
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
      {
        name: "Polypropylene Boxes (PP)",
        slug: "polypropylene-boxes",
        description: "Lightweight, durable PP containers",
        icon: Box,
        images: [polypropyleneBoxes],
        overview: [
          "Polypropylene (PP) boxes are durable, lightweight and moisture-resistant storage solutions, commonly used for industrial packaging, logistics and home organisation.",
          "Highly resistant to impact and chemicals — popular options include foldable, heavy-duty storage and corrugated designs for versatile, reusable (returnable packaging) or custom-sized applications.",
        ],
        features: [
          "Lightweight yet highly durable construction",
          "Moisture-, impact- and chemical-resistant",
          "Foldable, heavy-duty and corrugated designs available",
          "Reusable — ideal for returnable packaging programs",
          "Custom sizes for industrial logistics and storage",
        ],
      },
      {
        name: "Corrugated Box",
        slug: "pp-corrugated-crates",
        description: "Corrugated polypropylene storage crates",
        icon: Layers,
        images: [ppCorrugated],
        overview: [
          "A corrugated box is a durable, lightweight shipping container made from corrugated fibreboard — a structure with a wavy, fluted middle layer sandwiched between two flat outer liners.",
          "This rigid, cushioned design offers superior strength and shock absorption compared to standard cardboard, making it the primary choice for transporting, protecting and stacking goods.",
        ],
        features: [
          "Fluted middle layer between two flat liners for cushioning",
          "Superior strength and shock absorption",
          "Lightweight yet rigid — easy to handle and stack",
          "Ideal for transporting and protecting goods",
          "Available in a range of sizes and gauges",
        ],
      },
    ],
  },
  {
    title: "Aerosol Spray Paints",
    slug: "aerosol-spray-paints",
    desc: "High-performance aerosol spray paints for industrial coating, galvanising and precise RAL colour finishes.",
    description: "Pressurised aerosol coatings for galvanising and RAL colour finishing.",
    icon: SprayCan,
    image: aerosolSprayPaints,
    subProducts: [
      {
        name: "V-Max Galva Spray",
        slug: "vmax-galva-spray",
        description: "96% zinc-rich aerosol galvanising coating for cathodic protection",
        icon: Paintbrush,
        images: [vmaxGalvaSpray],
        overview: [
          "V-Max Galva Spray is a one aerosol pack coating that contains 96% zinc in the dry film and provides cathodic protection of ferrous metals.",
          "It can be used as a unique system as an alternative to hot-dip galvanisation or metallisation, as primer in a duplex system (active + passive) or as a recharging system for hot-dip galvanisation and metallisation surfaces.",
          "It can be applied by spraying on a clean and rough substrate in a wide range of atmospheric circumstances.",
        ],
        features: [
          "96% zinc content in dry film for cathodic protection of ferrous metals",
          "Alternative to hot-dip galvanisation or metallisation",
          "Use as primer in duplex (active + passive) systems",
          "Ideal for recharging damaged hot-dip galvanised or metallised surfaces",
          "Spray-applied on clean, rough substrates",
          "Performs across a wide range of atmospheric conditions",
        ],
      },
      {
        name: "V-Max Color Spray (RAL)",
        slug: "vmax-color-spray-ral",
        description: "High-quality RAL-matched aerosol paint with high-gloss durable acrylic finish",
        icon: Palette,
        images: [vmaxColorSprayRal],
        overview: [
          "V-Max Color Spray RAL is a high-quality, standardised aerosol paint that matches the European RAL colour management system.",
          "It is primarily used for precise colour matching in industrial, architectural and DIY projects, featuring durable acrylic formulas that provide a high-gloss finish, excellent adhesion and rust resistance on metal, plastic and wood.",
        ],
        features: [
          "Matched to European RAL colour management system",
          "Precise colour consistency for industrial & architectural projects",
          "Durable acrylic formulation with high-gloss finish",
          "Excellent adhesion on metal, plastic and wood",
          "Built-in rust resistance for long-lasting protection",
          "Suitable for industrial, architectural and DIY applications",
        ],
      },
    ],
  },
];
