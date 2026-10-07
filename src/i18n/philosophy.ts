import { defineStrings } from './strings';

const pillars = ['Haircut', 'Colour', 'Treatments'];

export const philosophyStrings = defineStrings({
  it: { kicker: 'La nostra filosofia', statement: 'Più di 25 anni nel mondo dei capelli', pillars, album: 'Visualizza album' },
  en: { kicker: 'Our philosophy', statement: 'More than 25 years in the world of hair', pillars, album: 'View album' },
  fr: { kicker: 'Notre philosophie', statement: 'Plus de 25 ans dans l’univers de la coiffure', pillars, album: 'Voir l’album' },
  es: { kicker: 'Nuestra filosofía', statement: 'Más de 25 años en el mundo del cabello', pillars, album: 'Ver álbum' },
  de: { kicker: 'Unsere Philosophie', statement: 'Mehr als 25 Jahre in der Welt der Haare', pillars, album: 'Album ansehen' },
});
