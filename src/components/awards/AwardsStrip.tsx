import React from 'react';
import { InfiniteSlider } from '../common/InfiniteSlider';
import { awardPhotos } from '../../data/awardsData';
import { Trophy, ArrowRight } from 'lucide-react';

/** Striscia bassa: un assaggio degli attestati, il resto sta su #/premi.
 *  Solo i primi scatti: la home non deve scaricare tutti e 49. */
const stripPhotos = awardPhotos.slice(0, 16);
export const AwardsStrip: React.FC = () => (
  <section id="awards" className="py-10 bg-pearl-100/89 relative overflow-hidden border-b border-neutral-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-3">
        <span className="w-9 h-9 rounded-full bg-white border border-gold/40 flex items-center justify-center text-gold shadow-2xs shrink-0">
          <Trophy className="w-4 h-4" />
        </span>
        <div>
          <span className="block text-[11px] uppercase tracking-[0.2em] text-gold font-bold">
            Awards &amp; Riconoscimenti
          </span>
          <p className="text-sm text-neutral-700 font-light">
            {awardPhotos.length} attestati dalle organizzazioni di settore.
          </p>
        </div>
      </div>

      <a
        href="#/premi"
        className="shrink-0 self-start sm:self-auto px-5 py-2.5 rounded-md border border-neutral-300 bg-white hover:border-gold hover:text-gold text-neutral-800 text-xs uppercase tracking-wider font-bold transition-colors shadow-2xs flex items-center gap-2"
      >
        <span>Vedi tutti i riconoscimenti</span>
        <ArrowRight className="w-4 h-4 text-gold" />
      </a>
    </div>

    <InfiniteSlider
      gap={16}
      duration={52}
      durationOnHover={220}
      className="relative z-10 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
    >
      {stripPhotos.map(photo => (
        <a
          key={photo.url}
          href="#/premi"
          className="block h-24 sm:h-28 shrink-0 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-2xs hover:border-gold/60 transition-colors"
        >
          <img
            src={photo.url}
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            draggable={false}
            className="h-full w-auto object-cover"
          />
        </a>
      ))}
    </InfiniteSlider>
  </section>
);
