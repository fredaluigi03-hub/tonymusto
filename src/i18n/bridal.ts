import { defineStrings } from './strings';

/** captions and steps follow the order of `bridePhotos` and `bridalSteps` in BridalSection */
export const bridalStrings = defineStrings({
  it: {
    heading: 'Acconciature Sposa & Make-up for Wedding',
    intro:
      '«Semplice e sofisticato sarà lo stile per il tuo giorno più importante.» Oltre 25 anni di esperienza nella creazione di acconciature sposa sartoriali, in salone e in location.',
    captions: [
      'Raccolto morbido con velo — cerimonia in location',
      'Onde luminose e riga laterale — stile romantico',
      'Chignon basso scolpito — eleganza contemporanea',
      'Acconciatura sposa con accessorio gioiello',
    ],
    previous: 'Foto precedente',
    next: 'Foto successiva',
    brides: 'Spose Tony Musto',
    availability: 'Disponibile in salone a Montemiletto o in location',
    goTo: (n: number) => `Vai alla foto ${n}`,
    journey: 'Il Percorso Sposa',
    steps: [
      {
        title: 'Consulenza & Moodboard Wedding',
        desc: 'Analisi approfondita dell’abito nuziale, del velo, del tema dell’evento e delle caratteristiche del viso per definire l’architettura perfetta.',
      },
      {
        title: 'Prova Acconciatura in Salone',
        desc: 'Sessioni dedicate in salone a Montemiletto per testare volumi, tenuta, accessori e armonia con il trucco.',
      },
      {
        title: 'Prova Make-up & Percorso Pre-Nozze',
        desc: 'Trucco studiato su contouring e incarnato, con trattamenti idratanti nelle settimane precedenti per una chioma luminosa.',
      },
      {
        title: 'The Big Day! (Salone o Location)',
        desc: 'Presenza di Tony Musto per la realizzazione dell’acconciatura sposa, fissaggio velo e assistenza pre-cerimonia.',
      },
    ],
    cta: 'Richiedi Informazioni per il tuo Matrimonio',
  },
  en: {
    heading: 'Bridal Hairstyles & Make-up for Wedding',
    intro:
      '“Simple and sophisticated will be the style for your most important day.” Over 25 years of experience creating tailored bridal hairstyles, in the salon and on location.',
    captions: [
      'Soft updo with veil — ceremony on location',
      'Luminous waves and side parting — romantic style',
      'Sculpted low chignon — contemporary elegance',
      'Bridal hairstyle with jewel accessory',
    ],
    previous: 'Previous photo',
    next: 'Next photo',
    brides: 'Tony Musto Brides',
    availability: 'Available in the Montemiletto salon or on location',
    goTo: (n: number) => `Go to photo ${n}`,
    journey: 'The Bridal Journey',
    steps: [
      {
        title: 'Wedding Consultation & Moodboard',
        desc: 'An in-depth look at the wedding gown, the veil, the theme of the event and your facial features, to define the perfect architecture.',
      },
      {
        title: 'Hairstyle Trial in the Salon',
        desc: 'Dedicated sessions in our Montemiletto salon to test volume, hold, accessories and harmony with your make-up.',
      },
      {
        title: 'Make-up Trial & Pre-Wedding Programme',
        desc: 'Make-up designed around contouring and complexion, with hydrating treatments in the weeks before for radiant hair.',
      },
      {
        title: 'The Big Day! (Salon or Location)',
        desc: 'Tony Musto is there to create your bridal hairstyle, secure the veil and assist before the ceremony.',
      },
    ],
    cta: 'Request Information for Your Wedding',
  },
  fr: {
    heading: 'Coiffures de mariée & Make-up for Wedding',
    intro:
      '« Simple et sophistiqué sera le style de votre plus beau jour. » Plus de 25 ans d’expérience dans la création de coiffures de mariée sur mesure, au salon comme sur le lieu de la cérémonie.',
    captions: [
      'Chignon souple avec voile — cérémonie sur site',
      'Ondulations lumineuses et raie sur le côté — style romantique',
      'Chignon bas sculpté — élégance contemporaine',
      'Coiffure de mariée avec bijou de cheveux',
    ],
    previous: 'Photo précédente',
    next: 'Photo suivante',
    brides: 'Les mariées de Tony Musto',
    availability: 'Disponible au salon de Montemiletto ou sur place',
    goTo: (n: number) => `Aller à la photo ${n}`,
    journey: 'Le parcours de la mariée',
    steps: [
      {
        title: 'Consultation & moodboard mariage',
        desc: 'Analyse approfondie de la robe, du voile, du thème de la cérémonie et des traits du visage pour définir l’architecture parfaite.',
      },
      {
        title: 'Essai coiffure au salon',
        desc: 'Séances dédiées au salon de Montemiletto pour tester volumes, tenue, accessoires et harmonie avec le maquillage.',
      },
      {
        title: 'Essai maquillage & parcours pré-mariage',
        desc: 'Un maquillage étudié autour du contouring et du teint, avec des soins hydratants les semaines précédentes pour une chevelure lumineuse.',
      },
      {
        title: 'The Big Day ! (salon ou sur site)',
        desc: 'Tony Musto est présent pour réaliser la coiffure de la mariée, fixer le voile et vous accompagner avant la cérémonie.',
      },
    ],
    cta: 'Demander des informations pour votre mariage',
  },
  es: {
    heading: 'Peinados de novia & Make-up for Wedding',
    intro:
      '«Sencillo y sofisticado será el estilo de tu día más importante.» Más de 25 años de experiencia creando peinados de novia a medida, en el salón y en la localización del evento.',
    captions: [
      'Recogido suave con velo — ceremonia en localización',
      'Ondas luminosas y raya lateral — estilo romántico',
      'Moño bajo esculpido — elegancia contemporánea',
      'Peinado de novia con accesorio joya',
    ],
    previous: 'Foto anterior',
    next: 'Foto siguiente',
    brides: 'Novias de Tony Musto',
    availability: 'Disponible en el salón de Montemiletto o en la localización',
    goTo: (n: number) => `Ir a la foto ${n}`,
    journey: 'El camino de la novia',
    steps: [
      {
        title: 'Consulta & moodboard de boda',
        desc: 'Análisis detallado del vestido, del velo, del tema del evento y de las facciones del rostro para definir la arquitectura perfecta.',
      },
      {
        title: 'Prueba de peinado en el salón',
        desc: 'Sesiones dedicadas en el salón de Montemiletto para probar volúmenes, fijación, accesorios y armonía con el maquillaje.',
      },
      {
        title: 'Prueba de maquillaje & programa prenupcial',
        desc: 'Un maquillaje pensado a partir del contouring y la tez, con tratamientos hidratantes en las semanas previas para una melena luminosa.',
      },
      {
        title: '¡The Big Day! (salón o localización)',
        desc: 'Tony Musto está presente para realizar el peinado de novia, fijar el velo y acompañarte antes de la ceremonia.',
      },
    ],
    cta: 'Solicitar información para tu boda',
  },
  de: {
    heading: 'Brautfrisuren & Make-up for Wedding',
    intro:
      '„Schlicht und raffiniert soll der Stil für Ihren wichtigsten Tag sein.“ Über 25 Jahre Erfahrung in maßgeschneiderten Brautfrisuren, im Salon und an Ihrer Hochzeitslocation.',
    captions: [
      'Weiche Hochsteckfrisur mit Schleier — Zeremonie in der Location',
      'Leuchtende Wellen und Seitenscheitel — romantischer Stil',
      'Skulpturaler tiefer Chignon — zeitgemäße Eleganz',
      'Brautfrisur mit Schmuckaccessoire',
    ],
    previous: 'Vorheriges Foto',
    next: 'Nächstes Foto',
    brides: 'Bräute von Tony Musto',
    availability: 'Im Salon in Montemiletto oder an Ihrer Location verfügbar',
    goTo: (n: number) => `Zu Foto ${n}`,
    journey: 'Der Weg zur Braut',
    steps: [
      {
        title: 'Beratung & Wedding-Moodboard',
        desc: 'Eingehende Analyse von Brautkleid, Schleier, Hochzeitsthema und Gesichtszügen, um die perfekte Architektur der Frisur zu entwerfen.',
      },
      {
        title: 'Frisurenprobe im Salon',
        desc: 'Eigene Termine im Salon in Montemiletto, um Volumen, Halt, Accessoires und das Zusammenspiel mit dem Make-up zu testen.',
      },
      {
        title: 'Make-up-Probe & Pre-Wedding-Programm',
        desc: 'Make-up, abgestimmt auf Konturen und Teint – mit feuchtigkeitsspendenden Behandlungen in den Wochen davor für strahlendes Haar.',
      },
      {
        title: 'The Big Day! (Salon oder Location)',
        desc: 'Tony Musto ist persönlich dabei: Er gestaltet die Brautfrisur, befestigt den Schleier und begleitet Sie bis zur Zeremonie.',
      },
    ],
    cta: 'Informationen für Ihre Hochzeit anfragen',
  },
});
