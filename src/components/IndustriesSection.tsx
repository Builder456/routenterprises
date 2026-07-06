import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, Droplets, Utensils, Zap, Ship, Pill, Building2, Plane } from "lucide-react";
import oilGasImg from "@/assets/industry-oil-gas.jpg";
import chemicalImg from "@/assets/industry-chemical.jpg";
import foodImg from "@/assets/industry-food.jpg";
import powerImg from "@/assets/industry-power.jpg";
import marineImg from "@/assets/industry-marine.jpg";
import pharmaImg from "@/assets/industry-pharma.jpg";
import constructionImg from "@/assets/industry-construction.jpg";
import aerospaceImg from "@/assets/industry-aerospace.jpg";

const industries = [
  {
    name: "Oil & Gas",
    icon: Droplets,
    image: oilGasImg,
    description: "Supplying flanges, seamless pipes, bright bars and fasteners for upstream & downstream operations.",
    applications: ["Pipeline Engineering", "Refinery Equipment", "Offshore Platforms", "Pressure Vessels", "Heat Exchangers"],
    products: "Flanges, Seamless Pipes, Bright Bars, Fasteners",
  },
  {
    name: "Chemical & Petrochemical",
    icon: Factory,
    image: chemicalImg,
    description: "Corrosion-resistant stainless steel solutions for reactors, storage tanks and processing plants.",
    applications: ["Reactor Vessels", "Storage Tanks", "Process Piping", "Distillation Columns", "Agitators"],
    products: "Flanges, Pipes, Profiles, Wires, Bright Bars",
  },
  {
    name: "Food Processing",
    icon: Utensils,
    image: foodImg,
    description: "Hygienic-grade stainless steel for food-safe equipment, conveyor systems and processing machinery.",
    applications: ["Conveyor Belts", "Mixing Equipment", "Kitchen Ware", "Grill Racks", "Processing Lines"],
    products: "Wires, Fasteners, Flanges, Steel Bars (20 to 200 mm), Flat Bars (60×7 to 101×38)",
  },
  {
    name: "Power Generation",
    icon: Zap,
    image: powerImg,
    description: "High-performance materials for nuclear, thermal, wind and solar power installations.",
    applications: ["Boilers & Condensers", "Turbine Components", "Nuclear Reactors", "Solar Structures", "Wind Turbines"],
    products: "Flanges, Seamless Pipes, Bright Bars, Profiles",
  },
  {
    name: "Ship Building & Marine",
    icon: Ship,
    image: marineImg,
    description: "Marine-grade stainless steel products engineered for durability in harsh saltwater environments.",
    applications: ["Hull Construction", "Marine Fastening", "Deck Equipment", "Propulsion Systems", "Offshore Rigs"],
    products: "Wires, Fasteners, Flanges, Profiles",
  },
  {
    name: "Pharmaceutical",
    icon: Pill,
    image: pharmaImg,
    description: "Clean-room compatible stainless steel for medicine production and laboratory equipment.",
    applications: ["Clean Room Equipment", "Mixing Vessels", "Piping Systems", "Storage Containers", "Lab Instruments"],
    products: "Seamless Pipes, Fasteners, Bright Bars",
  },
  {
    name: "Construction & Infrastructure",
    icon: Building2,
    image: constructionImg,
    description: "Structural steel profiles, fasteners and bright bars for modern buildings and infrastructure projects.",
    applications: ["Structural Framework", "Architectural Cladding", "Bridge Components", "Reinforcement", "Facades"],
    products: "Profiles, Fasteners, Bright Bars, Wires",
  },
  {
    name: "Aerospace",
    icon: Plane,
    image: aerospaceImg,
    description: "Precision-engineered components meeting stringent aerospace standards for critical applications.",
    applications: ["Engine Components", "Landing Gear Parts", "Hydraulic Fittings", "Structural Members", "Precision Shafts"],
    products: "Bright Bars, Flanges, Fasteners",
  },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="industries" ref={ref} className="py-24 bg-muted/50">
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
            Industries We Serve
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Trusted Across Global Industries
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
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Our stainless steel products serve critical applications across diverse industries worldwide.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.08 * i, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-ember/90">
                      <Icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-bold text-sm text-primary-foreground">
                      {ind.name}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{ind.description}</p>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-foreground mb-1.5">Key Applications:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.applications.map((app) => (
                        <span
                          key={app}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">Products Used:</p>
                    <p className="text-[11px] text-muted-foreground">{ind.products}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
