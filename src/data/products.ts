import flangesImg from "@/assets/flanges.jpg";
import fastenersImg from "@/assets/fasteners.jpg";
import wiresImg from "@/assets/wires.jpg";
import profilesImg from "@/assets/profiles.jpg";
import brightBarsImg from "@/assets/bright-bars.jpg";
import seamlessPipesImg from "@/assets/seamless-pipes.jpg";
import coilsImg from "@/assets/coils.jpg";
import sheetsPlatesImg from "@/assets/sheets-plates.jpg";
import coilHrImg from "@/assets/coil-hr.jpg";
import coilCrImg from "@/assets/coil-cr.jpg";
import coilGiImg from "@/assets/coil-gi.jpg";
import coilGlImg from "@/assets/coil-gl.jpg";
import roundBarImg from "@/assets/round-bar.jpg";
import hexagonBarImg from "@/assets/hexagon-bar.jpg";
import flatBarImg from "@/assets/flat-bar.jpg";
import steelAnglesImg from "@/assets/steel-angles.jpg";
import steelChannelsImg from "@/assets/steel-channels.jpg";
import prePaintedCoilsImg from "@/assets/pre-painted-coils.jpg";
import steelPipesTubesImg from "@/assets/steel-pipes-tubes.jpg";
import tmtBarImg from "@/assets/tmt-bar.jpg";

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
  hidden?: boolean;
  additionalOfferings?: string[];
};

