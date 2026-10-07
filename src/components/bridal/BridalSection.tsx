import React from 'react';
import { Reveal } from '../common/Reveal';
import { StackingBlock } from '../common/StackingBlock';
import { useBooking } from '../../context/BookingContext';
import { useStrings } from '../../i18n/strings';
import { bridalStrings } from '../../i18n/bridal';

const uploads = 'https://tonymusto.it/wp-content/uploads/2024/03';

const stepPhotos = [
  `${uploads}/IMG_0874-2-1-1024x1024.jpeg`,
  `${uploads}/IMG_1243-2-768x1024.jpeg`,
  `${uploads}/IMG_2054-1024x1024.jpeg`,
];
const bigDayPhoto = `${uploads}/IMG_2525-2-1024x1024.jpeg`;
const galleryPhotos = [
  `${uploads}/IMG_2596-1-1024x1024.jpeg`,
  `${uploads}/IMG_2736-1-1024x1024.jpeg`,
  `${uploads}/IMG_7563-2-1024x1024.jpg`,
];

export const BridalSection: React.FC = () => {
  const { openBooking } = useBooking();
  const t = useStrings(bridalStrings);

  return (
    <>
      <StackingBlock className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">{t.servicesKicker}</p>
          </Reveal>
          <ol className="mt-12 space-y-20 sm:space-y-28">
            {t.steps.map((step, index) => (
              <Reveal as="li" key={step.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <img
                  src={stepPhotos[index]}
                  alt={step.alt}
                  loading="lazy"
                  className={`aspect-[4/5] w-full rounded-2xl object-cover ${index % 2 ? 'lg:order-2' : ''}`}
                />
                <div>
                  <p className="font-serif text-5xl font-normal text-gold">{`0${index + 1}`}</p>
                  <h2 className="mt-4 font-serif text-3xl font-normal tracking-tight text-neutral-950 sm:text-4xl">
                    {step.title}
                  </h2>
                  <p className="mt-4 max-w-lg font-light leading-relaxed text-neutral-600">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </StackingBlock>

      <StackingBlock className="bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-4xl font-normal tracking-tight sm:text-5xl">{t.bigDayTitle}</h2>
            <p className="mt-6 max-w-lg font-light leading-relaxed text-neutral-300">{t.bigDayText}</p>
          </Reveal>
          <Reveal>
            <img
              src={bigDayPhoto}
              alt={t.bigDayAlt}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </StackingBlock>

      <StackingBlock className="bg-pearl-100">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {galleryPhotos.map(src => (
              <Reveal key={src}>
                <img src={src} alt={t.galleryAlt} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover" />
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-20 max-w-2xl text-center">
            <p className="font-serif text-2xl font-normal leading-snug tracking-tight text-neutral-950 sm:text-3xl">
              {t.closing}
            </p>
            <button
              onClick={() => openBooking('bridal-atelier-experience')}
              className="mt-10 min-h-11 cursor-pointer rounded-full bg-neutral-950 px-8 text-sm font-medium text-white transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {t.cta}
            </button>
          </Reveal>
        </div>
      </StackingBlock>
    </>
  );
};
