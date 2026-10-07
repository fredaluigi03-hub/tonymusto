import React, { useState } from 'react';
import { ModalOverlay } from '../common/ModalOverlay';
import { useCart } from '../../context/CartContext';
import { useStrings } from '../../i18n/strings';
import { shopStrings, useFormatPrice } from '../../i18n/shop';
import { X, Truck, Store } from 'lucide-react';

const DELIVERY_FEE = 6.5;

const input =
  'w-full rounded-lg border border-neutral-300 bg-white px-3 py-3 text-base text-neutral-950 outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 sm:text-sm';

export const CheckoutSummaryModal: React.FC = () => {
  const t = useStrings(shopStrings).checkout;
  const formatPrice = useFormatPrice();
  const { isCheckoutOpen, setIsCheckoutOpen, items, subtotal, freeShippingThreshold, clearCart } = useCart();

  const [fulfillmentType, setFulfillmentType] = useState<'delivery' | 'pickup'>('pickup');
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', city: '' });
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderCode, setOrderCode] = useState('');

  if (!isCheckoutOpen) return null;

  const shippingCost = fulfillmentType === 'delivery' && subtotal < freeShippingThreshold ? DELIVERY_FEE : 0;
  const finalTotal = subtotal + shippingCost;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderCode(`ORD-TM-${Math.floor(10000 + Math.random() * 90000)}`);
    setOrderConfirmed(true);
    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setOrderConfirmed(false);
  };

  const option = (type: 'pickup' | 'delivery') =>
    `flex min-h-11 cursor-pointer items-start gap-3 rounded-xl border p-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-gold ${
      fulfillmentType === type ? 'border-gold bg-pearl-100' : 'border-neutral-300 bg-white hover:border-gold'
    }`;

  return (
    <ModalOverlay onClose={handleClose} className="bg-black/60" label={t.label}>
      <div className="relative w-full max-w-2xl rounded-2xl bg-white text-neutral-950 shadow-2xl">
        <div className="sticky top-0 z-30 flex items-center justify-between gap-3 rounded-t-2xl border-b border-neutral-200 bg-white px-6 py-4">
          <h3 className="font-serif text-2xl font-normal tracking-tight">
            {orderConfirmed ? t.confirmedTitle : t.summaryTitle}
          </h3>
          <button
            onClick={handleClose}
            aria-label={t.close}
            className="-mr-3 flex h-11 w-11 cursor-pointer items-center justify-center text-neutral-600 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {orderConfirmed ? (
          <div className="space-y-6 p-8 text-center">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
                {t.orderCode} {orderCode}
              </p>
              <h3 className="pt-2 font-serif text-3xl font-normal tracking-tight">{t.thanks}</h3>
              <p className="mx-auto max-w-md text-sm font-light leading-relaxed text-neutral-600">{t.thanksText}</p>
            </div>

            <div className="mx-auto max-w-md space-y-2 rounded-xl bg-pearl-100 p-5 text-left text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-600">{t.recipient}</span>
                <span>{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">{t.method}</span>
                <span>{fulfillmentType === 'pickup' ? t.pickupConfirmed : t.deliveryConfirmed}</span>
              </div>
              <div className="flex justify-between border-t border-neutral-200 pt-2 font-serif text-lg">
                <span>{t.total}</span>
                <span>{formatPrice(finalTotal)}</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="min-h-11 cursor-pointer rounded-full bg-neutral-950 px-8 text-sm text-white transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {t.backToShop}
            </button>
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="space-y-6 p-6">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button type="button" onClick={() => setFulfillmentType('pickup')} aria-pressed={fulfillmentType === 'pickup'} className={option('pickup')}>
                <Store className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>
                  <strong className="block text-sm font-medium">{t.pickup}</strong>
                  <span className="text-xs text-neutral-600">{t.pickupNote}</span>
                </span>
              </button>
              <button type="button" onClick={() => setFulfillmentType('delivery')} aria-pressed={fulfillmentType === 'delivery'} className={option('delivery')}>
                <Truck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>
                  <strong className="block text-sm font-medium">{t.delivery}</strong>
                  <span className="text-xs text-neutral-600">
                    {subtotal >= freeShippingThreshold ? t.freeOver : t.deliveryFee(formatPrice(DELIVERY_FEE))}
                  </span>
                </span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-neutral-600">{t.name}</span>
                <input type="text" required autoComplete="name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className={input} />
              </label>
              <label className="block">
                <span className="mb-1 block text-neutral-600">{t.phone}</span>
                <input type="tel" required autoComplete="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className={input} />
              </label>
              {fulfillmentType === 'delivery' && (
                <>
                  <label className="block sm:col-span-2">
                    <span className="mb-1 block text-neutral-600">{t.address}</span>
                    <input type="text" required autoComplete="street-address" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} className={input} />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-neutral-600">{t.city}</span>
                    <input type="text" required autoComplete="address-level2" value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })} className={input} />
                  </label>
                </>
              )}
            </div>

            <div className="space-y-1.5 rounded-xl bg-pearl-100 p-4 text-sm text-neutral-600">
              <div className="flex justify-between">
                <span>{t.subtotal(items.length)}</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>{t.shipping}</span>
                <span>{shippingCost === 0 ? t.free : formatPrice(shippingCost)}</span>
              </div>
              <div className="flex justify-between border-t border-neutral-200 pt-2 font-serif text-lg text-neutral-950">
                <span>{t.orderTotal}</span>
                <span>{formatPrice(finalTotal)}</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="min-h-11 cursor-pointer px-5 text-sm text-neutral-600 transition-colors hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-gold"
              >
                {t.cancel}
              </button>
              <button
                type="submit"
                className="min-h-11 cursor-pointer rounded-full bg-neutral-950 px-8 text-sm text-white transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {t.submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </ModalOverlay>
  );
};
