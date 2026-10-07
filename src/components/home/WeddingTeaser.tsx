import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { useStrings } from '../../i18n/strings';
import { homeStrings } from '../../i18n/home';
import { ROUTES } from '../../routes';

const photo = 'https://tonymusto.it/wp-content/uploads/2024/03/IMG_0874-2-1.jpeg';

export const WeddingTeaser: React.FC = () => {
  const t = useStrings(homeStrings).wedding;

  return (
    <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:gap-20 lg:px-8">
      <Reveal className="overflow-hidden rounded-2xl">
        <img src={photo} alt={t.photoAlt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
      </Reveal>
      <Reveal delay={0.1} className="max-w-md">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">{t.kicker}</p>
        <h2 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-tight text-neutral-950 sm:text-5xl">
          {t.title}
        </h2>
        <p className="mt-6 text-base font-light leading-relaxed text-neutral-600 sm:text-lg">{t.text}</p>
        <a
          href={ROUTES.wedding}
          className="mt-8 inline-flex min-h-11 cursor-pointer items-center gap-2 border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-950 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          {t.cta}
          <ArrowRight className="h-4 w-4" />
        </a>
      </Reveal>
    </div>
  );
};
