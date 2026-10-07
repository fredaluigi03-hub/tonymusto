import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { Backdrop } from '../common/Backdrop';
import { useStrings } from '../../i18n/strings';
import { homeStrings } from '../../i18n/home';
import { ROUTES } from '../../routes';
import photo from '../../assets/bg-wedding.webp';

export const WeddingTeaser: React.FC = () => {
  const t = useStrings(homeStrings).wedding;

  return (
    <>
      <Backdrop photo={photo} word="Wedding" />
      <Reveal className="relative mx-auto w-full max-w-7xl px-6 py-32 text-white lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">{t.kicker}</p>
        <h2 className="mt-6 max-w-4xl font-serif text-5xl font-normal leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
          {t.title}
        </h2>
        <p className="mt-8 max-w-lg text-lg font-light leading-relaxed text-white/85">{t.text}</p>
        <a
          href={ROUTES.wedding}
          className="mt-10 inline-flex min-h-12 cursor-pointer items-center gap-3 rounded-full bg-white px-8 text-xs font-medium uppercase tracking-[0.2em] text-neutral-950 transition-colors hover:bg-gold hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {t.cta}
          <ArrowRight className="h-4 w-4" />
        </a>
      </Reveal>
    </>
  );
};
