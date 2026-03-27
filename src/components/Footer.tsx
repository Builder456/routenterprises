const Footer = () => (
  <footer className="bg-steel-dark py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
            ROUT <span className="text-ember-glow">ENTERPRISES</span>
          </h3>
          <p className="text-sm text-primary-foreground/50 leading-relaxed">
            Leading exporter of premium stainless steel products serving industries across the globe.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-3">Products</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/50">
            <li>SS Flanges</li>
            <li>SS Fasteners</li>
            <li>SS Wires</li>
            <li>SS Profiles</li>
            <li>Bright Bars</li>
            <li>Seamless Pipes & Tubes</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/50">
            <li><a href="#about" className="hover:text-ember-glow transition-colors">About Us</a></li>
            <li><a href="#products" className="hover:text-ember-glow transition-colors">Products</a></li>
            <li><a href="#certificates" className="hover:text-ember-glow transition-colors">Certificates</a></li>
            <li><a href="#contact" className="hover:text-ember-glow transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Rout Enterprises. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
