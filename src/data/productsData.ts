import { ProductItem } from '../types';

export const productCollections = ['all', 'bee-it', 'curl-up', 'restorative', 'bath-body'] as const;

export const productsData: ProductItem[] = [
  {
    id: 'curl-me-crema-ricci',
    collection: 'curl-up',
    name: 'Curl Me — Crema Definizione Ricci',
    volume: '200 ml',
    price: 20.00,
    description: 'Crema definizione per ricci, ondulati e capelli fini. La formula leggera esalta i ricci donando morbidezza e lucentezza grazie agli ingredienti naturali, per un look definito e senza crespo.',
    benefits: [
      'Ricci definiti e naturali',
      'Effetto anti-crespo, capelli morbidi',
      'Volume e lucentezza',
      'Ideale per l’uso quotidiano, per tutti i tipi di ricci'
    ],
    image: 'https://tonymusto.it/wp-content/uploads/2024/08/curl-me_tony-musto.jpg',
    badge: 'Curly'
  },
  {
    id: 'shampoo-bee-it-250ml',
    collection: 'bee-it',
    name: 'Shampoo Bee It — Nutriente',
    volume: '250 ml',
    price: 11.90,
    description: 'Shampoo nutriente per cute e capelli danneggiati. Deterge con cura mantenendo la struttura originaria del capello; la texture cremosa crea una schiuma leggera per capelli morbidi e vitali.',
    benefits: [
      'Alto potere pulente, ma delicato',
      'Restituisce elasticità e splendore anche ai capelli più aridi',
      'Capelli più morbidi dalle radici alle punte'
    ],
    ecoAction: 'Packaging in busta con il 70% di plastica in meno rispetto a un normale flacone',
    image: 'https://tonymusto.it/wp-content/uploads/2022/10/giallo-250.jpeg',
    badge: 'Save the Bees'
  },
  {
    id: 'maschera-ristrutturante-bee-it',
    collection: 'bee-it',
    name: 'Maschera Ristrutturante Bee It',
    volume: '250 ml',
    price: 13.50,
    description: 'Maschera post shampoo riparatrice concentrata, di immediata efficacia. Dona forza ed elasticità, idratando e nutrendo in profondità per un capello sano, luminoso e rimpolpato.',
    benefits: [
      'Migliora la pettinabilità senza appesantire',
      'Non occlude né irrita il cuoio capelluto',
      'Protegge il colore, naturale o trattato'
    ],
    ecoAction: 'Packaging in busta con il 70% di plastica in meno rispetto a un normale flacone',
    image: 'https://tonymusto.it/wp-content/uploads/2022/10/rosso-250.jpeg',
    badge: 'Eco Repair'
  },
  {
    id: 'bagnodoccia-bee-it-250ml',
    collection: 'bath-body',
    name: 'Bagnodoccia Bee It Sensoriale',
    volume: '250 ml',
    price: 8.50,
    description: 'Bagnodoccia sensoriale per il corpo con attivi naturali biologici ad azione rigenerante. Favorisce il naturale benessere grazie alle proprietà benefiche di propoli e miele biologico.',
    benefits: [
      'Dona idratazione, elasticità e morbidezza alla cute',
      'Proprietà calmanti in caso di prurito'
    ],
    keyIngredients: ['Propoli biologico', 'Miele biologico'],
    ecoAction: 'Packaging in busta con il 70% di plastica in meno rispetto a un normale flacone',
    image: 'https://tonymusto.it/wp-content/uploads/2022/10/blu-250.jpeg',
    badge: 'Body Spa'
  },
  {
    id: 'argan-me-olio-dargan',
    collection: 'restorative',
    name: 'Argan Me — Olio d’Argan Fluido Disciplinante',
    volume: '100 ml',
    price: 20.00,
    description: 'Olio d’Argan fluido disciplinante istantaneo, leggero e non appiccicoso. Doma i capelli ribelli, riduce il crespo e migliora la brillantezza, lasciandoli setosi e facili da gestire.',
    benefits: [
      'Lucentezza istantanea',
      'Riduzione del crespo',
      'Nutrimento e idratazione in profondità',
      'Leggero e non appiccicoso, senza residui',
      'Senza solfati e parabeni, cruelty-free'
    ],
    image: 'https://tonymusto.it/wp-content/uploads/2024/08/argan-me-tony-musto.jpg',
    badge: 'Luxury Oil'
  },
  {
    id: 'dont-frizz-me-lacca',
    collection: 'restorative',
    name: 'Don’t Frizz Me — Lacca Spray Anti-Frizz',
    volume: '300 ml',
    price: 15.00,
    description: 'Lacca spray anti-frizz per capelli lisci e luminosi, con tenuta flessibile e lucentezza straordinaria. Combatte il crespo lasciando i capelli lisci, morbidi e setosi, con un aspetto naturale e senza residui.',
    benefits: [
      'Tenuta flessibile che non appesantisce',
      'Anti-crespo: capelli morbidi e setosi',
      'Lucentezza sana e naturale',
      'Formula leggera, non appiccica',
      'Senza solfati e parabeni, cruelty-free'
    ],
    keyIngredients: ['Olio di Semi di Carota', 'Estratto di Hibiscus, Cardo Mariano e Lavanda di Mare'],
    image: 'https://tonymusto.it/wp-content/uploads/2024/08/1.jpg',
    badge: 'Pro Styling'
  },
  {
    id: 'texture-me-spray-sea-salt',
    collection: 'curl-up',
    name: 'Texture Me — Spray Sea Salt',
    volume: '200 ml',
    price: 20.00,
    description: 'Spray sea salt per un look beachy, con onde naturali e una texture leggera e voluminosa. Dona una finitura morbida e un aspetto spettinato ma curato, ideale per un look casual.',
    benefits: [
      'Texture naturale, look spettinato',
      'Volume e corpo',
      'Formula leggera che non appesantisce',
      'Aiuta a proteggere i capelli dai fattori di stress ambientale',
      'Senza solfati e parabeni, cruelty-free'
    ],
    image: 'https://tonymusto.it/wp-content/uploads/2024/08/texture-me_tony-musto.jpg',
    badge: 'Beach Waves'
  },
  {
    id: 'style-me-cera-opaca',
    collection: 'restorative',
    name: 'Style Me — Cera Opaca Texturizzante',
    volume: '100 ml',
    price: 16.00,
    description: 'Cera opaca texturizzante a tenuta forte, ideale per look audaci e ben definiti su capelli corti e mossi. Mantiene la forma desiderata e aiuta a trattenere l’idratazione, prevenendo la rottura del capello.',
    benefits: [
      'Tenuta forte per tutto il giorno',
      'Texture opaca e irregolare',
      'Migliora la lucentezza, per un aspetto sano',
      'Trattiene l’umidità e previene la rottura',
      'Senza solfati e parabeni, cruelty-free'
    ],
    image: 'https://tonymusto.it/wp-content/uploads/2024/08/style-me_tony-musto.jpg',
    badge: 'Matt Finish'
  },
  {
    id: 'control-me-cera-lucida',
    collection: 'restorative',
    name: 'Control Me — Cera Lucida a Base d’Acqua',
    volume: '100 ml',
    price: 16.00,
    description: 'Cera lucida a base d’acqua per un look strutturato e brillante con tenuta flessibile. Il gel modellante dona una finitura lucida e naturale, per scolpire e definire senza appesantire.',
    benefits: [
      'Tenuta flessibile',
      'Finitura lucida con brillantezza naturale',
      'Facile da applicare e da risciacquare, senza residui',
      'Adatto a tutti i tipi di capelli',
      'Senza solfati e parabeni, cruelty-free'
    ],
    image: 'https://tonymusto.it/wp-content/uploads/2024/12/control-me_tony-musto.jpg',
    badge: 'Gloss Control'
  }
];
