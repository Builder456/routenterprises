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
    catalogue: "/catalogues/Flanges.pdf",
  },
  {
    name: "Stainless Steel Fasteners",
    desc: "Bolts, nuts, screws, washers, studs and threaded rods manufactured to exact international specifications for critical applications.",
    image: fastenersImg,
    specs: ["ASTM A193/A194", "DIN 931/934 / ISO 4014"],
    grades: "304, 304L, 316, 316L, 321, 410, 430, Duplex",
    catalogue: "/catalogues/Fasteners.pdf",
  },
  {
    name: "Stainless Steel Wires",
    desc: "Wire rods (5.5–39.5mm) and wires (0.09–15mm) for ship building, medical, springs, fasteners, welding electrodes, food processing and more.",
    image: wiresImg,
    specs: ["ASTM / DIN / BS / JIS / AWS", "Bright & Annealed Finish"],
    grades: "201, 202, 204Cu, 301, 302, 303, 304, 304L, 310, 316, 316L, 316Ti, 321, 410, 420, 430 + Electrode grades (ER308, ER316L, ER347 etc.)",
    catalogue: "/catalogues/Wires.pdf",
  },
  {
    name: "Stainless Steel Profiles",
    desc: "Drawn flat bars, equal & unequal angles, channels, T-bars, and custom profiles. Flat bars from 20×5mm to 100×30mm, angles up to 150×150mm.",
    image: profilesImg,
    specs: ["Hot & Cold Rolled", "Custom Sections Available"],
    grades: "304, 304L, 304H, 303, 316, 316L, 321, 316Ti, 630, 17-4PH",
    catalogue: "/catalogues/Profiles.pdf",
  },
  {
    name: "Bright Bars",
    desc: "Round, hexagonal, square and forged bright bars (2–600mm). Supply conditions include centreless ground, peeled & polished, cold drawn, and 100% UT tested.",
    image: brightBarsImg,
    specs: ["h8/h9/h11 Tolerance", "2–600mm Range"],
    grades: "201, 202, 303, 304, 304L, 316, 316L, 309, 310, 317L, 321, 347, 410, 416, 420, 430, 431, 630, 17-4PH, F51, F60",
    catalogue: "/catalogues/Bright_bars.pdf",
  },
  {
    name: "Seamless Pipes & Tubes",
    desc: "High-quality seamless stainless steel pipes and tubes for oil & gas, chemical, petrochemical, power and pharmaceutical industries.",
    image: seamlessPipesImg,
    specs: ["ASTM A312/A213", "Custom Lengths Available"],
    grades: "304, 304L, 316, 316L, 321, 310S, 317L, Duplex 2205",
    catalogue: null,
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-ember font-display font-semibold text-sm uppercase tracking-[0.2em] mb-3">Our Products</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Premium Stainless Steel Range
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Manufactured to international standards and exported to industries across the globe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-1">Available Grades:</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.grades}</p>
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
