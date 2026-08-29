import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { beforeAfterData } from '../../data/beforeAfterData';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { useBooking } from '../../context/BookingContext';
import { Reveal } from '../common/Reveal';
import { HorizontalScroller } from '../common/HorizontalScroller';
import {
  Sparkles,
  Maximize2,
  X,
  Clock,
  CheckCircle2,
  Wand2,
  Calendar,
  Layers,
} from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [activeCaseId, setActiveCaseId] = useState(beforeAfterData[0].id);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const { openBooking } = useBooking();

  const activeCase = beforeAfterData.find(c => c.id === activeCaseId) || beforeAfterData[0];

  return (
    <section
      id="prima-dopo"
      className="py-24 bg-white relative overflow-hidden border-b border-neutral-200 [--scroller-fade:#ffffff]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pearl-100 border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>I Nostri Risultati</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
            L&apos;Arte del Prima &amp; Dopo
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto">
            Guarda i risultati reali eseguiti nel salone di Tony Musto: sfumature armocromatiche,
            definizione ricci e tagli sartoriali.
          </p>
        </Reveal>
      </div>

      {/* Full-bleed horizontal case switcher with real thumbnails */}
      <div className="relative z-10 w-full mb-12">
        <HorizontalScroller
          ariaLabel="Carosello dei casi studio"
          hint="Scorri e scegli un caso studio"
          className="px-[max(1rem,calc((100vw-80rem)/2+1rem))] sm:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
          controlsClassName="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {beforeAfterData.map((item, index) => {
            const isActive = item.id === activeCaseId;
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setActiveCaseId(item.id)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-40px' }}
                transition={{ duration: 0.5, delay: Math.min(index, 5) * 0.06 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                aria-pressed={isActive}
                className={`group relative snap-start shrink-0 w-[64vw] sm:w-[280px] rounded-3xl overflow-hidden border text-left transition-colors duration-300 ${
                  isActive
                    ? 'border-gold bg-white shadow-luxury-card'
                    : 'border-neutral-200 bg-white shadow-luxury-white hover:border-gold/50'
                }`}
              >
                <div className="relative h-40 overflow-hidden bg-pearl-200">
                  <img
                    src={item.afterImage}
                    alt={item.title}
                    draggable={false}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isActive ? 'scale-105' : 'grayscale group-hover:grayscale-0'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[10px] font-mono font-bold uppercase tracking-wider text-gold border border-gold/40">
                    {item.tag}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="ba-active-dot"
                      className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_0_4px_rgba(212,175,55,0.25)]"
                    />
                  )}
                </div>

                <div className="p-4 space-y-1">
                  <h3 className="font-serif text-base font-bold text-neutral-950 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gold font-semibold">{item.treatmentName}</p>
                  <p className="text-[11px] text-neutral-500">Stylist: {item.stylist}</p>
                </div>

                {isActive && (
                  <motion.span
                    layoutId="ba-active-bar"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gold"
                  />
                )}
              </motion.button>
            );
          })}
        </HorizontalScroller>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-neutral-200 shadow-luxury-card p-2 bg-white"
          >
            <BeforeAfterSlider
              beforeImage={activeCase.beforeImage}
              afterImage={activeCase.afterImage}
              beforeLabel="PRIMA"
              afterLabel="DOPO IL TRATTAMENTO"
            />

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setFullscreenOpen(true)}
              aria-label="Ingrandisci a tutto schermo"
              className="absolute bottom-6 right-6 z-30 p-3 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-800 hover:text-gold transition-all shadow-md"
            >
              <Maximize2 className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div
            key={`info-${activeCase.id}`}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-pearl-100 border border-neutral-200 shadow-xs space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold font-mono font-bold">
                  Caso Studio: {activeCase.tag}
                </span>
                <h3 className="font-serif text-2xl font-bold text-neutral-900 mt-1">
                  {activeCase.title}
                </h3>
                <p className="text-xs text-gold font-bold mt-1">
                  Trattamento: {activeCase.treatmentName}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                {activeCase.description}
              </p>

              <div className="space-y-3 pt-3 border-t border-neutral-200 text-xs">
                {[
                  { Icon: Layers, label: 'Condizione di Partenza:', value: activeCase.details.baseCondition },
                  { Icon: Wand2, label: 'Tecnica Eseguita:', value: activeCase.details.technique },
                  { Icon: CheckCircle2, label: 'Prodotti Utilizzati:', value: activeCase.details.productsUsed },
                  { Icon: Clock, label: 'Tempo di Realizzazione:', value: activeCase.details.timeRequired },
                ].map(({ Icon, label, value }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.07 }}
                    className="flex items-start gap-2.5"
                  >
                    <Icon className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-neutral-900 block">{label}</strong>
                      <span className="text-neutral-600">{value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openBooking()}
                  className="w-full py-3.5 bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 font-bold text-xs uppercase tracking-widest transition-colors rounded-md shadow-xs flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Prenota Questo Risultato</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen inspector */}
      <AnimatePresence>
        {fullscreenOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-white p-4 rounded-3xl shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 text-neutral-900">
                <div>
                  <h4 className="font-serif text-xl font-bold">{activeCase.title}</h4>
                  <p className="text-xs text-gold font-semibold">{activeCase.treatmentName}</p>
                </div>
                <button
                  onClick={() => setFullscreenOpen(false)}
                  aria-label="Chiudi"
                  className="p-2 rounded-full bg-pearl-100 border border-neutral-200 text-neutral-700 hover:text-gold transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <BeforeAfterSlider
                beforeImage={activeCase.beforeImage}
                afterImage={activeCase.afterImage}
                className="max-h-[75vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
