import React from 'react';
import { CartProvider } from './context/CartContext';
import { BookingProvider } from './context/BookingContext';
import { CareersProvider } from './context/CareersContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { CheckoutSummaryModal } from './components/shop/CheckoutSummaryModal';
import { BookingModal } from './components/booking/BookingModal';
import { CareersModal } from './components/careers/CareersModal';
import { HomePage } from './pages/HomePage';
import { BoutiquePage } from './pages/BoutiquePage';
import { WeddingPage } from './pages/WeddingPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { ProductsPage } from './pages/ProductsPage';
import { AwardsPage } from './pages/AwardsPage';
import { PhotosPage } from './pages/PhotosPage';
import { ROUTES, useHashRoute } from './routes';

// Seven routes don't justify a router dependency: a hash lookup is enough.
// Anything unknown (including plain `#anchor` links) falls back to the home.
const PAGES: Record<string, React.FC> = {
  [ROUTES.boutique]: BoutiquePage,
  [ROUTES.wedding]: WeddingPage,
  [ROUTES.shop]: ProductsPage,
  [ROUTES.photos]: PhotosPage,
  [ROUTES.awards]: AwardsPage,
  [ROUTES.careers]: CareersPage,
  [ROUTES.contact]: ContactPage,
};

export function App() {
  const route = useHashRoute();
  const Page = PAGES[route] ?? HomePage;

  return (
    <CartProvider>
      <BookingProvider>
        <CareersProvider>
          <div className="flex min-h-screen flex-col bg-pearl-100 pb-14 text-neutral-900 selection:bg-gold selection:text-white sm:pb-0">
            <ScrollProgress />
            <Navbar />
            <main className="flex-grow">
              <Page />
            </main>
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
