import React from "react";
import { Reveal } from "../common/Reveal";
import { InfiniteSlider } from "../common/InfiniteSlider";
import { shots } from "../../data/photosData";
import { useStrings } from "../../i18n/strings";
import { photosStrings } from "../../i18n/photos";
import { philosophyStrings } from "../../i18n/philosophy";
import { ROUTES } from "../../routes";

const ROWS = [
  [0, 19, 3, 13, 9, 6, 16, 25],
  [12, 4, 1, 22, 17, 10, 21, 15],
];

export const GallerySection: React.FC = () => {
  const photos = useStrings(photosStrings);
  const t = useStrings(philosophyStrings);

  const ribbon = (row: number[], reverse: boolean) => (
    <InfiniteSlider
      gap={16}
      duration={reverse ? 58 : 50}
      durationOnHover={150}
      reverse={reverse}
      className="[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
    >
      {row.map((i) => (
        <img
          key={shots[i].url}
          src={shots[i].url}
          alt={photos.captions[i]}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="aspect-[4/5] h-44 shrink-0 rounded-2xl object-cover sm:h-52 lg:h-60"
        />
      ))}
    </InfiniteSlider>
  );

  return (
    <section className="flex w-full flex-col justify-center gap-8 py-12">
      {ribbon(ROWS[0], false)}
      <Reveal className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
          {t.kicker}
        </p>
        <h2 className="mt-4 font-serif text-4xl font-normal leading-[1.05] tracking-tight text-neutral-950 sm:text-6xl">
          {t.statement}
        </h2>
        <p className="mt-4 text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">
          {t.pillars.join(" · ")}
        </p>
        <a
          href={ROUTES.photos}
          className="mt-6 inline-flex min-h-11 cursor-pointer items-center rounded-full border border-neutral-300 px-8 text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:border-gold hover:text-gold"
        >
          {t.album}
        </a>
      </Reveal>
      {ribbon(ROWS[1], true)}
    </section>
  );
};
