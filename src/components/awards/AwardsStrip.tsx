import React from "react";
import { ArrowRight } from "lucide-react";
import { InfiniteSlider } from "../common/InfiniteSlider";
import { Backdrop } from "../common/Backdrop";
import { Reveal } from "../common/Reveal";
import { awardPhotos } from "../../data/awardsData";
import { useStrings } from "../../i18n/strings";
import { awardsStrings } from "../../i18n/awards";
import { homeStrings } from "../../i18n/home";
import { ROUTES } from "../../routes";

/** Only the first shots: the home must not download all of them. */
const stripPhotos = awardPhotos.slice(0, 12);

export const AwardsStrip: React.FC = () => {
  const awards = useStrings(awardsStrings);
  const t = useStrings(homeStrings).awards;

  return (
    <>
      <Backdrop word="Awards" />
      <div className="relative w-full py-24 sm:py-32">
        <Reveal className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
            {t.kicker}
          </p>
          <h2 className="mt-6 max-w-4xl font-serif text-5xl font-normal leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl text-neutral-950">
            {t.title}
          </h2>
          <p className="mt-4 text-base font-light text-neutral-600">
            {awards.stripCount(awardPhotos.length)}
          </p>
        </Reveal>
        <InfiniteSlider
          gap={16}
          duration={52}
          durationOnHover={220}
          className="mt-12 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
        >
          {stripPhotos.map((photo) => (
            <img
              key={photo.url}
              src={photo.url}
              alt=""
              aria-hidden
              loading="lazy"
              decoding="async"
              draggable={false}
              className="h-32 w-auto shrink-0 rounded-lg border border-neutral-200 object-cover sm:h-40"
            />
          ))}
        </InfiniteSlider>
        <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
          <a
            href={ROUTES.awards}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-950 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            {awards.stripLink}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  );
};
