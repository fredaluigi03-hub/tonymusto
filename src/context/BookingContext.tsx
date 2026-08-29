import React, { createContext, useContext, useState } from 'react';
import { ServiceItem, TeamMember, BookingState } from '../types';
import { servicesData } from '../data/servicesData';
import { teamData } from '../data/teamData';
import confetti from 'canvas-confetti';

interface BookingContextType {
  isModalOpen: boolean;
  currentStep: number;
  bookingState: BookingState;
  openBooking: (serviceId?: string, stylistId?: string) => void;
  closeBooking: () => void;
  setStep: (step: number) => void;
  selectService: (service: ServiceItem) => void;
  selectStylist: (stylist: TeamMember) => void;
  selectDateTime: (date: string, timeSlot: string) => void;
  updateCustomerDetails: (details: Partial<BookingState>) => void;
  confirmBooking: () => void;
  resetBooking: () => void;
}

const initialBookingState: BookingState = {
  service: servicesData[0],
  stylist: teamData[0],
  date: null,
  timeSlot: null,
  customerName: '',
  customerPhone: '',
  customerEmail: '',
  notes: '',
  hairType: 'Riccio / Mosso Naturale',
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingState, setBookingState] = useState<BookingState>(initialBookingState);

  const openBooking = (serviceId?: string, stylistId?: string) => {
    let initialService = bookingState.service;
    let initialStylist = bookingState.stylist;

    if (serviceId) {
      const foundService = servicesData.find(s => s.id === serviceId);
      if (foundService) initialService = foundService;
    }

    if (stylistId) {
      const foundStylist = teamData.find(t => t.id === stylistId);
      if (foundStylist) initialStylist = foundStylist;
    }

    setBookingState(prev => ({
      ...prev,
      service: initialService,
      stylist: initialStylist,
    }));

    setCurrentStep(1);
    setIsModalOpen(true);
  };

  const closeBooking = () => {
    setIsModalOpen(false);
  };

  const setStep = (step: number) => {
    setCurrentStep(step);
  };

  const selectService = (service: ServiceItem) => {
    setBookingState(prev => ({ ...prev, service }));
    setCurrentStep(2);
  };

  const selectStylist = (stylist: TeamMember) => {
    setBookingState(prev => ({ ...prev, stylist }));
    setCurrentStep(3);
  };

  const selectDateTime = (date: string, timeSlot: string) => {
    setBookingState(prev => ({ ...prev, date, timeSlot }));
    setCurrentStep(4);
  };

  const updateCustomerDetails = (details: Partial<BookingState>) => {
    setBookingState(prev => ({ ...prev, ...details }));
  };

  const confirmBooking = () => {
    const code = `TM-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingState(prev => ({ ...prev, bookingCode: code }));
    setCurrentStep(5);

    // Trigger elegant celebratory confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FFF2B2', '#B8BCC2', '#EAD7A1']
      });
    } catch {
      // safe fallback
    }
  };

  const resetBooking = () => {
    setBookingState(initialBookingState);
    setCurrentStep(1);
  };

  return (
    <BookingContext.Provider
      value={{
        isModalOpen,
        currentStep,
        bookingState,
        openBooking,
        closeBooking,
        setStep,
        selectService,
        selectStylist,
        selectDateTime,
        updateCustomerDetails,
        confirmBooking,
        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
