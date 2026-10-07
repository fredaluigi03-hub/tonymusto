import React from "react";
import { Reveal } from "../common/Reveal";
import { Backdrop } from "../common/Backdrop";
import { InfiniteSlider } from "../common/InfiniteSlider";
import { shots } from "../../data/photosData";
import { useStrings } from "../../i18n/strings";
import { photosStrings } from "../../i18n/photos";
import { ROUTES } from "../../routes";

const FEATURED = [
  0, 19, 3, 13, 9, 6, 16, 25, 12, 4, 1, 22, 17, 10, 21, 15, 24, 23,
];

export const GallerySection: React.FC = () => {
  const t = useStrings(photosStrings);
  const featured = FEATURED.map((i) => ({
    url: shots[i].url,
    caption: t.captions[i],
  }));
  const half = Math.ceil(featured.length / 2);
  const rows = [featured.slice(0, half), featured.slice(half)];

  return (
    <section className="w-full py-24">
      <Backdrop word="Photos" />
      <Reveal className="relative mx-auto mb-12 flex max-w-7xl flex-col justify-between gap-6 px-6 md:flex-row md:items-end lg:px-8">
        <h2 className="font-serif text-5xl font-normal leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
          {t.galleryTitle}
        </h2>
        <a
          href={ROUTES.photos}
          className="inline-flex min-h-11 cursor-pointer items-center self-start rounded-full border border-neutral-300 px-8 text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:border-gold hover:text-gold md:self-auto"
        >
          {t.seeAll}
        </a>
      </Reveal>

      <div className="relative space-y-4">
        {rows.map((row, r) => (
          <InfiniteSlider
            key={r}
            gap={16}
            duration={r === 0 ? 50 : 60}
            durationOnHover={150}
            reverse={r === 1}
            className="[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
          >
            {row.map((shot) => (
              <img
                key={shot.url}
                src={shot.url}
                alt={shot.caption}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="aspect-[4/5] h-60 shrink-0 rounded-2xl object-cover sm:h-72 lg:h-80"
              />
            ))}
          </InfiniteSlider>
        ))}
      </div>
    </section>
  );
};
