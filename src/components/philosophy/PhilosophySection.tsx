import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, useParallax, useTilt } from '../common/Reveal';
import { useBooking } from '../../context/BookingContext';
import {
  Scissors,
  Palette,
  Sparkles,
  Award,
  ArrowRight,
  Calendar,
  Plus,
  Minus,
} from 'lucide-react';

interface Pillar {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  points: string[];
  stat: { value: string; label: string };
}

const pillars: Pillar[] = [
  {
    id: 'haircut',
    icon: Scissors,
    title: 'HAIRCUT',
    subtitle: 'Arte Sartoriale del Taglio',
    description:
      "Il taglio viene definito come un'arte sartoriale, grazie alla quale il parrucchiere riesce a trovare la forma adatta per il vostro viso e i vostri lineamenti.",
    image: 'https://tonymusto.it/wp-content/uploads/2022/06/IMG_6535-1-768x768.jpg',
    points: [
      'Studio della morfologia del viso e del collo',
      'Linee costruite sulla caduta naturale del capello',
      'Taglio riproducibile anche a casa, senza fatica',
    ],
    stat: { value: '25+', label: 'Anni di forbici in mano' },
  },
  {
    id: 'colour',
    icon: Palette,
    title: 'COLOUR',
    subtitle: 'Tecnica & Armocromia',
    description:
      "Il colore mostra le tecniche del parrucchiere e la sua creatività, grazie alle quale esprime il suo giudizio riguardante l'armocromia del cliente.",
    image: 'https://tonymusto.it/wp-content/uploads/2022/06/IMG_8897-768x768.jpeg',
    points: [
      'Analisi del sottotono di pelle, occhi e capelli',
      'Schiariture progressive che rispettano la fibra',
      'Riflessi costruiti per crescere in modo naturale',
    ],
    stat: { value: '100%', label: 'Formule professionali' },
  },
  {
    id: 'treatments',
    icon: Sparkles,
    title: 'TREATMENTS',
    subtitle: 'Ripristino & Luminosità',
    description:
      'I trattamenti sono dei processi che hanno la funzione di ripristinare il capello, rendendolo più forte e più lucente.',
    image: 'https://tonymusto.it/wp-content/uploads/2022/06/IMG_6247-768x768.jpeg',
    points: [
      'Diagnosi del capello prima di ogni rituale',
      'Linee botaniche BEE IT e Bio Organic Curl Up',
      'Protocollo di mantenimento personalizzato',
    ],
    stat: { value: '4', label: 'Linee botaniche in salone' },
  },
];

const PillarCard: React.FC<{
  pillar: Pillar;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ pillar, index, isOpen, onToggle }) => {
  const Icon = pillar.icon;
  const tilt = useTilt(9);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      viewport={{ once: false, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY, transformStyle: 'preserve-3d' }}
      className={`group relative [perspective:1200px] rounded-3xl overflow-hidden border bg-white transition-colors duration-300 ${
        isOpen
          ? 'border-gold shadow-luxury-card'
          : 'border-neutral-200 shadow-luxury-white hover:border-gold/50'
      }`}
    >
      <div className="relative h-48 overflow-hidden bg-pearl-200">
        <img
          src={pillar.image}
          alt={pillar.title}
          draggable={false}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-[900ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/25 to-transparent" />

        <motion.div
          style={{ z: 60 }}
          animate={{ rotate: isOpen ? 0 : -45, scale: isOpen ? 1.08 : 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="absolute bottom-4 left-6 w-14 h-14 rounded-2xl bg-white border border-gold/50 flex items-center justify-center text-gold shadow-md"
        >
          <Icon className="w-7 h-7" />
        </motion.div>

        <span className="absolute top-4 right-5 font-mono text-4xl font-bold text-neutral-900/10 group-hover:text-gold/25 transition-colors">
          0{index + 1}
        </span>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <span className="text-[11px] font-mono font-bold tracking-widest text-gold uppercase">
            {pillar.subtitle}
          </span>
          <h3 className="font-serif text-2xl font-bold text-neutral-900 mt-1 tracking-wide">
            {pillar.title}
          </h3>
        </div>

        <p className="text-sm text-neutral-600 leading-relaxed font-light">{pillar.description}</p>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between gap-3 pt-4 border-t border-neutral-200/70 text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-gold transition-colors"
        >
          <span>{isOpen ? 'Chiudi dettagli' : 'Come lavoriamo'}</span>
          <span className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-gold">
            {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <ul className="space-y-2.5 pt-1 pb-3">
                {pillar.points.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i }}
                    className="flex items-start gap-2.5 text-xs text-neutral-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    <span>{p}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-baseline gap-2 p-3.5 rounded-2xl bg-pearl-100 border border-gold/30">
                <span className="font-serif text-2xl font-bold text-gold">{pillar.stat.value}</span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-600 font-semibold">
                  {pillar.stat.label}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
};

export const PhilosophySection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('haircut');
  const bannerRef = useRef<HTMLDivElement>(null);
  const parallaxY = useParallax(bannerRef, 40);
  const { openBooking } = useBooking();

  return (
    <section id="filosofia" className="py-24 bg-white relative overflow-hidden border-b border-neutral-200">
      {/* Decorative warm accents that drift on scroll */}
      <motion.div
        style={{ y: parallaxY }}
        className="absolute top-1/3 -left-20 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: parallaxY }}
        className="absolute bottom-10 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pearl-100 border border-gold/30 text-gold text-xs uppercase tracking-[0.2em] font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>I Nostri Valori Fondamentali</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
            Everything you need to know about Musto hair stylist
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto">
            Abbiamo provato a riassumere più di 25 anni nel settore dei capelli, mostrando quelli che
            sono stati i nostri migliori lavori e le nostre esperienze per scoprire la versione più
            adatta a te.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-16 items-start">
          {pillars.map((pillar, index) => (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
              index={index}
              isOpen={openId === pillar.id}
              onToggle={() => setOpenId(openId === pillar.id ? null : pillar.id)}
            />
          ))}
        </div>

        {/* Salon banner with scroll parallax on the photo */}
        <Reveal direction="scale">
          <div
            ref={bannerRef}
            className="rounded-3xl overflow-hidden border border-neutral-200 shadow-md bg-pearl-100 p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-[16/10] relative">
              <motion.img
                style={{ y: parallaxY }}
                src="https://tonymusto.it/wp-content/uploads/2022/06/IMG_6247-scaled.jpeg"
                alt="Atelier Tony Musto Montemiletto"
                className="w-full h-[125%] object-cover -mt-[8%]"
              />
            </div>
            <div className="lg:col-span-6 space-y-4 text-left p-2 sm:p-4">
              <span className="text-xs uppercase font-mono tracking-widest text-gold font-bold">
                Atelier Montemiletto
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
                Un ambiente raffinato, curato e sempre aggiornato
              </h3>
              <p className="text-sm text-neutral-600 font-light leading-relaxed">
                Nel nostro salone di Montemiletto ogni dettaglio è studiato per offrirti tranquillità,
                accoglienza e un risultato stilistico impeccabile. Vieni a trovarci per una consulenza
                personalizzata.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => openBooking()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-neutral-900 hover:bg-gold text-white hover:text-neutral-950 text-xs uppercase font-bold tracking-wider transition-colors shadow-xs"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Prenota una Consulenza</span>
                </motion.button>
                <a
                  href="#servizi"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-neutral-300 bg-white hover:bg-pearl-100 text-neutral-800 text-xs uppercase font-bold tracking-wider transition-colors"
                >
                  <span>Scopri i Servizi</span>
                  <ArrowRight className="w-4 h-4 text-gold" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
