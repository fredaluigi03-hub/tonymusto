import { AwardItem, ReviewItem } from '../types';

export const awardsData: AwardItem[] = [
  {
    id: 'award-top-hairstylists',
    year: '2023 - 2024',
    title: 'Riconoscimento Ufficiale di Eccellenza',
    organization: 'Accademia & Organizzazioni Nazionali di Settore',
    description: 'La passione, il piacere e la professionalità di Tony Musto premiata e riconosciuta dalle più prestigiose organizzazioni di settore.',
    badge: 'Hair Styling & Wedding Couture'
  },
  {
    id: 'award-green-salon',
    year: '2022 - 2023',
    title: 'Diploma di Merito & Formazione Avanzata',
    organization: 'Master Academy Hair & Color',
    description: 'Certificazione di eccellenza per le tecniche di taglio sartoriale, colorimetria armocromatica e rituali botanici con la linea BEE IT.',
    badge: 'Master Stylist Certification'
  },
  {
    id: 'award-wedding-excellence',
    year: '2021 - 2022',
    title: 'Wedding Hair & Bridal Excellence',
    organization: 'Fashion Hair & Bridal Awards',
    description: 'Premio per l’eccellenza nella creazione di acconciature sposa sartoriali e total look wedding nel territorio campano e nazionale.',
    badge: 'Wedding Couture'
  }
];

export const reviewsData: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Serena M.',
    roleOrCity: 'Montemiletto (AV)',
    rating: 5,
    date: 'Febbraio 2025',
    service: 'Bio Organic Curl Up & Taglio Sartoriale',
    content: 'Ho affidato i miei ricci a Tony dopo anni di tentativi falliti altrove. La linea Curl Me e la sua maestria hanno trasformato i miei capelli: definiti, leggeri e luminosissimi!'
  },
  {
    id: 'rev-2',
    author: 'Chiara V.',
    roleOrCity: 'Avellino',
    rating: 5,
    date: 'Gennaio 2025',
    service: 'My Wedding Page — Pacchetto Sposa',
    content: 'Tony e il suo team sono stati impeccabili per il mio matrimonio. Acconciatura da sogno rimasta perfetta per tutto il giorno e la notte. Grazie di cuore per la sensibilità e la cura!'
  },
  {
    id: 'rev-3',
    author: 'Roberta D.',
    roleOrCity: 'Mirabella Eclano',
    rating: 5,
    date: 'Dicembre 2024',
    service: 'Color Couture & Hair Spa BEE IT',
    content: 'L’atmosfera in salone a Montemiletto è rilassante e profumata. Il colore è naturale con riflessi dorati splendidi, e sapere che con BEE IT si fa del bene alla natura rende l’esperienza ancora più speciale.'
  }
];

/** Le 49 foto dei riconoscimenti, prese da tonymusto.it/awards.
 *  w/h servono al layout a masonry: gli scatti sono misti verticali e orizzontali. */
export const awardPhotos: { url: string; w: number; h: number }[] = [
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712010-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712011_0001-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712011_0002-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712021-768x543.jpg', w: 768, h: 543 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712040-768x543.jpg', w: 768, h: 543 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712041-768x1084.jpg', w: 768, h: 1084 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712050-768x593.jpg', w: 768, h: 593 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712070_0001-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712070_0002-768x543.jpg', w: 768, h: 543 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712070_0003-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712070_0004-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712070_0005-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712070_0006-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712090_0001-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712090_0002-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712091_0001-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712091_0002-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712100_0001-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712100_0002-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712100_0003-768x543.jpg', w: 768, h: 543 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712100_0004-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712100_0005-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712100_0006-768x543.jpg', w: 768, h: 543 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712100_0007-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712120-768x1088.jpg', w: 768, h: 1088 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712121-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0001-768x543.jpg', w: 768, h: 543 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0002-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0003-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0004-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0005-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0006-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0007-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0008-768x543.jpg', w: 768, h: 543 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0009-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0010-768x543.jpg', w: 768, h: 543 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0011-768x543.jpg', w: 768, h: 543 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0012-768x543.jpg', w: 768, h: 543 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0013-768x543.jpg', w: 768, h: 543 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0014-768x543.jpg', w: 768, h: 543 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0015-768x543.jpg', w: 768, h: 543 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0016-768x543.jpg', w: 768, h: 543 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0017-768x543.jpg', w: 768, h: 543 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0018-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0019-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0020-768x543.jpg', w: 768, h: 543 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0021-768x1086.jpg', w: 768, h: 1086 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0022-768x543.jpg', w: 768, h: 543 },
  { url: 'https://tonymusto.it/wp-content/uploads/2022/08/S22082712130_0023-768x1086.jpg', w: 768, h: 1086 },
];
