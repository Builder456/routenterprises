import flangesImg from "@/assets/flanges.jpg";
import fastenersImg from "@/assets/fasteners.jpg";
import wiresImg from "@/assets/wires.jpg";
import profilesImg from "@/assets/profiles.jpg";
import brightBarsImg from "@/assets/bright-bars.jpg";
import seamlessPipesImg from "@/assets/seamless-pipes.jpg";

import oilGasImg from "@/assets/applications/oil-gas.jpg";
import chemicalImg from "@/assets/applications/chemical.jpg";
import powerImg from "@/assets/applications/power.jpg";
import marineImg from "@/assets/applications/marine.jpg";
import constructionImg from "@/assets/applications/construction.jpg";
import aerospaceImg from "@/assets/applications/aerospace.jpg";
import pharmaImg from "@/assets/applications/pharma.jpg";
import foodImg from "@/assets/applications/food.jpg";
import automotiveImg from "@/assets/applications/automotive.jpg";
import weldingImg from "@/assets/applications/welding.jpg";

export type ApplicationImage = { label: string; image: string };

export type Product = {
  slug: string;
  name: string;
  brief: string;
  desc: string;
  image: string;
  specs: string[];
  grades: string[];
  applications: ApplicationImage[];
  testing?: string;
  certifications?: string;
  catalogue?: string | null;
};

