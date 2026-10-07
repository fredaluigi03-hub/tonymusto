export interface ServiceItem {
  id: string;
  category: 'sartoriale' | 'colore' | 'ricci' | 'spa' | 'bridal';
  name: string;
  subtitle: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  sensoryNotes?: string;
  botanicalHighlight?: string;
  features: string[];
}

export interface ProductItem {
  id: string;
  collection: 'bee-it' | 'curl-up' | 'restorative' | 'bath-body';
  name: string;
  volume: string;
  price: number;
  description: string;
  benefits: string[];
  keyIngredients?: string[];
  ecoAction?: string;
  image: string;
  badge?: string;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  quote: string;
  image: string;
}

export interface BookingState {
  service: ServiceItem | null;
  stylist: TeamMember | null;
  date: string | null;
  timeSlot: string | null;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  notes: string;
  hairType: string;
  bookingCode?: string;
}
