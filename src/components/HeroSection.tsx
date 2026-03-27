import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Globe, value: "8+", label: "Countries Served" },
  { icon: Shield, value: "2+", label: "Years Experience" },
  { icon: Award, value: "ISO", label: "Certified Quality" },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Steel manufacturing" className="w-full h-full object-cover" width={1920} height={1080} />
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
          Engineering Excellence in{" "}
          <span className="text-gradient-accent">Stainless Steel</span>
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

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-16 md:mt-24 grid grid-cols-3 gap-6 max-w-lg"
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

export default HeroSection;
