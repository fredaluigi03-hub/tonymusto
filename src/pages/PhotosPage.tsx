import React from 'react';
import { Reveal } from '../components/common/Reveal';
import { PageHeader } from '../components/common/PageHeader';
import { shots } from '../data/photosData';
import { useStrings } from '../i18n/strings';
import { photosStrings } from '../i18n/photos';

export const PhotosPage: React.FC = () => {
  const t = useStrings(photosStrings);

  return (
    <main className="bg-pearl-100">
      <PageHeader kicker={t.badge} title={t.pageTitle} intro={t.pageIntro(shots.length)}>
        <a
          href="https://www.instagram.com/tonymustoparrucchieri/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center rounded-full border border-neutral-300 px-6 text-sm text-neutral-950 transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          @tonymustoparrucchieri
        </a>
      </PageHeader>
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
        <div className="columns-2 gap-4 md:columns-3 xl:columns-4 sm:gap-5">
          {shots.map((shot, i) => (
            <Reveal key={shot.url} className="mb-4 break-inside-avoid overflow-hidden rounded-xl bg-pearl-200 sm:mb-5">
              <img src={shot.url} alt={t.captions[i]} loading="lazy" decoding="async" className="w-full" />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
};
