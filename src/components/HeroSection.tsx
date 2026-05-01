import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Shield, Award } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import slideFlanges from "@/assets/slideshow-flanges.jpg";
import slideFasteners from "@/assets/slideshow-fasteners.jpg";
import slideBrightBars from "@/assets/slideshow-bright-bars.jpg";
import slideWireRods from "@/assets/slideshow-wire-rods.jpg";
import slideProfiles from "@/assets/slideshow-profiles.jpg";

const slides = [
  { src: heroBg, label: "Steel Manufacturing" },
  { src: slideFlanges, label: "Stainless Steel Flanges" },
  { src: slideFasteners, label: "SS Fasteners & Bolts" },
  { src: slideBrightBars, label: "Bright Bars & Hex Bars" },
  { src: slideWireRods, label: "Wire Rods & Coils" },
  { src: slideProfiles, label: "Angles & Profiles" },
];

const stats = [
  { icon: Globe, value: "8+", label: "Countries Served" },
  { icon: Shield, value: "2+", label: "Years Experience" },
  { icon: Award, value: "ISO", label: "Certified Quality" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Slideshow background */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.label}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            width={1920}
            height={1080}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-ember-glow font-display font-semibold text-sm uppercase tracking-[0.2em] mb-4"
          >
            Global Stainless Steel Exporters
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6"
          >
            India's Emerging{" "}
            <span className="text-gradient-accent">Stainless Steel</span>{" "}
            Flanges & Fasteners Exporter
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-8 font-body"
          >
            Premium quality flanges, fasteners, wires, profiles & bright bars — exported worldwide with uncompromising quality standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-ember hover:bg-ember-glow text-primary-foreground px-8 py-4 rounded-md font-display font-semibold text-base transition-all hover:scale-105"
            >
              View Products <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-md font-display font-semibold text-base hover:border-ember-glow hover:text-ember-glow transition-all"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        {/* Product label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-8 inline-flex items-center gap-3 bg-card/20 backdrop-blur-sm border border-primary-foreground/10 rounded-full px-5 py-2"
          >
            <span className="w-2 h-2 rounded-full bg-ember-glow animate-pulse" />
            <span className="text-primary-foreground/80 font-display text-sm font-medium">
              {slides[current].label}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-ember-glow" : "w-3 bg-primary-foreground/30 hover:bg-primary-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 md:mt-16 grid grid-cols-3 gap-6 max-w-lg"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <s.icon className="w-6 h-6 text-ember-glow mx-auto md:mx-0 mb-2" />
              <p className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">{s.value}</p>
              <p className="text-xs text-primary-foreground/50 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
