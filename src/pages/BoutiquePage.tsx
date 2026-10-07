import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { Reveal } from '../components/common/Reveal';
import { StackingBlock } from '../components/common/StackingBlock';
import { ServiceModal } from '../components/services/ServiceModal';
import { TeamSection } from '../components/team/TeamSection';
import { useBooking } from '../context/BookingContext';
import { useStrings } from '../i18n/strings';
import { boutiqueStrings } from '../i18n/boutique';
import { useServices } from '../i18n/services';
import type { ServiceItem } from '../types';

const secondaryButton =
  'min-h-11 cursor-pointer rounded-full border border-neutral-300 px-6 text-sm font-medium text-neutral-950 transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold';
const primaryButton =
  'min-h-11 cursor-pointer rounded-full bg-neutral-950 px-8 text-sm font-medium text-white transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold';

export const BoutiquePage: React.FC = () => {
  const { openBooking } = useBooking();
  const t = useStrings(boutiqueStrings);
  const services = useServices();
  const [selected, setSelected] = useState<ServiceItem | null>(null);

  return (
    <>
      <PageHeader kicker={t.kicker} title={t.title} intro={t.intro} />

      <StackingBlock className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">{t.servicesKicker}</p>
            <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-neutral-950 sm:text-5xl">
              {t.servicesTitle}
            </h2>
          </Reveal>

          <ul className="mt-16 space-y-20 sm:space-y-28">
            {services.map((service, index) => (
              <Reveal as="li" key={service.id} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <button
                  onClick={() => setSelected(service)}
                  aria-label={`${t.details}: ${service.name}`}
                  className={`block cursor-pointer overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${index % 2 ? 'lg:order-2' : ''}`}
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </button>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">{service.subtitle}</p>
                  <h3 className="mt-4 font-serif text-3xl font-normal tracking-tight text-neutral-950">{service.name}</h3>
                  <p className="mt-4 font-light leading-relaxed text-neutral-600">{service.description}</p>
                  <ul className="mt-6 space-y-2 text-sm font-light text-neutral-600">
                    {service.features.map(feature => (
                      <li key={feature} className="border-l border-gold pl-3">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button onClick={() => openBooking(service.id)} className={primaryButton}>
                      {t.book}
                    </button>
                    <button onClick={() => setSelected(service)} className={secondaryButton}>
                      {t.details}
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </StackingBlock>

      <StackingBlock className="bg-pearl-100">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">{t.disciplinesKicker}</p>
            <h2 className="mt-4 font-serif text-4xl font-normal tracking-tight text-neutral-950 sm:text-5xl">
              {t.disciplinesTitle}
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {t.disciplines.map(discipline => (
              <Reveal key={discipline.title} className="border-t border-gold pt-6">
                <h3 className="font-serif text-2xl font-normal tracking-tight text-neutral-950">{discipline.title}</h3>
                <p className="mt-4 font-light leading-relaxed text-neutral-600">{discipline.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </StackingBlock>

      <TeamSection />

      <StackingBlock className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-4xl font-normal tracking-tight sm:text-5xl">{t.ctaTitle}</h2>
            <p className="mt-6 font-light leading-relaxed text-neutral-300">{t.ctaText}</p>
            <button
              onClick={() => openBooking()}
              className="mt-10 min-h-11 cursor-pointer rounded-full bg-white px-8 text-sm font-medium text-neutral-950 transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {t.book}
            </button>
          </Reveal>
        </div>
      </StackingBlock>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </>
  );
};
