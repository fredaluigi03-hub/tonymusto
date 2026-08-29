import React, { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { servicesData } from '../../data/servicesData';
import { ServiceItem } from '../../types';
import { Clock, Check, ArrowRight } from 'lucide-react';

export const StepService: React.FC = () => {
  const { bookingState, selectService } = useBooking();
  const [selected, setSelected] = useState<ServiceItem | null>(bookingState.service || servicesData[0]);
  const [filter, setFilter] = useState<'all' | 'sartoriale' | 'ricci' | 'colore' | 'spa' | 'bridal'>('all');

  const categories = [
    { id: 'all', label: 'Tutti i Trattamenti' },
    { id: 'sartoriale', label: 'Taglio Sartoriale' },
    { id: 'ricci', label: 'Bio Organic Curl' },
    { id: 'colore', label: 'Color Couture' },
    { id: 'spa', label: 'Hair Spa BEE IT' },
    { id: 'bridal', label: 'Spose' },
  ];

  const filteredServices = filter === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === filter);

  return (
    <div className="space-y-6">
      <div className="text-center max-w-lg mx-auto space-y-1">
        <span className="text-xs uppercase tracking-[0.2em] text-gold font-bold">Passo 1 di 4</span>
        <h3 className="font-serif text-2xl font-bold text-neutral-950">Seleziona il Tuo Trattamento</h3>
        <p className="text-xs text-neutral-500">
          Scegli il servizio desiderato tra le nostre specialità sartoriali e botaniche.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center justify-center gap-2 flex-wrap pb-1">
        {categories.map(cat => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setFilter(cat.id as any)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              filter === cat.id
                ? 'bg-neutral-950 text-white shadow-xs'
                : 'bg-pearl-100 text-neutral-700 hover:text-gold border border-neutral-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[380px] overflow-y-auto pr-1">
        {filteredServices.map(service => {
          const isSelected = selected?.id === service.id;
          return (
            <div
              key={service.id}
              onClick={() => setSelected(service)}
              className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 relative flex gap-4 ${
                isSelected
                  ? 'border-gold bg-pearl-100/70 shadow-sm ring-1 ring-gold'
                  : 'border-neutral-200 bg-white hover:border-gold/50 hover:bg-pearl-100/40'
              }`}
            >
              {/* Service Image */}
              <img
                src={service.image}
                alt={service.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover border border-neutral-200 flex-shrink-0"
              />

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-1">
                    <h4 className="font-serif text-base font-bold text-neutral-950 leading-tight">
                      {service.name}
                    </h4>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-gold text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-gold font-semibold mt-0.5">{service.subtitle}</p>
                  <p className="text-xs text-neutral-600 line-clamp-2 mt-1 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 mt-2 border-t border-neutral-100 text-xs">
                  <span className="flex items-center gap-1 text-neutral-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    {service.duration}
                  </span>
                  <span className="font-serif font-bold text-neutral-950 text-sm">
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Next */}
      <div className="flex justify-end pt-3 border-t border-neutral-100">
        <button
          type="button"
          disabled={!selected}
          onClick={() => selected && selectService(selected)}
          className="px-7 py-3 bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 font-bold text-xs uppercase tracking-wider transition-colors rounded-md flex items-center gap-2 shadow-xs disabled:opacity-40"
        >
          <span>Continua con lo Stylist</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
