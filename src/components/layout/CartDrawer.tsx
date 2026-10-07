import React from 'react';
import { useBodyScrollLock } from '../common/useBodyScrollLock';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useLang } from '../../i18n/LanguageContext';
import { useStrings } from '../../i18n/strings';
import { shopStrings, useFormatPrice } from '../../i18n/shop';
import { localizeProduct } from '../../i18n/products';
import { X, Trash2, Plus, Minus } from 'lucide-react';

const iconButton =
  'flex h-11 w-11 cursor-pointer items-center justify-center text-neutral-600 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold';

export const CartDrawer: React.FC = () => {
  const { lang } = useLang();
  const t = useStrings(shopStrings).cart;
  const formatPrice = useFormatPrice();
  const {
    isOpen,
    setIsOpen,
    items,
    removeFromCart,
    updateQuantity,
    subtotal,
    freeShippingThreshold,
    remainingForFreeShipping,
    setIsCheckoutOpen,
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/50"
          />

          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={t.title}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="relative flex w-screen max-w-md flex-col bg-pearl-100 text-neutral-950 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
                <h3 className="font-serif text-2xl font-normal tracking-tight">{t.title}</h3>
                <button onClick={() => setIsOpen(false)} aria-label={t.close} className={`-mr-3 ${iconButton}`}>
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="border-b border-neutral-200 px-6 py-4">
                <p className="text-xs text-neutral-600">
                  {remainingForFreeShipping > 0 ? (
                    <>{t.addBefore}<strong className="font-medium text-neutral-950">{formatPrice(remainingForFreeShipping)}</strong>{t.addAfter}</>
                  ) : (
                    t.unlocked
                  )}
                </p>
                <div className="mt-2 h-px w-full bg-neutral-300">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${freeShippingPercentage}%` }}
                    transition={{ duration: 0.4 }}
                    className="h-px bg-gold"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-6">
                {items.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                    <h4 className="font-serif text-xl font-normal tracking-tight">{t.emptyTitle}</h4>
                    <p className="mt-2 max-w-xs text-sm font-light leading-relaxed text-neutral-600">{t.emptyText}</p>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="mt-6 min-h-11 cursor-pointer rounded-full bg-neutral-950 px-6 text-sm text-white transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    >
                      {t.explore}
                    </button>
                  </div>
                ) : (
                  <ul className="divide-y divide-neutral-200">
                    {items.map(({ product: baseProduct, quantity }) => {
                      const product = localizeProduct(baseProduct, lang);
                      return (
                        <li key={product.id} className="flex gap-4 py-5">
                          <img src={product.image} alt={product.name} className="h-20 w-20 shrink-0 rounded-lg bg-white object-contain p-1" />
                          <div className="flex flex-1 flex-col justify-between">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h4 className="font-serif text-base leading-tight text-neutral-950">{product.name}</h4>
                                <p className="mt-0.5 text-xs text-neutral-600">{product.volume}</p>
                              </div>
                              <button onClick={() => removeFromCart(product.id)} aria-label={t.remove} className={`-mr-3 -mt-3 ${iconButton}`}>
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <button onClick={() => updateQuantity(product.id, quantity - 1)} aria-label={t.decrease} className={`-ml-3 ${iconButton}`}>
                                  <Minus className="h-3.5 w-3.5" />
                                </button>
                                <span className="w-6 text-center text-sm">{quantity}</span>
                                <button onClick={() => updateQuantity(product.id, quantity + 1)} aria-label={t.increase} className={iconButton}>
                                  <Plus className="h-3.5 w-3.5" />
                                </button>
                              </div>
                              <span className="font-serif text-lg text-neutral-950">{formatPrice(product.price * quantity)}</span>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              {items.length > 0 && (
                <div className="space-y-4 border-t border-neutral-200 px-6 py-6">
                  <div className="space-y-1.5 text-sm text-neutral-600">
                    <div className="flex justify-between">
                      <span>{t.subtotal}</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t.shipping}</span>
                      <span>{remainingForFreeShipping === 0 ? t.free : t.shippingLater}</span>
                    </div>
                    <div className="flex justify-between border-t border-neutral-200 pt-3 font-serif text-xl text-neutral-950">
                      <span>{t.total}</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleProceedCheckout}
                    className="min-h-12 w-full cursor-pointer rounded-full bg-neutral-950 text-sm text-white transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    {t.checkout}
                  </button>
                  <p className="text-center text-xs text-neutral-600">{t.delivery}</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