export const products: Product[] = [
  {
    slug: "stainless-steel-flanges",
    name: "Stainless Steel Flanges",
    brief:
      "Precision-forged stainless steel flanges engineered for leak-proof pipeline joints across high-pressure and high-temperature service.",
    desc: "Rout Enterprises supplies and exports a comprehensive range of stainless steel flanges including Slip-On, Weld Neck, Blind, Threaded, Socket Weld, Lap Joint, Reducing, Orifice, Long Weld Neck and Ring Type Joint (RTJ) flanges. Our flanges are sourced from premium forged billets and finished on CNC machines to guarantee dimensional accuracy, smooth sealing faces and complete inter-changeability with mating components. We supply sizes from ½\" up to 40\" in pressure classes 150 LBS, 300 LBS, 600 LBS, 900 LBS, 1500 LBS and 2500 LBS, conforming to ASME B16.5, ASME B16.47 Series A & B, MSS-SP44, API 6A, DIN, EN-1092-1, BS-4504, JIS and GOST standards. Every flange is hydro-tested, ultrasonically inspected and supplied with EN 10204 3.1/3.2 certification, making them the trusted choice for refineries, offshore platforms, fertilizer plants, LNG terminals and high-pressure pipeline networks across the globe.",
    image: flangesImg,
    specs: ["ASME B16.5 / B16.47", "DIN / JIS / BS / GOST", "ASTM A182 / A240"],
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
    additionalOfferings: [
      "Inconel Flanges (Inconel 600, 601, 625, 718, 825)",
      "Carbon Steel Flanges (ASTM A105, A350 LF2, A694)",
      "Hastelloy Flanges (Hastelloy C-22, C-276, B-2, B-3, X)",
      "Alloy Steel Flanges (ASTM A182 F1, F5, F9, F11, F22, F91)",
      "Monel Flanges (Monel 400, K-500)",
    ],
  },
  {
    slug: "stainless-steel-fasteners",
    name: "Stainless Steel Fasteners",
    brief:
      "Corrosion-resistant fasteners for critical assemblies — engineered for repeatable torque, fatigue resistance and long service life.",
    desc: "Our stainless steel fastener range is engineered to deliver dependable clamping force in the harshest operating environments. The portfolio covers hex bolts, heavy hex bolts, stud bolts, threaded rods, hex nuts, heavy hex nuts, nylock nuts, dome nuts, machine screws, self-tapping screws, socket head cap screws, countersunk screws, flat washers, spring washers and custom dowel screws in metric and imperial sizes from M3 to M64 and ¼\" to 4\". Each fastener is cold-forged or hot-forged, precision-threaded and finished with passivation, electro-polishing or PTFE coating depending on the service condition. We supply to ASTM A193 B8/B8M, A194 2H/8/8M, DIN 931/933/934/985, ISO 4014/4017/4032, ANSI/ASME B18.2.1, B18.2.2 and IS 1364 specifications. With strict in-house chemical and mechanical testing, our fasteners are widely used in petrochemical refineries, fertilizer units, power plants, shipyards, structural steel projects and pressure vessel assemblies where failure is never an option.",
    image: fastenersImg,
    specs: ["ASTM A193/A194", "DIN 931/934 / ISO 4014", "ANSI B18.6.3"],
    categories: [
      "Hex Bolts", "Heavy Hex Bolts", "Stud Bolts", "Threaded Rods",
      "Hex Nuts", "Heavy Hex Nuts", "Nylock Nuts", "Dome Nuts",
      "Machine Screws", "Self-Tapping Screws", "Socket Head Cap Screws",
      "Countersunk Screws", "Flat Washers", "Spring Washers", "Custom Dowel Screws",
    ],
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
    categories: [
      "Wire Rods (Coil)", "Cold-Heading Quality (CHQ) Wires",
      "MIG Welding Wires", "TIG Welding Wires", "SAW Welding Wires", "SMAW Welding Wires",
      "Spring Quality Wires", "EPQ Wires", "Knitting & Weaving Wires",
      "Bright Annealed Wires", "Electro-Polished Wires",
      "Copper Coated Wires", "Nickel Coated Wires", "PVC Coated Wires",
      "High-Tensile Rope Wires",
    ],
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
    categories: [
      "Flat Bars", "Equal Angles", "Unequal Angles", "U-Channels", "C-Channels",
      "T-Bars", "I-Beams", "H-Beams", "Hexagonal Sections", "Square Sections",
      "Laser-Fused Profiles", "Custom Drawn Profiles",
    ],
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
    categories: [
      "Round Bars (2–600mm)", "Hexagonal Bars (6–80mm AF)",
      "Square Bars (6–100mm)", "Forged Round Bars (up to 600mm)",
      "Cold Drawn Bars", "Peeled & Polished Bars",
      "Centreless Ground Bars", "Smooth Turned Bars", "Reeled & Polished Bars",
    ],
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
    categories: [
      "Seamless Pipes (⅛\"–24\" NB)", "Seamless Tubes (6–254mm OD)",
      "Heat Exchanger Tubes", "Boiler Tubes", "Condenser Tubes",
      "Instrumentation Tubes", "Hydraulic Tubes", "U-Bent Tubes",
      "Sanitary / Pharma Tubes", "Electro-Polished Tubes",
      "Pickled & Annealed Pipes", "Bright Annealed Tubes",
    ],
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
  {
    slug: "stainless-steel-coils",
    name: "Stainless Steel Coils",
    brief:
      "Cold-rolled and hot-rolled stainless steel coils in a wide spectrum of grades, finishes and thicknesses for forming, stamping, deep drawing and fabrication.",
    desc: "Rout Enterprises supplies and exports premium stainless steel coils produced on state-of-the-art continuous hot-strip and cold-rolling mills, followed by annealing, pickling and skin-pass finishing to deliver exceptional surface quality, tight gauge tolerances and consistent mechanical properties. Our coil inventory spans hot-rolled coils (HRC) from 2.0 mm to 25.0 mm thickness in widths from 1000 mm to 2000 mm, and cold-rolled coils (CRC) from 0.20 mm to 6.0 mm thickness in widths from 600 mm to 1500 mm, supplied in edge-trimmed, mill-edge, slit-edge and custom-width configurations. Surface finishes include No.1 (hot-rolled, annealed, pickled), 2D (cold-rolled, annealed, pickled), 2B (cold-rolled, annealed, pickled, skin-passed), BA (bright annealed), No.3, No.4, No.6, No.7 and No.8 (mirror) brushed or polished finishes, as well as embossed, chequered and colour-coated (PE, PVDF) options. Every coil is supplied with certified mill test reports conforming to ASTM A240, A480, A167, EN 10088-2, EN 10028-7, JIS G4305, JIS G4312 and DIN 17440 standards. Our coils are the preferred feedstock for automotive exhaust systems, kitchenware and appliance panels, elevator decorative sheets, chemical storage tanks, pressure vessel shells, roofing and cladding profiles, precision strip for electronic connectors, and deep-drawn cookware and hollowware manufactured by leading OEMs and contract manufacturers worldwide.",
    image: coilsImg,
    specs: ["ASTM A240 / A480 / A167", "EN 10088-2 / JIS G4305", "Hot & Cold Rolled"],
    categories: [
      "Hot Rolled SS Coils", "Cold Rolled SS Coils", "Slit Coils",
      "Edge-Trimmed Coils", "Precision Strip Coils", "Chequered Coils",
      "Embossed Coils", "Colour-Coated Coils (PE/PVDF)",
      "No.1 Finish Coils", "2B Finish Coils", "BA Finish Coils",
      "Mirror Finish Coils", "Brushed Finish Coils",
    ],
    grades: [
      "201", "202", "301", "304", "304L", "304H", "309", "309S", "310", "310S",
      "316", "316L", "316Ti", "317L", "321", "321H", "347", "347H", "409", "410",
      "420", "430", "439", "441", "444", "2205 (Duplex)", "2507 (Super Duplex)",
      "904L (Super Austenitic)",
    ],
    applications: [
      { label: "Automotive", image: automotiveImg },
      { label: "Construction", image: constructionImg },
      { label: "Food Processing", image: foodImg },
      { label: "Chemical & Petrochemical", image: chemicalImg },
      { label: "Oil & Gas", image: oilGasImg },
      { label: "Power Generation", image: powerImg },
    ],
    testing:
      "Tensile Test, Yield Strength Test, Elongation Test, Hardness Test (Rockwell & Vickers), Flattening Test, Flaring Test, IGC Test (ASTM A262 Practice E & A), PMI Test (X-ray Fluorescence & OES), Surface Roughness Measurement, Dimensional Gauge Verification, Coil Crown & Wedge Measurement, Coil Camber Inspection",
    certifications:
      "ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, EN 10204 3.1/3.2, PED 2014/68/EU, NACE MR0175, AD 2000-Merkblatt W2/W10, TUV Certified",
    catalogue: null,
  },
  {
    slug: "stainless-steel-sheets-plates",
    name: "Stainless Steel Sheets & Plates",
    brief:
      "High-integrity stainless steel sheets and plates in a full range of thicknesses, finishes and grades for fabrication, cladding and pressure-vessel service.",
    desc: "Rout Enterprises supplies and exports premium stainless steel sheets and plates rolled on modern hot and cold reversing mills, followed by annealing, pickling, levelling and precision cut-to-size operations to deliver flat, defect-free products with tight thickness tolerances and superior surface quality. Our sheet range covers 0.30 mm to 6.0 mm thickness, while plates span from 6.0 mm up to 150 mm thickness in widths from 1000 mm to 3000 mm and lengths up to 12000 mm, supplied in mill-edge, trimmed-edge and custom-cut formats. Surface finishes include No.1, 2B, 2D, BA, No.3, No.4, No.8 mirror, hairline, chequered, embossed and PVC-film protected options. Every sheet and plate is supplied with EN 10204 3.1/3.2 mill test certificates conforming to ASTM A240, ASTM A480, ASME SA240, EN 10028-7, EN 10088-2, JIS G4304, JIS G4305 and DIN 17440 specifications. Widely used for pressure vessels, storage tanks, heat exchangers, architectural cladding, kitchen equipment, dairy and pharmaceutical fabrication, chemical processing equipment and shipbuilding, our sheets and plates are trusted by fabricators and EPC contractors across 30+ countries.",
    image: sheetsPlatesImg,
    specs: ["ASTM A240 / A480", "EN 10028-7 / EN 10088-2", "0.30 mm – 150 mm"],
    categories: [
      "Hot Rolled Plates", "Cold Rolled Sheets", "Boiler Quality Plates",
      "Chequered Plates", "Perforated Sheets", "Embossed Sheets",
      "2B Finish Sheets", "BA Finish Sheets", "No.4 Brushed Sheets",
      "Mirror (No.8) Polished Sheets", "PVC Coated Sheets",
    ],
    grades: [
      "201", "202", "301", "304", "304L", "304H", "309", "309S", "310", "310S",
      "316", "316L", "316Ti", "317L", "321", "321H", "347", "409", "410",
      "420", "430", "439", "441", "2205 (Duplex)", "2507 (Super Duplex)", "904L",
    ],
    applications: [
      { label: "Pressure Vessels", image: chemicalImg },
      { label: "Food Processing", image: foodImg },
      { label: "Ship Building", image: marineImg },
      { label: "Architectural Cladding", image: constructionImg },
      { label: "Pharmaceutical", image: pharmaImg },
      { label: "Power Generation", image: powerImg },
    ],
    testing:
      "Tensile Test, Impact Test, Hardness Test, IGC Test, Ultrasonic Test, PMI Test, Flattening Test",
    catalogue: null,
  },
  {
    slug: "hot-rolled-coils",
    name: "Hot Rolled Coils (HRC)",
    brief:
      "Heavy-gauge hot rolled steel coils with mill-scale finish, engineered for structural, automotive and general fabrication applications.",
    desc: "Rout Enterprises supplies and exports high-quality Hot Rolled Coils (HRC) produced on state-of-the-art continuous hot-strip mills where reheated slabs are progressively rolled through roughing and finishing stands to deliver consistent mechanical properties, uniform thickness and superior formability. Our HRC range covers thicknesses from 1.20 mm to 25.4 mm and widths from 900 mm to 2100 mm, supplied in coil weights up to 30 metric tonnes, in mill-edge, slit-edge and trimmed-edge configurations. Available conditions include as-rolled, pickled & oiled (HRPO), skin-passed and normalised, giving fabricators the surface quality and dimensional accuracy needed for downstream forming, welding and machining. All HRC lots are supplied with certified mill test reports conforming to ASTM A1011, ASTM A36, ASTM A572, JIS G3131, EN 10025-2, EN 10111 and IS 2062 standards. Our Hot Rolled Coils are the backbone of structural steel fabrication, LPG cylinders, pipe & tube making, automotive chassis and wheel rims, agricultural equipment, railway wagons, shipbuilding hull plates, storage tanks, cold-forming pre-material and heavy engineering fabrication across construction, infrastructure and OEM industries worldwide.",
    image: coilHrImg,
    specs: ["ASTM A1011 / A36", "JIS G3131 / EN 10025-2", "IS 2062", "1.20 mm – 25.4 mm"],
    categories: [
      "HR Coils (As-Rolled)", "HR Pickled & Oiled (HRPO)", "HR Skin-Passed Coils",
      "HR Slit Coils", "HR Cut-to-Length Sheets", "Structural HR Coils",
    ],
    grades: [
      "SS400", "A36", "A572 Gr.50", "Q235", "Q345", "Q355",
      "S235JR", "S275JR", "S355JR", "SPHC", "SPHD", "SPHE",
      "SAE 1006 / 1008 / 1010", "IS 2062 E250 / E350",
    ],
    applications: [
      { label: "Construction", image: constructionImg },
      { label: "Automotive", image: automotiveImg },
      { label: "Ship Building", image: marineImg },
      { label: "Oil & Gas Pipelines", image: oilGasImg },
      { label: "Structural Fabrication", image: constructionImg },
      { label: "Heavy Engineering", image: powerImg },
    ],
    testing:
      "Tensile Test, Yield Strength Test, Elongation Test, Bend Test, Hardness Test, Chemical Composition Analysis, Coil Camber & Crown Verification",
    catalogue: null,
    hidden: true,
  },
  {
    slug: "cold-rolled-coils",
    name: "Cold Rolled Coils (CRC)",
    brief:
      "Precision cold rolled steel coils with smooth silvery finish, tight thickness tolerances and excellent formability for deep-drawing and appliance applications.",
    desc: "Rout Enterprises supplies and exports premium Cold Rolled Coils (CRC) produced by passing pickled hot-rolled substrate through tandem cold-rolling mills, followed by continuous annealing, temper rolling and tension levelling to deliver an exceptionally smooth surface, tight gauge tolerances and consistent mechanical properties. Our CRC range spans thicknesses from 0.15 mm to 3.0 mm and widths from 600 mm to 1550 mm, offered in full-hard, quarter-hard, half-hard, deep-drawing and extra-deep-drawing tempers with oiled, dry, chromated or phosphated surface treatments. Every coil is supplied with EN 10204 3.1 mill test certificates conforming to JIS G3141, ASTM A1008, EN 10130, DIN 1623 and IS 513 standards. With superior surface flatness, weldability and paint-adhesion characteristics, our Cold Rolled Coils are widely used by automotive OEMs for body panels and inner structures, appliance manufacturers for washing machines, refrigerators and microwave housings, furniture and steel almirah makers, drum & barrel manufacturers, HVAC ducting fabricators, electrical panel and enclosure producers, and pre-painted coil (PPGI) manufacturers who require the highest surface quality as feedstock.",
    image: coilCrImg,
    specs: ["JIS G3141 / ASTM A1008", "EN 10130 / DIN 1623", "IS 513", "0.15 mm – 3.0 mm"],
    categories: [
      "CR Full-Hard Coils", "CR Deep-Drawing (DD) Coils", "CR Extra-Deep-Drawing (EDD) Coils",
      "CR Slit Coils", "CR Cut-to-Length Sheets", "CR Skin-Passed Coils",
    ],
    grades: [
      "SPCC", "SPCD", "SPCE", "SPCEN",
      "DC01", "DC03", "DC04", "DC05", "DC06",
      "CR1", "CR2", "CR3", "CR4",
      "SAE 1008 / 1010", "IS 513 D / DD / EDD",
    ],
    applications: [
      { label: "Automotive Body Panels", image: automotiveImg },
      { label: "Appliances", image: constructionImg },
      { label: "Furniture", image: constructionImg },
      { label: "HVAC Ducting", image: powerImg },
      { label: "Electrical Enclosures", image: powerImg },
      { label: "Pre-Painted (PPGI) Feedstock", image: automotiveImg },
    ],
    testing:
      "Tensile Test, Yield Strength Test, Elongation Test, Erichsen Cupping Test, Hardness Test (Rockwell/Vickers), Surface Roughness Test, Coil Camber Verification",
    catalogue: null,
    hidden: true,
  },
  {
    slug: "galvanized-coils",
    name: "Galvanized Coils (GI)",
    brief:
      "Zinc-coated hot-dip galvanized steel coils offering superior corrosion resistance and formability for roofing, construction and automotive applications.",
    desc: "Rout Enterprises supplies and exports high-quality hot-dip Galvanized Coils (GI) produced on continuous galvanizing lines where cold-rolled substrate is cleaned, annealed and passed through a molten zinc bath at approximately 460°C, followed by air-knife wiping to precisely control the zinc coating weight and produce a uniform, tightly adherent zinc layer with the characteristic spangle pattern. Our GI coil range spans base-metal thicknesses from 0.14 mm to 4.0 mm and widths from 750 mm to 1550 mm, with zinc coating weights from 60 g/m² up to 600 g/m² (Z60 to Z600) available in regular spangle, minimized spangle, zero spangle and skin-passed finishes. Surface treatments include chromated, phosphated, oiled and anti-fingerprint options to enhance corrosion resistance during transport and storage. All coils are supplied with EN 10204 3.1 mill test certificates conforming to ASTM A653/A653M, JIS G3302, EN 10346, IS 277 and AS 1397 standards. Widely used for roofing and cladding sheets, purlins and structural framing, automotive underbody parts, air-conditioning ducts, electrical panels and enclosures, water tanks, cable trays, silos, greenhouses, highway crash barriers and pre-painted (PPGI) coil feedstock, our galvanized coils deliver 20+ years of corrosion protection in harsh atmospheric and industrial environments.",
    image: coilGiImg,
    specs: ["ASTM A653", "JIS G3302 / EN 10346", "IS 277 / AS 1397", "0.14 mm – 4.0 mm", "Z60 – Z600"],
    categories: [
      "Regular Spangle GI", "Minimized Spangle GI", "Zero Spangle GI",
      "Skin-Passed GI", "Chromated GI", "Anti-Fingerprint GI",
      "GI Slit Coils", "GI Cut-to-Length Sheets",
    ],
    grades: [
      "DX51D+Z", "DX52D+Z", "DX53D+Z", "DX54D+Z",
      "S220GD+Z", "S250GD+Z", "S280GD+Z", "S320GD+Z", "S350GD+Z",
      "SGCC", "SGCD1", "SGCD2", "SGCD3", "SGH340 / SGH400 / SGH440 / SGH490 / SGH540",
      "CS Type A/B/C (ASTM A653)", "FS Type A/B", "DDS", "EDDS",
      "G60 / G90 / G115 / G140 / G185 / G210",
      "IS 277 – GP / GC",
    ],
    applications: [
      { label: "Roofing & Cladding", image: constructionImg },
      { label: "Structural Framing", image: constructionImg },
      { label: "Automotive Underbody", image: automotiveImg },
      { label: "HVAC Ducting", image: powerImg },
      { label: "Electrical Enclosures", image: powerImg },
      { label: "Highway Crash Barriers", image: constructionImg },
    ],
    testing:
      "Zinc Coating Weight Test (Triple-Spot Method), Adhesion / Bend Test, Salt-Spray Corrosion Test, Tensile & Yield Test, Hardness Test, Surface Appearance Inspection",
    catalogue: null,
    hidden: true,
  },
  {
    slug: "galvalume-coils",
    name: "Galvalume Coils (GL)",
    brief:
      "Aluminum-zinc alloy coated steel coils combining the corrosion resistance of aluminum with the sacrificial protection of zinc for long-life roofing and cladding.",
    desc: "Rout Enterprises supplies and exports premium Galvalume Coils (GL / AZ / AZM) manufactured on continuous hot-dip coating lines where cold-rolled steel substrate is coated with a metallurgically-bonded alloy of approximately 55% aluminum, 43.5% zinc and 1.5% silicon, delivering up to four times the corrosion life of conventional galvanized coating in most atmospheric environments. Our Galvalume coil range covers base-metal thicknesses from 0.13 mm to 2.0 mm and widths from 750 mm to 1500 mm, with coating masses from AZ50 to AZ200 (50 g/m² to 200 g/m² total on both surfaces) supplied in regular spangle and smooth minimized-spangle finishes, with anti-finger-print (AFP), acrylic-passivated or chromated surface treatments. Every coil is supplied with EN 10204 3.1 mill test certificates conforming to ASTM A792, JIS G3321, EN 10346 and AS 1397 standards. The unique aluminum-rich barrier layer combined with the zinc-based cathodic protection at cut edges makes Galvalume the preferred substrate for long-span metal roofing, industrial and warehouse cladding, cold-storage panels, insulated sandwich panels, pre-engineered building (PEB) roofing, HVAC casings, appliance outer panels, ductwork, and pre-painted (PPGL) coil feedstock delivering 40+ year expected service life in coastal, industrial and rural environments.",
    image: coilGlImg,
    specs: ["ASTM A792", "JIS G3321 / EN 10346", "AS 1397", "0.13 mm – 2.0 mm", "AZ50 – AZ200"],
    categories: [
      "Regular Spangle GL", "Minimized Spangle GL", "Anti-Fingerprint GL",
      "Acrylic-Passivated GL", "GL Slit Coils", "GL Cut-to-Length Sheets",
    ],
    grades: [
      "DX51D+AZ", "DX52D+AZ", "DX53D+AZ", "DX54D+AZ",
      "S220GD+AZ", "S250GD+AZ", "S280GD+AZ", "S320GD+AZ", "S350GD+AZ", "S550GD+AZ",
      "SGLCC", "SGLCD", "SGLCDD",
      "SGLH400 / SGLH440 / SGLH490 / SGLH540",
      "CS Type A/B/C (ASTM A792)", "SS Grade 33 / 37 / 40 / 50 / 80",
      "AZ50 / AZ70 / AZ100 / AZ150 / AZ200",
    ],
    applications: [
      { label: "Metal Roofing", image: constructionImg },
      { label: "Industrial Cladding", image: constructionImg },
      { label: "Pre-Engineered Buildings", image: constructionImg },
      { label: "Cold-Storage Panels", image: foodImg },
      { label: "HVAC Casings", image: powerImg },
      { label: "Pre-Painted (PPGL) Feedstock", image: automotiveImg },
    ],
    testing:
      "Coating Weight Test, Salt-Spray Corrosion Test, Bend & Adhesion Test, Tensile & Yield Test, Erichsen Cupping Test, Surface Appearance Inspection",
    catalogue: null,
    hidden: true,
  },
  {
    slug: "round-bar",
    name: "Round Bars",
    brief: "Hot-rolled and forged carbon & alloy steel round bars for structural, engineering, forging and machining applications.",
    desc: "Rout Enterprises supplies and exports a comprehensive range of Steel Round Bars produced on modern rolling mills and open-die forging presses, delivering excellent internal soundness, uniform grain structure and tight dimensional accuracy. Our round bar range spans diameters from 8 mm to 350 mm (rolled) and up to 800 mm (forged), supplied in random, fixed and cut-to-length pieces with black, peeled, turned, ground or bright-drawn surface conditions. Every heat is refined through ladle-refining and vacuum-degassing routes to minimise inclusion content and guarantee consistent mechanical properties heat-to-heat. Supplied to IS 2062, IS 1875, IS 5517, IS 4432, ASTM A36, A29, A105, A182, A276, A322, A434, A519, EN 10025, EN 10083, EN 10088, DIN 17100, DIN 17200, JIS G3101, JIS G4051 and JIS G4053 standards with EN 10204 3.1/3.2 certification, our round bars are widely used in forging shops, shaft and axle manufacturing, gear blanks, engineering components, structural steel work, fasteners, machined parts, pump & valve internals and general engineering fabrication.",
    image: roundBarImg,
    specs: ["IS 2062 / IS 1875", "ASTM A29 / A36 / A322", "EN 10025 / EN 10083", "JIS G3101 / G4051", "8 mm – 800 mm"],
    categories: ["Hot Rolled Round Bars", "Forged Round Bars", "Bright Drawn Round Bars", "Peeled & Turned Round Bars", "Black Round Bars"],
    grades: ["IS 2062 E250 / E350", "EN 8", "EN 9", "EN 19", "EN 24", "EN 31", "EN 36", "SAE 1018 / 1020 / 1040 / 1045", "SAE 4140 / 4340 / 8620", "C40 / C45 / C55", "S235JR / S275JR / S355JR", "20MnCr5 / 16MnCr5", "42CrMo4", "34CrNiMo6"],
    applications: [
      { label: "Forging Industry", image: automotiveImg },
      { label: "Shafts & Axles", image: automotiveImg },
      { label: "Structural Fabrication", image: constructionImg },
      { label: "Gears & Machined Parts", image: automotiveImg },
      { label: "Oil & Gas", image: oilGasImg },
      { label: "Heavy Engineering", image: powerImg },
    ],
    testing: "Tensile Test, Yield & Elongation, Impact Test (Charpy), Hardness Test (Brinell/Rockwell), Ultrasonic Test, Chemical Composition (Spectro), Micro Structure",
    catalogue: null,
    hidden: true,
  },
  {
    slug: "hexagon-bar",
    name: "Hexagon Bars",
    brief: "Precision cold-drawn and peeled hexagonal steel bars for fastener, nut and free-machining component manufacturing.",
    desc: "Rout Enterprises supplies and exports high-quality Steel Hexagon Bars in carbon, alloy, free-cutting and stainless grades, cold-drawn on precision drawing benches to deliver sharp corners, uniform across-flat (AF) dimensions and a smooth silver-bright surface finish. Our hexagon bar range covers 6 mm AF up to 80 mm AF in random, fixed and cut-to-length options, supplied in h9/h10/h11 tolerance classes with straightness held within 1 mm per metre. Manufactured to IS 1570, IS 1875, ASTM A29, A108, A311, A484, EN 10087, EN 10277-3, DIN 174, JIS G4804 and BS 970 specifications, our hex bars are the preferred raw material for automatic bar-turning machines producing hex bolts, nuts, couplings, adaptors, plumbing fittings, valve stems, electrical hardware and precision-machined free-cutting components. Every bundle is supplied with EN 10204 3.1 mill test certificates covering chemistry, mechanical properties and dimensional inspection.",
    image: hexagonBarImg,
    specs: ["IS 1570 / IS 1875", "ASTM A29 / A108 / A311", "EN 10087 / EN 10277-3", "DIN 174", "6 mm – 80 mm AF"],
    categories: ["Cold Drawn Hex Bars", "Peeled Hex Bars", "Bright Hex Bars", "Free-Cutting Hex Bars"],
    grades: ["11SMn30 / 11SMnPb30", "1215 / 12L14", "SUM 22 / SUM 24L", "EN 1A / EN 1A Pb", "EN 8", "EN 8D", "C10 / C15 / C22 / C45", "SAE 1018 / 1020 / 1045", "SS 304 / 304L / 316 / 316L / 303"],
    applications: [
      { label: "Fasteners (Nuts & Bolts)", image: automotiveImg },
      { label: "CNC Machined Components", image: automotiveImg },
      { label: "Plumbing Fittings", image: constructionImg },
      { label: "Valve Stems", image: chemicalImg },
      { label: "Electrical Hardware", image: powerImg },
      { label: "General Engineering", image: automotiveImg },
    ],
    testing: "Tensile Test, Hardness Test, Dimensional (AF) Verification, Straightness Test, Surface Roughness, Chemical Composition Analysis",
    catalogue: null,
    hidden: true,
  },
  {
    slug: "flat-bar",
    name: "Flat Bars",
    brief: "Hot-rolled and cold-finished mild steel and alloy flat bars for structural, fabrication, transmission tower and general engineering use.",
    desc: "Rout Enterprises supplies and exports Steel Flat Bars manufactured on continuous section-rolling and cold-drawing mills, providing tight cross-sectional tolerances, square edges and consistent mechanical properties across the length. Our flat bar range covers widths from 12 mm to 400 mm and thicknesses from 3 mm to 100 mm, in random, fixed and cut-to-length options with black, pickled, painted or bright-drawn surface finishes. Manufactured to IS 2062, IS 1730, ASTM A36, A283, A572, EN 10025-2, EN 10058, DIN 1017, JIS G3101 and JIS G3193 specifications, our flat bars are the workhorse of transmission line tower fabricators, ladder and grating manufacturers, trailer and body-builders, agricultural implement makers, structural steel fabricators, blacksmith and forging shops, and general engineering job-work industries. Supplied with EN 10204 3.1/3.2 mill test certification.",
    image: flatBarImg,
    specs: ["IS 2062 / IS 1730", "ASTM A36 / A283 / A572", "EN 10025-2 / EN 10058", "JIS G3101", "3 mm – 100 mm × 12 mm – 400 mm"],
    categories: ["Hot Rolled Flat Bars", "Cold Rolled Flat Bars", "Bright Drawn Flat Bars", "Edge-Rounded Flat Bars"],
    grades: ["IS 2062 E250 A/B / E350 / E410 / E450", "ASTM A36", "A283 Gr.C", "A572 Gr.50", "S235JR", "S275JR", "S355JR", "Q235 / Q345", "SS400", "SAE 1018 / 1045"],
    applications: [
      { label: "Transmission Towers", image: powerImg },
      { label: "Structural Fabrication", image: constructionImg },
      { label: "Grating & Ladders", image: constructionImg },
      { label: "Trailer Bodies", image: automotiveImg },
      { label: "Agricultural Implements", image: constructionImg },
      { label: "General Engineering", image: automotiveImg },
    ],
    testing: "Tensile Test, Yield Test, Bend Test, Hardness Test, Chemical Composition, Dimensional Inspection",
    catalogue: null,
    hidden: true,
  },
  {
    slug: "steel-angles",
    name: "Steel Angles",
    brief: "Equal and unequal hot-rolled mild steel angles for transmission towers, structural steelwork and general fabrication.",
    desc: "Rout Enterprises supplies and exports hot-rolled Steel Angles (L-sections) in equal and unequal leg configurations, produced on modern section mills with sharp root radii, consistent leg thickness and superior straightness. Our angle range covers equal angles from 20×20×3 mm up to 250×250×35 mm and unequal angles from 30×20×3 mm up to 200×150×18 mm, supplied in standard 6-metre and 12-metre lengths as well as custom cut-to-length pieces. Manufactured to IS 2062, IS 808, ASTM A36, A572, A992, EN 10025-2, EN 10056-1, DIN 1028, JIS G3101 and JIS G3192 specifications, our angles are the primary structural section for electrical transmission and telecom towers, railway wagons and coaches, pre-engineered buildings (PEB), industrial platforms and walkways, roof trusses, storage racking, shipbuilding brackets and general steel fabrication. Every heat is supplied with EN 10204 3.1 mill test certification covering chemistry and mechanical properties.",
    image: steelAnglesImg,
    specs: ["IS 2062 / IS 808", "ASTM A36 / A572 / A992", "EN 10025-2 / EN 10056-1", "JIS G3192", "20×20 – 250×250 mm"],
    categories: ["Equal Angles", "Unequal Angles", "Long Length Angles", "Cut-to-Length Angles"],
    grades: ["IS 2062 E250 A/B / E350 / E410 / E450", "ASTM A36", "A572 Gr.50", "A992", "S235JR", "S275JR", "S355JR", "Q235 / Q345", "SS400 / SS490"],
    applications: [
      { label: "Transmission & Telecom Towers", image: powerImg },
      { label: "Pre-Engineered Buildings", image: constructionImg },
      { label: "Railway Wagons", image: automotiveImg },
      { label: "Industrial Platforms", image: constructionImg },
      { label: "Roof Trusses", image: constructionImg },
      { label: "Ship Building", image: marineImg },
    ],
    testing: "Tensile Test, Yield & Elongation, Bend Test, Impact Test, Dimensional & Straightness Inspection",
    catalogue: null,
    hidden: true,
  },
  {
    slug: "steel-channels",
    name: "Steel Channels",
    brief: "ISMC, UPN and parallel-flange steel channels for structural framing, pre-engineered buildings and heavy engineering fabrication.",
    desc: "Rout Enterprises supplies and exports Hot Rolled Steel Channels in ISMC (tapered flange), MC (parallel flange), UPN (European taper) and C-channel profiles, rolled on modern universal section mills to guarantee tight web and flange tolerances and superior straightness. Our channel range covers ISMC 75 to ISMC 400 (75 mm to 400 mm web height), UPN 80 to UPN 400 and parallel-flange channels PFC 100 to PFC 430, supplied in standard 6 m, 12 m and custom cut-to-length pieces with black, painted or shot-blasted surface finishes. Manufactured to IS 2062, IS 808, ASTM A36, A572, A992, ASTM A6, EN 10025-2, EN 10279, DIN 1026, JIS G3101 and JIS G3192 specifications, our channels are widely used for pre-engineered building (PEB) frames, industrial mezzanine floors, conveyor structures, crane girders, transmission line stringing pulleys, truck and trailer chassis, ship-building bulkheads and general heavy engineering fabrication. Supplied with EN 10204 3.1 mill test certificates.",
    image: steelChannelsImg,
    specs: ["IS 2062 / IS 808", "ASTM A36 / A572 / A992", "EN 10025-2 / EN 10279", "DIN 1026", "ISMC 75 – 400"],
    categories: ["ISMC Channels", "MC / Parallel Flange Channels", "UPN Channels (European)", "C-Channels", "Cold Formed Channels"],
    grades: ["IS 2062 E250 / E350 / E410 / E450", "ASTM A36", "A572 Gr.50", "A992", "S235JR / S275JR / S355JR", "Q235 / Q345 / Q355", "SS400 / SS490"],
    applications: [
      { label: "PEB Structures", image: constructionImg },
      { label: "Industrial Mezzanine Floors", image: constructionImg },
      { label: "Truck & Trailer Chassis", image: automotiveImg },
      { label: "Conveyor Structures", image: automotiveImg },
      { label: "Crane Girders", image: powerImg },
      { label: "Ship Building", image: marineImg },
    ],
    testing: "Tensile Test, Yield Test, Bend Test, Impact Test, Dimensional Inspection, Straightness Verification",
    catalogue: null,
    hidden: true,
  },
  {
    slug: "pre-painted-coils",
    name: "Pre-Painted Coils (PPGI / PPGL)",
    brief: "Colour-coated pre-painted galvanized and galvalume steel coils for roofing, cladding, appliances and architectural applications.",
    desc: "Rout Enterprises supplies and exports premium Pre-Painted Steel Coils (PPGI and PPGL) manufactured on continuous colour-coating lines where galvanized (GI) or galvalume (GL) substrate is chemically cleaned, chromate-treated, primer-coated and finish-coated with high-performance paint systems that are precisely cured in horizontal catenary ovens to deliver excellent colour uniformity, gloss retention and long-term weather resistance. Our PPGI/PPGL range covers base-metal thicknesses from 0.20 mm to 1.60 mm with total coated thicknesses from 0.23 mm up to 1.70 mm, widths from 750 mm to 1500 mm and coil weights up to 10 metric tonnes, in regular modified polyester (RMP/SMP), polyester (PE), silicone-modified polyester, high-durability polyester (HDP), polyvinylidene fluoride (PVDF/Kynar 500) and polyurethane (PU) paint systems with top-coat thickness of 15–25 microns and back-coat of 5–10 microns. Colour options cover the full RAL and BS colour range with matte, glossy, textured, wrinkle and metallic finishes. Manufactured to ASTM A755, ASTM A1008, JIS G3312, JIS G3322, EN 10169, EN 10346, IS 14246, IS 15965 and AS/NZS 2728 standards, our pre-painted coils are extensively used for long-span metal roofing and wall cladding, pre-engineered buildings, industrial and warehouse structures, cold-storage insulated sandwich panels, home and commercial appliances, HVAC casings, garage doors, railway coach interiors, false ceilings, signage panels and architectural profiled sheets across construction, infrastructure, appliance and OEM industries worldwide.",
    image: prePaintedCoilsImg,
    specs: ["ASTM A755 / JIS G3312", "EN 10169 / EN 10346", "IS 14246", "0.20 mm – 1.60 mm", "PE / SMP / HDP / PVDF"],
    categories: ["PPGI (Painted GI) Coils", "PPGL (Painted Galvalume) Coils", "PVDF Coated Coils", "HDP Coated Coils", "Wrinkle Finish Coils", "Matte Finish Coils", "Textured Coils", "PPGI Slit Coils", "PPGI Cut-to-Length Sheets"],
    grades: ["TDC51D+Z / TDC52D+Z", "DX51D+Z / DX52D+Z / DX53D+Z / DX54D+Z (PPGI)", "DX51D+AZ / DX52D+AZ / DX53D+AZ (PPGL)", "S220GD / S250GD / S280GD / S320GD / S350GD / S550GD", "SGCC / SGCH / SGLCC / SGLCH", "CGCC / CGCH (JIS G3312)", "CGLCC (JIS G3322)", "PPGI Grade 250 / 300 / 350 / 550"],
    applications: [
      { label: "Metal Roofing & Cladding", image: constructionImg },
      { label: "Pre-Engineered Buildings", image: constructionImg },
      { label: "Cold-Storage Sandwich Panels", image: foodImg },
      { label: "Home Appliances", image: automotiveImg },
      { label: "HVAC Casings", image: powerImg },
      { label: "Signage & Architectural", image: constructionImg },
    ],
    testing: "Coating Thickness (DFT), Cross-Hatch Adhesion, T-Bend Test, MEK Rub Test, Pencil Hardness, Impact Test, Gloss & Colour (∆E) Measurement, Salt-Spray Corrosion, QUV Accelerated Weathering",
    certifications: "ISO 9001:2015, ISO 14001:2015, EN 10204 3.1, QUALICOAT, ECCA Certified",
    catalogue: null,
    hidden: true,
  },
  {
    slug: "steel-pipes-tubes",
    name: "Steel Pipes & Tubes (ERW / MS / GI)",
    brief: "ERW, seamless and welded mild steel and galvanized steel pipes & tubes for water, gas, structural, scaffolding and general engineering use.",
    desc: "Rout Enterprises supplies and exports a comprehensive range of Steel Pipes and Tubes covering Electric Resistance Welded (ERW) black pipes, hot-dip galvanized (GI) pipes, mild steel (MS) round, square and rectangular hollow sections, precision welded tubes and API line pipes. Our pipe range spans nominal bore sizes from ½\" (15 NB) to 24\" (600 NB) in Light (Class A / Yellow band), Medium (Class B / Blue band) and Heavy (Class C / Red band) thickness classes, with wall thicknesses from 1.8 mm to 12.7 mm, in single random, double random and cut-to-length lengths with plain-end, bevelled-end, threaded & socketed (T&S) and grooved-end options. Hollow sections cover square hollow sections (SHS) from 20×20 mm to 300×300 mm, rectangular hollow sections (RHS) from 25×15 mm to 400×200 mm and circular hollow sections (CHS) matching the pipe range. Manufactured to IS 1239 (Part 1), IS 3589, IS 1161, IS 4923, IS 4270, ASTM A53, A106, A252, A500, A501, A672, API 5L (Gr.B / X42 / X52 / X60 / X65 / X70), EN 10210, EN 10219, EN 10255, JIS G3444, JIS G3452, JIS G3466, BS 1387 and DIN 2440 specifications, with hydrostatic pressure testing, eddy-current testing and EN 10204 3.1/3.2 certification. Widely used for water supply lines, gas distribution networks, fire-fighting piping, plumbing systems, scaffolding, structural columns and trusses, PEB framing, transmission line stringing sleeves, fencing, greenhouse structures, agricultural bore-well casings and general engineering fabrication across construction, infrastructure, oil & gas and industrial sectors.",
    image: steelPipesTubesImg,
    specs: ["IS 1239 / IS 3589 / IS 1161", "ASTM A53 / A106 / A500", "API 5L Gr.B – X70", "EN 10210 / EN 10219", "15 NB – 600 NB"],
    categories: ["ERW Black Pipes", "Hot-Dip Galvanized (GI) Pipes", "MS Seamless Pipes", "API 5L Line Pipes", "Square Hollow Sections (SHS)", "Rectangular Hollow Sections (RHS)", "Circular Hollow Sections (CHS)", "Precision Welded Tubes", "Scaffolding Tubes", "Threaded & Socketed (T&S) Pipes"],
    grades: ["IS 1239 Light / Medium / Heavy", "IS 3589 Fe 330 / Fe 410 / Fe 450", "ASTM A53 Gr.A / Gr.B", "ASTM A106 Gr.B / Gr.C", "API 5L Gr.B / X42 / X46 / X52 / X56 / X60 / X65 / X70", "ASTM A500 Gr.A / B / C / D", "S235JRH / S275J0H / S355J2H (EN 10210)", "STK400 / STK490 (JIS G3444)", "SS400 / Q195 / Q235 / Q345"],
    applications: [
      { label: "Water & Gas Distribution", image: constructionImg },
      { label: "Oil & Gas Line Pipes", image: oilGasImg },
      { label: "Structural Columns", image: constructionImg },
      { label: "Scaffolding", image: constructionImg },
      { label: "Fire-Fighting Systems", image: powerImg },
      { label: "PEB & Fabrication", image: constructionImg },
    ],
    testing: "Hydrostatic Pressure Test, Eddy Current Test, Ultrasonic Test, Flattening Test, Bend Test, Tensile & Yield Test, Zinc Coating Weight (GI), Dimensional Inspection",
    catalogue: null,
    hidden: true,
  },
  {
    slug: "tmt-bar",
    name: "TMT Bars (Thermo-Mechanically Treated Rebar)",
    brief: "High-strength, earthquake-resistant Fe 500, Fe 550 and Fe 600 TMT reinforcement bars for RCC construction and infrastructure projects.",
    desc: "Rout Enterprises supplies and exports premium quality Thermo-Mechanically Treated (TMT) Bars manufactured through the internationally proven Tempcore / Thermex quenching and self-tempering process, where hot-rolled billets are rapidly water-quenched in specially designed quenching boxes to form a tough tempered-martensite outer rim while the softer ferrite-pearlite core provides excellent ductility, weldability and elongation. This unique dual-microstructure delivers superior yield strength, seismic resistance, bendability and corrosion resistance compared to conventional CTD or cold-twisted bars. Our TMT bar range covers nominal diameters from 6 mm to 40 mm, supplied in 12-metre standard lengths and custom cut-to-length pieces, with cross-rib patterns providing excellent bond strength with concrete. Grades cover Fe 415, Fe 415D, Fe 500, Fe 500D, Fe 550, Fe 550D and Fe 600 (as per IS 1786:2008), with special variants including CRS (Corrosion Resistant Steel) for coastal and marine environments, EQR (Earthquake Resistant) grades with superior UTS/YS ratio and elongation for seismic zones IV & V, and FR (Fire Resistant) grades certified to withstand elevated temperatures up to 600 °C. Manufactured to IS 1786:2008, ASTM A615, ASTM A706, BS 4449, DIN 488 and JIS G3112 specifications, our TMT bars are the primary reinforcement for RCC construction of high-rise residential and commercial buildings, dams, bridges, flyovers, metro rail viaducts, tunnels, power plants, airports, ports, industrial floors and all critical infrastructure projects. Every bundle is supplied with certified mill test reports and unique heat-number rolling on each rib for full traceability.",
    image: tmtBarImg,
    specs: ["IS 1786:2008", "ASTM A615 / A706", "BS 4449 / DIN 488", "6 mm – 40 mm", "Fe 415 – Fe 600"],
    categories: ["Fe 500 TMT Bars", "Fe 500D TMT Bars", "Fe 550 TMT Bars", "Fe 550D TMT Bars", "Fe 600 TMT Bars", "CRS (Corrosion Resistant) TMT", "EQR (Earthquake Resistant) TMT", "FR (Fire Resistant) TMT"],
    grades: ["Fe 415 / Fe 415D (IS 1786)", "Fe 500 / Fe 500D (IS 1786)", "Fe 550 / Fe 550D (IS 1786)", "Fe 600 (IS 1786)", "Grade 40 / 60 / 75 (ASTM A615)", "B500B / B500C (BS 4449)", "BSt 500 S / BSt 500 M (DIN 488)", "SD 390 / SD 490 (JIS G3112)"],
    applications: [
      { label: "High-Rise Buildings", image: constructionImg },
      { label: "Bridges & Flyovers", image: constructionImg },
      { label: "Metro & Rail Viaducts", image: constructionImg },
      { label: "Dams & Reservoirs", image: constructionImg },
      { label: "Power Plants", image: powerImg },
      { label: "Airports & Ports", image: marineImg },
    ],
    testing: "Yield Strength (0.2% Proof Stress), Ultimate Tensile Strength, Elongation Test, UTS/YS Ratio, Bend & Re-Bend Test, Rib Height & Spacing (per IS 1786), Chemical Composition (S, P, C, N)",
    certifications: "BIS Certified (IS 1786:2008), ISO 9001:2015, EN 10204 3.1",
    catalogue: null,
    hidden: true,
  },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
