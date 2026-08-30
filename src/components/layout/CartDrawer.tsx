import React from 'react';
import { useBodyScrollLock } from '../common/useBodyScrollLock';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { 
    isOpen, 
    setIsOpen, 
    items, 
    removeFromCart, 
    updateQuantity, 
    subtotal, 
    freeShippingThreshold, 
    remainingForFreeShipping,
    setIsCheckoutOpen
  } = useCart();

  useBodyScrollLock(isOpen);

  const freeShippingPercentage = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleProceedCheckout = () => {
    setIsOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Dark Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            {/* White Luxury Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="w-screen max-w-md bg-white border-l border-neutral-200 shadow-2xl flex flex-col justify-between text-neutral-900 relative"
            >
              
              {/* Header */}
              <div className="p-6 border-b border-neutral-200 bg-pearl-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full border border-gold/40 bg-white text-gold shadow-xs">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold tracking-wide text-neutral-950">Il Tuo Carrello</h3>
                    <p className="text-xs text-neutral-500 font-sans font-semibold">
                      Tony Musto Shop Ufficiale
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200/60 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress */}
              <div className="px-6 py-3 bg-pearl-100/60 border-b border-neutral-200">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-neutral-700 flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-4 h-4 text-gold" />
                    {remainingForFreeShipping > 0 ? (
                      <>Aggiungi <strong className="text-gold">€{remainingForFreeShipping.toFixed(2)}</strong> per la spedizione gratuita</>
                    ) : (
                      <span className="text-emerald-700 font-bold">Hai sbloccato la Spedizione Gratuita!</span>
                    )}
                  </span>
                  <span className="text-[10px] text-neutral-500 font-mono font-bold">{Math.round(freeShippingPercentage)}%</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${freeShippingPercentage}%` }}
                    transition={{ duration: 0.4 }}
                    className="h-full bg-gold rounded-full"
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 text-neutral-400">
                    <div className="w-16 h-16 rounded-full border border-neutral-200 bg-pearl-100 flex items-center justify-center mb-4 text-gold shadow-xs">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-neutral-900 mb-1">Il tuo carrello è vuoto</h4>
                    <p className="text-xs text-neutral-500 max-w-xs mb-6">
                      Scopri i prodotti professionali BEE IT salva-api e Bio Organic Curl Up per la cura a casa.
                    </p>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="px-6 py-2.5 bg-neutral-950 text-white text-xs uppercase tracking-wider hover:bg-gold hover:text-neutral-950 transition-colors font-bold rounded-md shadow-xs"
                    >
                      Esplora i Prodotti
                    </button>
                  </div>
                ) : (
                  items.map(({ product, quantity }) => (
                    <div 
                      key={product.id}
                      className="flex gap-4 p-4 rounded-2xl bg-pearl-100/50 border border-neutral-200 hover:border-gold/50 transition-all duration-200"
                    >
                      {/* Thumbnail */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-18 h-18 object-contain rounded-xl border border-neutral-200 bg-white p-1 flex-shrink-0"
                      />

                      {/* Info */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-serif text-sm font-bold text-neutral-900 leading-tight">
                              {product.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(product.id)}
                              className="text-neutral-400 hover:text-red-500 transition-colors p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <p className="text-[11px] text-neutral-500 mt-0.5">{product.volume}</p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-neutral-300 rounded-lg bg-white px-2 py-0.5 shadow-2xs">
                            <button
                              onClick={() => updateQuantity(product.id, quantity - 1)}
                              className="p-1 text-neutral-600 hover:text-gold transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-mono px-2 text-neutral-900 font-bold">{quantity}</span>
                            <button
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                              className="p-1 text-neutral-600 hover:text-gold transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="text-right">
                            <span className="text-base text-neutral-950 font-bold font-serif">
                              €{(product.price * quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer & Checkout Action */}
              {items.length > 0 && (
                <div className="p-6 bg-pearl-100 border-t border-neutral-200 space-y-3.5">
                  <div className="space-y-1.5 text-xs text-neutral-700">
                    <div className="flex justify-between">
                      <span>Subtotale</span>
                      <span className="font-mono text-neutral-950 font-bold">€{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-neutral-500">
                      <span>Spedizione</span>
                      <span>{remainingForFreeShipping === 0 ? <strong className="text-emerald-700">Gratuita</strong> : 'Calcolata al riepilogo'}</span>
                    </div>
                    <div className="pt-2 border-t border-neutral-200 flex justify-between text-base font-serif text-neutral-950">
                      <span className="font-bold">Totale</span>
                      <span className="text-neutral-950 font-mono font-bold text-xl">€{subtotal.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Bee Note */}
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-gold/30 text-[11px] text-neutral-700">
                    <HeartHandshake className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>Ogni acquisto BEE IT sostiene la salvaguardia delle api.</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleProceedCheckout}
                    className="w-full py-3.5 bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-md shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Procedi all'Ordine</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-neutral-500 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                    <span>Consegna rapida in tutta Italia o ritiro gratuito in salone</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
