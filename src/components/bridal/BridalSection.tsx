import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';
import { Reveal, useParallax } from '../common/Reveal';
import { Calendar, Crown, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

/** Real bride photos from tonymusto.it/my-wedding-page/ */
const bridePhotos = [
  {
    src: 'https://tonymusto.it/wp-content/uploads/2024/03/IMG_1243-2-768x1024.jpeg',
    caption: 'Raccolto morbido con velo — cerimonia in location',
  },
  {
    src: 'https://tonymusto.it/wp-content/uploads/2024/03/IMG_2596-1-scaled.jpeg',
    caption: 'Onde luminose e riga laterale — stile romantico',
  },
  {
    src: 'https://tonymusto.it/wp-content/uploads/2024/03/IMG_2736-1-scaled.jpeg',
    caption: 'Chignon basso scolpito — eleganza contemporanea',
  },
  {
    src: 'https://tonymusto.it/wp-content/uploads/2024/03/IMG_7563-2-scaled.jpg',
    caption: 'Acconciatura sposa con accessorio gioiello',
  },
];

const bridalSteps = [
  {
    step: '01',
    title: 'Consulenza & Moodboard Wedding',
    desc: 'Analisi approfondita dell’abito nuziale, del velo, del tema dell’evento e delle caratteristiche del viso per definire l’architettura perfetta.',
  },
  {
    step: '02',
    title: 'Prova Acconciatura in Salone',
    desc: 'Sessioni dedicate in salone a Montemiletto per testare volumi, tenuta, accessori e armonia con il trucco.',
  },
  {
    step: '03',
    title: 'Prova Make-up & Percorso Pre-Nozze',
    desc: 'Trucco studiato su contouring e incarnato, con trattamenti idratanti nelle settimane precedenti per una chioma luminosa.',
  },
  {
    step: '04',
    title: 'The Big Day! (Salone o Location)',
    desc: 'Presenza di Tony Musto per la realizzazione dell’acconciatura sposa, fissaggio velo e assistenza pre-cerimonia.',
  },
];

export const BridalSection: React.FC = () => {
  const { openBooking } = useBooking();
  const [photoIndex, setPhotoIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const bgY = useParallax(sectionRef, 70);

  const go = (dir: 1 | -1) =>
    setPhotoIndex(i => (i + dir + bridePhotos.length) % bridePhotos.length);

  const photo = bridePhotos[photoIndex];

  return (
    <section
      id="spose"
      ref={sectionRef}
      className="py-24 relative overflow-hidden border-b border-neutral-200 isolate"
    >
      {/* Blurred resort backdrop: pool + lawn, drifting on scroll */}
      <motion.div style={{ y: bgY }} className="absolute -inset-y-24 inset-x-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1920&q=70"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover blur-[7px] scale-110"
        />
      </motion.div>
      {/* Wash so the white cards stay readable over the photo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pearl-100/92 via-white/86 to-pearl-100/94" />
      <div className="absolute inset-0 -z-10 bg-gold/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] font-bold shadow-2xs">
            <Crown className="w-3.5 h-3.5" />
            <span>My Wedding Page</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
            Acconciature Sposa &amp; Make-up for Wedding
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed max-w-2xl mx-auto">
            «Semplice e sofisticato sarà lo stile per il tuo giorno più importante.» Oltre 25 anni di
            esperienza nella creazione di acconciature sposa sartoriali, in salone e in location.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Real bride gallery */}
          <Reveal direction="right" className="lg:col-span-6">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/70 shadow-luxury-card relative bg-white/80 backdrop-blur-sm group p-2 sm:p-2.5">
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-pearl-200">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={photo.src}
                    src={photo.src}
                    alt={photo.caption}
                    draggable={false}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                {/* Gallery arrows */}
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Foto precedente"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-3 sm:p-2.5 rounded-full bg-white/90 backdrop-blur-md border border-white text-neutral-800 hover:text-gold transition-opacity shadow-md opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Foto successiva"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 sm:p-2.5 rounded-full bg-white/90 backdrop-blur-md border border-white text-neutral-800 hover:text-gold transition-opacity shadow-md opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Caption card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-5 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-md space-y-1">
                  <span className="text-[11px] uppercase font-mono tracking-widest text-gold font-bold">
                    Spose Tony Musto · {photoIndex + 1}/{bridePhotos.length}
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={photo.caption}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="font-serif text-base sm:text-lg font-bold text-neutral-950"
                    >
                      {photo.caption}
                    </motion.h3>
                  </AnimatePresence>
                  <p className="text-xs text-neutral-600">
                    Disponibile in salone a Montemiletto o in location
                  </p>

                  <div className="flex items-center gap-1.5 pt-2">
                    {bridePhotos.map((p, i) => (
                      <button
                        key={p.src}
                        type="button"
                        onClick={() => setPhotoIndex(i)}
                        aria-label={`Vai alla foto ${i + 1}`}
                        className="py-2.5 -my-2.5 px-2.5 -mx-1 flex items-center group/dot"
                      >
                        <span
                          className={`block h-1.5 rounded-full transition-all duration-300 ${
                            i === photoIndex
                              ? 'w-7 bg-gold'
                              : 'w-1.5 bg-neutral-300 group-hover/dot:bg-gold/50'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Steps */}
          <Reveal direction="left" className="lg:col-span-6 space-y-5">
            <h3 className="font-serif text-2xl font-bold text-neutral-900 tracking-wide pb-2 border-b border-neutral-300/70 flex items-center gap-2">
              <Heart className="w-5 h-5 text-gold" />
              Il Percorso Sposa
            </h3>

            <div className="space-y-3.5">
              {bridalSteps.map((s, idx) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="p-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-neutral-200 hover:border-gold/60 transition-colors flex items-start gap-4 shadow-2xs"
                >
                  <span className="font-mono text-2xl font-bold text-gold shrink-0">{s.step}</span>
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
                <Calendar className="w-4 h-4" />
                <span>Richiedi Informazioni per il tuo Matrimonio</span>
              </motion.button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
