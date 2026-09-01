import React from 'react';
import { motion } from 'framer-motion';
import { awardsData, awardPhotos } from '../data/awardsData';
import { Trophy, Award, ArrowLeft } from 'lucide-react';

/**
 * Sul sito attuale i 49 attestati stanno in una griglia tutta uguale.
 * Qui: intestazione fuori asse, schede sfalsate e muro a colonne CSS, cosi
 * verticali e orizzontali si incastrano senza allinearsi.
 */
export const AwardsPage: React.FC = () => (
  <section className="py-16 sm:py-20 bg-white/91 border-b border-neutral-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <a
        href="#awards"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-neutral-600 hover:text-gold transition-colors"
      >
        <ArrowLeft className="w-4 h-4 text-gold" />
        Torna alla home
      </a>

      {/* Intestazione fuori asse: testo a sinistra, citazione sfalsata in basso a destra */}
      <div className="mt-8 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pearl-100 border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] font-bold shadow-2xs">
            <Trophy className="w-3.5 h-3.5" />
            <span>Riconoscimenti Ufficiali</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl text-neutral-950 tracking-tight leading-[1.05]">
            Awards &amp;<br />
            <span className="italic font-light gold-gradient-text">Riconoscimenti</span>
          </h1>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <p className="text-sm sm:text-base text-neutral-700 font-light italic leading-relaxed border-l-2 border-gold pl-5 py-2">
            "La passione, il piacere e la professionalità mi è stata riconosciuta dalle più
            prestigiose organizzazioni di settore."
          </p>
          <span className="mt-3 block text-xs uppercase tracking-widest text-gold font-mono font-bold">
            {awardPhotos.length} attestati e premi
          </span>
        </div>
      </div>

      {/* Attestati veri: cornice dorata, passe-partout, chiodo e filo, appesi sfalsati */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-24 pt-10">
        {awardsData.map((award, idx) => {
          const tilt = ['-rotate-[1.1deg]', 'rotate-[0.9deg]', '-rotate-[0.6deg]'][idx % 3];
          const hang = ['', 'md:mt-14', 'md:mt-7'][idx % 3];

          return (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: -18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className={`relative ${hang}`}
            >
              {/* filo teso al chiodo */}
              <svg
                aria-hidden
                viewBox="0 0 200 40"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-x-8 -top-9 h-9 w-[calc(100%-4rem)]"
              >
                <path d="M0 38 L100 4 L200 38" fill="none" stroke="rgba(60,45,20,0.35)" strokeWidth="1.5" />
              </svg>
              {/* chiodo */}
              <span className="absolute left-1/2 -top-10 -translate-x-1/2 h-3 w-3 rounded-full bg-neutral-500 shadow-md ring-2 ring-white/60" />

              {/* cornice */}
              <div
                className={`${tilt} hover:rotate-0 transition-transform duration-500 p-2.5 rounded-[3px] shadow-[0_24px_45px_-16px_rgba(0,0,0,0.55)] bg-[linear-gradient(135deg,#8a6410_0%,#e8d59b_20%,#b8860b_45%,#f2e7c2_68%,#7d5a0d_100%)]`}
              >
                {/* battuta interna scura */}
                <div className="p-[3px] bg-neutral-900/75">
                  {/* passe-partout */}
                  <div className="bg-[#FBF8F0] px-4 py-6 sm:px-6 sm:py-8 shadow-[inset_0_2px_12px_rgba(0,0,0,0.10)]">
                    {/* carta dell'attestato, doppio filetto oro */}
                    <div className="bg-white border border-gold/45 outline outline-1 outline-offset-[4px] outline-gold/25 px-5 py-7 text-center space-y-3">
                      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-pearl-100 text-gold shadow-2xs">
                        <Award className="h-6 w-6" />
                      </span>

                      <span className="block text-[10px] uppercase tracking-[0.32em] text-gold font-bold">
                        Attestato di Merito
                      </span>

                      <h2 className="font-serif text-lg sm:text-xl font-bold text-neutral-950 leading-snug">
                        {award.title}
                      </h2>

                      <span className="mx-auto block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />

                      <span className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold">
                        {award.organization}
                      </span>

                      <p className="text-xs text-neutral-600 font-light leading-relaxed">
                        {award.description}
                      </p>

                      <div className="flex items-center justify-center gap-2 pt-1">
                        <span className="text-xs font-serif italic text-neutral-700">{award.year}</span>
                        <span className="h-1 w-1 rounded-full bg-gold" />
                        <span className="text-[9px] uppercase tracking-wider text-gold font-bold">
                          {award.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Muro a colonne: gli attestati sono misti verticali/orizzontali e si sfalsano da soli */}
      <div className="columns-2 md:columns-3 xl:columns-4 gap-4 sm:gap-5">
        {awardPhotos.map((photo, i) => (
          <motion.figure
            key={photo.url}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.05 }}
            className="mb-4 sm:mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-neutral-200 bg-pearl-200 shadow-luxury-white"
          >
            <img
              src={photo.url}
              width={photo.w}
              height={photo.h}
              alt={`Attestato Tony Musto ${i + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full h-auto transition-transform duration-700 hover:scale-[1.03]"
            />
          </motion.figure>
        ))}
      </div>

    </div>
  </section>
);
