import React from 'react';
import { Reveal } from '../components/common/Reveal';
import { PageHeader } from '../components/common/PageHeader';
import { awardPhotos } from '../data/awardsData';
import { useStrings } from '../i18n/strings';
import { awardsStrings } from '../i18n/awards';

export const AwardsPage: React.FC = () => {
  const t = useStrings(awardsStrings);

  return (
    <main className="bg-pearl-100">
      <PageHeader kicker={t.badge} title={t.title} intro={t.quote} />
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
        <p className="mb-8 text-[11px] uppercase tracking-[0.3em] text-neutral-600">{t.count(awardPhotos.length)}</p>
        <div className="columns-2 gap-4 md:columns-3 xl:columns-4 sm:gap-5">
          {awardPhotos.map((photo, i) => (
            <Reveal key={photo.url} className="mb-4 break-inside-avoid overflow-hidden rounded-xl bg-pearl-200 sm:mb-5">
              <img
                src={photo.url}
                width={photo.w}
                height={photo.h}
                alt={t.photoAlt(i + 1)}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
};
