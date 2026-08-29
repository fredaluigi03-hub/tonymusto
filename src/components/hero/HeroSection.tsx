import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';
import { 
  Sparkles, 
  Calendar, 
  ShoppingBag, 
  Clock, 
  MapPin, 
  Scissors, 
  Star,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { openBooking } = useBooking();

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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-pearl-100 to-white py-16 sm:py-24 border-b border-neutral-200">
      
      {/* Decorative Subtle Warm Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-amber-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Text & Editorial CTAs with Framer Motion */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-7 text-left"
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
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-neutral-950 font-normal leading-[1.08] tracking-tight">
                Hair Stylist <br />
                <span className="italic font-light gold-gradient-text">for Passion.</span>
              </h1>
              <p className="font-serif text-xl sm:text-2xl text-neutral-700 font-light italic pt-1">
                Fashion hair — acconciature e make-up for wedding
              </p>
            </motion.div>

            {/* Testo Vero dal Sito Ufficiale tonymusto.it */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-neutral-700 max-w-2xl font-light leading-relaxed border-l-2 border-gold pl-4 py-1 bg-pearl-100/50 rounded-r-md">
              "Chi sceglie i nostri prodotti sceglie un’esperienza totale che coinvolge tutti i sensi, sceglie di affidarsi a professionisti dello stile che sappiano esaltare ogni tratto e sfumatura della personalità, in un ambiente raffinato e di classe sempre aggiornato sulle tendenze e sulle mode."
            </motion.p>

            {/* 2 Clear Main CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openBooking()}
                className="px-8 py-4 rounded-md bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 font-bold text-xs sm:text-sm uppercase tracking-[0.18em] transition-all duration-300 flex items-center justify-center gap-3 shadow-md"
              >
                <Calendar className="w-4 h-4 text-gold group-hover:text-neutral-950" />
                <span>Prenota Appuntamento</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#shop"
                className="px-8 py-4 rounded-md border-2 border-neutral-900 bg-white hover:bg-pearl-200 text-neutral-900 text-xs sm:text-sm uppercase tracking-[0.18em] font-bold transition-all duration-300 flex items-center justify-center gap-3 text-center shadow-xs"
              >
                <ShoppingBag className="w-4 h-4 text-gold" />
                <span>Acquista Prodotti Online</span>
              </motion.a>
            </motion.div>

            {/* Quick Facts Strip */}
            <motion.div variants={itemVariants} className="pt-6 flex items-center gap-4 flex-wrap text-xs text-neutral-600 border-t border-neutral-200">
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

          {/* Right Column: Real Photo of Tony Musto with Motion & Clean Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-luxury-card bg-white p-3 group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl relative bg-pearl-200">
                <img
                  src="https://tonymusto.it/wp-content/uploads/2022/06/Tony_8-2-scaled.jpg"
                  alt="Tony Musto Hair Stylist"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Rating Badge */}
                <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 flex items-center gap-1.5 text-xs text-neutral-900 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                  <span className="font-bold">Oltre 25 anni di passione</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-lg space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase font-mono tracking-widest text-gold font-bold">Tony Musto</span>
                    <Scissors className="w-4 h-4 text-gold" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-neutral-950">Maestro d'Arte & Wedding Specialist</h3>
                  <p className="text-xs text-neutral-600">Salone e Boutique Online a Montemiletto (AV)</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-xs text-neutral-500"
      >
        <span className="text-[10px] uppercase tracking-widest text-gold font-mono font-bold">Scorri</span>
        <ChevronDown className="w-4 h-4 text-gold" />
      </motion.div>
    </section>
  );
};
