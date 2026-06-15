import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import routLogo from "@/assets/rout-logo.png";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Certificates", href: "/#certificates" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
          {navLinks.map((l) => (
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
              {navLinks.map((l) => (
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
