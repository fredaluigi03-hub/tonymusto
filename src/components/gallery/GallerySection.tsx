import React from 'react';
import { Reveal } from '../common/Reveal';
import { InfiniteSlider } from '../common/InfiniteSlider';
import { Camera, ArrowUpRight } from 'lucide-react';

interface Shot {
  url: string;
  caption: string;
  tag: string;
}

const shots: Shot[] = [
  {
    url: 'https://tonymusto.it/wp-content/uploads/2022/06/IMG_6535-1-768x768.jpg',
    caption: 'Taglio Sartoriale Morfologico',
    tag: '#TonyMustoHair',
  },
  {
    url: 'https://tonymusto.it/wp-content/uploads/2024/03/IMG_1243-2-768x1024.jpeg',
    caption: 'Raccolto morbido con velo',
    tag: '#BridalExcellence',
  },
  {
    url: 'https://tonymusto.it/wp-content/uploads/2022/06/1037aaf5-d290-4ea3-b26f-13d8e64f5b86-1-768x768.jpg',
    caption: 'Definizione Bio Organic Curl Up',
    tag: '#CurlySpecialist',
  },
  {
    url: 'https://tonymusto.it/wp-content/uploads/2024/03/IMG_2596-1-scaled.jpeg',
    caption: 'Onde luminose, riga laterale',
    tag: '#WeddingHair',
  },
  {
    url: 'https://tonymusto.it/wp-content/uploads/2022/06/IMG_8897-768x768.jpeg',
    caption: 'Color Couture & Armocromia',
    tag: '#ColorCouture',
  },
  {
    url: 'https://tonymusto.it/wp-content/uploads/2024/03/IMG_2054.jpeg',
    caption: 'Styling da set fotografico',
    tag: '#Shooting',
  },
  {
    url: 'https://tonymusto.it/wp-content/uploads/2022/06/IMG_6247-768x768.jpeg',
    caption: 'Hair Spa Sensoriale BEE IT',
    tag: '#SaveTheBees',
  },
  {
    url: 'https://tonymusto.it/wp-content/uploads/2024/03/IMG_2736-1-scaled.jpeg',
    caption: 'Chignon basso scolpito',
    tag: '#BridalCouture',
  },
  {
    url: 'https://tonymusto.it/wp-content/uploads/2022/06/752F748E-514B-40F1-B3F0-7C80E0CAE228-768x768.jpg',
    caption: 'Acconciatura Sposa Couture',
    tag: '#MyWeddingPage',
  },
  {
    url: 'https://tonymusto.it/wp-content/uploads/2024/03/IMG_7563-2-scaled.jpg',
    caption: 'Acconciatura con accessorio gioiello',
    tag: '#WeddingStyle',
  },
  {
    url: 'https://tonymusto.it/wp-content/uploads/2022/06/Tony_8-2-768x768.jpg',
    caption: 'Shooting Tony Musto',
    tag: '#Montemiletto',
  },
  {
    url: 'https://tonymusto.it/wp-content/uploads/2024/03/IMG_3370-1-1024x1024.jpeg',
    caption: 'Dettaglio raccolto sposa',
    tag: '#BridalDetails',
  },
  {
    url: 'https://tonymusto.it/wp-content/uploads/2022/05/IMG_8124-1-1024x1024.jpg',
    caption: 'Vita quotidiana in salone',
    tag: '#JoinOurTeam',
  },
  {
    url: 'https://tonymusto.it/wp-content/uploads/2024/03/IMG_2525-2-1024x1024.jpeg',
    caption: 'Look sposa contemporaneo',
    tag: '#WeddingLook',
  },
];

const Shot: React.FC<{ shot: Shot }> = ({ shot }) => (
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
    <section id="photos" className="py-24 bg-white relative overflow-hidden border-b border-neutral-200">
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

          <a
            href="https://www.instagram.com/tonymustoparrucchieri/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md border border-neutral-300 hover:border-gold hover:text-gold text-neutral-800 text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 self-start md:self-auto bg-white shadow-2xs"
          >
            <span>Instagram: @tonymustoparrucchieri</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
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
