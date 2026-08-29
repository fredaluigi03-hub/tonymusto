import { ReviewItem, AwardItem } from '../types';

export const reviewsData: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Camilla D’Amelio',
    roleOrCity: 'Avellino / Fashion Consultant',
    rating: 5,
    date: 'Maggio 2026',
    content: 'Tony Musto non è un semplice salone: è un rifugio sensoriale inaspettato nel cuore dell’Irpinia. Il trattamento Bio Organic Curl Up ha resuscitato i miei ricci dopo anni di piastra. Professionalità e accoglienza di livello metropolitano con il calore autentico di casa.',
    service: 'Rituale Bio Organic Curl Up'
  },
  {
    id: 'rev-2',
    author: 'Valeria Sannino',
    roleOrCity: 'Montemiletto (AV)',
    rating: 5,
    date: 'Aprile 2026',
    content: 'Adoro l’impegno etico con i prodotti BEE IT e il profumo paradisiaco del salone. Il balayage sfumato a mano libera è luminosissimo, naturale e senza alcun effetto artificiale. Tony è un vero artista delle forme.',
    service: 'Balayage Alchemico & Hair Spa'
  },
  {
    id: 'rev-3',
    author: 'Serena Marchesi',
    roleOrCity: 'Napoli / Sposa',
    rating: 5,
    date: 'Giugno 2026',
    content: 'Ho scelto Tony Musto per il mio matrimonio a Villa Diamante. Il percorso sposa è stato impeccabile: ascolto totale, prove meticolose e un’acconciatura da sogno che è rimasta perfetta per oltre 14 ore di festa.',
    service: 'Atelier Sposa & Wedding Ritual'
  },
  {
    id: 'rev-4',
    author: 'Federica Vitiello',
    roleOrCity: 'Benevento',
    rating: 5,
    date: 'Luglio 2026',
    content: 'Il taglio sartoriale a mano libera fa davvero la differenza nella vita di tutti i giorni. I capelli si mettono in piega da soli anche a casa con una semplice asciugata veloce. Un’eccellenza rara.',
    service: 'Taglio Sartoriale Morfologico'
  }
];

export const awardsData: AwardItem[] = [
  {
    id: 'award-1',
    year: '2025 / 2026',
    title: 'Top Italian Hair Boutique & Sustainable Salon',
    organization: 'Italian Hairdressers Guild',
    description: 'Riconoscimento per l’eccellenza stilistica e l’impegno per la sostenibilità e la biodiversità con la linea BEE IT.',
    badge: 'Eccellenza Italiana'
  },
  {
    id: 'award-2',
    year: '2024',
    title: 'Curly Mastery Award — Best Bio-Texture Protocol',
    organization: 'Beauty Organic Forum',
    description: 'Premio per l’innovazione nel trattamento e valorizzazione naturale dei capelli ricci e mossi.',
    badge: 'Curly Master'
  },
  {
    id: 'award-3',
    year: '2023',
    title: 'Bridal Stylist of the Year — Campania',
    organization: 'Wedding & Couture Excellence',
    description: 'Primo premio regionale per le acconciature sposa e la cura personalizzata dell’immagine nuziale.',
    badge: 'Bridal Excellence'
  }
];
