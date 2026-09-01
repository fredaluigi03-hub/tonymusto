import React from 'react';
import { Reveal } from '../common/Reveal';
import { InfiniteSlider } from '../common/InfiniteSlider';
import { Camera, ArrowUpRight, ArrowRight } from 'lucide-react';
import { shots, Shot as ShotType } from '../../data/photosData';

const Shot: React.FC<{ shot: ShotType }> = ({ shot }) => (
  <figure className="group relative h-52 sm:h-64 lg:h-72 aspect-[4/5] shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-pearl-200 shadow-luxury-white">
    <img
      src={shot.url}
      alt={shot.caption}
      loading="lazy"
      decoding="async"
      draggable={false}
      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
    />
    <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-neutral-950/85 via-neutral-950/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <span className="text-[10px] font-mono font-bold uppercase text-gold-light">{shot.tag}</span>
      <p className="font-serif text-sm leading-snug text-white">{shot.caption}</p>
    </figcaption>
  </figure>
);

export const GallerySection: React.FC = () => {
  // Two ribbons running opposite ways read as a wall, not as a list.
  const half = Math.ceil(shots.length / 2);
  const rows = [shots.slice(0, half), shots.slice(half)];

  return (
    <section id="photos" className="py-24 bg-white/91 relative overflow-hidden border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pearl-100 border border-gold/30 text-gold text-xs uppercase tracking-[0.2em] font-bold mb-3 shadow-2xs">
              <Camera className="w-3.5 h-3.5" />
              <span>Photos &amp; Shooting</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
              Un po&apos; di noi...
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 font-light max-w-xl">
              Alcuni dei nostri lavori uniti alle nostre esperienze quotidiane in salone e durante i
              set fotografici.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <a
              href="#/foto"
              className="px-5 py-2.5 rounded-md bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 text-xs uppercase tracking-wider font-bold transition-colors flex items-center gap-2 shadow-xs"
            >
              <span>Vedi tutte le foto ({shots.length})</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/tonymustoparrucchieri/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-md border border-neutral-300 hover:border-gold hover:text-gold text-neutral-800 text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 bg-white shadow-2xs"
            >
              <span>@tonymustoparrucchieri</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </Reveal>
      </div>

      {/* Full-bleed ribbons, masked at the edges so nothing pops in or out */}
      <div className="relative z-10 space-y-5">
        {rows.map((row, r) => (
          <InfiniteSlider
            key={r}
            gap={20}
            duration={r === 0 ? 38 : 46}
            durationOnHover={200}
            reverse={r === 1}
            className="[mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
          >
            {row.map(shot => (
              <Shot key={shot.url} shot={shot} />
            ))}
          </InfiniteSlider>
        ))}
      </div>

      <p className="relative z-10 mt-8 text-center text-[11px] uppercase tracking-widest text-neutral-400 font-semibold">
        Passa il mouse per rallentare il nastro
      </p>
    </section>
  );
};
