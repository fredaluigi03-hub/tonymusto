import React from 'react';
import { motion } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';
import { useStrings } from '../../i18n/strings';
import { heroStrings } from '../../i18n/hero';
import { ROUTES } from '../../routes';
import heroPhoto from '../../assets/hero-photo.webp';

export const HeroSection: React.FC = () => {
  const { openBooking } = useBooking();
  const t = useStrings(heroStrings);

  return (
    <section id="hero" className="relative flex min-h-svh items-end overflow-hidden bg-neutral-950">
      <img
        src={heroPhoto}
        alt={t.photoAlt}
        className="absolute inset-0 h-full w-full object-cover object-[30%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/45 to-neutral-950/10" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto w-full max-w-7xl px-6 pb-32 pt-40 text-white sm:pb-24 lg:px-8"
      >
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">{t.kicker}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl font-normal leading-[1.05] tracking-tight sm:text-7xl">
          Hair Stylist for Passion.
        </h1>
        <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/85 sm:text-lg">{t.tagline}</p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => openBooking()}
            className="min-h-11 cursor-pointer rounded-full bg-white px-8 text-xs font-medium uppercase tracking-[0.2em] text-neutral-950 transition-colors hover:bg-gold hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {t.book}
          </button>
          <a
            href={ROUTES.boutique}
            className="inline-flex min-h-11 cursor-pointer items-center rounded-full border border-white/50 px-8 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {t.boutique}
          </a>
        </div>
      </motion.div>
    </section>
  );
};
