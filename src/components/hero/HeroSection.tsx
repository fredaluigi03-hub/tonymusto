import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';
import { useHeroScroll } from '../common/useHeroScroll';
import heroPoster from '../../assets/hero-poster.webp';
import {
  Sparkles,
  Calendar,
  ShoppingBag,
  Clock,
  MapPin,
  ChevronDown
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { openBooking } = useBooking();
  const heroVideo = useHeroScroll();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    /* La sezione e alta 3 schermate: quello spazio e la corsa dello scrub.
       Dentro, un blocco sticky resta fermo a schermo pieno, cosi il resto del
       sito non sale finche il video non e arrivato in fondo. */
    <section id="hero" className="relative h-[300vh] border-b border-neutral-200">
      <div className="sticky top-0 flex h-svh items-start lg:items-center justify-center overflow-hidden bg-pearl-100 lg:bg-transparent pt-[38vh] pb-12 lg:pt-24 lg:pb-24">

      {/* Mobile: banda in alto, la 16:9 non copre uno schermo verticale.
          Desktop: arriva dal layer fisso in App. */}
      <div className="absolute inset-x-0 top-0 h-[46vh] bg-pearl-100 lg:hidden">
        <video
          ref={heroVideo}
          src="/hero-video-sm.mp4"
          poster={heroPoster}
          muted
          playsInline
          preload="none"
          aria-label="Tony Musto al lavoro su un'acconciatura durante uno shooting"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="hero-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12">

          {/* Il testo vive in un pannello vetro: la foto intorno resta intatta */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-start-7 lg:col-span-6 space-y-6 text-left rounded-3xl bg-white/85 backdrop-blur-xl border border-white/70 shadow-luxury-card p-6 sm:p-8"
          >

            {/* Top Anchor Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold/40 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                Salone a Montemiletto (AV) · Aperto Mar–Sab
              </span>
            </motion.div>

            {/* Headline Editoriale Ufficiale */}
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="block font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-neutral-500 font-semibold">
                Tony Musto Parrucchieri
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-neutral-950 font-normal leading-[1.08] tracking-tight">
                Hair Stylist <br />
                <span className="italic font-light gold-gradient-text">for Passion.</span>
              </h1>
              <p className="font-serif text-lg sm:text-xl text-neutral-700 font-light italic pt-1">
                Fashion hair — acconciature e make-up for wedding
              </p>
            </motion.div>

            {/* Testo Vero dal Sito Ufficiale tonymusto.it */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed border-l-2 border-gold pl-4 py-1">
              "Chi sceglie i nostri prodotti sceglie un’esperienza totale che coinvolge tutti i sensi, sceglie di affidarsi a professionisti dello stile che sappiano esaltare ogni tratto e sfumatura della personalità, in un ambiente raffinato e di classe sempre aggiornato sulle tendenze e sulle mode."
            </motion.p>

            {/* 2 Clear Main CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openBooking()}
                className="px-7 py-4 rounded-md bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 font-bold text-xs sm:text-sm uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center gap-3 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Prenota Appuntamento</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#shop"
                className="px-7 py-4 rounded-md border-2 border-neutral-900 bg-white hover:bg-pearl-200 text-neutral-900 text-xs sm:text-sm uppercase tracking-[0.18em] font-bold transition-all duration-300 flex items-center justify-center gap-3 text-center shadow-xs"
              >
                <ShoppingBag className="w-4 h-4 text-gold" />
                <span>Acquista Prodotti Online</span>
              </motion.a>
            </motion.div>

            {/* Quick Facts Strip */}
            <motion.div variants={itemVariants} className="pt-5 flex items-center gap-3 flex-wrap text-xs text-neutral-600 border-t border-neutral-200">
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-md border border-neutral-200 shadow-2xs">
                <Clock className="w-4 h-4 text-gold" />
                <span className="font-medium">Orari: Mar–Sab 8:30–19:00</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-md border border-neutral-200 shadow-2xs">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="font-medium">Via XXIV Maggio 13/14, Montemiletto</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity: 'clamp(0, calc(1 - var(--hero-zoom, 0) * 2.5), 1)' }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 px-3 py-2 rounded-full bg-white/85 backdrop-blur-md border border-white/70 text-xs text-neutral-600 shadow-md"
      >
        <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-bold">Scorri</span>
        <ChevronDown className="w-4 h-4 text-gold" />
      </motion.div>
      </div>
    </section>
  );
};
