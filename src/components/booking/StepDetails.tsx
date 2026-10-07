import React, { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { useStrings } from '../../i18n/strings';
import { bookingStrings, formatBookingDate, HAIR_TYPE_IDS } from '../../i18n/booking';
import { useLang } from '../../i18n/LanguageContext';
import { ArrowLeft, Sparkles, Shield, User, Phone, Mail, FileText } from 'lucide-react';

export const StepDetails: React.FC = () => {
  const { bookingState, updateCustomerDetails, confirmBooking, setStep } = useBooking();
  const { lang } = useLang();
  const t = useStrings(bookingStrings).details;

  const [name, setName] = useState(bookingState.customerName || '');
  const [phone, setPhone] = useState(bookingState.customerPhone || '');
  const [email, setEmail] = useState(bookingState.customerEmail || '');
  const [hairType, setHairType] = useState(bookingState.hairType || 'curly');
  const [notes, setNotes] = useState(bookingState.notes || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    updateCustomerDetails({
      customerName: name,
      customerPhone: phone,
      customerEmail: email,
      hairType,
      notes,
    });
    confirmBooking();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center max-w-lg mx-auto space-y-1">
        <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold">{t.step}</span>
        <h3 className="font-serif text-2xl font-bold text-neutral-950">{t.title}</h3>
        <p className="text-xs text-neutral-500">
          {t.intro}
        </p>
      </div>
      <div className="p-4 rounded-xl bg-pearl-100 border border-neutral-200 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div>
          <span className="text-neutral-500">{t.service}</span>{' '}
          <strong className="text-neutral-950 font-serif font-bold">{bookingState.service?.name}</strong>
        </div>
        <div>
          <span className="text-neutral-500">{t.stylist}</span>{' '}
          <strong className="text-neutral-900">{bookingState.stylist?.name}</strong>
        </div>
        <div>
          <span className="text-neutral-500">{t.dateTime}</span>{' '}
          <strong className="text-gold font-mono font-bold">{bookingState.date && formatBookingDate(bookingState.date, lang)} {t.at} {bookingState.timeSlot}</strong>
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-neutral-700 mb-1 font-semibold flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-gold" />
              <span>{t.name}</span>
            </label>
            <input
              type="text"
              required
              placeholder={t.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
            />
          </div>

          <div>
            <label className="block text-neutral-700 mb-1 font-semibold flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>{t.phone}</span>
            </label>
            <input
              type="tel"
              required
              placeholder={t.phonePlaceholder}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-neutral-700 mb-1 font-semibold flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-gold" />
              <span>{t.email}</span>
            </label>
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
            />
          </div>

          <div>
            <label className="block text-neutral-700 mb-1 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>{t.hairType}</span>
            </label>
            <select
              value={hairType}
              onChange={(e) => setHairType(e.target.value)}
              className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-neutral-900 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
            >
              {HAIR_TYPE_IDS.map(id => (
                <option key={id} value={id}>
                  {t.hairOptions[id]}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs text-neutral-700 mb-1 font-semibold flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-gold" />
            <span>{t.notes}</span>
          </label>
          <textarea
            rows={2}
            placeholder={t.notesPlaceholder}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full bg-white border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 p-3 rounded-lg bg-pearl-100 border border-neutral-200 text-xs text-neutral-600">
        <Shield className="w-4 h-4 text-gold flex-shrink-0" />
        <span>{t.payment}</span>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
        <button
          type="button"
          onClick={() => setStep(3)}
          className="py-2.5 -my-1 text-xs uppercase tracking-wider text-neutral-600 hover:text-gold font-bold flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.back}</span>
        </button>

        <button
          type="submit"
          className="px-8 py-3.5 bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors rounded-md shadow-md flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-gold group-hover:text-neutral-950" />
          <span>{t.submit}</span>
        </button>
      </div>
    </form>
  );
};
