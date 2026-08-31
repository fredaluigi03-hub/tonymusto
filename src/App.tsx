import React, { useEffect, useState } from 'react';
import { CartProvider } from './context/CartContext';
import { BookingProvider } from './context/BookingContext';
import { CareersProvider } from './context/CareersContext';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { PhilosophySection } from './components/philosophy/PhilosophySection';
import { ServicesSection } from './components/services/ServicesSection';
import { BeforeAfterSection } from './components/beforeAfter/BeforeAfterSection';
import { ShopSection } from './components/shop/ShopSection';
import { BridalSection } from './components/bridal/BridalSection';
import { TeamSection } from './components/team/TeamSection';
import { CareersSection } from './components/careers/CareersSection';
import { GallerySection } from './components/gallery/GallerySection';
import { ContactSection } from './components/contact/ContactSection';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { CheckoutSummaryModal } from './components/shop/CheckoutSummaryModal';
import { BookingModal } from './components/booking/BookingModal';
import { CareersModal } from './components/careers/CareersModal';
import { ScrollProgress } from './components/layout/ScrollProgress';

/**
 * Routing is a plain hash check: `#/contatti` is the standalone contacts page,
 * everything else is the one-page site (its `#sezione` anchors still work).
 * ponytail: no router dependency for two routes — add one if a third arrives.
 */
const useHashRoute = () => {
  const [route, setRoute] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(window.location.hash);
      if (window.location.hash.startsWith('#/')) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
};

export function App() {
  const route = useHashRoute();
  const isContactPage = route === '#/contatti';

  return (
    <CartProvider>
      <BookingProvider>
        <CareersProvider>
          <div className="min-h-screen bg-pearl-100 text-neutral-900 flex flex-col selection:bg-gold selection:text-white">
            <ScrollProgress />
            <Navbar />

            {isContactPage ? (
              <div className="flex-grow">
                <ContactPage />
              </div>
            ) : (
              <main className="flex-grow">
                <HeroSection />
                <PhilosophySection />
                <GallerySection />
                <ServicesSection />
                <BeforeAfterSection />
                <ShopSection />
                <BridalSection />
                <TeamSection />
                <CareersSection />
                <ContactSection />
              </main>
            )}

            <Footer />

            {/* Global drawers & modals */}
            <CartDrawer />
            <CheckoutSummaryModal />
            <BookingModal />
            <CareersModal />
          </div>
        </CareersProvider>
      </BookingProvider>
    </CartProvider>
  );
}

export default App;
