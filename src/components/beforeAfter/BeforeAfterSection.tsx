import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { beforeAfterData } from '../../data/beforeAfterData';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { useBooking } from '../../context/BookingContext';
import { 
  Sparkles, 
  Maximize2, 
  X, 
  Clock, 
  CheckCircle2, 
  Wand2, 
  Calendar,
  Layers
} from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [activeCaseId, setActiveCaseId] = useState(beforeAfterData[0].id);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const { openBooking } = useBooking();

  const activeCase = beforeAfterData.find(c => c.id === activeCaseId) || beforeAfterData[0];

  return (
    <section id="prima-dopo" className="py-24 bg-white relative overflow-hidden border-b border-neutral-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pearl-100 border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>I Nostri Risultati</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
            L'Arte del Prima & Dopo
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto">
            Guarda i risultati reali eseguiti nel salone di Tony Musto: sfumature armocromatiche, definizione ricci e tagli sartoriali.
          </p>
        </motion.div>

        {/* Case Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {beforeAfterData.map((item) => {
            const isActive = item.id === activeCaseId;
            return (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCaseId(item.id)}
                className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 shadow-2xs ${
                  isActive
                    ? 'bg-neutral-950 text-white shadow-md'
                    : 'bg-pearl-100 text-neutral-700 hover:text-gold border border-neutral-200 hover:border-gold/50'
                }`}
              >
                <span>{item.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-white text-gold border border-neutral-200'}`}>
                  {item.tag}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Draggable Slider */}
          <motion.div 
            key={activeCase.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
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

          {/* Right: Technical Breakdown Card */}
          <motion.div 
            key={`info-${activeCase.id}`}
            initial={{ opacity: 0, x: 20 }}
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

              {/* Technical Specifications */}
              <div className="space-y-3 pt-3 border-t border-neutral-200 text-xs">
                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 block">Condizione di Partenza:</strong>
                    <span className="text-neutral-600">{activeCase.details.baseCondition}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Wand2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 block">Tecnica Eseguita:</strong>
                    <span className="text-neutral-600">{activeCase.details.technique}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 block">Prodotti Utilizzati:</strong>
                    <span className="text-neutral-600">{activeCase.details.productsUsed}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-neutral-900 block">Tempo di Realizzazione:</strong>
                    <span className="text-neutral-900 font-mono font-bold">{activeCase.details.timeRequired}</span>
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-4 border-t border-neutral-200">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openBooking()}
                  className="w-full py-3.5 bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 font-bold text-xs uppercase tracking-widest transition-colors rounded-md shadow-xs flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-gold group-hover:text-neutral-950" />
                  <span>Prenota Questo Risultato</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Inspector Modal */}
      {fullscreenOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          <div className="relative w-full max-w-5xl bg-white p-4 rounded-3xl shadow-2xl">
            <div className="flex items-center justify-between pb-4 text-neutral-900">
              <div>
                <h4 className="font-serif text-xl font-bold">{activeCase.title}</h4>
                <p className="text-xs text-gold font-semibold">{activeCase.treatmentName}</p>
              </div>
              <button
                onClick={() => setFullscreenOpen(false)}
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
          </div>
        </div>
      )}
    </section>
  );
};
