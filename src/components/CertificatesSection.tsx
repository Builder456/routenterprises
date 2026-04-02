import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";
import certGst from "@/assets/cert-gst.jpg";
import certIec from "@/assets/cert-iec.jpg";
import certUdyam from "@/assets/cert-udyam.jpg";

const certificates = [
  {
    name: "GST Registration",
    desc: "Government of India GST Registration Certificate (GSTIN: 27FMFPR2633G1ZW)",
    image: certGst,
    pdf: "/certificates/GST-Certificate.pdf",
  },
  {
    name: "Importer-Exporter Code",
    desc: "DGFT Importer-Exporter Code (IEC: FMFPR2633G) issued by Ministry of Commerce & Industry",
    image: certIec,
    pdf: "/certificates/IEC-Certificate.pdf",
  },
  {
    name: "Udyam Registration",
    desc: "MSME Udyam Registration Certificate (UDYAM-MH-17-0214343) — Micro Enterprise, Manufacturing",
    image: certUdyam,
    pdf: "/certificates/Udyam-Registration.pdf",
  },
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
            Our company holds all necessary certifications and registrations for international export of stainless steel products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-lg overflow-hidden hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-white">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display font-bold text-primary-foreground text-lg mb-2">{c.name}</h3>
                <p className="text-sm text-primary-foreground/60 mb-4">{c.desc}</p>
                <a
                  href={c.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-ember-glow hover:text-ember transition-colors"
                >
                  <Download className="w-4 h-4" /> Download PDF
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
