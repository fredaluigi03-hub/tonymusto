import React from 'react';
import { motion } from 'framer-motion';
import { shots } from '../data/photosData';
import { Camera, ArrowLeft, ArrowUpRight } from 'lucide-react';

/**
 * Muro asimmetrico: colonne CSS, quindi ogni scatto tiene la sua altezza e
 * le colonne si sfalsano da sole. Niente griglia regolare come sul sito attuale.
 */
export const PhotosPage: React.FC = () => (
  <section className="py-16 sm:py-20 bg-white/91 border-b border-neutral-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <a
        href="#photos"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-neutral-600 hover:text-gold transition-colors"
      >
        <ArrowLeft className="w-4 h-4 text-gold" />
        Torna alla home
      </a>

      <div className="mt-8 mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 max-w-5xl">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pearl-100 border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] font-bold shadow-2xs">
            <Camera className="w-3.5 h-3.5" />
            <span>Photos &amp; Shooting</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
            Tutte le nostre foto
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-2xl">
            {shots.length} scatti fra lavori in salone, set fotografici e acconciature sposa.
          </p>
        </div>

        <a
          href="https://www.instagram.com/tonymustoparrucchieri/"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-5 py-2.5 rounded-md border border-neutral-300 hover:border-gold hover:text-gold text-neutral-800 text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 bg-white shadow-2xs self-start"
        >
          <span>@tonymustoparrucchieri</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      <div className="columns-2 md:columns-3 xl:columns-4 gap-4 sm:gap-5 [column-fill:balance]">
        {shots.map((shot, i) => (
          <motion.figure
            key={shot.url}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            className="group relative mb-4 sm:mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-neutral-200 bg-pearl-200 shadow-luxury-white"
          >
            <img
              src={shot.url}
              alt={shot.caption}
              loading="lazy"
              decoding="async"
              className="w-full transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-neutral-950/85 via-neutral-950/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-[10px] font-mono font-bold uppercase text-gold-light">{shot.tag}</span>
              <p className="font-serif text-sm leading-snug text-white">{shot.caption}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>

    </div>
  </section>
);
