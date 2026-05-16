import flangesImg from "@/assets/flanges.jpg";
import fastenersImg from "@/assets/fasteners.jpg";
import wiresImg from "@/assets/wires.jpg";
import profilesImg from "@/assets/profiles.jpg";
import brightBarsImg from "@/assets/bright-bars.jpg";
import seamlessPipesImg from "@/assets/seamless-pipes.jpg";

export type Product = {
  slug: string;
  name: string;
  desc: string;
  image: string;
  specs: string[];
  grades?: string;
  applications?: string;
  testing?: string;
  certifications?: string;
  catalogue?: string | null;
};

export const products: Product[] = [
  {
    slug: "stainless-steel-flanges",
    name: "Stainless Steel Flanges",
    desc: "Slip-on, weld neck, blind, threaded, lap joint, RTJ & socket weld flanges. Size range ½\" to 40\" with pressure classes 150 to 2500 LBS.",
    image: flangesImg,
    specs: ["ASME B16.5 / B16.47", "DIN / JIS / BS / GOST"],
    grades: "F304, F304L, F304H, F316, F316L, F316H, F321, F321H, F347, F347H, F317L, F51, F53, F60",
    applications: "Pipeline Engineering, Oil & Gas (Upstream & Downstream), Ship Building, Boiler & Pressure Vessels, Chemical & Petrochemical, Power Industries (Nuclear, Natural Gas, Wind, Solar), Aerospace, Food Processing, Fertilizer Industry, Waste Water",
    testing: "Tensile Test (Screw Driven & Computerized), Impact Test (RT & Sub Zero), Hardness Test, IGC Test, Dye Penetrate Test, Ultrasonic Test, PMI Test (X-ray & OES), Surface Roughness Test",
    catalogue: "/catalogues/Flanges.pdf",
  },
  {
    slug: "stainless-steel-fasteners",
    name: "Stainless Steel Fasteners",
    desc: "Bolts, nuts, screws, washers, studs, threaded rods and dowel screws. Available in standard to heavy-duty applications with precision engineering for critical fastening solutions.",
    image: fastenersImg,
    specs: ["ASTM A193/A194", "DIN 931/934 / ISO 4014", "ANSI B18.6.3"],
    grades: "304, 304L, 316, 316L, 321, 410, 430, Duplex",
    applications: "Construction, Petrochemical, Oil & Gas, Marine, Power Generation, Food Processing, Pharmaceutical, Furniture & Interiors",
    testing: "Tensile Test, Impact Test, Hardness Test, IGC Test",
    certifications: "ISO 9001:2015, CE, EN-ISO 10204-3.2, ISO 14001:2015, ISO 45001:2018, IS 1364, ADW2/PED, TUV, BIS",
    catalogue: "/catalogues/Fasteners.pdf",
  },
  {
    slug: "stainless-steel-wires",
    name: "Stainless Steel Wires",
    desc: "Wire rods (5.5–39.5mm) and wires (0.09–15mm) for ship building, medical, springs, fasteners, welding electrodes, food processing and more.",
    image: wiresImg,
    specs: ["ASTM / DIN / BS / JIS / AWS", "Bright & Annealed Finish"],
    grades: "201, 202, 204Cu, 301, 302, 303, 304, 304L, 310, 316, 316L, 316Ti, 321, 410, 420, 430 + Electrode grades (ER308, ER316L, ER347 etc.)",
    applications: "Welding (MIG, TIG, SAW, MMAW), Cold Heading (Nuts, Bolts, Screws), Weaving / Braiding / Knitting (Meshes, Nets, Conveyor Belts), Springs, Rope Wire, Electro Polish (Kitchen Ware, Grill Racks), Staple & Nail Wire, Redraw Wire",
    testing: "Computerised Tensile Test (20kg–40 ton), Bend / Wrap / Torsion Test, Hardness Test, IGC Test, Cold Upset Test, PMI Test (Niton Gun X-ray), Spectro & Leco Analysers, Radioactive Contamination Test",
    catalogue: "/catalogues/Wires.pdf",
  },
  {
    slug: "stainless-steel-profiles",
    name: "Stainless Steel Profiles",
    desc: "Drawn flat bars, equal & unequal angles, channels, T-bars, I-beams and custom profiles. Flat bars from 20×5mm to 150×30mm, angles up to 150×150mm.",
    image: profilesImg,
    specs: ["Hot & Cold Rolled", "Custom Sections Available"],
    grades: "304, 304L, 304H, 303, 316, 316L, 321, 316Ti, 630, 17-4PH",
    applications: "Structural Engineering, Construction, Industrial Framework, Architectural Applications, Marine, Chemical & Petrochemical Plants",
    testing: "Tensile Test, Hardness Test, Impact Test, Metallurgical Microscope with Image Analyser, IGC Test, Ultrasonic Test, PMI Test",
    catalogue: "/catalogues/Profiles.pdf",
  },
  {
    slug: "bright-bars",
    name: "Bright Bars",
    desc: "Round, hexagonal, square and forged bright bars (2–600mm). Supply conditions include centreless ground, peeled & polished, cold drawn, and 100% UT tested.",
    image: brightBarsImg,
    specs: ["h8/h9/h11 Tolerance", "2–600mm Range"],
    grades: "201, 202, 303, 304, 304L, 316, 316L, 309, 310, 317L, 321, 347, 410, 416, 420, 430, 431, 630, 17-4PH, F51, F60",
    applications: "Precision Engineering, Automotive, Pump Shafts, Valve Components, Oil & Gas, Chemical Processing, Power Generation, Aerospace",
    testing: "Tensile Test, Impact Test, Hardness Test, Microscope with Image Analyser, Ultrasonic Test (Continuous Bar), Precision Digital Laser Micrometer, Eddy Current Test, Surface Roughness Test, IGC Test, Radioactive Contamination Test",
    catalogue: "/catalogues/Bright_bars.pdf",
  },
  {
    slug: "seamless-pipes-tubes",
    name: "Seamless Pipes & Tubes",
    desc: "High-quality seamless stainless steel pipes and tubes for oil & gas, chemical, petrochemical, power and pharmaceutical industries.",
    image: seamlessPipesImg,
    specs: ["ASTM A312/A213", "Custom Lengths Available"],
    grades: "304, 304L, 316, 316L, 321, 310S, 317L, Duplex 2205",
    applications: "Oil & Gas, Chemical & Petrochemical, Power Generation, Pharmaceutical, Heat Exchangers, Boilers & Condensers",
    testing: "Hydrostatic Test, Eddy Current Test, Ultrasonic Test, Flattening Test, Flaring Test",
    catalogue: "/catalogues/Seamless_Pipes_Tubes.pdf",
  },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
