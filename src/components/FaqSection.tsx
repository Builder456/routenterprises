import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What stainless steel products does Rout Enterprises export?",
    a: "We export premium stainless steel flanges (weld neck, slip-on, blind, socket weld, threaded), fasteners (bolts, nuts, screws, washers), wires (0.09mm to 39.5mm), profiles (flat bars, angles, channels), bright bars (round, hexagonal, square), and seamless pipes & tubes.",
  },
  {
    q: "Which countries does Rout Enterprises export to?",
    a: "We export stainless steel products to 8+ countries worldwide including the United States, United Kingdom, Germany, UAE, Saudi Arabia, Singapore, Australia, and more.",
  },
  {
    q: "What grades of stainless steel does Rout Enterprises offer?",
    a: "We offer all major grades including 304, 316, 321, and duplex stainless steel. Our products are manufactured to international standards like ASTM A182, ANSI B16.5, DIN, and ISO specifications.",
  },
  {
    q: "Is Rout Enterprises ISO certified?",
    a: "Yes, Rout Enterprises is ISO certified. Every product undergoes rigorous quality testing and certification to ensure compliance with international standards.",
  },
  {
    q: "How can I request a quote from Rout Enterprises?",
    a: "You can request a quote by filling out the contact form on our website, calling us at +91 84460 55949, or emailing us at sales@routenterprises.com. Our team responds within 24 hours.",
  },
  {
    q: "What testing facilities does Rout Enterprises use?",
    a: "We employ comprehensive testing including tensile testing, hardness testing, impact testing, PMI (Positive Material Identification), ultrasonic testing, eddy current testing, hydrostatic testing, and IGC (Intergranular Corrosion) testing to ensure the highest quality standards.",
  },
  {
    q: "Do you provide custom sizes and specifications?",
    a: "Yes, we offer custom manufacturing for all our product lines including flanges, fasteners, wires, profiles, bright bars, and pipes. Contact our sales team with your specific requirements for a tailored quote.",
  },
];

const FaqSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-ember-glow">Questions</span>
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our products and services.
          </p>
        </motion.div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
            >
              <AccordionItem value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-ember-glow hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
