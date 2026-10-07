import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useBooking } from '../../context/BookingContext';
import { LANGUAGES, useLang, type Lang } from '../../i18n/LanguageContext';
import { useStrings } from '../../i18n/strings';
import { navbarStrings } from '../../i18n/navbar';
import { ROUTES, useHashRoute } from '../../routes';
import logo from '../../assets/logo.webp';

const PHONE = '+393770293092';

export const Navbar: React.FC = () => {
  const { totalItemsCount, setIsOpen: setCartOpen } = useCart();
  const { openBooking } = useBooking();
  const { lang, setLang } = useLang();
  const t = useStrings(navbarStrings);
  const route = useHashRoute();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { name: t.links.services, href: ROUTES.boutique },
    { name: 'My Wedding Page', href: ROUTES.wedding },
    { name: t.links.shop, href: ROUTES.shop },
    { name: 'Photos', href: ROUTES.photos },
    { name: 'Awards', href: ROUTES.awards },
    { name: t.links.careers, href: ROUTES.careers },
    { name: t.links.contact, href: ROUTES.contact },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full border-b transition-colors duration-300 ${
          scrolled || menuOpen
            ? 'border-neutral-200 bg-white/95 backdrop-blur-md'
            : 'border-transparent bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
          <a href={ROUTES.home} className="shrink-0" aria-label="Tony Musto Parrucchieri — home">
            <img src={logo} alt="Tony Musto Parrucchieri" width={1400} height={681} className="h-10 w-auto lg:h-11" />
          </a>

          <nav className="hidden items-center gap-6 xl:flex">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                aria-current={route === link.href ? 'page' : undefined}
                className="relative py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600 transition-colors hover:text-neutral-950 aria-[current=page]:text-neutral-950 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100 aria-[current=page]:after:scale-x-100"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <label className="relative">
              <span className="sr-only">{t.language}</span>
              <select
                value={lang}
                onChange={e => setLang(e.target.value as Lang)}
                className="cursor-pointer appearance-none rounded-full bg-transparent px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-gold"
              >
                {LANGUAGES.map(l => (
                  <option key={l.code} value={l.code} title={l.label}>
                    {l.code.toUpperCase()}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              aria-label={t.cart}
              className="relative cursor-pointer rounded-full p-2.5 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
            >
              <ShoppingBag className="h-[18px] w-[18px]" />
              {totalItemsCount > 0 && (
                <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-neutral-950 px-1 text-[9px] font-bold text-white">
                  {totalItemsCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => openBooking()}
              className="hidden cursor-pointer rounded-full bg-neutral-950 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-gold sm:block"
            >
              {t.book}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen(open => !open)}
              aria-label={t.menu}
              aria-expanded={menuOpen}
              className="cursor-pointer rounded-full p-2.5 text-neutral-800 transition-colors hover:bg-neutral-100 xl:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-neutral-200 bg-white xl:hidden"
            >
              <div className="flex flex-col px-6 py-4">
                {links.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={route === link.href ? 'page' : undefined}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-neutral-100 py-3.5 font-serif text-xl text-neutral-800 transition-colors last:border-0 hover:text-gold aria-[current=page]:text-gold"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* On phones the two actions that matter stay one tap away */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-neutral-200 bg-neutral-200 pb-[env(safe-area-inset-bottom)] sm:hidden">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center justify-center gap-2 bg-white py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900"
        >
          <Phone className="h-4 w-4" />
          {t.call}
        </a>
        <button
          type="button"
          onClick={() => openBooking()}
          className="cursor-pointer bg-neutral-950 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
        >
          {t.book}
        </button>
      </div>
    </>
  );
};
