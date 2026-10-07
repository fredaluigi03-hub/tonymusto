import React from "react";
import { ArrowRight } from "lucide-react";
import { Backdrop } from "../common/Backdrop";
import { Reveal, stagger } from "../common/Reveal";
import { productsData } from "../../data/productsData";
import { ProductCard } from "./ProductCard";
import { useStrings } from "../../i18n/strings";
import { homeStrings } from "../../i18n/home";
import { ROUTES } from "../../routes";

const homeProducts = productsData.slice(0, 3);

export const ShopSection: React.FC = () => {
  const t = useStrings(homeStrings).shop;

  return (
    <>
      <Backdrop word="Boutique" />
      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
              {t.kicker}
            </p>
            <h2 className="mt-6 font-serif text-5xl font-normal leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl text-neutral-950">
              {t.title}
            </h2>
          </div>
          <a
            href={ROUTES.shop}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 border-b border-gold pb-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-950 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            {t.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {homeProducts.map((product, i) => (
            <Reveal key={product.id} delay={stagger(i)}>
              <ProductCard product={product} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
};
