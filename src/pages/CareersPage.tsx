import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { CareersSection } from '../components/careers/CareersSection';
import { useCareers } from '../context/CareersContext';
import { useStrings } from '../i18n/strings';
import { careersStrings } from '../i18n/careers';

export const CareersPage: React.FC = () => {
  const { openCareers } = useCareers();
  const t = useStrings(careersStrings);

  return (
    <>
      <PageHeader
        kicker={t.badge}
        title={t.title}
        intro={t.intro}
        image="https://tonymusto.it/wp-content/uploads/2022/05/IMG_8124-1-1024x1024.jpg"
        imageAlt="Tony Musto"
      >
        <button
          onClick={() => openCareers()}
          className="min-h-11 cursor-pointer rounded-full bg-neutral-950 px-8 text-sm font-medium text-white transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          {t.applyNow}
        </button>
      </PageHeader>
      <CareersSection />
    </>
  );
};
