import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { BridalSection } from '../components/bridal/BridalSection';
import { useBooking } from '../context/BookingContext';
import { useStrings } from '../i18n/strings';
import { bridalStrings } from '../i18n/bridal';

export const WeddingPage: React.FC = () => {
  const { openBooking } = useBooking();
  const t = useStrings(bridalStrings);

  return (
    <>
      <PageHeader kicker={t.kicker} title={t.title} intro={t.intro}>
        <button
          onClick={() => openBooking('bridal-atelier-experience')}
          className="min-h-11 cursor-pointer rounded-full bg-neutral-950 px-8 text-sm font-medium text-white transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          {t.cta}
        </button>
      </PageHeader>
      <BridalSection />
    </>
  );
};
