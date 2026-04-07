import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";
import flangesImg from "@/assets/flanges.jpg";
import fastenersImg from "@/assets/fasteners.jpg";
import wiresImg from "@/assets/wires.jpg";
import profilesImg from "@/assets/profiles.jpg";
import brightBarsImg from "@/assets/bright-bars.jpg";
import seamlessPipesImg from "@/assets/seamless-pipes.jpg";

const products = [
  {
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
    name: "Seamless Pipes & Tubes",
    desc: "High-quality seamless stainless steel pipes and tubes for oil & gas, chemical, petrochemical, power and pharmaceutical industries.",
    image: seamlessPipesImg,
    specs: ["ASTM A312/A213", "Custom Lengths Available"],
    grades: "304, 304L, 316, 316L, 321, 310S, 317L, Duplex 2205",
    applications: "Oil & Gas, Chemical & Petrochemical, Power Generation, Pharmaceutical, Heat Exchangers, Boilers & Condensers",
    testing: "Hydrostatic Test, Eddy Current Test, Ultrasonic Test, Flattening Test, Flaring Test",
    catalogue: null,
  },
];

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 60,
    rotateX: 8,
    scale: 0.95,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: 0.08 * i,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const ProductsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" ref={ref} className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-ember font-display font-semibold text-sm uppercase tracking-[0.2em] mb-3"
          >
            Our Products
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Premium Stainless Steel Range
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-20 bg-ember mx-auto rounded-full mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-primary-foreground/70 text-lg max-w-2xl mx-auto"
          >
            Manufactured to international standards and exported to industries across the globe.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-lg text-primary-foreground">
                  {p.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.specs.map((s) => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {s}
                    </span>
                  ))}
                </div>
                {p.grades && (
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-foreground mb-1">Available Grades:</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.grades}</p>
                  </div>
                )}
                {p.applications && (
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-foreground mb-1">Applications:</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.applications}</p>
                  </div>
                )}
                {p.testing && (
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-foreground mb-1">Testing Facilities:</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.testing}</p>
                  </div>
                )}
                {p.certifications && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-1">Certifications:</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.certifications}</p>
                  </div>
                )}
                {p.catalogue && (
                  <a
                    href={p.catalogue}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ember hover:text-ember-glow transition-colors"
                  >
                    <Download className="w-4 h-4" /> Download Catalogue
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
