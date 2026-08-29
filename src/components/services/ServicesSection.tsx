import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../../data/servicesData';
import { ServiceItem } from '../../types';
import { ServiceModal } from './ServiceModal';
import { useBooking } from '../../context/BookingContext';
import { Reveal } from '../common/Reveal';
import { CircularGallery, type CircularGalleryItem } from '../common/CircularGallery';
import { Scissors, Calendar, MoveHorizontal, ArrowRight } from 'lucide-react';

const galleryItems: CircularGalleryItem[] = servicesData.map(s => ({
  id: s.id,
  title: s.name,
  subtitle: s.subtitle,
  meta: `${s.duration} · ${s.price}`,
  image: s.image,
}));

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const { openBooking } = useBooking();

  return (
    <section
      id="servizi"
      className="relative overflow-hidden border-b border-neutral-200 bg-neutral-950 py-20 sm:py-24"
    >
      {/* Warm depth behind the cylinder */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute top-1/4 right-1/4 w-[36rem] h-[36rem] rounded-full bg-gold/12 blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full bg-amber-500/10 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-gold/40 text-gold-light text-xs uppercase tracking-[0.2em] font-bold backdrop-blur-sm">
            <Scissors className="w-3.5 h-3.5" />
            <span>Hair Boutique &amp; Menu Servizi</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            I Servizi del Nostro Salone
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
            Esperienze personalizzate di taglio sartoriale, colore armocromatico e cura botanica
            profonda. Ruota il carosello e apri il trattamento che ti interessa.
          </p>
        </Reveal>
      </div>

      {/* 3D cylinder of treatments */}
      <div className="relative z-10 h-[560px] sm:h-[640px] lg:h-[720px] -mx-4 sm:mx-0">
        <CircularGallery
          items={galleryItems}
          radius={400}
          cardWidth={290}
          cardHeight={400}
          autoRotateSpeed={0.025}
          cardClassName="border border-white/15 bg-white/5 rounded-2xl"
          captionClassName="p-5"
          onItemSelect={id => {
            const service = servicesData.find(s => s.id === id);
            if (service) setSelectedService(service);
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
        <span className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">
          <MoveHorizontal className="w-4 h-4 text-gold" />
          Trascina per ruotare · clicca una card per i dettagli
        </span>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => openBooking()}
          className="px-7 py-3.5 rounded-md bg-gold hover:bg-gold-bright text-neutral-950 text-xs uppercase font-bold tracking-wider transition-colors shadow-md flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          <span>Prenota il Tuo Appuntamento</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>

      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </section>
  );
};
