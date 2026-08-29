import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductItem } from '../../types';
import { useCart } from '../../context/CartContext';
import { 
  ShoppingBag, 
  Sparkles, 
  Star, 
  HeartHandshake, 
  Check, 
  Info 
} from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleAdd = () => {
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between rounded-3xl bg-white border border-neutral-200 hover:border-gold/60 transition-all duration-300 shadow-luxury-white hover:shadow-luxury-card overflow-hidden"
    >
      
      {/* Product Image Stage */}
      <div className="relative aspect-[4/4] sm:aspect-[4/3] w-full overflow-hidden bg-pearl-100 p-6 flex items-center justify-center">
        
        {/* Eco / Category Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-800 text-[10px] font-mono uppercase tracking-wider font-bold shadow-2xs">
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick Info Flip Toggle */}
        <button
          type="button"
          onClick={() => setShowInfo(!showInfo)}
          aria-label="Dettagli botanici"
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white text-neutral-600 hover:text-gold border border-neutral-200 hover:border-gold transition-colors shadow-2xs"
        >
          <Info className="w-4 h-4" />
        </button>

        {/* Product Photo */}
        <motion.img
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4 }}
          src={product.image}
          alt={product.name}
          className="h-full w-auto max-w-[85%] object-contain"
        />

        {/* Info Slide Overlay */}
        <AnimatePresence>
          {showInfo && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute inset-0 z-20 bg-white/98 backdrop-blur-md p-5 flex flex-col justify-between text-xs text-neutral-800"
            >
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                  <span className="text-gold font-serif font-bold text-sm">Ingredienti Chiave</span>
                  <button
                    onClick={() => setShowInfo(false)}
                    className="text-neutral-400 hover:text-neutral-900 text-xs p-1"
                  >
                    ✕
                  </button>
                </div>
                <ul className="mt-3 space-y-2 text-[11px] text-neutral-600">
                  {product.keyIngredients.map((ing, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {product.ecoAction && (
                <div className="p-2.5 rounded-xl bg-pearl-100 border border-gold/30 text-[11px] text-gold font-medium flex items-start gap-2">
                  <HeartHandshake className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>{product.ecoAction}</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product Content Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Rating & Volume */}
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-1.5">
            <div className="flex items-center gap-1.5 text-gold">
              <Star className="w-3.5 h-3.5 fill-gold text-gold" />
              <span className="font-mono text-neutral-900 text-xs font-bold">{product.rating}</span>
              <span className="text-[10px] text-neutral-400">({product.reviewsCount})</span>
            </div>
            <span className="text-[11px] text-neutral-600 font-mono font-medium">{product.volume}</span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-lg text-neutral-950 group-hover:text-gold transition-colors duration-200 leading-snug font-bold">
            {product.name}
          </h3>

          {/* Product Description */}
          <p className="mt-1.5 text-xs text-neutral-600 font-light leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Eco Action Micro-Highlight */}
          {product.ecoAction && (
            <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-gold font-medium">
              <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span className="truncate">{product.ecoAction}</span>
            </div>
          )}
        </div>

        {/* Price & Add to Cart Footer */}
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase text-neutral-400 font-medium tracking-wider">Prezzo</span>
            <span className="font-serif text-2xl font-bold text-neutral-950">
              €{product.price.toFixed(2)}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="button"
            onClick={handleAdd}
            className={`px-4 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-xs ${
              added
                ? 'bg-emerald-600 text-white'
                : 'bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Aggiunto!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Aggiungi al Carrello</span>
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
