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
  categories: string[];
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
    desc: "Rout Enterprises supplies and exports a comprehensive range of stainless steel flanges including Slip-On, Weld Neck, Blind, Threaded, Socket Weld, Lap Joint, Reducing, Orifice, Long Weld Neck and Ring Type Joint (RTJ) flanges. Our flanges are sourced from premium forged billets and finished on CNC machines to guarantee dimensional accuracy, smooth sealing faces and complete inter-changeability with mating components. We supply sizes from ½\" up to 40\" in pressure classes 150 LBS, 300 LBS, 600 LBS, 900 LBS, 1500 LBS and 2500 LBS, conforming to ASME B16.5, ASME B16.47 Series A & B, MSS-SP44, API 6A, DIN, EN-1092-1, BS-4504, JIS and GOST standards. Every flange is hydro-tested, ultrasonically inspected and supplied with EN 10204 3.1/3.2 certification, making them the trusted choice for refineries, offshore platforms, fertilizer plants, LNG terminals and high-pressure pipeline networks across the globe.",
    image: flangesImg,
    specs: ["ASME B16.5 / B16.47", "DIN / JIS / BS / GOST"],
    categories: [
      "Slip-On Flanges", "Weld Neck Flanges", "Blind Flanges", "Threaded Flanges",
      "Socket Weld Flanges", "Lap Joint Flanges", "Reducing Flanges",
      "Orifice Flanges", "Long Weld Neck Flanges", "Ring Type Joint (RTJ) Flanges",
    ],
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
    desc: "Our stainless steel fastener range is engineered to deliver dependable clamping force in the harshest operating environments. The portfolio covers hex bolts, heavy hex bolts, stud bolts, threaded rods, hex nuts, heavy hex nuts, nylock nuts, dome nuts, machine screws, self-tapping screws, socket head cap screws, countersunk screws, flat washers, spring washers and custom dowel screws in metric and imperial sizes from M3 to M64 and ¼\" to 4\". Each fastener is cold-forged or hot-forged, precision-threaded and finished with passivation, electro-polishing or PTFE coating depending on the service condition. We supply to ASTM A193 B8/B8M, A194 2H/8/8M, DIN 931/933/934/985, ISO 4014/4017/4032, ANSI/ASME B18.2.1, B18.2.2 and IS 1364 specifications. With strict in-house chemical and mechanical testing, our fasteners are widely used in petrochemical refineries, fertilizer units, power plants, shipyards, structural steel projects and pressure vessel assemblies where failure is never an option.",
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
    desc: "Rout Enterprises supplies a complete spectrum of stainless steel wires and wire rods drawn under controlled atmospheres to deliver exceptional surface finish, consistent diameter and predictable mechanical properties. Our wire rods are available in diameters from 5.5 mm to 39.5 mm in coil form, while finished wires range from ultra-fine 0.09 mm up to 15 mm in soft, half-hard, hard, spring-hard and bright-annealed tempers. Surface options include matte, bright, electro-polished, copper coated, nickel coated and PVC coated finishes. We offer cold-heading quality (CHQ) wires for fasteners, MIG, TIG, SAW and SMAW welding wires (ER308L, ER309L, ER316L, ER347, ER2209, ER2594), spring quality wires, EPQ wires for medical and electronic applications, knitting and weaving wires for filtration mesh, and high-tensile rope wires. Supplied to ASTM A580, A555, A313, AWS A5.9, DIN 17223, EN 10270-3, JIS G4309 and BS 2056 standards, our wires serve the welding consumables industry, automotive fastener buyers, spring makers, kitchenware brands, medical instrument makers and food processing equipment OEMs worldwide.",
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
    desc: "Our stainless steel profiles cover the entire structural and architectural requirement spectrum — from precision cold-drawn sections to robust hot-rolled and laser-fused profiles. The range includes flat bars (20×5 mm to 150×30 mm), equal angles (20×20 mm to 150×150 mm), unequal angles, U-channels, C-channels, T-bars, I-beams, H-beams, hexagonal sections, square sections and custom-drawn special profiles built to client drawings. Profiles are produced by partner mills using hot rolling, cold drawing, laser welding and press braking, then surface-finished by pickling, shot blasting, No.4 satin, hairline brushed or mirror polished (No.8) treatments. We comply with ASTM A276, A479, A484, EN 10088-3, EN 10056, JIS G4317 and DIN 1028 standards. Length tolerances are held to ±2 mm and straightness within 1 mm per metre. These profiles are the backbone of architectural façades, food processing platforms, marine deck structures, chemical plant supports, conveyor frames, escalator components and railway coach interiors, where strength, corrosion resistance and a premium aesthetic finish must coexist.",
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
    desc: "Rout Enterprises supplies and exports premium-grade stainless steel bright bars engineered for the world's most demanding precision-machining applications. Our bright bar portfolio includes round bars from 2 mm to 600 mm diameter, hexagonal bars from 6 mm to 80 mm AF, square bars from 6 mm to 100 mm and forged round bars up to 600 mm, supplied in random, fixed or cut-to-length pieces. Supply conditions cover cold-drawn, peeled and polished, centreless ground, smooth turned, and reeled and polished finishes with h8, h9, h10 and h11 tolerance classes. Every bar undergoes 100% ultrasonic testing, eddy current testing, surface roughness inspection and dimensional verification with laser micrometers to ensure freedom from internal defects and consistent machinability. Supplied to ASTM A276, A484, A582, A564, EN 10088-3, DIN 17440, JIS G4303 and BS 970 specifications, our bright bars are the preferred raw material for CNC machined components, automotive shafts, pump and valve internals, surgical instruments, food machinery, aerospace fittings and oil and gas downhole tools.",
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
    desc: "Our seamless stainless steel pipes and tubes are sourced using the extrusion, hot-piercing and cold-drawing routes to deliver superior concentricity, uniform wall thickness and a defect-free internal bore. The range spans pipes from ⅛\" NB to 24\" NB in schedules 5S, 10S, 40S, 80S, 160S and XXS, and tubes from 6 mm to 254 mm outer diameter with wall thickness from 0.5 mm to 30 mm, available in random, double-random, fixed and U-bent lengths. Surface finishes include pickled & annealed, bright annealed, polished (180/240/320/400 grit), electro-polished and AP/BA finishes for hygienic service. We supply to ASTM A312, A213, A269, A270, A789, A790, A249, EN 10216-5, DIN 17458, JIS G3459 and BS 3605 specifications, with every length pressure-tested, eddy-current tested, hydro-tested and supplied with PMI verification and EN 10204 3.1/3.2 certification. Trusted worldwide for refinery heat exchangers, boiler superheater coils, urea fertilizer reactors, instrumentation tubing, dairy and pharmaceutical sanitary lines, condenser tubes and high-purity hydrogen and oxygen service.",
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