export const products: Product[] = [
  {
    slug: "stainless-steel-flanges",
    name: "Stainless Steel Flanges",
    brief:
      "Precision-forged stainless steel flanges engineered for leak-proof pipeline joints across high-pressure and high-temperature service.",
    desc: "Slip-on, weld neck, blind, threaded, lap joint, RTJ & socket weld flanges. Size range ½\" to 40\" with pressure classes 150 to 2500 LBS.",
    image: flangesImg,
    specs: ["ASME B16.5 / B16.47", "DIN / JIS / BS / GOST"],
    grades: [
      "F304", "F304L", "F304H", "F316", "F316L", "F316H",
      "F321", "F321H", "F347", "F347H", "F317L",
      "F51 (Duplex)", "F53 (Super Duplex)", "F60",
    ],
    applications: [
      { label: "Oil & Gas", image: oilGasImg },
      { label: "Chemical & Petrochemical", image: chemicalImg },
      { label: "Power Generation", image: powerImg },
      { label: "Ship Building", image: marineImg },
      { label: "Aerospace", image: aerospaceImg },
      { label: "Food Processing", image: foodImg },
    ],
    testing:
      "Tensile Test (Screw Driven & Computerized), Impact Test (RT & Sub Zero), Hardness Test, IGC Test, Dye Penetrate Test, Ultrasonic Test, PMI Test (X-ray & OES), Surface Roughness Test",
    catalogue: "/catalogues/Flanges.pdf",
  },
  {
    slug: "stainless-steel-fasteners",
    name: "Stainless Steel Fasteners",
    brief:
      "Corrosion-resistant fasteners for critical assemblies — engineered for repeatable torque, fatigue resistance and long service life.",
    desc: "Bolts, nuts, screws, washers, studs, threaded rods and dowel screws. Available in standard to heavy-duty applications with precision engineering for critical fastening solutions.",
    image: fastenersImg,
    specs: ["ASTM A193/A194", "DIN 931/934 / ISO 4014", "ANSI B18.6.3"],
    grades: ["304", "304L", "316", "316L", "321", "410", "430", "Duplex 2205"],
    applications: [
      { label: "Construction", image: constructionImg },
      { label: "Petrochemical", image: chemicalImg },
      { label: "Oil & Gas", image: oilGasImg },
      { label: "Marine", image: marineImg },
      { label: "Power Generation", image: powerImg },
      { label: "Food Processing", image: foodImg },
    ],
    testing: "Tensile Test, Impact Test, Hardness Test, IGC Test",
    certifications:
      "ISO 9001:2015, CE, EN-ISO 10204-3.2, ISO 14001:2015, ISO 45001:2018, IS 1364, ADW2/PED, TUV, BIS",
    catalogue: "/catalogues/Fasteners.pdf",
  },
  {
    slug: "stainless-steel-wires",
    name: "Stainless Steel Wires",
    brief:
      "Versatile stainless wires and wire rods drawn to tight tolerances for welding, cold heading, springs, weaving and electro-polish finishes.",
    desc: "Wire rods (5.5–39.5mm) and wires (0.09–15mm) for ship building, medical, springs, fasteners, welding electrodes, food processing and more.",
    image: wiresImg,
    specs: ["ASTM / DIN / BS / JIS / AWS", "Bright & Annealed Finish"],
    grades: [
      "201", "202", "204Cu", "301", "302", "303", "304", "304L",
      "310", "316", "316L", "316Ti", "321", "410", "420", "430",
      "ER308 (Electrode)", "ER316L (Electrode)", "ER347 (Electrode)",
    ],
    applications: [
      { label: "Welding (MIG/TIG/SAW)", image: weldingImg },
      { label: "Ship Building", image: marineImg },
      { label: "Food Processing", image: foodImg },
      { label: "Automotive Fasteners", image: automotiveImg },
      { label: "Pharmaceutical", image: pharmaImg },
      { label: "Construction Mesh", image: constructionImg },
    ],
    testing:
      "Computerised Tensile Test (20kg–40 ton), Bend / Wrap / Torsion Test, Hardness Test, IGC Test, Cold Upset Test, PMI Test (Niton Gun X-ray), Spectro & Leco Analysers, Radioactive Contamination Test",
    catalogue: "/catalogues/Wires.pdf",
  },
  {
    slug: "stainless-steel-profiles",
    name: "Stainless Steel Profiles",
    brief:
      "Custom-drawn structural profiles — flats, angles, channels, tees and beams — for architectural and heavy-industrial frameworks.",
    desc: "Drawn flat bars, equal & unequal angles, channels, T-bars, I-beams and custom profiles. Flat bars from 20×5mm to 150×30mm, angles up to 150×150mm.",
    image: profilesImg,
    specs: ["Hot & Cold Rolled", "Custom Sections Available"],
    grades: ["303", "304", "304L", "304H", "316", "316L", "316Ti", "321", "630", "17-4PH"],
    applications: [
      { label: "Structural Engineering", image: constructionImg },
      { label: "Architectural", image: constructionImg },
      { label: "Marine", image: marineImg },
      { label: "Chemical Plants", image: chemicalImg },
      { label: "Industrial Framework", image: automotiveImg },
      { label: "Petrochemical", image: oilGasImg },
    ],
    testing:
      "Tensile Test, Hardness Test, Impact Test, Metallurgical Microscope with Image Analyser, IGC Test, Ultrasonic Test, PMI Test",
    catalogue: "/catalogues/Profiles.pdf",
  },
  {
    slug: "bright-bars",
    name: "Bright Bars",
    brief:
      "Centreless-ground, peeled & polished bright bars with tight h8/h9/h11 tolerances and 100% UT testing for precision machining.",
    desc: "Round, hexagonal, square and forged bright bars (2–600mm). Supply conditions include centreless ground, peeled & polished, cold drawn, and 100% UT tested.",
    image: brightBarsImg,
    specs: ["h8/h9/h11 Tolerance", "2–600mm Range"],
    grades: [
      "201", "202", "303", "304", "304L", "309", "310", "316", "316L",
      "317L", "321", "347", "410", "416", "420", "430", "431",
      "630 / 17-4PH", "F51 (Duplex)", "F60",
    ],
    applications: [
      { label: "Precision Engineering", image: automotiveImg },
      { label: "Automotive Shafts", image: automotiveImg },
      { label: "Pump & Valve Components", image: chemicalImg },
      { label: "Oil & Gas", image: oilGasImg },
      { label: "Power Generation", image: powerImg },
      { label: "Aerospace", image: aerospaceImg },
    ],
    testing:
      "Tensile Test, Impact Test, Hardness Test, Microscope with Image Analyser, Ultrasonic Test (Continuous Bar), Precision Digital Laser Micrometer, Eddy Current Test, Surface Roughness Test, IGC Test, Radioactive Contamination Test",
    catalogue: "/catalogues/Bright_bars.pdf",
  },
  {
    slug: "seamless-pipes-tubes",
    name: "Seamless Pipes & Tubes",
    brief:
      "Hot-finished and cold-drawn seamless stainless pipes & tubes for high-pressure fluid transport, heat exchange and pharmaceutical service.",
    desc: "High-quality seamless stainless steel pipes and tubes for oil & gas, chemical, petrochemical, power and pharmaceutical industries.",
    image: seamlessPipesImg,
    specs: ["ASTM A312 / A213", "Custom Lengths Available"],
    grades: ["304", "304L", "316", "316L", "321", "310S", "317L", "Duplex 2205"],
    applications: [
      { label: "Oil & Gas", image: oilGasImg },
      { label: "Chemical & Petrochemical", image: chemicalImg },
      { label: "Power Generation", image: powerImg },
      { label: "Pharmaceutical", image: pharmaImg },
      { label: "Heat Exchangers", image: chemicalImg },
      { label: "Food Processing", image: foodImg },
    ],
    testing:
      "Hydrostatic Test, Eddy Current Test, Ultrasonic Test, Flattening Test, Flaring Test",
    catalogue: "/catalogues/Seamless_Pipes_Tubes.pdf",
  },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
