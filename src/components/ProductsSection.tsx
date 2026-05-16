import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const cardVariants = {
  hidden: () => ({
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
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
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
              className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
            >
              <Link to={`/products/${p.slug}`} className="relative h-56 overflow-hidden block">
                <img
                  src={p.image}
                  alt={`${p.name} - Premium Quality Stainless Steel Products Exported Worldwide by Rout Enterprises India`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-lg text-primary-foreground">
                  {p.name}
                </h3>
              </Link>
              <div className="p-6 flex flex-col flex-1">
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
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{p.grades}</p>
                  </div>
                )}
                <div className="mt-auto pt-4 flex items-center justify-between gap-3">
                  <Link
                    to={`/products/${p.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-ember transition-colors"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                  {p.catalogue && (
                    <a
                      href={p.catalogue}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-ember hover:text-ember-glow transition-colors"
                    >
                      <Download className="w-4 h-4" /> Catalogue
                    </a>
                  )}
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
