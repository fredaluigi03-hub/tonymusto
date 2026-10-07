import React from 'react';
import { Reveal, stagger } from '../common/Reveal';
import { useStrings } from '../../i18n/strings';
import { philosophyStrings } from '../../i18n/philosophy';

export const PhilosophySection: React.FC = () => {
  const t = useStrings(philosophyStrings);

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <Reveal className="max-w-3xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">{t.kicker}</p>
        <h2 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-tight text-neutral-950 sm:text-5xl">
          {t.statement}
        </h2>
      </Reveal>
      <div className="mt-16 grid gap-10 border-t border-neutral-200 pt-12 md:grid-cols-3">
        {t.pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={stagger(i)}>
            <h3 className="font-serif text-2xl font-normal tracking-tight text-neutral-950">{pillar.title}</h3>
            <p className="mt-3 text-base font-light leading-relaxed text-neutral-600">{pillar.description}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
