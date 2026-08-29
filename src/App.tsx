import React from 'react';
import { CartProvider } from './context/CartContext';
import { BookingProvider } from './context/BookingContext';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { PhilosophySection } from './components/philosophy/PhilosophySection';
import { ServicesSection } from './components/services/ServicesSection';
import { BeforeAfterSection } from './components/beforeAfter/BeforeAfterSection';
import { ShopSection } from './components/shop/ShopSection';
import { BridalSection } from './components/bridal/BridalSection';
import { TeamSection } from './components/team/TeamSection';
import { AwardsSection } from './components/awards/AwardsSection';
import { GallerySection } from './components/gallery/GallerySection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { CheckoutSummaryModal } from './components/shop/CheckoutSummaryModal';
import { BookingModal } from './components/booking/BookingModal';

export function App() {
  return (
    <CartProvider>
      <BookingProvider>
        <div className="min-h-screen bg-obsidian-950 text-ivory-100 flex flex-col selection:bg-gold selection:text-obsidian-950">
          {/* Top Fixed Header & Navigation */}
          <Navbar />

          {/* Main Application Sections */}
          <main className="flex-grow">
            <HeroSection />
            <PhilosophySection />
            <ServicesSection />
            <BeforeAfterSection />
            <ShopSection />
            <BridalSection />
            <TeamSection />
            <AwardsSection />
            <GallerySection />
            <ContactSection />
          </main>

          {/* Master Footer */}
          <Footer />

          {/* Global Interactive Drawers & Modals */}
          <CartDrawer />
          <CheckoutSummaryModal />
          <BookingModal />
        </div>
      </BookingProvider>
    </CartProvider>
  );
}

export default App;
