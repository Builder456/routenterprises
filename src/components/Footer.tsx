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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.4631768162003!2d72.75355487468227!3d19.7779497295624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71f725186b905%3A0x9162209c4d631e9a!2sRout%20Enterprises%20-%20Stainless%20Steel%20Flanges%2C%20Bright%20bars%2C%20Profiles%20Exporter!5e0!3m2!1sen!2sin!4v1775716868147!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"
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
