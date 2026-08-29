import React from 'react';
import { motion } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';
import { 
  Sparkles, 
  Calendar, 
  Crown, 
  ArrowRight
} from 'lucide-react';

export const BridalSection: React.FC = () => {
  const { openBooking } = useBooking();

  const bridalSteps = [
    {
      step: '01',
      title: 'Consulenza & Moodboard Wedding',
      desc: 'Analisi approfondita dell’abito nuziale, del velo, del tema dell’evento e delle caratteristiche del viso per definire l’architettura perfetta.'
    },
    {
      step: '02',
      title: 'Prove Stilistiche in Salone',
      desc: 'Sessioni dedicate in salone a Montemiletto per testare volumi, tenuta, accessori e armonia con il trucco.'
    },
    {
      step: '03',
      title: 'Percorso Rigenerante Pre-Nozze',
      desc: 'Trattamenti idratanti e nutrienti nelle settimane precedenti per donare alla chioma una lucentezza incomparabile.'
    },
    {
      step: '04',
      title: 'Il Giorno del Sì (Salone o Location)',
      desc: 'Presenza di Tony Musto per la realizzazione dell’acconciatura sposa, fissaggio velo e assistenza pre-cerimonia.'
    }
  ];

  return (
    <section id="spose" className="py-24 bg-pearl-100 relative overflow-hidden border-b border-neutral-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] font-bold shadow-2xs">
            <Crown className="w-3.5 h-3.5" />
            <span>My Wedding Page</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
            Acconciature Sposa & Make-up for Wedding
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto">
            Oltre 25 anni di esperienza nella creazione di acconciature sposa sartoriali in salone e in location.
          </p>
        </motion.div>

        {/* Big Editorial Bridal Banner with Multi-Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Real Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-200 shadow-luxury-card relative bg-white group p-2.5">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img
                  src="https://tonymusto.it/wp-content/uploads/2022/06/752F748E-514B-40F1-B3F0-7C80E0CAE228-scaled.jpg"
                  alt="Sposa Tony Musto Wedding Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute bottom-4 left-4 right-4 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-md space-y-1">
                  <span className="text-[11px] uppercase font-mono tracking-widest text-gold font-bold">Servizio Esclusivo</span>
                  <h3 className="font-serif text-lg font-bold text-neutral-950">Consulenza Bridal Personalizzata</h3>
                  <p className="text-xs text-neutral-600">Disponibile in salone a Montemiletto o in location</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Steps List */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-5"
          >
            <h3 className="font-serif text-2xl font-bold text-neutral-900 tracking-wide pb-2 border-b border-neutral-200">
              Il Percorso Sposa
            </h3>

            <div className="space-y-3.5">
              {bridalSteps.map((s, idx) => (
                <motion.div 
                  key={s.step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="p-5 rounded-2xl bg-white border border-neutral-200 hover:border-gold/50 transition-all flex items-start gap-4 shadow-2xs"
                >
                  <span className="font-serif text-2xl font-bold text-gold font-mono flex-shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h4 className="font-serif text-base font-bold text-neutral-950">{s.title}</h4>
                    <p className="text-xs text-neutral-600 font-light mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openBooking('bridal-atelier-experience')}
                className="w-full sm:w-auto px-8 py-4 bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 font-bold text-xs uppercase tracking-widest transition-colors rounded-md shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-gold group-hover:text-neutral-950" />
                <span>Richiedi Informazioni per il tuo Matrimonio</span>
              </motion.button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
