import React from 'react';
import { Reveal } from '../common/Reveal';
import { StackingBlock } from '../common/StackingBlock';
import { useBooking } from '../../context/BookingContext';
import { useStrings } from '../../i18n/strings';
import { teamStrings, useTeam } from '../../i18n/team';

export const TeamSection: React.FC = () => {
  const { openBooking } = useBooking();
  const t = useStrings(teamStrings);
  const team = useTeam();

  return (
    <StackingBlock id="team" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">{t.badge}</p>
          <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-neutral-950 sm:text-5xl">{t.title}</h2>
          <p className="mt-6 font-light leading-relaxed text-neutral-600">{t.intro}</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3">
          {team.map(member => (
            <Reveal key={member.id}>
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="aspect-[3/4] w-full rounded-2xl object-cover"
              />
              <h3 className="mt-6 font-serif text-2xl font-normal tracking-tight text-neutral-950">{member.name}</h3>
              <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-gold">{member.role}</p>
              <p className="mt-4 text-sm font-light leading-relaxed text-neutral-600">{member.specialty}</p>
              <button
                onClick={() => openBooking(undefined, member.id)}
                className="mt-6 min-h-11 cursor-pointer rounded-full border border-neutral-300 px-6 text-sm font-medium text-neutral-950 transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {t.bookWith(member.name.split(' ')[0])}
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </StackingBlock>
  );
};
