import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const product = (formData.get("product") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    if (!name || !email || !product || !message) return;

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: { name, email, product, message },
      });

      if (error) throw error;

      setSubmitted(true);
      form.reset();
      toast({
        title: "Inquiry Sent!",
        description: "A confirmation email has been sent to your inbox.",
      });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error("Failed to send inquiry:", err);
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-gradient-steel">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-ember font-display font-semibold text-sm uppercase tracking-[0.2em] mb-3">Get In Touch</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Request a Quote
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Tell us about your requirements and our team will get back to you within 24 hours with competitive pricing.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground text-sm">+91 84460 55949</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground text-sm">globalexport@routenterprises.com</p>
                  <p className="text-muted-foreground text-sm">sales@routenterprises.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Address</p>
                  <p className="text-muted-foreground text-sm">102/A-Wing, Saipooja Apt, Trivedi Nagar, Saravali, Boisar - 401501</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-lg p-8 shadow-card space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ember/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ember/50"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Product Interest</label>
              <select
                name="product"
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ember/50"
              >
                <option>Flanges</option>
                <option>Fasteners</option>
                <option>Wires</option>
                <option>Profiles</option>
                <option>Bright Bars</option>
                <option>Seamless Pipes & Tubes</option>
                <option>Multiple Products</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <textarea
                required
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ember/50 resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-ember hover:bg-ember-glow text-primary-foreground py-3 rounded-md font-display font-semibold transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
              ) : submitted ? (
                "Message Sent! ✓"
              ) : (
                <><Send className="w-4 h-4" /> Send Inquiry</>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
