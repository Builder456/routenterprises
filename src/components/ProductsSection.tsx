import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import flangesImg from "@/assets/flanges.jpg";
import fastenersImg from "@/assets/fasteners.jpg";
import wiresImg from "@/assets/wires.jpg";
import profilesImg from "@/assets/profiles.jpg";
import brightBarsImg from "@/assets/bright-bars.jpg";

const products = [
  {
    name: "Stainless Steel Flanges",
    desc: "Weld neck, slip-on, blind, socket weld, and threaded flanges in all grades including 304, 316, 321, and duplex.",
    image: flangesImg,
    specs: ["ASTM A182", "ANSI B16.5", "DIN Standards"],
  },
  {
    name: "Stainless Steel Fasteners",
    desc: "Bolts, nuts, screws, washers, studs and threaded rods manufactured to exact international specifications.",
    image: fastenersImg,
    specs: ["ASTM A193/A194", "DIN 931/934", "ISO 4014"],
  },
  {
    name: "Stainless Steel Wires",
    desc: "Cold drawn wires in various gauges for industrial, construction, and specialized applications.",
    image: wiresImg,
    specs: ["ASTM A580", "Bright & Annealed", "Custom Gauges"],
  },
  {
    name: "Stainless Steel Profiles",
    desc: "Angles, channels, T-bars, I-beams, and custom profiles for structural and architectural use.",
    image: profilesImg,
    specs: ["Hot & Cold Rolled", "Custom Sections", "Mill Finish"],
  },
  {
    name: "Bright Bars",
    desc: "Precision-ground and polished bright bars in round, hexagonal, and square sections with superior surface finish.",
    image: brightBarsImg,
    specs: ["h9/h11 Tolerance", "Mirror Finish", "Custom Lengths"],
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
                <div className="flex flex-wrap gap-2">
                  {p.specs.map((s) => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
