import React from 'react';
import { useBooking } from '../../context/BookingContext';
import { 
  CheckCircle2, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Sparkles, 
  Share2, 
  Scissors 
} from 'lucide-react';

export const StepConfirmation: React.FC = () => {
  const { bookingState, closeBooking, resetBooking } = useBooking();

  const handleFinish = () => {
    resetBooking();
    closeBooking();
  };

  const whatsappMessage = encodeURIComponent(
    `Salve Tony Musto Parrucchieri, ho confermato la prenotazione ${bookingState.bookingCode} per il servizio "${bookingState.service?.name}" in data ${bookingState.date} alle ${bookingState.timeSlot}. A presto!`
  );

  return (
    <div className="space-y-6 text-center py-2">
      {/* Success Emblem */}
      <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center shadow-xs">
        <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
      </div>

      <div className="space-y-1.5">
        <span className="text-xs font-mono tracking-widest text-gold uppercase px-3 py-1 rounded-full bg-pearl-100 border border-gold/30 font-bold">
          Codice Prenotazione: {bookingState.bookingCode}
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 pt-1">
          Prenotazione Confermata
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
          Ti aspettiamo in salone a Montemiletto per il tuo appuntamento.
        </p>
      </div>

      {/* Ticket / Voucher Card */}
      <div className="max-w-md mx-auto p-5 rounded-2xl bg-pearl-100 border border-neutral-200 shadow-xs text-left space-y-3.5">
        <div className="border-b border-neutral-200 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="w-4 h-4 text-gold" />
            <span className="font-serif font-bold text-sm tracking-wider text-neutral-950">
              TONY MUSTO PARRUCCHIERI
            </span>
          </div>
          <span className="text-xs text-gold font-bold font-mono">{bookingState.service?.price}</span>
        </div>

        <div className="space-y-2.5 text-xs">
          <div className="flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-neutral-400 block text-[10px] uppercase tracking-wider font-semibold">Trattamento</span>
              <strong className="text-neutral-950 font-serif text-sm font-bold">{bookingState.service?.name}</strong>
              <span className="text-neutral-500 block text-[11px]">({bookingState.service?.duration})</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="flex items-start gap-2">
              <User className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-neutral-400 block text-[10px] uppercase font-semibold">Stylist</span>
                <span className="text-neutral-800 font-medium">{bookingState.stylist?.name}</span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-neutral-400 block text-[10px] uppercase font-semibold">Data & Ora</span>
                <span className="text-gold font-mono font-bold">{bookingState.date} · {bookingState.timeSlot}</span>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2.5 pt-2 border-t border-neutral-200">
            <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-neutral-400 block text-[10px] uppercase font-semibold">Luogo</span>
              <span className="text-neutral-700">Via XXIV Maggio 13/14, 83038 Montemiletto (AV)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <a
          href={`https://wa.me/393770293092?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
        >
          <Share2 className="w-4 h-4" />
          <span>Invia Promemoria WhatsApp</span>
        </a>

        <button
          onClick={handleFinish}
          className="w-full sm:w-auto px-7 py-2.5 bg-neutral-950 text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-gold hover:text-neutral-950 transition-all shadow-xs"
        >
          Chiudi
        </button>
      </div>
    </div>
  );
};
