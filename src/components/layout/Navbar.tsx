import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useBooking } from '../../context/BookingContext';
import { 
  ShoppingBag, 
  Calendar, 
  Phone, 
  MapPin, 
  Menu, 
  X, 
  Clock, 
  Sparkles,
  Scissors
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { totalItemsCount, setIsOpen: setCartOpen } = useCart();
  const { openBooking } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hair Boutique', href: '#servizi' },
    { name: 'Shop Online', href: '#shop' },
    { name: 'Prima & Dopo', href: '#prima-dopo' },
    { name: 'My Wedding Page', href: '#spose' },
    { name: 'Lavora con Noi', href: '#lavora-con-noi' },
    { name: 'Photos', href: '#photos' },
    { name: 'Contatti', href: '#/contatti' },
  ];

  return (
    <>
      {/* Top Banner - Bianco Caldo & Oro */}
      <div className="bg-white border-b border-gold/20 text-xs text-neutral-600 py-2 px-4 relative z-50 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="flex items-center gap-1.5 text-gold font-medium">
              <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
              <span>Hair Stylist for Passion · Montemiletto (AV)</span>
            </span>
            <span className="hidden md:inline text-neutral-300">|</span>
            <span className="hidden md:flex items-center gap-1 text-neutral-500">
              <Clock className="w-3.5 h-3.5 text-gold" />
              <span>Mar–Sab: 8:30 – 19:00</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-neutral-600">
            <a 
              href="tel:0825968391" 
              className="flex items-center gap-1 hover:text-gold font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>0825 968391</span>
            </a>
            <span className="text-neutral-300">/</span>
            <a 
              href="tel:3770293092" 
              className="hover:text-gold font-medium transition-colors"
            >
              377 0293092
            </a>
            <span className="text-neutral-300 hidden lg:inline">|</span>
            <a 
              href="#contatti" 
              className="hidden lg:flex items-center gap-1 hover:text-gold transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>Via XXIV Maggio 13/14</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main White Luxury Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-md py-3' 
            : 'bg-white/90 backdrop-blur-sm border-b border-neutral-200/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo Reale */}
          <a href="#" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center bg-pearl-100 group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300">
              <Scissors className="w-5 h-5 text-gold transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-neutral-900 group-hover:text-gold transition-colors duration-300">
                TONY MUSTO
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-sans font-medium">
                Hair Stylist for Passion
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links con Effetto Linea Oro */}
          <nav className="hidden xl:flex items-center space-x-7 text-sm font-medium tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-700 hover:text-gold relative py-1 text-xs uppercase tracking-widest font-semibold transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Cart Button & Booking CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Cart Icon Drawer Trigger */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCartOpen(true)}
              aria-label="Carrello della spesa"
              className="relative p-2.5 rounded-full border border-neutral-200 bg-white hover:border-gold hover:bg-pearl-100 text-neutral-800 hover:text-gold transition-all duration-300 shadow-xs"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                  {totalItemsCount}
                </span>
              )}
            </motion.button>

            {/* Prenota Rituale CTA */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openBooking()}
              className="relative group overflow-hidden px-4 sm:px-5 py-2.5 rounded-md bg-neutral-900 hover:bg-gold text-white hover:text-neutral-950 font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-sm flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-gold group-hover:text-neutral-950 transition-colors" />
              <span className="font-semibold">Prenota Online</span>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-md border border-neutral-200 text-neutral-800 hover:text-gold hover:border-gold transition-colors"
              aria-label="Menu di navigazione"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white border-b border-neutral-200 px-6 py-6 transition-all"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-neutral-800 hover:text-gold text-base font-serif tracking-wide py-2 border-b border-neutral-100 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openBooking();
                    }}
                    className="w-full py-3 bg-neutral-900 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md rounded-md hover:bg-gold hover:text-neutral-950 transition-colors"
                  >
                    <Calendar className="w-4 h-4 text-gold" />
                    Prenota Appuntamento in Salone
                  </button>
                  <div className="text-center text-xs text-neutral-500 pt-2">
                    <p>Via XXIV Maggio 13/14, Montemiletto (AV)</p>
                    <p className="text-gold font-mono font-bold mt-1">Tel: 0825 968391 · 377 0293092</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
