import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import routLogo from "@/assets/rout-logo.png";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Certificates", href: "/#certificates" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const productMenu: { heading: string; items: { label: string; slug: string }[] }[] = [
  {
    heading: "Steel",
    items: [
      { label: "Round Bars", slug: "round-bar" },
      { label: "Hexagon Bars", slug: "hexagon-bar" },
      { label: "Flat Bars", slug: "flat-bar" },
      { label: "Steel Angles", slug: "steel-angles" },
      { label: "Steel Channels", slug: "steel-channels" },
      { label: "Steel Beams (HEA/HEB/HEM/IPE/IPN/W)", slug: "steel-beams" },
      { label: "Hot Rolled Coils (HRC)", slug: "hot-rolled-coils" },
      { label: "Cold Rolled Coils (CRC)", slug: "cold-rolled-coils" },
      { label: "Galvanized Coils (GI)", slug: "galvanized-coils" },
      { label: "Galvalume Coils (GL)", slug: "galvalume-coils" },
      { label: "Pre-Painted Coils (PPGI/PPGL)", slug: "pre-painted-coils" },
      { label: "Steel Pipes & Tubes", slug: "steel-pipes-tubes" },
      { label: "TMT Bars", slug: "tmt-bar" },
      { label: "Sheets", slug: "sheets" },
    ],
  },
  {
    heading: "Stainless Steel",
    items: [
      { label: "SS Flanges", slug: "stainless-steel-flanges" },
      { label: "Bright Bars", slug: "bright-bars" },
      { label: "SS Angles & Profiles", slug: "stainless-steel-profiles" },
      { label: "Seamless Pipes & Tubes", slug: "seamless-pipes-tubes" },
      { label: "SS Wires", slug: "stainless-steel-wires" },
      { label: "SS Fasteners", slug: "stainless-steel-fasteners" },
      { label: "SS Coils", slug: "stainless-steel-coils" },
      { label: "SS Sheets", slug: "sheets" },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10"
    >
      <div className="container mx-auto relative flex items-center justify-between h-24 px-4">
        <Link to="/" aria-label="Rout Enterprises - Home" className="flex items-center">
          <img
            src={routLogo}
            alt="Rout Enterprises logo"
            className="h-14 w-auto md:h-20 bg-primary-foreground rounded px-2 py-1"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <a href="/#home" className="text-sm font-medium text-primary-foreground/80 hover:text-ember-glow transition-colors">Home</a>
          <a href="/#about" className="text-sm font-medium text-primary-foreground/80 hover:text-ember-glow transition-colors">About</a>

          {/* Products mega menu */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-primary-foreground/80 hover:text-ember-glow transition-colors"
              aria-expanded={productsOpen}
            >
              Products <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[560px]"
                >
                  <div className="bg-background border border-border rounded-lg shadow-xl p-6 grid grid-cols-2 gap-6">
                    {productMenu.map((group) => (
                      <div key={group.heading}>
                        <p className="text-ember font-display font-bold text-xs uppercase tracking-wider mb-3">
                          {group.heading}
                        </p>
                        <ul className="space-y-1.5">
                          {group.items.map((it) => (
                            <li key={it.slug}>
                              <Link
                                to={`/products/${it.slug}`}
                                className="block text-sm text-foreground/80 hover:text-ember transition-colors"
                              >
                                {it.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(2).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-ember-glow transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+918446055949"
            className="flex items-center gap-2 bg-ember px-4 py-2 rounded-md text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <Phone className="w-4 h-4" /> Get Quote
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="md:hidden text-primary-foreground"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-primary overflow-hidden"
          >
            <div className="flex flex-col gap-1 p-6 max-h-[70vh] overflow-y-auto">
              <a href="/#home" onClick={() => setOpen(false)} className="py-2 text-primary-foreground/80 hover:text-ember-glow font-medium">Home</a>
              <a href="/#about" onClick={() => setOpen(false)} className="py-2 text-primary-foreground/80 hover:text-ember-glow font-medium">About</a>

              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="flex items-center justify-between py-2 text-primary-foreground/80 hover:text-ember-glow font-medium"
                aria-expanded={mobileProductsOpen}
              >
                Products <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileProductsOpen && (
                <div className="pl-3 pb-2 space-y-3">
                  {productMenu.map((group) => (
                    <div key={group.heading}>
                      <p className="text-ember font-display font-bold text-xs uppercase tracking-wider mb-1">
                        {group.heading}
                      </p>
                      <ul className="space-y-1">
                        {group.items.map((it) => (
                          <li key={it.slug}>
                            <Link
                              to={`/products/${it.slug}`}
                              onClick={() => setOpen(false)}
                              className="block py-1 text-sm text-primary-foreground/75 hover:text-ember-glow"
                            >
                              {it.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {navLinks.slice(2).map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-primary-foreground/80 hover:text-ember-glow font-medium"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
