import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Award, FileCheck, BadgeCheck } from "lucide-react";

const certificates = [
  { icon: ShieldCheck, name: "ISO 9001:2015", desc: "Quality Management System certified for consistent product quality." },
  { icon: Award, name: "ISO 14001:2015", desc: "Environmental Management System ensuring sustainable practices." },
  { icon: FileCheck, name: "CE Marking", desc: "Products conforming to European health, safety, and environmental standards." },
  { icon: BadgeCheck, name: "PED 2014/68/EU", desc: "Pressure Equipment Directive compliance for critical applications." },
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" ref={ref} className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-ember-glow font-display font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Certifications
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Quality You Can Trust
          </h2>
          <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto">
            Our products meet the highest international standards and certifications. Please re-upload your certificates PDF to display them here.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-lg p-8 text-center hover:bg-primary-foreground/10 transition-colors"
            >
              <c.icon className="w-12 h-12 text-ember-glow mx-auto mb-4" />
              <h3 className="font-display font-bold text-primary-foreground text-lg mb-2">{c.name}</h3>
              <p className="text-sm text-primary-foreground/60">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
