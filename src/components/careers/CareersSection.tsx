import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { StackingBlock } from '../common/StackingBlock';
import { useCareers } from '../../context/CareersContext';
import { useStrings } from '../../i18n/strings';
import { careersStrings, careerRoleIds } from '../../i18n/careers';

export const CareersSection: React.FC = () => {
  const { openCareers } = useCareers();
  const t = useStrings(careersStrings);

  return (
    <>
      <StackingBlock id="lavora-con-noi" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <ul className="space-y-4">
              {t.commitments.map(commitment => (
                <li key={commitment} className="border-l border-gold pl-4 font-serif text-2xl font-normal tracking-tight text-neutral-950">
                  {commitment}
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-lg font-light leading-relaxed text-neutral-600">{t.teamText}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-serif text-4xl font-normal tracking-tight text-neutral-950 sm:text-5xl">{t.identityTitle}</h2>
            <p className="mt-6 max-w-lg font-light leading-relaxed text-neutral-600">{t.identityText}</p>
          </Reveal>
        </div>
      </StackingBlock>

      <StackingBlock className="bg-pearl-100">
        <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-4xl font-normal tracking-tight text-neutral-950 sm:text-5xl">{t.openPositions}</h2>
          </Reveal>
          <ul className="mt-12 divide-y divide-neutral-300 border-y border-neutral-300">
            {careerRoleIds.map(id => {
              const role = t.roles[id];
              return (
                <Reveal as="li" key={id}>
                  <button
                    onClick={() => openCareers(id)}
                    className="group flex min-h-11 w-full cursor-pointer items-center justify-between gap-6 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    <span>
                      <span className="block font-serif text-2xl font-normal tracking-tight text-neutral-950 transition-colors group-hover:text-gold">
                        {role.title}
                      </span>
                      <span className="mt-1 block text-[11px] uppercase tracking-[0.3em] text-gold">{role.type}</span>
                      <span className="mt-3 block max-w-xl text-sm font-light leading-relaxed text-neutral-600">
                        {role.description}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-2 text-sm font-medium text-neutral-950">
                      <span className="hidden sm:inline">{t.apply}</span>
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </StackingBlock>
    </>
  );
};
