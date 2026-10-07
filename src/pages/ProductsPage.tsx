import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { REVEAL_VIEWPORT } from '../components/common/Reveal';
import { productsData, productCollections } from '../data/productsData';
import { ProductCard } from '../components/shop/ProductCard';
import { useStrings } from '../i18n/strings';
import { shopStrings } from '../i18n/shop';
import { ShoppingBag, ArrowLeft, Truck, ShieldCheck, Leaf } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const t = useStrings(shopStrings);
  const [activeCollection, setActiveCollection] = useState<string>('all');

  const products = activeCollection === 'all'
    ? productsData
    : productsData.filter(p => p.collection === activeCollection);

  return (
    <section className="py-16 sm:py-20 bg-white/91 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <a
          href="#shop"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-neutral-600 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-gold" />
          {t.page.back}
        </a>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={REVEAL_VIEWPORT}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mt-8 mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pearl-100 border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] font-bold shadow-2xs">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{t.page.badge}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
            {t.page.title}
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            {t.page.intro(productsData.length)}
          </p>
        </motion.div>
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {productCollections.map(col => {
            const isActive = activeCollection === col;
            return (
              <motion.button
                key={col}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCollection(col)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-2xs ${
                  isActive
                    ? 'bg-neutral-950 text-white shadow-md'
                    : 'bg-pearl-100 text-neutral-700 hover:text-gold border border-neutral-200 hover:border-gold/50'
                }`}
              >
                {t.collections[col]}
              </motion.button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs text-neutral-600">
          <div className="flex flex-col items-center space-y-2 p-5 rounded-2xl bg-pearl-100 border border-neutral-200/80">
            <Truck className="w-6 h-6 text-gold" />
            <strong className="text-neutral-900 font-serif text-sm font-bold">{t.trust[0].title}</strong>
            <p className="font-light">{t.trust[0].text}</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-5 rounded-2xl bg-pearl-100 border border-neutral-200/80">
            <ShieldCheck className="w-6 h-6 text-gold" />
            <strong className="text-neutral-900 font-serif text-sm font-bold">{t.trust[1].title}</strong>
            <p className="font-light">{t.trust[1].text}</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-5 rounded-2xl bg-pearl-100 border border-neutral-200/80">
            <Leaf className="w-6 h-6 text-gold" />
            <strong className="text-neutral-900 font-serif text-sm font-bold">{t.trust[2].title}</strong>
            <p className="font-light">{t.trust[2].text}</p>
          </div>
        </div>

      </div>
    </section>
  );
};
