import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useServices } from '../../i18n/services';
import { useStrings } from '../../i18n/strings';
import { railStrings } from '../../i18n/rail';
import { ServiceModal } from './ServiceModal';
import { ROUTES } from '../../routes';
import type { ServiceItem } from '../../types';

/**
 * Pinned horizontal rail: the section is as tall as the track is wide, and the
 * vertical scroll through it slides the cards sideways. With reduced motion
 * the track is a plain horizontal scroller instead.
 */
export const ServicesRail: React.FC = () => {
  const services = useServices();
  const t = useStrings(railStrings);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);
  const travelPx = useMotionValue(0);
  const [selected, setSelected] = useState<ServiceItem | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const distance = Math.max(0, track.scrollWidth - window.innerWidth);
      setTravel(distance);
      travelPx.set(distance);
    };
    const observer = new ResizeObserver(update);
    observer.observe(track);
    window.addEventListener('resize', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [travelPx]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const x = useTransform(() => -scrollYProgress.get() * travelPx.get());
  const pinned = !reduceMotion;

  return (
    <section
      ref={sectionRef}
      id="servizi"
      className="relative bg-neutral-950 text-white"
      style={pinned ? { height: `calc(100svh + ${travel}px)` } : undefined}
    >
      <div className={pinned ? 'sticky top-0 flex h-svh flex-col justify-center overflow-hidden' : 'py-24'}>
        <div className="mx-auto mb-10 flex w-full max-w-7xl items-end justify-between gap-6 px-6 lg:px-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold-bright">{t.kicker}</p>
            <h2 className="mt-3 text-white font-serif text-5xl font-normal leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">{t.title}</h2>
          </div>
          <div className="hidden text-right sm:block">
            <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400">{t.hint}</span>
            {pinned && (
              <div className="ml-auto mt-3 h-px w-40 bg-white/15">
                <motion.div
                  className="h-full origin-left bg-gold-bright"
                  style={{ scaleX: scrollYProgress }}
                />
              </div>
            )}
          </div>
        </div>

        <div className={pinned ? '' : 'overflow-x-auto'}>
          <motion.div
            ref={trackRef}
            style={pinned ? { x } : undefined}
            className="flex w-max gap-5 px-6 lg:gap-8 lg:px-8"
          >
            {services.map((service, i) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelected(service)}
                className="group flex w-[78vw] shrink-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 text-left transition-colors duration-300 hover:border-gold/60 sm:w-[420px] lg:w-[520px] lg:flex-row"
              >
                <div className="relative h-56 overflow-hidden sm:h-64 lg:h-auto lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-6 p-6 lg:min-h-[340px] lg:p-7">
                  <div className="space-y-3">
                    <span className="font-mono text-[11px] text-neutral-400">
                      {String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-2xl leading-snug text-white">{service.name}</h3>
                    <p className="text-sm italic text-gold-light">{service.subtitle}</p>
                    <p className="line-clamp-4 text-sm font-light leading-relaxed text-neutral-300">
                      {service.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gold-bright">
                    {t.details}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </button>
            ))}
            <a
              href={ROUTES.boutique}
              className="flex w-[60vw] shrink-0 items-center justify-center rounded-2xl border border-white/15 font-serif text-2xl transition-colors hover:border-gold/60 hover:text-gold-bright sm:w-[280px]"
            >
              {t.all} →
            </a>
          </motion.div>
        </div>
      </div>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
