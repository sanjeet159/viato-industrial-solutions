import { Flame, CircleDot, Shield, HardHat, Wrench, Package } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import weldingImg from "@/assets/store/welding.jpg";
import cuttingImg from "@/assets/store/cutting-grinding.jpg";
import glovesImg from "@/assets/store/gloves.jpg";
import ppeImg from "@/assets/store/ppe.jpg";
import generalImg from "@/assets/store/general.jpg";
import toolsImg from "@/assets/store/tools.jpg";

import p_WeldingWeldingRod from "@/assets/store-products/welding-welding-rod.jpg";
import p_WeldingCo2Wires from "@/assets/store-products/welding-co2-wires.jpg";
import p_WeldingCuttingNozzle from "@/assets/store-products/welding-cutting-nozzle.jpg";
import p_WeldingWeldingHolder from "@/assets/store-products/welding-welding-holder.jpg";
import p_WeldingWeldingHose from "@/assets/store-products/welding-welding-hose.jpg";
import p_WeldingDoubleStageRegulators from "@/assets/store-products/welding-double-stage-regulators.jpg";
import p_WeldingSingleSatgeGasRegulatores from "@/assets/store-products/welding-single-satge-gas-regulatores.jpg";
import p_WeldingWeldingCable from "@/assets/store-products/welding-welding-cable.jpg";
import p_WeldingCylinderKey from "@/assets/store-products/welding-cylinder-key.jpg";
import p_WeldingWeldingMachineSLug from "@/assets/store-products/welding-welding-machine-s-lug.jpg";
import p_WeldingCuttingTorch from "@/assets/store-products/welding-cutting-torch.jpg";
import p_WeldingWeldingGlassBlack from "@/assets/store-products/welding-welding-glass-black.jpg";
import p_WeldingWeldingGlassClear from "@/assets/store-products/welding-welding-glass-clear.jpg";
import p_WeldingWireBrushForWelding from "@/assets/store-products/welding-wire-brush-for-welding.jpg";
import p_WeldingArgonTorch from "@/assets/store-products/welding-argon-torch.jpg";
import p_WeldingEarthingClamp from "@/assets/store-products/welding-earthing-clamp.jpg";
import p_WeldingFillerWireRods from "@/assets/store-products/welding-filler-wire-rods.jpg";
import p_WeldingTungustenElectrodes from "@/assets/store-products/welding-tungusten-electrodes.jpg";
import p_WeldingWeldingMachines from "@/assets/store-products/welding-welding-machines.jpg";
import p_CuttingGrindingWheelsCuttingWheelGreen from "@/assets/store-products/cutting-grinding-wheels-cutting-wheel-green.jpg";
import p_CuttingGrindingWheelsCuttingWheelBlack from "@/assets/store-products/cutting-grinding-wheels-cutting-wheel-black.jpg";
import p_CuttingGrindingWheelsGrindingWheels from "@/assets/store-products/cutting-grinding-wheels-grinding-wheels.jpg";
import p_CuttingGrindingWheelsBuffingWheels from "@/assets/store-products/cutting-grinding-wheels-buffing-wheels.jpg";
import p_CuttingGrindingWheelsMopWheels from "@/assets/store-products/cutting-grinding-wheels-mop-wheels.jpg";
import p_CuttingGrindingWheelsTilesCuttingWheel from "@/assets/store-products/cutting-grinding-wheels-tiles-cutting-wheel.jpg";
import p_CuttingGrindingWheelsMarbleCutter from "@/assets/store-products/cutting-grinding-wheels-marble-cutter.jpg";
import p_CuttingGrindingWheelsWoodCuttingWheel from "@/assets/store-products/cutting-grinding-wheels-wood-cutting-wheel.jpg";
import p_CuttingGrindingWheelsCupBrush from "@/assets/store-products/cutting-grinding-wheels-cup-brush.jpg";
import p_CuttingGrindingWheelsGrindingWheelForGranite from "@/assets/store-products/cutting-grinding-wheels-grinding-wheel-for-granite.jpg";
import p_CuttingGrindingWheelsPolishingWheel from "@/assets/store-products/cutting-grinding-wheels-polishing-wheel.jpg";
import p_CuttingGrindingWheelsGrinderMachine from "@/assets/store-products/cutting-grinding-wheels-grinder-machine.jpg";
import p_CuttingGrindingWheelsCuttOffMachine from "@/assets/store-products/cutting-grinding-wheels-cutt-off-machine.jpg";
import p_CuttingGrindingWheelsBlower from "@/assets/store-products/cutting-grinding-wheels-blower.jpg";
import p_GlovesNitrileGloves from "@/assets/store-products/gloves-nitrile-gloves.jpg";
import p_GlovesBhindiNitriteGloves from "@/assets/store-products/gloves-bhindi-nitrite-gloves.jpg";
import p_GlovesCutResistanceOrangeGreen from "@/assets/store-products/gloves-cut-resistance-orange-green.jpg";
import p_GlovesKnittedGloves from "@/assets/store-products/gloves-knitted-gloves.jpg";
import p_GlovesKnittedDottedGloves from "@/assets/store-products/gloves-knitted-dotted-gloves.jpg";
import p_GlovesCottonWhiteGloves from "@/assets/store-products/gloves-cotton-white-gloves.jpg";
import p_GlovesLeatherGlovesGrey from "@/assets/store-products/gloves-leather-gloves-grey.jpg";
import p_GlovesLeatherGlovesRed from "@/assets/store-products/gloves-leather-gloves-red.jpg";
import p_GlovesLeatherGlovesYellow from "@/assets/store-products/gloves-leather-gloves-yellow.jpg";
import p_GlovesEsabLeatherGloves from "@/assets/store-products/gloves-esab-leather-gloves.jpg";
import p_GlovesRubberGloves from "@/assets/store-products/gloves-rubber-gloves.jpg";
import p_GlovesExaminationGloves from "@/assets/store-products/gloves-examination-gloves.jpg";
import p_GlovesElectricalRubberGloves from "@/assets/store-products/gloves-electrical-rubber-gloves.jpg";
import p_GlovesLintFreeGloves from "@/assets/store-products/gloves-lint-free-gloves.jpg";
import p_PpeShoes from "@/assets/store-products/ppe-shoes.jpg";
import p_PpeWeldingScreen from "@/assets/store-products/ppe-welding-screen.jpg";
import p_PpeWeldingGoggles from "@/assets/store-products/ppe-welding-goggles.jpg";
import p_PpeClearGoggles from "@/assets/store-products/ppe-clear-goggles.jpg";
import p_PpeSafetyBelt from "@/assets/store-products/ppe-safety-belt.jpg";
import p_PpeSafetyHelmet from "@/assets/store-products/ppe-safety-helmet.jpg";
import p_PpeSafetyReflectiveJackets from "@/assets/store-products/ppe-safety-reflective-jackets.jpg";
import p_PpeBarricationTape from "@/assets/store-products/ppe-barrication-tape.jpg";
import p_PpeLeatherHandSleeves from "@/assets/store-products/ppe-leather-hand-sleeves.jpg";
import p_PpeJeansApprons from "@/assets/store-products/ppe-jeans-approns.jpg";
import p_PpeLeatherApprons from "@/assets/store-products/ppe-leather-approns.jpg";
import p_PpePvcGumboots from "@/assets/store-products/ppe-pvc-gumboots.jpg";
import p_PpeFaceShield from "@/assets/store-products/ppe-face-shield.jpg";
import p_PpeEarPlug from "@/assets/store-products/ppe-ear-plug.jpg";
import p_GeneralAnchorFastner from "@/assets/store-products/general-anchor-fastner.jpg";
import p_GeneralNutBolts from "@/assets/store-products/general-nut-bolts.jpg";
import p_GeneralGypsumScrew from "@/assets/store-products/general-gypsum-screw.jpg";
import p_GeneralHpScrew from "@/assets/store-products/general-hp-screw.jpg";
import p_GeneralHexaBlade from "@/assets/store-products/general-hexa-blade.jpg";
import p_GeneralHexaFrames from "@/assets/store-products/general-hexa-frames.jpg";
import p_GeneralFlexiblePipe from "@/assets/store-products/general-flexible-pipe.jpg";
import p_GeneralElectricTape from "@/assets/store-products/general-electric-tape.jpg";
import p_GeneralTransparentTape from "@/assets/store-products/general-transparent-tape.jpg";
import p_GeneralTeflonTape from "@/assets/store-products/general-teflon-tape.jpg";
import p_GeneralFevikwick from "@/assets/store-products/general-fevikwick.jpg";
import p_GeneralMSealSealent from "@/assets/store-products/general-m-seal-sealent.jpg";
import p_GeneralSiliconSealent from "@/assets/store-products/general-silicon-sealent.jpg";
import p_GeneralSandPaper from "@/assets/store-products/general-sand-paper.jpg";
import p_GeneralHoseClamp from "@/assets/store-products/general-hose-clamp.jpg";
import p_GeneralLineDori from "@/assets/store-products/general-line-dori.jpg";
import p_GeneralBubblesRolls from "@/assets/store-products/general-bubbles-rolls.jpg";
import p_GeneralLoctite from "@/assets/store-products/general-loctite.jpg";
import p_GeneralDrillMachine from "@/assets/store-products/general-drill-machine.jpg";
import p_GeneralCottonWaste from "@/assets/store-products/general-cotton-waste.jpg";
import p_ToolsAllenKeySet from "@/assets/store-products/tools-allen-key-set.jpg";
import p_ToolsDSpanner from "@/assets/store-products/tools-d-spanner.jpg";
import p_ToolsRingSpanner from "@/assets/store-products/tools-ring-spanner.jpg";
import p_ToolsSideWrench from "@/assets/store-products/tools-side-wrench.jpg";
import p_ToolsPipeWrench from "@/assets/store-products/tools-pipe-wrench.jpg";
import p_ToolsPliers from "@/assets/store-products/tools-pliers.jpg";
import p_ToolsHammers from "@/assets/store-products/tools-hammers.jpg";
import p_ToolsSocketSet from "@/assets/store-products/tools-socket-set.jpg";
import p_ToolsFiles from "@/assets/store-products/tools-files.jpg";
import p_ToolsHammerBit from "@/assets/store-products/tools-hammer-bit.jpg";
import p_ToolsDrillBit from "@/assets/store-products/tools-drill-bit.jpg";
import p_ToolsMagneticPowerBit from "@/assets/store-products/tools-magnetic-power-bit.jpg";
import p_ToolsScrewDriver from "@/assets/store-products/tools-screw-driver.jpg";
import p_ToolsMeasuringTape from "@/assets/store-products/tools-measuring-tape.jpg";
import p_ToolsPlum from "@/assets/store-products/tools-plum.jpg";
import p_ToolsSpiritLevelMagnet from "@/assets/store-products/tools-spirit-level-magnet.jpg";
import p_ToolsRightAngle from "@/assets/store-products/tools-right-angle.jpg";
import p_ToolsChowk from "@/assets/store-products/tools-chowk.jpg";
import p_ToolsChiselSet from "@/assets/store-products/tools-chisel-set.jpg";
import p_ToolsCutter from "@/assets/store-products/tools-cutter.jpg";
import p_ToolsFillerGauge from "@/assets/store-products/tools-filler-gauge.jpg";

