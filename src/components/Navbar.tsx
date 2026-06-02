import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import routLogo from "@/assets/rout-logo.png";
import { products } from "@/data/products";
import { slugify } from "@/lib/subcategory";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Certificates", href: "/#certificates" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10"
    >
      <div className="container mx-auto relative flex items-center justify-between h-16 px-4">
        <Link to="/" aria-label="Rout Enterprises - Home" className="flex items-center">
          <img
            src={routLogo}
            alt="Rout Enterprises logo"
            className="h-10 w-auto md:h-12 bg-primary-foreground rounded px-1 py-0.5"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="/#home"
            className="text-sm font-medium text-primary-foreground/80 hover:text-ember-glow transition-colors"
          >
            Home
          </a>
          <a
            href="/#about"
            className="text-sm font-medium text-primary-foreground/80 hover:text-ember-glow transition-colors"
          >
            About
          </a>

          {/* Products dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 text-sm font-medium text-primary-foreground/80 hover:text-ember-glow transition-colors focus:outline-none">
              Products <ChevronDown className="w-3.5 h-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-72 max-h-[70vh] overflow-y-auto bg-popover z-50"
            >
              <DropdownMenuLabel className="text-ember font-display">
                Our Product Range
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {products.map((p) => (
                <div key={p.slug}>
                  <DropdownMenuItem asChild>
                    <Link
                      to={`/products/${p.slug}`}
                      className="cursor-pointer font-semibold text-foreground"
                    >
                      {p.name}
                    </Link>
                  </DropdownMenuItem>
                  {p.categories.slice(0, 5).map((c) => (
                    <DropdownMenuItem key={c} asChild>
                      <Link
                        to={`/products/${p.slug}/${slugify(c)}`}
                        className="cursor-pointer pl-6 text-xs text-muted-foreground hover:text-ember"
                      >
                        {c}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  {p.categories.length > 5 && (
                    <DropdownMenuItem asChild>
                      <Link
                        to={`/products/${p.slug}`}
                        className="cursor-pointer pl-6 text-xs text-ember font-medium"
                      >
                        View all {p.categories.length} categories →
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

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
            <div className="flex flex-col gap-1 p-6">
              <a
                href="/#home"
                onClick={() => setOpen(false)}
                className="py-2 text-primary-foreground/80 hover:text-ember-glow font-medium"
              >
                Home
              </a>
              <a
                href="/#about"
                onClick={() => setOpen(false)}
                className="py-2 text-primary-foreground/80 hover:text-ember-glow font-medium"
              >
                About
              </a>

              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="flex items-center justify-between py-2 text-primary-foreground/80 hover:text-ember-glow font-medium"
              >
                Products
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileProductsOpen && (
                <div className="pl-3 border-l border-primary-foreground/20 ml-1 mb-2">
                  {products.map((p) => (
                    <div key={p.slug} className="mb-3">
                      <Link
                        to={`/products/${p.slug}`}
                        onClick={() => setOpen(false)}
                        className="block py-1 text-sm font-semibold text-ember-glow"
                      >
                        {p.name}
                      </Link>
                      {p.categories.map((c) => (
                        <Link
                          key={c}
                          to={`/products/${p.slug}/${slugify(c)}`}
                          onClick={() => setOpen(false)}
                          className="block py-0.5 pl-3 text-xs text-primary-foreground/70 hover:text-ember-glow"
                        >
                          {c}
                        </Link>
                      ))}
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
