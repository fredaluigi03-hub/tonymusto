import React, { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { teamData } from '../../data/teamData';
import { TeamMember } from '../../types';
import { Check, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

export const StepStylist: React.FC = () => {
  const { bookingState, selectStylist, setStep } = useBooking();
  const [selected, setSelected] = useState<TeamMember | null>(bookingState.stylist || teamData[0]);

  return (
    <div className="space-y-6">
      <div className="text-center max-w-lg mx-auto space-y-1">
        <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold">Passo 2 di 4</span>
        <h3 className="font-serif text-2xl font-bold text-neutral-950">Scegli il Tuo Stylist</h3>
        <p className="text-xs text-neutral-500">
          Affidati a Tony Musto o ai nostri specialisti del salone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {teamData.map(stylist => {
          const isSelected = selected?.id === stylist.id;
          return (
            <div
              key={stylist.id}
              onClick={() => setSelected(stylist)}
              className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 relative flex flex-col justify-between ${
                isSelected
                  ? 'border-gold bg-pearl-100/70 shadow-sm ring-1 ring-gold'
                  : 'border-neutral-200 bg-white hover:border-gold/50 hover:bg-pearl-100/40'
              }`}
            >
              {isSelected && (
                <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-gold text-white flex items-center justify-center z-10 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
              )}

              <div>
                <div className="relative mb-3 overflow-hidden rounded-xl aspect-[4/5] border border-neutral-200 bg-neutral-100">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 text-[10px] text-neutral-900 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md border border-neutral-200 shadow-xs font-semibold">
                    <Sparkles className="w-3 h-3 text-gold" />
                    <span className="truncate">{stylist.experience}</span>
                  </div>
                </div>

                <h4 className="font-serif text-lg font-bold text-neutral-950">{stylist.name}</h4>
                <p className="text-xs text-gold font-bold mt-0.5">{stylist.role}</p>
                <p className="text-xs text-neutral-600 mt-1.5 line-clamp-2 leading-relaxed">
                  {stylist.specialty}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-neutral-100 text-[11px] text-neutral-500 italic">
                "{stylist.quote.slice(0, 75)}..."
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="py-2.5 -my-1 text-xs uppercase tracking-wider text-neutral-600 hover:text-gold font-bold flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Indietro</span>
        </button>

        <button
          type="button"
          disabled={!selected}
          onClick={() => selected && selectStylist(selected)}
          className="px-7 py-3 bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors rounded-md flex items-center gap-2 shadow-xs disabled:opacity-40"
        >
          <span>Scegli Data e Orario</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
