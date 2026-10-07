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
import { ProductsPage } from './pages/ProductsPage';
import { AwardsPage } from './pages/AwardsPage';
import { PhotosPage } from './pages/PhotosPage';
import { AwardsStrip } from './components/awards/AwardsStrip';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { CheckoutSummaryModal } from './components/shop/CheckoutSummaryModal';
import { BookingModal } from './components/booking/BookingModal';
import { CareersModal } from './components/careers/CareersModal';
import { ScrollProgress } from './components/layout/ScrollProgress';
import heroPhoto from './assets/hero-photo.webp';

/**
 * Routing is a plain hash lookup: the keys below are standalone pages, everything
 * else is the one-page site (its `#sezione` anchors still work).
 * Four routes don't justify a router dependency yet.
 */
const PAGES: Record<string, React.FC> = {
  '#/contatti': ContactPage,
  '#/prodotti': ProductsPage,
  '#/premi': AwardsPage,
  '#/foto': PhotosPage,
};

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
  const Page = PAGES[route];

  return (
    <CartProvider>
      <BookingProvider>
        <CareersProvider>
          {/* Foto fissa dietro tutto il sito: piena nell'hero, velata dalle sezioni successive */}
          <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none bg-pearl-100">
            <img
              src={heroPhoto}
              alt=""
              className="hidden h-full w-full object-cover object-[center_30%] lg:block"
            />
          </div>

          <div className="min-h-screen text-neutral-900 flex flex-col selection:bg-gold selection:text-white">
            <ScrollProgress />
            <Navbar />

            {Page ? (
              <div className="flex-grow">
                <Page />
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
                <AwardsStrip />
                <CareersSection />
                <ContactSection />
              </main>
            )}

            <Footer />
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
