import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="bg-steel-dark py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
              ROUT <span className="text-ember-glow">ENTERPRISES</span>
            </h3>
            <p className="text-sm text-primary-foreground/50 leading-relaxed">
              Emerging stainless steel flanges supplier & exporter from India. Supplier of SS fasteners, bright bars, wires, profiles & seamless pipes to 4+ countries.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display font-semibold text-primary-foreground mb-3">Products</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              <li>SS Flanges</li>
              <li>SS Fasteners</li>
              <li>SS Wires</li>
              <li>SS Profiles</li>
              <li>Bright Bars</li>
              <li>Seamless Pipes & Tubes</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display font-semibold text-primary-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              <li><a href="#about" className="hover:text-ember-glow transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-ember-glow transition-colors">Products</a></li>
              <li><a href="#certificates" className="hover:text-ember-glow transition-colors">Certificates</a></li>
              <li><a href="#contact" className="hover:text-ember-glow transition-colors">Contact</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display font-semibold text-primary-foreground mb-3">Our Location</h4>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Rout+Enterprises+-+Export+and+Import,Saravali,Boisar,Maharashtra&zoom=17"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rout Enterprises Location - Boisar, Maharashtra"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-primary-foreground/10 pt-6 text-center"
        >
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Rout Enterprises. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
