import React from 'react';
import { ModalOverlay } from '../common/ModalOverlay';
import { ServiceItem } from '../../types';
import { useBooking } from '../../context/BookingContext';
import { useStrings } from '../../i18n/strings';
import { servicesStrings } from '../../i18n/services';
import { X } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const { openBooking } = useBooking();
  const t = useStrings(servicesStrings).modal;

  if (!service) return null;

  const handleBook = () => {
    onClose();
    openBooking(service.id);
  };

  return (
    <ModalOverlay onClose={onClose} className="bg-black/60" label={service.name}>
      <div className="relative w-full max-w-2xl rounded-2xl bg-white text-neutral-950 shadow-2xl">
        {/* Close stays pinned while the panel scrolls: on a phone the panel is
            taller than the screen and no backdrop is left to tap. */}
        <div className="sticky top-0 z-40 h-0">
          <button
            onClick={onClose}
            aria-label={t.close}
            className="absolute right-4 top-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white text-neutral-950 shadow-md transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <img src={service.image} alt={service.name} className="h-60 w-full rounded-t-2xl object-cover sm:h-72" />
        <div className="space-y-8 p-6 sm:p-10">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">{service.subtitle}</p>
            <h2 className="mt-3 font-serif text-3xl font-normal tracking-tight sm:text-4xl">{service.name}</h2>
            <p className="mt-4 font-light leading-relaxed text-neutral-600">{service.description}</p>
          </div>

          {(service.sensoryNotes || service.botanicalHighlight) && (
            <dl className="space-y-4 border-t border-neutral-200 pt-6 text-sm">
              {service.sensoryNotes && (
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.3em] text-gold">{t.notes}</dt>
                  <dd className="mt-1 font-light text-neutral-600">{service.sensoryNotes}</dd>
                </div>
              )}
              {service.botanicalHighlight && (
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.3em] text-gold">{t.botanical}</dt>
                  <dd className="mt-1 font-light text-neutral-600">{service.botanicalHighlight}</dd>
                </div>
              )}
            </dl>
          )}

          <div className="border-t border-neutral-200 pt-6">
            <h3 className="text-[11px] uppercase tracking-[0.3em] text-gold">{t.includes}</h3>
            <ul className="mt-4 space-y-2 text-sm font-light text-neutral-600">
              {service.features.map(feature => (
                <li key={feature} className="border-l border-gold pl-3">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-serif text-2xl">{service.price}</p>
              <p className="mt-1 text-sm font-light text-neutral-600">
                {t.duration} {service.duration}
              </p>
            </div>
            <button
              onClick={handleBook}
              className="min-h-11 cursor-pointer rounded-full bg-neutral-950 px-8 text-sm font-medium text-white transition-colors hover:bg-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {t.book}
            </button>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
};
