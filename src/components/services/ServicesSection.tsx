import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../../data/servicesData';
import { ServiceItem } from '../../types';
import { ServiceModal } from './ServiceModal';
import { useBooking } from '../../context/BookingContext';
import { Reveal, useTilt } from '../common/Reveal';
import { HorizontalScroller } from '../common/HorizontalScroller';
import { ArrowRight, Calendar, Scissors, Check } from 'lucide-react';

const ServiceCard: React.FC<{
  service: ServiceItem;
  index: number;
  onDetails: () => void;
  onBook: () => void;
}> = ({ service, index, onDetails, onBook }) => {
  const tilt = useTilt(7);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: false, margin: '-40px' }}
      transition={{ duration: 0.55, delay: Math.min(index, 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: 'preserve-3d' }}
      className="group snap-start shrink-0 w-[82vw] sm:w-[420px] lg:w-[440px] [perspective:1200px] rounded-3xl bg-white border border-neutral-200 hover:border-gold/60 shadow-luxury-white hover:shadow-luxury-card transition-colors duration-300 overflow-hidden flex flex-col"
    >
      {/* Visual */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-pearl-200">
        <img
          src={service.image}
          alt={service.name}
          draggable={false}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-[900ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-800 text-[11px] font-mono font-bold shadow-md">
            {service.duration}
          </span>
          <span className="font-serif text-base font-bold text-neutral-950 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold/40 shadow-md">
            {service.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between gap-5">
        <div className="space-y-2">
          <span className="text-[11px] uppercase font-mono tracking-widest text-gold font-bold">
            {service.subtitle}
          </span>
          <h3 className="font-serif text-2xl font-bold text-neutral-900 leading-snug">
            {service.name}
          </h3>
          <p className="text-sm text-neutral-600 font-light leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 text-xs pt-3 border-t border-neutral-100">
          {service.features.slice(0, 3).map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.15 + i * 0.07 }}
              className="flex items-center gap-2"
            >
              <span className="w-4 h-4 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span className="text-neutral-700">{feat}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-2.5">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBook}
            className="px-6 py-3.5 bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 font-bold text-xs uppercase tracking-widest rounded-md shadow-xs transition-colors flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Prenota Questo Servizio</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onDetails}
            className="px-5 py-3 border border-neutral-300 bg-white hover:bg-pearl-100 text-neutral-800 text-xs uppercase tracking-wider font-semibold rounded-md transition-colors flex items-center justify-center gap-2"
          >
            <span>Dettagli Completi</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
};

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');
  const { openBooking } = useBooking();

  const tabs = [
    { id: 'all', label: 'Tutti i Trattamenti' },
    { id: 'sartoriale', label: 'Taglio Sartoriale' },
    { id: 'colore', label: 'Color Couture' },
    { id: 'ricci', label: 'Bio Organic Curl' },
    { id: 'spa', label: 'Hair Spa BEE IT' },
    { id: 'bridal', label: 'Atelier Sposa' },
  ];

  const filtered = activeTab === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeTab);

  return (
    <section
      id="servizi"
      className="py-24 bg-pearl-100 relative overflow-hidden border-b border-neutral-200 [--scroller-fade:#FAF9F6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] font-bold shadow-2xs">
            <Scissors className="w-3.5 h-3.5" />
            <span>Hair Boutique &amp; Menu Servizi</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
            I Servizi del Nostro Salone
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Esperienze personalizzate di taglio sartoriale, colore armocromatico e cura botanica profonda.
          </p>
        </Reveal>

        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {tabs.map((tab, i) => {
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 shadow-2xs ${
                  isActive
                    ? 'text-white'
                    : 'bg-white text-neutral-700 hover:text-gold border border-neutral-200 hover:border-gold/50'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="services-tab-pill"
                    className="absolute inset-0 rounded-full bg-neutral-950 shadow-md"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Full-bleed carousel: first card aligns with the container, the track runs edge to edge */}
      <div className="relative z-10 w-full">
        <HorizontalScroller
          ariaLabel="Carosello dei servizi"
          hint="Trascina per scoprire tutti i trattamenti"
          className="px-[max(1rem,calc((100vw-80rem)/2+1rem))] sm:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
          controlsClassName="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onBook={() => openBooking(service.id)}
                onDetails={() => setSelectedService(service)}
              />
            ))}
          </AnimatePresence>
        </HorizontalScroller>
      </div>

      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </section>
  );
};
