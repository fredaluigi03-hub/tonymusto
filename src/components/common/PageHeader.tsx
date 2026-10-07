import React from 'react';
import { Reveal } from './Reveal';

interface PageHeaderProps {
  kicker: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** Wide photo shown under the text, full container width. */
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

/** Opening block shared by every inner page, so they all start the same way. */
export const PageHeader: React.FC<PageHeaderProps> = ({ kicker, title, intro, image, imageAlt = '', children }) => (
  <header className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:pt-24 lg:px-8">
    <Reveal className="max-w-3xl">
      <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">{kicker}</p>
      <h1 className="mt-4 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-neutral-950 sm:text-6xl">
        {title}
      </h1>
      {intro && <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-neutral-600 sm:text-lg">{intro}</p>}
      {children && <div className="mt-8">{children}</div>}
    </Reveal>
    {image && (
      <Reveal className="mt-14 overflow-hidden rounded-2xl">
        <img src={image} alt={imageAlt} className="aspect-[16/9] w-full object-cover sm:aspect-[21/9]" />
      </Reveal>
    )}
  </header>
);
