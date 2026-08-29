import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { 
  X, 
  CheckCircle2, 
  ShoppingBag, 
  Truck, 
  Store, 
  CreditCard, 
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const CheckoutSummaryModal: React.FC = () => {
  const { 
    isCheckoutOpen, 
    setIsCheckoutOpen, 
    items, 
    subtotal, 
    clearCart 
  } = useCart();

  const [fulfillmentType, setFulfillmentType] = useState<'delivery' | 'pickup'>('pickup');
  const [formData, setFormData] = useState({
    name: 'Chiara Esposito',
    email: 'chiara.esposito@email.it',
    phone: '333 1234567',
    address: 'Corso Vittorio Emanuele 45',
    city: 'Avellino',
    notes: 'Lasciare al portiere se assente',
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderCode, setOrderCode] = useState('');

  if (!isCheckoutOpen) return null;

  const shippingCost = fulfillmentType === 'delivery' ? (subtotal >= 65 ? 0 : 6.50) : 0;
  const finalTotal = subtotal + shippingCost;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `ORD-TM-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderCode(code);
    setOrderConfirmed(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#FFF2B2', '#EAD7A1']
      });
    } catch {
      // safe fallback
    }

    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setOrderConfirmed(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-3xl shadow-2xl overflow-hidden text-neutral-900 my-8">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-neutral-200 bg-pearl-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full border border-gold/40 bg-white text-gold shadow-xs">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-neutral-950">
                {orderConfirmed ? 'Ordine Confermato con Successo' : 'Riepilogo Ordine'}
              </h3>
              <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">
                Tony Musto Shop Ufficiale
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200/60 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderConfirmed ? (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600 shadow-xs">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-gold uppercase px-3 py-1 rounded-full bg-pearl-100 border border-gold/30 font-bold">
                Codice Ordine: {orderCode}
              </span>
              <h3 className="font-serif text-2xl font-bold text-neutral-950 pt-2">
                Grazie per il tuo Acquisto
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Abbiamo ricevuto il tuo ordine. Riceverai un messaggio di conferma con tutti i dettagli e il tracking della spedizione.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-pearl-100 border border-neutral-200 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-500">Destinatario:</span>
                <strong className="text-neutral-900">{formData.name}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Modalità:</span>
                <span className="text-gold font-semibold">
                  {fulfillmentType === 'pickup' ? 'Ritiro in Salone a Montemiletto' : 'Spedizione a Domicilio'}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-neutral-200 font-serif font-bold text-sm">
                <span>Totale:</span>
                <span className="text-neutral-950">€{finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="px-8 py-3 bg-neutral-950 text-white font-bold text-xs uppercase tracking-widest rounded-md hover:bg-gold hover:text-neutral-950 transition-colors shadow-xs"
            >
              Torna allo Shop
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handlePlaceOrder} className="p-6 space-y-6">
            
            {/* Fulfillment Selector */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFulfillmentType('pickup')}
                className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                  fulfillmentType === 'pickup'
                    ? 'border-gold bg-pearl-100 ring-1 ring-gold shadow-xs'
                    : 'border-neutral-200 bg-white hover:border-gold/40'
                }`}
              >
                <Store className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs font-bold text-neutral-900">Ritiro in Salone</strong>
                  <span className="text-[11px] text-neutral-500">Gratuito a Montemiletto</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setFulfillmentType('delivery')}
                className={`p-4 rounded-2xl border text-left flex items-start gap-3 transition-all ${
                  fulfillmentType === 'delivery'
                    ? 'border-gold bg-pearl-100 ring-1 ring-gold shadow-xs'
                    : 'border-neutral-200 bg-white hover:border-gold/40'
                }`}
              >
                <Truck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-xs font-bold text-neutral-900">Spedizione a Casa</strong>
                  <span className="text-[11px] text-neutral-500">
                    {subtotal >= 65 ? 'Gratuita (> €65)' : '€6.50 (24/48h)'}
                  </span>
                </div>
              </button>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-neutral-700 mb-1 font-semibold">Nome e Cognome *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-neutral-900 focus:outline-none focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-neutral-700 mb-1 font-semibold">Telefono *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-neutral-900 focus:outline-none focus:border-gold"
                />
              </div>

              {fulfillmentType === 'delivery' && (
                <>
                  <div className="sm:col-span-2">
                    <label className="block text-neutral-700 mb-1 font-semibold">Indirizzo di Spedizione *</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-neutral-900 focus:outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-700 mb-1 font-semibold">Città e CAP *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 text-neutral-900 focus:outline-none focus:border-gold"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Total Recap */}
            <div className="p-4 rounded-2xl bg-pearl-100 border border-neutral-200 space-y-1.5 text-xs">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotale Prodotti ({items.length} articoli):</span>
                <span className="font-mono font-bold text-neutral-900">€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Spedizione:</span>
                <span className="font-mono">{shippingCost === 0 ? <strong className="text-emerald-700 font-bold">Gratuita</strong> : `€${shippingCost.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-neutral-200 text-sm font-serif font-bold text-neutral-950">
                <span>Totale Ordine:</span>
                <span className="text-base text-neutral-950 font-mono">€{finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-2.5 text-xs uppercase tracking-wider text-neutral-600 hover:text-neutral-900 font-bold"
              >
                Annulla
              </button>
              <button
                type="submit"
                className="px-7 py-3 bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 font-bold text-xs uppercase tracking-widest rounded-md shadow-xs transition-colors"
              >
                Conferma e Invia Ordine
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
