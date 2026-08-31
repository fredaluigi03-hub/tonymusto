import React, { useEffect, useState } from 'react';
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

/**
 * The cylinder's radius is in px, so it has to shrink with the viewport or the
 * cards sit off-screen on a phone. Rule of thumb from the component's README:
 * with n cards of width w, radius >= (w / 2) / tan(180° / n).
 */
const galleryDims = (width: number) => {
  if (width < 480) return { radius: 215, cardWidth: 190, cardHeight: 260 };
  if (width < 768) return { radius: 270, cardWidth: 230, cardHeight: 310 };
  if (width < 1024) return { radius: 340, cardWidth: 260, cardHeight: 350 };
  return { radius: 400, cardWidth: 290, cardHeight: 400 };
};

/**
 * Il raggio cambia col breakpoint, quindi una velocita' angolare fissa dava
 * velocita' apparenti diverse: a 0.12 gradi/frame la card frontale faceva
 * 27px/s sul telefono e 50px/s su desktop. Qui si fissa la velocita' LINEARE
 * della card davanti e si ricava l'angolare, cosi' il carosello va allo stesso
 * ritmo ovunque.
 *
 * 60px/s sta sopra il nastro delle foto (34px/s su mobile, 46 su desktop):
 * una rotazione sembra piu' lenta di una traslazione a parita' di px/s, perche'
 * la prospettiva accorcia il movimento della card frontale.
 */
const AUTO_ROTATE_PX_PER_SEC = 60;

/** Gradi per frame (a 60fps) per ottenere la velocita' lineare voluta. */
const autoRotateFor = (radius: number) =>
  AUTO_ROTATE_PX_PER_SEC / (radius * (Math.PI / 180)) / 60;

const useGalleryDims = () => {
  const [dims, setDims] = useState(() =>
    galleryDims(typeof window === 'undefined' ? 1280 : window.innerWidth)
  );
  useEffect(() => {
    const onResize = () => setDims(galleryDims(window.innerWidth));
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return dims;
};

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const { openBooking } = useBooking();
  const dims = useGalleryDims();

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
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto px-2">
            Esperienze personalizzate di taglio sartoriale, colore armocromatico e cura botanica
            profonda. Ruota il carosello e apri il trattamento che ti interessa.
          </p>
        </Reveal>
      </div>

      {/* 3D cylinder of treatments */}
      <div className="relative z-10 h-[380px] sm:h-[520px] lg:h-[720px]">
        <CircularGallery
          items={galleryItems}
          radius={dims.radius}
          cardWidth={dims.cardWidth}
          cardHeight={dims.cardHeight}
          autoRotateSpeed={autoRotateFor(dims.radius)}
          cardClassName="border border-white/15 bg-white/5 rounded-2xl"
          captionClassName="p-3 sm:p-5 [&>h3]:text-sm [&>h3]:sm:text-lg [&>em]:text-[11px] [&>em]:sm:text-sm [&>p]:text-[10px] [&>p]:sm:text-xs"
          onItemSelect={id => {
            const service = servicesData.find(s => s.id === id);
            if (service) setSelectedService(service);
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
        <span className="flex items-center gap-2 text-center text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">
          <MoveHorizontal className="w-4 h-4 text-gold" />
          Trascina per ruotare · clicca una card per i dettagli
        </span>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => openBooking()}
          className="w-full sm:w-auto px-7 py-3.5 rounded-md bg-gold hover:bg-gold-bright text-neutral-950 text-xs uppercase font-bold tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
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
