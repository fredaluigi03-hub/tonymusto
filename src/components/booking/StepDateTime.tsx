import React, { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  ArrowRight, 
  ArrowLeft,
  Sun,
  Sunset
} from 'lucide-react';

export const StepDateTime: React.FC = () => {
  const { bookingState, selectDateTime, setStep } = useBooking();

  // Generate real upcoming dates for the next 14 days
  const today = new Date();
  const availableDates = Array.from({ length: 14 }).map((_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i + 1);
    const dayOfWeek = d.getDay(); // 0 is Sunday, 1 is Monday
    const isClosed = dayOfWeek === 0 || dayOfWeek === 1; // Closed Sun & Mon
    
    const dayName = d.toLocaleDateString('it-IT', { weekday: 'short' });
    const dayNumber = d.getDate();
    const monthName = d.toLocaleDateString('it-IT', { month: 'short' });
    const isoDate = d.toISOString().split('T')[0];

    return {
      date: d,
      isoDate,
      dayName: dayName.charAt(0).toUpperCase() + dayName.slice(1),
      dayNumber,
      monthName,
      isClosed,
    };
  });

  const firstOpenDate = availableDates.find(d => !d.isClosed)?.isoDate || availableDates[0].isoDate;
  const [selectedDate, setSelectedDate] = useState<string>(bookingState.date || firstOpenDate);
  const [selectedSlot, setSelectedSlot] = useState<string>(bookingState.timeSlot || '10:00');

  const morningSlots = ['08:30', '09:15', '10:00', '10:45', '11:30', '12:15'];
  const afternoonSlots = ['14:30', '15:15', '16:00', '16:45', '17:30', '18:15'];

  const handleContinue = () => {
    if (selectedDate && selectedSlot) {
      selectDateTime(selectedDate, selectedSlot);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center max-w-lg mx-auto space-y-1">
        <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold">Passo 3 di 4</span>
        <h3 className="font-serif text-2xl font-bold text-neutral-950">Scegli Data e Ora</h3>
        <p className="text-xs text-neutral-500">
          Orari salone: <strong>Martedì – Sabato (8:30 – 19:00)</strong> · Chiuso Lunedì e Domenica
        </p>
      </div>

      {/* Date Carousel Selector */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-neutral-600">
          <span className="flex items-center gap-1.5 text-gold font-semibold">
            <CalendarIcon className="w-4 h-4" />
            <span>Seleziona il giorno</span>
          </span>
          <span className="text-[11px] text-neutral-400">Prossimi 14 giorni</span>
        </div>

        <div className="flex gap-2.5 overflow-x-auto pb-2 pt-1 scrollbar-thin">
          {availableDates.map(item => {
            const isSelected = selectedDate === item.isoDate;
            if (item.isClosed) {
              return (
                <div
                  key={item.isoDate}
                  className="flex-shrink-0 w-20 p-3 rounded-xl border border-neutral-200 bg-neutral-100 opacity-40 cursor-not-allowed text-center flex flex-col items-center justify-center"
                >
                  <span className="text-[10px] text-neutral-400 uppercase font-semibold">{item.dayName}</span>
                  <span className="text-sm font-serif font-bold text-neutral-400 my-0.5">{item.dayNumber}</span>
                  <span className="text-[9px] text-red-500 font-mono font-bold">Chiuso</span>
                </div>
              );
            }

            return (
              <button
                key={item.isoDate}
                type="button"
                onClick={() => setSelectedDate(item.isoDate)}
                className={`flex-shrink-0 w-20 p-3 rounded-xl border text-center transition-all duration-200 flex flex-col items-center justify-center cursor-pointer ${
                  isSelected
                    ? 'border-gold bg-neutral-950 text-white shadow-sm scale-105'
                    : 'border-neutral-200 bg-white text-neutral-700 hover:border-gold/50 hover:bg-pearl-100'
                }`}
              >
                <span className={`text-[10px] uppercase font-bold ${isSelected ? 'text-gold' : 'text-neutral-500'}`}>
                  {item.dayName}
                </span>
                <span className={`text-base font-serif font-bold my-0.5 ${isSelected ? 'text-white' : 'text-neutral-950'}`}>
                  {item.dayNumber}
                </span>
                <span className={`text-[10px] ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>{item.monthName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slots */}
      <div className="space-y-4 pt-1">
        {/* Mattina */}
        <div className="p-4 rounded-xl bg-pearl-100/60 border border-neutral-200 space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-serif text-neutral-900 font-bold">
            <Sun className="w-4 h-4 text-gold" />
            <span>Mattina (8:30 – 12:30)</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {morningSlots.map(time => {
              const isSelected = selectedSlot === time;
              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedSlot(time)}
                  className={`py-2 px-3 rounded-lg text-xs font-mono font-semibold transition-all ${
                    isSelected
                      ? 'bg-neutral-950 text-white shadow-xs'
                      : 'bg-white text-neutral-800 hover:bg-pearl-200 border border-neutral-200'
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pomeriggio */}
        <div className="p-4 rounded-xl bg-pearl-100/60 border border-neutral-200 space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-serif text-neutral-900 font-bold">
            <Sunset className="w-4 h-4 text-gold" />
            <span>Pomeriggio (14:30 – 19:00)</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {afternoonSlots.map(time => {
              const isSelected = selectedSlot === time;
              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedSlot(time)}
                  className={`py-2 px-3 rounded-lg text-xs font-mono font-semibold transition-all ${
                    isSelected
                      ? 'bg-neutral-950 text-white shadow-xs'
                      : 'bg-white text-neutral-800 hover:bg-pearl-200 border border-neutral-200'
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="py-2.5 -my-1 text-xs uppercase tracking-wider text-neutral-600 hover:text-gold font-bold flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Indietro</span>
        </button>

        <button
          type="button"
          disabled={!selectedDate || !selectedSlot}
          onClick={handleContinue}
          className="px-7 py-3 bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors rounded-md flex items-center gap-2 shadow-xs disabled:opacity-40"
        >
          <span>Inserisci i Tuoi Dati</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
