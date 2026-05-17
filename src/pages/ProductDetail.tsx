import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Download, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProductBySlug, products } from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      document.title = `${product.name} | Rout Enterprises`;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", product.brief.slice(0, 160));
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4 pt-24">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold mb-4">Product not found</h1>
            <Link to="/#products" className="text-ember hover:text-ember-glow font-semibold">
              ← Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const textSections = [
    { title: "Testing Facilities", body: product.testing },
    { title: "Certifications", body: product.certifications },
  ].filter((s) => s.body);

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <Link
            to="/#products"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-ember transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-card-hover bg-card"
            >
              <img
                src={product.image}
                alt={`${product.name} - Rout Enterprises`}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-ember font-display font-semibold text-sm uppercase tracking-[0.2em] mb-3">
                Premium Stainless Steel
              </p>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <div className="h-1 w-20 bg-ember rounded-full mb-6" />
              <p className="text-lg text-foreground/90 mb-4 leading-relaxed font-medium">
                {product.brief}
              </p>
              <p className="text-base text-muted-foreground mb-6 leading-relaxed">{product.desc}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {product.specs.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:globalexport@routenterprises.com?subject=${encodeURIComponent(`Quote Request: ${product.name}`)}&body=${encodeURIComponent(`Hello Rout Enterprises team,\n\nI would like to request a quote for ${product.name}.\n\nDetails required:\n- Grade(s): \n- Size / Specification: \n- Quantity: \n- Destination Country / Port: \n- Required Delivery Date: \n- Additional Requirements: \n\nThank you.`)}`}
                  className="inline-flex items-center gap-2 bg-ember hover:bg-ember-glow px-6 py-3 rounded-md font-semibold text-primary-foreground transition-colors"
                >
                  Request a Quote
                </a>
                {product.catalogue && (
                  <a
                    href={product.catalogue}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border hover:border-ember px-6 py-3 rounded-md font-semibold text-foreground hover:text-ember transition-colors"
                  >
                    <Download className="w-4 h-4" /> Download Catalogue
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          {/* Available Grades */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <div className="flex items-center gap-2 mb-5">
              <CheckCircle2 className="w-5 h-5 text-ember" />
              <h2 className="font-display font-bold text-2xl text-foreground">Available Grades</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.grades.map((g) => (
                <span
                  key={g}
                  className="px-4 py-2 rounded-md bg-card border border-border text-sm font-semibold text-foreground hover:border-ember hover:text-ember transition-colors"
                >
                  {g}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Where It's Used */}
          <section className="mt-16">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5 text-ember" />
              <h2 className="font-display font-bold text-2xl text-foreground">Where It's Used</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Key industries and applications served by our {product.name.toLowerCase()}.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {product.applications.map((app, i) => (
                <motion.div
                  key={app.label + i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={app.image}
                      alt={`${app.label} application of ${product.name}`}
                      loading="lazy"
                      width={768}
                      height={512}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <h3 className="font-display font-bold text-sm md:text-base text-white">
                      {app.label}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {textSections.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mt-16">
              {textSections.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="bg-card border border-border rounded-lg p-6 shadow-card"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-ember" />
                    <h2 className="font-display font-bold text-lg text-foreground">{s.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </motion.div>
              ))}
            </div>
          )}

          <section className="mt-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              Explore Other Products
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-foreground group-hover:text-ember transition-colors">
                      {p.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
