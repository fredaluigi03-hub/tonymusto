import { ProductItem } from '../types';

export const productsData: ProductItem[] = [
  {
    id: 'curl-me-crema-ricci',
    collection: 'curl-up',
    name: 'Curl Me — Crema Definizione Ricci',
    volume: '200 ml',
    price: 20.00,
    rating: 5.0,
    reviewsCount: 48,
    description: 'Crema professionale per la definizione dei capelli ricci e mossi. Elimina il crespo, dona elasticità duratura e protegge la struttura naturale del boccolo senza appesantire.',
    benefits: [
      'Definizione elastica del riccio a memoria di forma',
      'Azione anticrespo e anti-umidità professionale',
      'Lucentezza naturale senza residui o rigidità'
    ],
    keyIngredients: ['Estratti Botanici Naturali', 'Oli Emollienti Puri', 'Proteine Modellanti'],
    image: 'https://tonymusto.it/wp-content/uploads/2024/08/curl-me_tony-musto.jpg',
    badge: 'Curly Bestseller'
  },
  {
    id: 'shampoo-bee-it-250ml',
    collection: 'bee-it',
    name: 'Shampoo Bee It — Nutriente Salva-Api',
    volume: '250 ml',
    price: 11.90,
    rating: 5.0,
    reviewsCount: 56,
    description: 'Shampoo biologico ad alta tollerabilità cutanea per capelli morbidi e lucenti. La linea BEE IT sostiene attivamente la salvaguardia delle api attraverso la piantumazione di oasi fiorite.',
    benefits: [
      'Detersione delicata e nutriente per cute e fibra',
      'Formula eco-compatibile senza siliconi pesanti',
      'Contribuisce alla tutela della biodiversità'
    ],
    keyIngredients: ['Miele e Propoli Biologici', 'Estratto di Camomilla', 'Base Lavante Vegetale'],
    ecoAction: 'Finanzia la creazione di oasi nettarifere per salvare le api',
    image: 'https://tonymusto.it/wp-content/uploads/2022/10/giallo-250.jpeg',
    badge: 'Save the Bees'
  },
  {
    id: 'maschera-ristrutturante-bee-it',
    collection: 'bee-it',
    name: 'Maschera Ristrutturante Bee It',
    volume: '250 ml',
    price: 13.50,
    rating: 4.9,
    reviewsCount: 42,
    description: 'Trattamento ristrutturante profondo per capelli crespi, secchi o sfibrati. Ripara la fibra capillare donando setosità straordinaria e pettinabilità immediata.',
    benefits: [
      'Ricostruzione intensiva delle cuticole danneggiate',
      'Nutrimento profondo e morbidezza vellutata',
      'Lucentezza specchio e protezione dal calore'
    ],
    keyIngredients: ['Pappa Reale e Cera d’Api', 'Burro di Karité Bio', 'Amminoacidi Rigeneranti'],
    ecoAction: 'Packaging riciclabile e supporto all’apicoltura etica',
    image: 'https://tonymusto.it/wp-content/uploads/2022/10/rosso-250.jpeg',
    badge: 'Eco Repair'
  },
  {
    id: 'bagnodoccia-bee-it-250ml',
    collection: 'bath-body',
    name: 'Bagnodoccia Bee It Sensoriale',
    volume: '250 ml',
    price: 8.50,
    rating: 4.9,
    reviewsCount: 35,
    description: 'Detergente corpo delicato ed emolliente. Trasforma la doccia quotidiana in un rituale aromaterapico rilassante, rispettando il naturale film idrolipidico della pelle.',
    benefits: [
      'Pelle morbida, vellutata e idratata a lungo',
      'Profumazione calda e avvolgente',
      'Formula ecologica rispettosa dell’ambiente'
    ],
    keyIngredients: ['Miele Millefiori Bio', 'Estratto di Malva', 'Oli Essenziali Puri'],
    ecoAction: 'Ogni flacone contribuisce alla salvaguardia delle api',
    image: 'https://tonymusto.it/wp-content/uploads/2022/10/blu-250.jpeg',
    badge: 'Body Spa'
  },
  {
    id: 'argan-me-olio-dargan',
    collection: 'restorative',
    name: 'Argan Me — Olio d’Argan Puro',
    volume: '100 ml',
    price: 20.00,
    rating: 5.0,
    reviewsCount: 39,
    description: 'Fluido disciplinante e illuminante all’Olio d’Argan puro. Nutre in profondità, sigilla le doppie punte e protegge da piastra e phon regalando una lucentezza istantanea.',
    benefits: [
      'Nutrimento concentrato e tocco setoso',
      'Azione anti-crespo e termo-protettiva',
      'Assorbimento rapido senza ungere'
    ],
    keyIngredients: ['Olio di Argan Puro Certificato', 'Vitamina E Naturale', 'Filtri UV Protettivi'],
    image: 'https://tonymusto.it/wp-content/uploads/2024/08/argan-me-tony-musto.jpg',
    badge: 'Luxury Oil'
  },
  {
    id: 'dont-frizz-me-lacca',
    collection: 'restorative',
    name: 'Don’t Frizz Me — Lacca Spray Anti-Frizz',
    volume: '300 ml',
    price: 15.00,
    rating: 4.8,
    reviewsCount: 31,
    description: 'Lacca spray professionale anti-crespo a base d’acqua. Fissa l’acconciatura con tenuta leggera e flessibile, preservando la morbidezza e la naturale luminosità della chioma.',
    benefits: [
      'Tenuta invisibile e flessibile senza residui',
      'Formula anti-umidità ad asciugatura rapida',
      'Si elimina con un semplice colpo di spazzola'
    ],
    keyIngredients: ['Polimeri Idrosolubili', 'Pantenolo B5', 'Filtro Anti-Umidità'],
    image: 'https://tonymusto.it/wp-content/uploads/2024/08/1.jpg',
    badge: 'Pro Styling'
  },
  {
    id: 'texture-me-spray-sea-salt',
    collection: 'curl-up',
    name: 'Texture Me — Spray Sea Salt',
    volume: '200 ml',
    price: 20.00,
    rating: 4.9,
    reviewsCount: 28,
    description: 'Spray texturizzante al sale marino per onde naturali stile "beach waves". Regala corpo, volume e una texture opaca naturale perfetta per look disinvolti e contemporanei.',
    benefits: [
      'Effetto onde da spiaggia voluminose',
      'Texture definita a tenuta media naturale',
      'Non secca il capello grazie agli attivi idratanti'
    ],
    keyIngredients: ['Sale Marino Minerale', 'Estratto di Alghe Brune', 'Glicerina Vegetale'],
    image: 'https://tonymusto.it/wp-content/uploads/2024/08/texture-me_tony-musto.jpg',
    badge: 'Beach Waves'
  },
  {
    id: 'style-me-cera-opaca',
    collection: 'restorative',
    name: 'Style Me — Cera Opaca Texturizzante',
    volume: '100 ml',
    price: 16.00,
    rating: 4.9,
    reviewsCount: 25,
    description: 'Cera opaca modellante a tenuta forte per tagli corti e medi. Permette di scolpire e ridefinire la forma in qualsiasi momento della giornata con finish totalmente matt.',
    benefits: [
      'Tenuta forte e duratura',
      'Finish opaco naturale zero lucido',
      'Facile da lavorare e rimodellabile'
    ],
    keyIngredients: ['Argilla Naturale', 'Cera Carnauba', 'Oli Essenziali'],
    image: 'https://tonymusto.it/wp-content/uploads/2024/08/style-me_tony-musto.jpg',
    badge: 'Matt Finish'
  },
  {
    id: 'control-me-cera-lucida',
    collection: 'restorative',
    name: 'Control Me — Cera Lucida a Base d’Acqua',
    volume: '100 ml',
    price: 16.00,
    rating: 4.8,
    reviewsCount: 22,
    description: 'Cera lucida a tenuta flessibile a base d’acqua. Dona brillantezza impeccabile, ordine e controllo senza appesantire né lasciare residui bianchi.',
    benefits: [
      'Brillantezza e controllo istantaneo',
      'Base d’acqua ultra-lavabile',
      'Tenuta elastica e naturale'
    ],
    keyIngredients: ['Base Idrosolubile Pura', 'Pantenolo Lucidante'],
    image: 'https://tonymusto.it/wp-content/uploads/2024/12/control-me_tony-musto.jpg',
    badge: 'Gloss Control'
  }
];
