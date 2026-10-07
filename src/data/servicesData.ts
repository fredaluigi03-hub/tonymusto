import type { ServiceItem } from '../types';

export const servicesData: Pick<ServiceItem, 'id' | 'category' | 'image'>[] = [
  {
    id: 'taglio-sartoriale',
    category: 'sartoriale',
    image: 'https://tonymusto.it/wp-content/uploads/2022/06/IMG_6535-1.jpg',
  },
  {
    id: 'rituale-ricci-curl-up',
    category: 'ricci',
    image: 'https://tonymusto.it/wp-content/uploads/2022/06/1037aaf5-d290-4ea3-b26f-13d8e64f5b86-1.jpg',
  },
  {
    id: 'balayage-alchemico',
    category: 'colore',
    image: 'https://tonymusto.it/wp-content/uploads/2022/06/IMG_8897.jpeg',
  },
  {
    id: 'hair-spa-bee-it',
    category: 'spa',
    image: 'https://tonymusto.it/wp-content/uploads/2022/06/IMG_6247.jpeg',
  },
  {
    id: 'bridal-atelier-experience',
    category: 'bridal',
    image: 'https://tonymusto.it/wp-content/uploads/2022/06/752F748E-514B-40F1-B3F0-7C80E0CAE228-scaled.jpg',
  }
];
