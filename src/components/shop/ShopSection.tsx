import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { REVEAL_VIEWPORT } from '../common/Reveal';
import { productsData, productCollections } from '../../data/productsData';
import { ProductCard } from './ProductCard';
import { 
  Leaf, 
  Truck, 
  ShieldCheck, 
  HeartHandshake,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';

/** The home only previews a few products; the full catalogue lives on #/prodotti. */
const HOME_PRODUCT_COUNT = 3;

export const ShopSection: React.FC = () => {
  const [activeCollection, setActiveCollection] = useState<string>('all');
  const collections = productCollections;

  const filteredProducts = activeCollection === 'all'
    ? productsData
    : productsData.filter(p => p.collection === activeCollection);

  const visibleProducts = filteredProducts.slice(0, HOME_PRODUCT_COUNT);

  return (
    <section id="shop" className="py-24 bg-white/91 relative overflow-hidden border-b border-neutral-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={REVEAL_VIEWPORT}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pearl-100 border border-gold/40 text-gold text-xs uppercase tracking-[0.2em] font-bold shadow-2xs">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Shop Online Ufficiale</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-950 tracking-tight">
            I Prodotti Tony Musto a Casa Tua
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto">
            Acquista online i prodotti professionali utilizzati nel nostro salone: linea ecologica BEE IT, trattamenti ricci Bio Organic e prodotti per lo styling.
          </p>
        </motion.div>

        {/* Distinctive Eco Manifesto Banner (BEE IT) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={REVEAL_VIEWPORT}
          transition={{ duration: 0.7 }}
          className="mb-12 p-6 sm:p-8 rounded-2xl bg-pearl-100 border border-gold/40 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-white border border-gold/40 flex items-center justify-center text-gold flex-shrink-0 shadow-xs">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-mono font-bold">
                Linea Sostenibile · BEE IT & Tony Musto
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 mt-0.5">
                Salva le Api con ogni acquisto
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light mt-1 max-w-2xl leading-relaxed">
                I prodotti della linea <strong>BEE IT</strong> sostengono la creazione di oasi fiorite per la tutela delle api e della biodiversità. Consegna gratuita su ordini superiori a €65.
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            onClick={() => setActiveCollection('bee-it')}
            className="flex-shrink-0 px-6 py-3 rounded-md bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 text-xs uppercase tracking-wider font-bold transition-colors shadow-xs"
          >
            Vedi Linea BEE IT
          </motion.button>
        </motion.div>

        {/* Collection Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {collections.map(col => {
            const isActive = activeCollection === col.id;
            return (
              <motion.button
                key={col.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCollection(col.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shadow-2xs ${
                  isActive
                    ? 'bg-neutral-950 text-white shadow-md'
                    : 'bg-pearl-100 text-neutral-700 hover:text-gold border border-neutral-200 hover:border-gold/50'
                }`}
              >
                {col.label}
              </motion.button>
            );
          })}
        </div>

        {/* Products Grid with Framer Motion AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Il catalogo completo vive sulla sua pagina */}
        <div className="mt-10 flex justify-center">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#/prodotti"
            className="px-7 py-3.5 rounded-md border border-neutral-300 bg-white hover:border-gold hover:text-gold text-neutral-800 text-xs uppercase font-bold tracking-wider transition-colors shadow-2xs flex items-center gap-2"
          >
            <span>Vedi tutti i prodotti ({productsData.length})</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </motion.a>
        </div>

        {/* Guarantees Bar */}
        <div className="mt-16 pt-10 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs text-neutral-600">
          <div className="flex flex-col items-center space-y-2 p-5 rounded-2xl bg-pearl-100 border border-neutral-200/80">
            <Truck className="w-6 h-6 text-gold" />
            <strong className="text-neutral-900 font-serif text-sm font-bold">Spedizione Espressa o Ritiro in Salone</strong>
            <p className="font-light">Consegna rapida in tutta Italia o ritiro gratuito a Montemiletto.</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-5 rounded-2xl bg-pearl-100 border border-neutral-200/80">
            <ShieldCheck className="w-6 h-6 text-gold" />
            <strong className="text-neutral-900 font-serif text-sm font-bold">Prodotti 100% Originali</strong>
            <p className="font-light">Formulazioni professionali certificate scelte da Tony Musto.</p>
          </div>

          <div className="flex flex-col items-center space-y-2 p-5 rounded-2xl bg-pearl-100 border border-neutral-200/80">
            <Leaf className="w-6 h-6 text-gold" />
            <strong className="text-neutral-900 font-serif text-sm font-bold">Eco-Sostenibilità Attiva</strong>
            <p className="font-light">Sostegno concreto alle api e rispetto per l'ambiente.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
