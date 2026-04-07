import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import IndustriesSection from "@/components/IndustriesSection";
import CertificatesSection from "@/components/CertificatesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen">
    <header>
      <Navbar />
    </header>
    <main>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <CertificatesSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
