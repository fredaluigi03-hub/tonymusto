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
