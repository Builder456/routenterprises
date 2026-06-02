import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getProductBySlug } from "@/data/products";
import { getSubcategory, slugify } from "@/lib/subcategory";

const SubcategoryDetail = () => {
  const { slug, categorySlug } = useParams<{ slug: string; categorySlug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const subcategory = product && categorySlug ? getSubcategory(product, categorySlug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product && subcategory) {
      document.title = `${subcategory.name} | ${product.name} | Rout Enterprises`;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", subcategory.description.slice(0, 160));
    }
  }, [product, subcategory]);

  if (!product || !subcategory) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4 pt-24">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold mb-4">Subcategory not found</h1>
            <Link to="/#products" className="text-ember hover:text-ember-glow font-semibold">
              ← Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedCategories = product.categories
    .filter((c) => slugify(c) !== subcategory.slug)
    .slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-ember transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to {product.name}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-card-hover bg-card"
            >
              <img
                src={subcategory.image}
                alt={`${subcategory.name} - ${product.name} supplied by Rout Enterprises`}
                loading="eager"
                width={1024}
                height={640}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-ember font-display font-semibold text-sm uppercase tracking-[0.2em] mb-3">
                {product.name}
              </p>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                {subcategory.name}
              </h1>
              <div className="h-1 w-20 bg-ember rounded-full mb-6" />

              <div className="space-y-4 text-base text-muted-foreground leading-relaxed mb-8">
                {subcategory.description.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:globalexport@routenterprises.com?subject=${encodeURIComponent(
                    `Quote Request: ${subcategory.name} (${product.name})`,
                  )}&body=${encodeURIComponent(
                    `Hello Rout Enterprises team,\n\nI would like to request a quote for ${subcategory.name} under your ${product.name} range.\n\nDetails required:\n- Grade(s): \n- Size / Specification: \n- Quantity: \n- Destination Country / Port: \n- Required Delivery Date: \n- Additional Requirements: \n\nThank you.`,
                  )}`}
                  className="inline-flex items-center gap-2 bg-ember hover:bg-ember-glow px-6 py-3 rounded-md font-semibold text-primary-foreground transition-colors"
                >
                  Request a Quote
                </a>
                <Link
                  to={`/products/${product.slug}`}
                  className="inline-flex items-center gap-2 border border-border hover:border-ember px-6 py-3 rounded-md font-semibold text-foreground hover:text-ember transition-colors"
                >
                  View Full {product.name}
                </Link>
              </div>
            </motion.div>
          </div>

          <section className="mt-16">
            <h2 className="font-display font-bold text-2xl text-foreground mb-2">
              Available Grades
            </h2>
            <p className="text-base text-foreground/90 leading-relaxed">
              {product.grades.join(", ")}
            </p>
          </section>

          {relatedCategories.length > 0 && (
            <section className="mt-16">
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                Other {product.name} Categories
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {relatedCategories.map((c) => (
                  <Link
                    key={c}
                    to={`/products/${product.slug}/${slugify(c)}`}
                    className="group bg-card border border-border rounded-lg p-4 shadow-card hover:shadow-card-hover hover:border-ember transition-all"
                  >
                    <h3 className="font-display font-semibold text-foreground group-hover:text-ember transition-colors">
                      {c}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SubcategoryDetail;
