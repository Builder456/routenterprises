import type { Product } from "@/data/products";

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getSubcategoryImage = (productName: string, category: string) => {
  const keywords = `stainless-steel,${slugify(productName)},${slugify(category)}`;
  return `https://loremflickr.com/1024/640/${keywords}/all`;
};

export const getSubcategoryDescription = (product: Product, category: string) => {
  const grades = product.grades.slice(0, 8).join(", ");
  const apps = product.applications.map((a) => a.label).slice(0, 5).join(", ");
  return [
    `${category} from Rout Enterprises are part of our flagship ${product.name.toLowerCase()} portfolio, exported to refineries, fabricators, EPC contractors and original equipment manufacturers in over 8 countries. Each piece is produced from premium-melted billets, processed under strict quality control and finished to meet the most demanding international specifications including ${product.specs.join(", ")}. We maintain a deep ready-stock inventory of ${category.toLowerCase()} so that urgent project requirements, breakdown spares and bulk export orders can be dispatched within the shortest possible lead time.`,
    `Our ${category.toLowerCase()} are offered in a wide selection of austenitic, ferritic, martensitic, precipitation-hardening and duplex grades — covering ${grades} and other made-to-order grades on request. Every batch undergoes rigorous in-house testing such as ${product.testing ?? "tensile, hardness, IGC, ultrasonic and PMI verification"}, and is supplied with EN 10204 3.1 / 3.2 mill test certificates, raw material traceability, third-party inspection reports (TUV, BV, SGS, Lloyd's, DNV) and country-of-origin documentation as required by the buyer.`,
    `These ${category.toLowerCase()} are widely deployed across ${apps} and many other mission-critical environments where corrosion resistance, dimensional accuracy and long-term mechanical reliability are non-negotiable. Whether you need a single trial order, a recurring monthly schedule or a complete project supply with custom packaging and global logistics, our export desk is structured to deliver a smooth, transparent and on-time experience. Connect with our team for a same-day quotation, technical datasheets and dispatch timelines tailored to your destination port.`,
  ].join("\n\n");
};

export const getSubcategory = (product: Product, categorySlug: string) => {
  const category = product.categories.find((c) => slugify(c) === categorySlug);
  if (!category) return null;
  return {
    name: category,
    slug: categorySlug,
    image: getSubcategoryImage(product.name, category),
    description: getSubcategoryDescription(product, category),
  };
};
