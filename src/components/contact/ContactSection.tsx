import React from 'react';
import { useBooking } from '../../context/BookingContext';
import { Reveal } from '../common/Reveal';
import { useStrings } from '../../i18n/strings';
import { contactStrings } from '../../i18n/contact';
import { homeStrings } from '../../i18n/home';

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Tony+Musto+Parrucchieri+Montemiletto';

const linkClass =
  'inline-flex min-h-11 cursor-pointer items-center transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold';

export const ContactSection: React.FC = () => {
  const { openBooking } = useBooking();
  const contact = useStrings(contactStrings);
  const t = useStrings(homeStrings).visit;
  const closedDays = [contact.section.monday, contact.section.sunday].map(day => day.replace(':', '')).join(' / ');

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <Reveal className="max-w-2xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">{t.kicker}</p>
        <h2 className="mt-6 font-serif text-5xl font-normal leading-[1.02] tracking-tight sm:text-7xl">
          {contact.section.title}
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-14 grid gap-12 border-t border-white/15 pt-12 md:grid-cols-3">
        <div>
          <h3 className="text-[11px] uppercase tracking-[0.3em] text-white/60">{contact.address}</h3>
          <p className="mt-4 font-light leading-relaxed text-white/90">
            Via XXIV Maggio 13/14
            <br />
            83038 Montemiletto (AV)
          </p>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`mt-2 border-b border-gold ${linkClass}`}>
            {t.maps}
          </a>
        </div>
        <div>
          <h3 className="text-[11px] uppercase tracking-[0.3em] text-white/60">{t.hoursTitle}</h3>
          <p className="mt-4 font-light leading-relaxed text-white/90">
            {t.hoursOpen}: 8:30 – 19:00
            <br />
            {closedDays}: {contact.closed}
          </p>
        </div>
        <div>
          <h3 className="text-[11px] uppercase tracking-[0.3em] text-white/60">{t.phonesTitle}</h3>
          <p className="mt-4 flex flex-col font-light text-white/90">
            <a href="tel:0825968391" className={linkClass}>0825 968391</a>
            <a href="tel:3770293092" className={linkClass}>377 0293092</a>
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mt-14">
        <button
          type="button"
          onClick={() => openBooking()}
          className="min-h-11 cursor-pointer rounded-full bg-white px-10 text-xs font-medium uppercase tracking-[0.2em] text-neutral-950 transition-colors hover:bg-gold hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {contact.section.book}
        </button>
      </Reveal>
    </div>
  );
};
