import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, Truck, Users, CheckCircle } from "lucide-react";

const highlights = [
  { icon: Factory, title: "State-of-Art Manufacturing", desc: "Equipped with modern machinery and quality control systems." },
  { icon: Truck, title: "Global Logistics", desc: "Seamless export operations to 4+ countries worldwide." },
  { icon: Users, title: "Expert Team", desc: "Dedicated professionals with decades of industry experience." },
  { icon: CheckCircle, title: "Quality Assured", desc: "Every product passes rigorous testing and certification." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-gradient-steel">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-ember font-display font-semibold text-sm uppercase tracking-[0.2em] mb-3">About Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Trusted Stainless Steel Flanges & Fasteners Supplier in India
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Rout Enterprises is an emerging exporter of premium stainless steel products. With over 2+ years of experience, we deliver world-class flanges, fasteners, wires, profiles, and bright bars to industries across the globe. Our commitment to quality, reliability, and customer satisfaction sets us apart.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <h.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
