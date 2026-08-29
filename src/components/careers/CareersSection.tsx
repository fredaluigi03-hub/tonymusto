import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useCareers, careerRoles } from '../../context/CareersContext';
import { Reveal, useParallax } from '../common/Reveal';
import { HorizontalScroller } from '../common/HorizontalScroller';
import { Sparkles, ArrowRight, GraduationCap, HeartHandshake, Users, Check } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Le persone prima di tutto',
    desc: 'Le persone rappresentano l’identità di questo brand: cerchiamo talento e ambizione, non solo un curriculum.',
  },
  {
    icon: GraduationCap,
    title: 'Formazione continua',
    desc: 'Corsi interni, affiancamento quotidiano e aggiornamento costante sulle tecniche di taglio e colore.',
  },
  {
    icon: HeartHandshake,
    title: 'Ambiente accogliente',
    desc: 'Un salone dove ogni cliente merita il meglio — e dove lo stesso vale per chi ci lavora.',
  },
];

export const CareersSection: React.FC = () => {
  const { openCareers } = useCareers();
  const sectionRef = useRef<HTMLElement>(null);
  const bgY = useParallax(sectionRef, 60);

  return (
    <section
      id="lavora-con-noi"
      ref={sectionRef}
      className="py-24 relative overflow-hidden border-b border-neutral-200 isolate [--scroller-fade:#FAF9F6]"
    >
      {/* Salon backdrop, softened */}
      <motion.div style={{ y: bgY }} className="absolute -inset-y-20 inset-x-0 -z-10">
        <img
          src="https://tonymusto.it/wp-content/uploads/2022/05/IMG_8124-1-1024x1024.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover blur-[6px] scale-110"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pearl-100/95 via-white/90 to-pearl-100/95" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Our Team Now</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
            Lavora con Noi
          </h2>
          <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed max-w-2xl mx-auto">
            Nel nostro salone la tua esperienza è la nostra priorità. Cerchiamo risorse ambiziose e di
            talento: <strong className="font-semibold text-neutral-900">l&apos;esperienza non è richiesta</strong>,
            la passione sì.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openCareers()}
              className="px-8 py-4 bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 font-bold text-xs uppercase tracking-widest rounded-md shadow-md transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Candidati Ora</span>
            </motion.button>
            <a
              href="#contatti"
              className="px-6 py-4 rounded-md border border-neutral-300 bg-white/90 hover:bg-white text-neutral-800 hover:text-gold text-xs uppercase font-bold tracking-wider transition-colors flex items-center gap-2"
            >
              <span>Parlane con noi</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </a>
          </div>
        </Reveal>

        {/* Why us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-50px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-neutral-200 hover:border-gold/50 shadow-luxury-white hover:shadow-luxury-card transition-colors space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-pearl-100 border border-gold/40 flex items-center justify-center text-gold">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-neutral-950">{v.title}</h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <Reveal className="mb-6 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950">
            Posizioni Aperte
          </h3>
          <p className="text-xs text-neutral-500 mt-1 uppercase tracking-widest font-semibold">
            Clicca una posizione per candidarti in un minuto
          </p>
        </Reveal>
      </div>

      {/* Open roles carousel */}
      <div className="relative z-10 w-full">
        <HorizontalScroller
          ariaLabel="Posizioni aperte"
          hint="Scorri tutte le posizioni aperte"
          className="px-[max(1rem,calc((100vw-80rem)/2+1rem))] sm:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
          controlsClassName="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {careerRoles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-40px' }}
              transition={{ duration: 0.55, delay: Math.min(index, 4) * 0.07 }}
              whileHover={{ y: -6 }}
              className="group snap-start shrink-0 w-[80vw] sm:w-[340px] rounded-3xl bg-white border border-neutral-200 hover:border-gold/60 shadow-luxury-white hover:shadow-luxury-card transition-colors p-6 flex flex-col justify-between gap-5"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <span className="px-2.5 py-1 rounded-full bg-pearl-100 border border-gold/30 text-[10px] font-mono uppercase tracking-wider text-gold font-bold">
                    {role.level}
                  </span>
                  <span className="font-mono text-3xl font-bold text-neutral-900/10 group-hover:text-gold/25 transition-colors leading-none">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <h4 className="font-serif text-xl font-bold text-neutral-950 group-hover:text-gold transition-colors">
                    {role.title}
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-semibold mt-0.5">{role.type}</p>
                </div>

                <p className="text-xs text-neutral-600 font-light leading-relaxed">{role.description}</p>

                <ul className="space-y-1.5 pt-2 border-t border-neutral-100">
                  {role.perks.map(p => (
                    <li key={p} className="flex items-center gap-2 text-[11px] text-neutral-600">
                      <span className="w-3.5 h-3.5 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0">
                        <Check className="w-2 h-2 stroke-[4]" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openCareers(role.id)}
                className="w-full py-3.5 bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 font-bold text-xs uppercase tracking-widest rounded-md shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Candidati</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </motion.div>
          ))}
        </HorizontalScroller>
      </div>
    </section>
  );
};
