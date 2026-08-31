import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ProductItem } from '../../types';
import { useCart } from '../../context/CartContext';
import { useTilt, IS_TOUCH, REVEAL_ONCE, REVEAL_MARGIN } from '../common/Reveal';
import { ShoppingBag, Sparkles, Star, HeartHandshake, Check, Info, RotateCcw } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const tilt = useTilt(14);
  const cardRef = useRef<HTMLDivElement>(null);

  // No pointer to follow on a phone, so the card's travel through the viewport
  // drives the same two values the mouse would. Everything downstream — tilt,
  // bottle parallax, gold sheen — follows for free.
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  // Narrow bands: a full 0..1 sweep would tilt by the mouse's full 14 degrees.
  const scrollPy = useTransform(scrollYProgress, [0, 1], [0.30, 0.70]);
  const scrollPx = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? [0.40, 0.60] : [0.60, 0.40]
  );

  useEffect(() => {
    if (!IS_TOUCH) return;
    tilt.py.set(scrollPy.get());
    tilt.px.set(scrollPx.get());
    const stopY = scrollPy.on('change', v => tilt.py.set(v));
    const stopX = scrollPx.on('change', v => tilt.px.set(v));
    return () => {
      stopY();
      stopX();
    };
  }, [scrollPy, scrollPx, tilt.px, tilt.py]);

  // Bottle drifts opposite the tilt for real parallax depth.
  const bottleX = useTransform(tilt.px, [0, 1], [14, -14]);
  const bottleY = useTransform(tilt.py, [0, 1], [10, -10]);
  const shadowX = useTransform(tilt.px, [0, 1], [-22, 22]);
  const glare = useTransform(
    [tilt.glareX, tilt.glareY],
    ([x, y]: string[]) =>
      `radial-gradient(420px circle at ${x} ${y}, rgba(212,175,55,0.18), transparent 62%)`
  );

  const handleAdd = () => {
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, rotateX: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      viewport={{ once: REVEAL_ONCE, margin: REVEAL_MARGIN }}
      transition={{ duration: 0.6, delay: Math.min(index, 5) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      ref={cardRef}
      className="[perspective:1400px]"
    >
      <motion.div
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        style={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="group relative h-full flex flex-col justify-between rounded-3xl bg-white border border-neutral-200 hover:border-gold/60 transition-colors duration-300 shadow-luxury-white hover:shadow-luxury-card"
      >
        {/* Moving specular glare */}
        <motion.div
          style={{ background: glare }}
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 [@media(hover:none)]:opacity-100 transition-opacity duration-300 z-20"
        />

        {/* Product stage */}
        <div className="relative aspect-[4/4] sm:aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-pearl-100 via-white to-pearl-200 rounded-t-3xl p-6 flex items-center justify-center">
          {product.badge && (
            <div className="absolute top-3 left-3 z-30" style={{ transform: 'translateZ(50px)' }}>
              <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-800 text-[10px] font-mono uppercase tracking-wider font-bold shadow-2xs">
                {product.badge}
              </span>
            </div>
          )}

          <button
            type="button"
            onClick={() => setFlipped(!flipped)}
            aria-label={flipped ? 'Torna al prodotto' : 'Dettagli botanici'}
            className="absolute top-3 right-3 z-30 p-2 rounded-full bg-white text-neutral-600 hover:text-gold border border-neutral-200 hover:border-gold transition-colors shadow-2xs"
            style={{ transform: 'translateZ(50px)' }}
          >
            {flipped ? <RotateCcw className="w-4 h-4" /> : <Info className="w-4 h-4" />}
          </button>

          {/* Contact shadow that slides with the tilt */}
          <motion.div
            style={{ x: shadowX, z: 4 }}
            className="absolute bottom-7 left-1/2 -translate-x-1/2 w-[55%] h-5 rounded-[50%] bg-neutral-900/20 blur-xl"
          />

          {/* The bottle: floats above the card plane */}
          <motion.img
            src={product.image}
            alt={product.name}
            draggable={false}
            style={{ x: bottleX, y: bottleY, z: 60 }}
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            className="relative z-10 h-full w-auto max-w-[85%] object-contain drop-shadow-2xl"
          />

          {/* Flip face: ingredients */}
          <AnimatePresence>
            {flipped && (
              <motion.div
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ z: 70, transformStyle: 'preserve-3d' }}
                className="absolute inset-0 z-20 bg-white/98 backdrop-blur-md p-5 flex flex-col justify-between text-xs text-neutral-800 rounded-t-3xl"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                    <span className="text-gold font-serif font-bold text-sm">Ingredienti Chiave</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-[11px] text-neutral-600">
                    {product.keyIngredients.map((ing, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.06 }}
                        className="flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span>{ing}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                {product.ecoAction && (
                  <div className="p-2.5 rounded-xl bg-pearl-100 border border-gold/30 text-[11px] text-gold font-medium flex items-start gap-2">
                    <HeartHandshake className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{product.ecoAction}</span>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Details */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4" style={{ transform: 'translateZ(30px)' }}>
          <div>
            <div className="flex items-center justify-between text-xs text-neutral-500 mb-1.5">
              <div className="flex items-center gap-1.5 text-gold">
                <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                <span className="font-mono text-neutral-900 text-xs font-bold">{product.rating}</span>
                <span className="text-[10px] text-neutral-400">({product.reviewsCount})</span>
              </div>
              <span className="text-[11px] text-neutral-600 font-mono font-medium">{product.volume}</span>
            </div>

            <h3 className="font-serif text-lg text-neutral-950 group-hover:text-gold transition-colors duration-200 leading-snug font-bold">
              {product.name}
            </h3>

            <p className="mt-1.5 text-xs text-neutral-600 font-light leading-relaxed line-clamp-2">
              {product.description}
            </p>

            {product.ecoAction && (
              <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-gold font-medium">
                <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
                <span className="truncate">{product.ecoAction}</span>
              </div>
            )}
          </div>

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
              className={`px-4 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors duration-300 flex items-center gap-2 shadow-xs ${
                added ? 'bg-emerald-600 text-white' : 'bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950'
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
                  <span>Aggiungi</span>
                </>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
