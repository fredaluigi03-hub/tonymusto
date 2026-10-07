import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { productsData, productCollections } from '../data/productsData';
import { ProductCard } from '../components/shop/ProductCard';
import { useStrings } from '../i18n/strings';
import { shopStrings } from '../i18n/shop';

export const ProductsPage: React.FC = () => {
  const t = useStrings(shopStrings);
  const [activeCollection, setActiveCollection] = useState<string>('all');

  const products = activeCollection === 'all'
    ? productsData
    : productsData.filter(p => p.collection === activeCollection);

  return (
    <main className="bg-pearl-100">
      <PageHeader kicker={t.page.badge} title={t.page.title} intro={t.page.intro(productsData.length)} />
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
        <div className="mb-12 flex flex-wrap gap-2">
          {productCollections.map(col => (
            <button
              key={col}
              type="button"
              onClick={() => setActiveCollection(col)}
              aria-pressed={activeCollection === col}
              className={`min-h-11 cursor-pointer rounded-full border px-5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                activeCollection === col
                  ? 'border-neutral-950 bg-neutral-950 text-white'
                  : 'border-neutral-300 text-neutral-950 hover:border-gold hover:text-gold'
              }`}
            >
              {t.collections[col]}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
};
