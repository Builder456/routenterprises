const Footer = () => (
  <footer className="bg-steel-dark py-12" role="contentinfo">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
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
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-3">Our Location</h4>
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.5!2d72.7580!3d19.8074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71d7a9b5a5f5f%3A0x0!2sSaipooja+Apartment%2C+Trivedi+Nagar%2C+Saravali%2C+Boisar%2C+Maharashtra+401501!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rout Enterprises Location - Boisar, Maharashtra"
            />
          </div>
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