export interface StoreProduct {
  name: string;
  image: string;
}

export interface StoreCategory {
  name: string;
  slug: string;
  icon: LucideIcon;
  color: string;
  image: string;
  products: StoreProduct[];
}

export const storeCategories: StoreCategory[] = [
  {
    name: "Welding",
    slug: "welding",
    icon: Flame,
    color: "hsl(0 70% 50%)",
    image: weldingImg,
    products: [
      { name: "Welding Rod", image: p_WeldingWeldingRod },
      { name: "Co2 Wires", image: p_WeldingCo2Wires },
      { name: "Cutting Nozzle", image: p_WeldingCuttingNozzle },
      { name: "Welding Holder", image: p_WeldingWeldingHolder },
      { name: "Welding Hose", image: p_WeldingWeldingHose },
      { name: "Double Stage Regulators", image: p_WeldingDoubleStageRegulators },
      { name: "Single Satge Gas Regulatores", image: p_WeldingSingleSatgeGasRegulatores },
      { name: "Welding Cable", image: p_WeldingWeldingCable },
      { name: "Cylinder Key", image: p_WeldingCylinderKey },
      { name: "Welding Machine's Lug", image: p_WeldingWeldingMachineSLug },
      { name: "Cutting Torch", image: p_WeldingCuttingTorch },
      { name: "Welding Glass Black", image: p_WeldingWeldingGlassBlack },
      { name: "Welding Glass Clear", image: p_WeldingWeldingGlassClear },
      { name: "Wire Brush for Welding", image: p_WeldingWireBrushForWelding },
      { name: "Argon Torch", image: p_WeldingArgonTorch },
      { name: "Earthing Clamp", image: p_WeldingEarthingClamp },
      { name: "Filler Wire Rods", image: p_WeldingFillerWireRods },
      { name: "Tungusten Electrodes", image: p_WeldingTungustenElectrodes },
      { name: "Welding Machines", image: p_WeldingWeldingMachines },
    ],
  },
  {
    name: "Cutting & Grinding Wheels",
    slug: "cutting-grinding",
    icon: CircleDot,
    color: "hsl(45 90% 50%)",
    image: cuttingImg,
    products: [
      { name: "Cutting Wheel Green", image: p_CuttingGrindingWheelsCuttingWheelGreen },
      { name: "Cutting Wheel Black", image: p_CuttingGrindingWheelsCuttingWheelBlack },
      { name: "Grinding Wheels", image: p_CuttingGrindingWheelsGrindingWheels },
      { name: "Buffing Wheels", image: p_CuttingGrindingWheelsBuffingWheels },
      { name: "Mop Wheels", image: p_CuttingGrindingWheelsMopWheels },
      { name: "Tiles Cutting Wheel", image: p_CuttingGrindingWheelsTilesCuttingWheel },
      { name: "Marble Cutter", image: p_CuttingGrindingWheelsMarbleCutter },
      { name: "Wood Cutting Wheel", image: p_CuttingGrindingWheelsWoodCuttingWheel },
      { name: "Cup Brush", image: p_CuttingGrindingWheelsCupBrush },
      { name: "Grinding Wheel for Granite", image: p_CuttingGrindingWheelsGrindingWheelForGranite },
      { name: "Polishing Wheel", image: p_CuttingGrindingWheelsPolishingWheel },
      { name: "Grinder Machine", image: p_CuttingGrindingWheelsGrinderMachine },
      { name: "Cutt Off Machine", image: p_CuttingGrindingWheelsCuttOffMachine },
      { name: "Blower", image: p_CuttingGrindingWheelsBlower },
    ],
  },
  {
    name: "Gloves",
    slug: "gloves",
    icon: Shield,
    color: "hsl(210 70% 50%)",
    image: glovesImg,
    products: [
      { name: "Nitrile Gloves", image: p_GlovesNitrileGloves },
      { name: "Bhindi Nitrite Gloves", image: p_GlovesBhindiNitriteGloves },
      { name: "Cut Resistance Orange Green", image: p_GlovesCutResistanceOrangeGreen },
      { name: "Knitted Gloves", image: p_GlovesKnittedGloves },
      { name: "Knitted Dotted Gloves", image: p_GlovesKnittedDottedGloves },
      { name: "Cotton White Gloves", image: p_GlovesCottonWhiteGloves },
      { name: "Leather Gloves Grey", image: p_GlovesLeatherGlovesGrey },
      { name: "Leather Gloves Red", image: p_GlovesLeatherGlovesRed },
      { name: "Leather Gloves Yellow", image: p_GlovesLeatherGlovesYellow },
      { name: "ESAB Leather Gloves", image: p_GlovesEsabLeatherGloves },
      { name: "Rubber Gloves", image: p_GlovesRubberGloves },
      { name: "Examination Gloves", image: p_GlovesExaminationGloves },
      { name: "Electrical Rubber Gloves", image: p_GlovesElectricalRubberGloves },
      { name: "Lint Free Gloves", image: p_GlovesLintFreeGloves },
    ],
  },
  {
    name: "PPE (Personal Protective Equipment)",
    slug: "ppe",
    icon: HardHat,
    color: "hsl(28 90% 52%)",
    image: ppeImg,
    products: [
      { name: "Shoes", image: p_PpeShoes },
      { name: "Welding Screen", image: p_PpeWeldingScreen },
      { name: "Welding Goggles", image: p_PpeWeldingGoggles },
      { name: "Clear Goggles", image: p_PpeClearGoggles },
      { name: "Safety Belt", image: p_PpeSafetyBelt },
      { name: "Safety Helmet", image: p_PpeSafetyHelmet },
      { name: "Safety Reflective Jackets", image: p_PpeSafetyReflectiveJackets },
      { name: "Barrication Tape", image: p_PpeBarricationTape },
      { name: "Leather Hand Sleeves", image: p_PpeLeatherHandSleeves },
      { name: "Jeans Approns", image: p_PpeJeansApprons },
      { name: "Leather Approns", image: p_PpeLeatherApprons },
      { name: "PVC Gumboots", image: p_PpePvcGumboots },
      { name: "Face Shield", image: p_PpeFaceShield },
      { name: "Ear Plug", image: p_PpeEarPlug },
    ],
  },
  {
    name: "General",
    slug: "general",
    icon: Package,
    color: "hsl(140 60% 40%)",
    image: generalImg,
    products: [
      { name: "Anchor Fastner", image: p_GeneralAnchorFastner },
      { name: "Nut Bolts", image: p_GeneralNutBolts },
      { name: "Gypsum Screw", image: p_GeneralGypsumScrew },
      { name: "HP Screw", image: p_GeneralHpScrew },
      { name: "Hexa Blade", image: p_GeneralHexaBlade },
      { name: "Hexa Frames", image: p_GeneralHexaFrames },
      { name: "Flexible Pipe", image: p_GeneralFlexiblePipe },
      { name: "Electric Tape", image: p_GeneralElectricTape },
      { name: "Transparent Tape", image: p_GeneralTransparentTape },
      { name: "Teflon Tape", image: p_GeneralTeflonTape },
      { name: "Fevikwick", image: p_GeneralFevikwick },
      { name: "M-Seal Sealent", image: p_GeneralMSealSealent },
      { name: "Silicon Sealent", image: p_GeneralSiliconSealent },
      { name: "Sand Paper", image: p_GeneralSandPaper },
      { name: "Hose Clamp", image: p_GeneralHoseClamp },
      { name: "Line Dori", image: p_GeneralLineDori },
      { name: "Bubbles Rolls", image: p_GeneralBubblesRolls },
      { name: "Loctite", image: p_GeneralLoctite },
      { name: "Drill Machine", image: p_GeneralDrillMachine },
      { name: "Cotton Waste", image: p_GeneralCottonWaste },
    ],
  },
  {
    name: "Tools",
    slug: "tools",
    icon: Wrench,
    color: "hsl(270 50% 50%)",
    image: toolsImg,
    products: [
      { name: "Allen Key Set", image: p_ToolsAllenKeySet },
      { name: "D-Spanner", image: p_ToolsDSpanner },
      { name: "Ring Spanner", image: p_ToolsRingSpanner },
      { name: "Side Wrench", image: p_ToolsSideWrench },
      { name: "Pipe Wrench", image: p_ToolsPipeWrench },
      { name: "Pliers", image: p_ToolsPliers },
      { name: "Hammers", image: p_ToolsHammers },
      { name: "Socket Set", image: p_ToolsSocketSet },
      { name: "Files", image: p_ToolsFiles },
      { name: "Hammer Bit", image: p_ToolsHammerBit },
      { name: "Drill Bit", image: p_ToolsDrillBit },
      { name: "Magnetic Power Bit", image: p_ToolsMagneticPowerBit },
      { name: "Screw Driver", image: p_ToolsScrewDriver },
      { name: "Measuring Tape", image: p_ToolsMeasuringTape },
      { name: "Plum", image: p_ToolsPlum },
      { name: "Spirit Level Magnet", image: p_ToolsSpiritLevelMagnet },
      { name: "Right Angle", image: p_ToolsRightAngle },
      { name: "Chowk", image: p_ToolsChowk },
      { name: "Chisel Set", image: p_ToolsChiselSet },
      { name: "Cutter", image: p_ToolsCutter },
      { name: "Filler Gauge", image: p_ToolsFillerGauge },
    ],
  },
];
