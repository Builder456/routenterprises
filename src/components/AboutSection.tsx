import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, Truck, Users, CheckCircle } from "lucide-react";
import steelVideo from "../../public/videos/steel-manufacturing.mp4.asset.json";

const highlights = [
  { icon: Factory, title: "State-of-Art Sourcing", desc: "Equipped with modern machinery and quality control systems." },
  { icon: Truck, title: "Global Logistics", desc: "Seamless export operations to 4+ countries worldwide." },
  { icon: Users, title: "Expert Team", desc: "Dedicated professionals with decades of industry experience." },
  { icon: CheckCircle, title: "Quality Assured", desc: "Every product passes rigorous testing and certification." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Steel manufacturing process video background"
        >
          <source src={steelVideo.url} type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-ember font-display font-semibold text-sm uppercase tracking-[0.2em] mb-3">About Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Trusted Stainless Steel Flanges, Fasteners & Bright Bars Exporter from India
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-5">
            Rout Enterprises is a leading stainless steel flanges exporter, fasteners supplier, bright bars supplier, and seamless pipes distributor based in Boisar, Maharashtra, India. With over 2+ years of experience in the steel industry, we specialize in supplying and exporting premium ASTM A182 stainless steel flanges, ANSI B16.5 pipe flanges, DIN standard fasteners, SS 304/316 bolts and nuts, wire rods, stainless steel profiles, and precision bright bars to industries across the USA, UK, Germany, UAE, Saudi Arabia, Singapore, and Australia. Our commitment to ISO-certified quality, competitive pricing, and on-time global delivery has made us a preferred partner for oil & gas, petrochemical, construction, and marine sectors worldwide.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Beyond stainless steel, our carbon and alloy steel portfolio covers Hot Rolled Coils (HRC), Cold Rolled Coils (CRC), Galvanized (GI) and Galvalume (GL) Coils, Pre-Painted (PPGI/PPGL) Coils, TMT Rebars (Fe 500/550/600 to IS 1786), Structural Beams (HEA, HEB, HEM, IPE, IPN & W-Series), Angles, Channels, Round, Hexagon & Flat Bars, ERW/GI Pipes & Hollow Sections and Wire Rods & Drawn Wires — manufactured to IS 2062, IS 1786, ASTM A36/A572/A992/A653/A792, EN 10025-2, EN 10346, JIS G3101/G3131/G3141/G3302 and API 5L specifications to guarantee world-class dimensional accuracy and metallurgical consistency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-card/90 backdrop-blur-sm rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow"
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
