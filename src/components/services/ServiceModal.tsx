import React from 'react';
import { ModalOverlay } from '../common/ModalOverlay';
import { ServiceItem } from '../../types';
import { useBooking } from '../../context/BookingContext';
import { 
  X, 
  Clock, 
  Sparkles, 
  Check, 
  Calendar, 
  Leaf 
} from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const { openBooking } = useBooking();

  if (!service) return null;

  const handleBook = () => {
    onClose();
    openBooking(service.id);
  };

  return (
    <ModalOverlay onClose={onClose} className="bg-black/60 backdrop-blur-xs" label={service.name}>
      <div className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-3xl shadow-2xl text-neutral-900">

        {/* Close stays pinned while the panel scrolls: on a phone the panel is
            taller than the screen and no backdrop is left to tap. */}
        <div className="sticky top-0 z-40 h-0">
          <button
            onClick={onClose}
            aria-label="Chiudi"
            className="absolute right-4 top-4 p-2.5 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200 text-neutral-800 hover:text-gold transition-colors shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Banner Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden rounded-t-3xl bg-neutral-100">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
          

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-gold bg-neutral-950/80 px-2.5 py-1 rounded-md font-bold">
              {service.subtitle}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-bold mt-1.5">
              {service.name}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-8 space-y-6">
          
          <p className="text-sm text-neutral-600 font-light leading-relaxed">
            {service.description}
          </p>

          {/* Sensory & Botanical Highlight Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.sensoryNotes && (
              <div className="p-3.5 rounded-xl bg-pearl-100 border border-neutral-200 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-gold font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Note & Atmosfera
                </span>
                <p className="text-xs text-neutral-700 italic">{service.sensoryNotes}</p>
              </div>
            )}

            {service.botanicalHighlight && (
              <div className="p-3.5 rounded-xl bg-pearl-100 border border-neutral-200 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-gold font-bold flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5" /> Attivi Botanici
                </span>
                <p className="text-xs text-neutral-700">{service.botanicalHighlight}</p>
              </div>
            )}
          </div>

          {/* Key Inclusions */}
          <div>
            <h4 className="font-serif text-sm text-neutral-900 font-bold uppercase tracking-wider mb-3">
              Cosa Comprende il Servizio
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-neutral-700">
                  <span className="w-4 h-4 rounded-full bg-gold/15 text-gold flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price & Action */}
          <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-1 text-xs text-neutral-500 font-medium">
                <Clock className="w-3.5 h-3.5 text-gold" />
                <span>Durata: {service.duration}</span>
              </div>
              <span className="font-serif text-2xl font-bold text-neutral-950 mt-0.5 block">
                {service.price}
              </span>
            </div>

            <button
              onClick={handleBook}
              className="w-full sm:w-auto px-7 py-3.5 bg-neutral-950 hover:bg-gold text-white hover:text-neutral-950 font-bold text-xs uppercase tracking-widest rounded-md shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-gold group-hover:text-neutral-950" />
              <span>Prenota Questo Servizio</span>
            </button>
          </div>

        </div>

      </div>
    </ModalOverlay>
  );
};