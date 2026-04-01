import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import galleryAngles1 from "@/assets/gallery-angles-1.jpeg";
import galleryWireRods from "@/assets/gallery-wire-rods.jpg";
import galleryAngles2 from "@/assets/gallery-angles-2.jpeg";
import galleryHexBars from "@/assets/gallery-hex-bars.jpeg";
import galleryRoundBars from "@/assets/gallery-round-bars.jpeg";
import galleryFasteners1 from "@/assets/gallery-fasteners-1.jpeg";
import galleryFasteners2 from "@/assets/gallery-fasteners-2.jpeg";

const images = [
  { src: gallery1, alt: "Stainless steel flanges stacked on pallets in factory" },
  { src: gallery2, alt: "Large stainless steel ring flanges close-up" },
  { src: galleryFasteners1, alt: "Stainless steel bolts, nuts and washers collection" },
  { src: galleryWireRods, alt: "Stainless steel wire rods coils" },
  { src: gallery3, alt: "Precision machined stainless steel plate flanges" },
  { src: galleryAngles1, alt: "Stainless steel angle profiles stacked" },
  { src: galleryHexBars, alt: "Stainless steel hexagonal bright bars bundle" },
  { src: gallery4, alt: "Bulk stainless steel weld neck flanges production" },
  { src: galleryFasteners2, alt: "Stainless steel nuts and bolts close-up" },
  { src: galleryAngles2, alt: "Stainless steel equal angle profiles" },
  { src: galleryRoundBars, alt: "Stainless steel round bright bars" },
  { src: gallery5, alt: "Slip-on stainless steel flanges arranged on pallets" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="gallery" ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-ember font-display font-semibold text-sm uppercase tracking-[0.2em] mb-3">Gallery</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            From Our Factory Floor
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into our manufacturing facility and the quality products we deliver worldwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-card-hover">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          </div>

          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card text-foreground rounded-full p-2 shadow-card transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card text-foreground rounded-full p-2 shadow-card transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current ? "bg-ember scale-125" : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
