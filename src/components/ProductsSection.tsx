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
    desc: "Weld neck, slip-on, blind, socket weld, and threaded flanges in all grades including 304, 316, 321, and duplex.",
    image: flangesImg,
    specs: ["ASTM A182", "ANSI B16.5", "DIN Standards"],
    catalogue: "/catalogues/Flanges.pdf",
  },
  {
    name: "Stainless Steel Fasteners",
    desc: "Bolts, nuts, screws, washers, studs and threaded rods manufactured to exact international specifications.",
    image: fastenersImg,
    specs: ["ASTM A193/A194", "DIN 931/934", "ISO 4014"],
    catalogue: null,
  },
  {
    name: "Stainless Steel Wires",
    desc: "Wire rods and wires from 0.09mm to 39.5mm for ship building, medical, agriculture, springs, fasteners, welding and more.",
    image: wiresImg,
    specs: ["ASTM A580", "Bright & Annealed", "0.09–39.5mm Range"],
    catalogue: "/catalogues/Wires.pdf",
  },
  {
    name: "Stainless Steel Profiles",
    desc: "Drawn flat bars, angles, channels, T-bars, and custom profiles in 304, 316, 321 and duplex grades.",
    image: profilesImg,
    specs: ["Hot & Cold Rolled", "Custom Sections", "Mill Finish"],
    catalogue: "/catalogues/Profiles.pdf",
  },
  {
    name: "Bright Bars",
    desc: "Precision-ground and polished bright bars in round, hexagonal, square, and forged sections with h9/h11 tolerance.",
    image: brightBarsImg,
    specs: ["h9/h11 Tolerance", "2–600mm Range", "100% UT Tested"],
    catalogue: "/catalogues/Bright_bars.pdf",
  },
  {
    name: "Seamless Pipes & Tubes",
    desc: "High-quality seamless stainless steel pipes and tubes for oil & gas, chemical, petrochemical, and power industries.",
    image: seamlessPipesImg,
    specs: ["ASTM A312/A213", "304/316/321 Grades", "Custom Lengths"],
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
