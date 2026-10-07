import { defineStrings } from './strings';

export const awardsStrings = defineStrings({
  it: {
    stripCount: (count: number) => `${count} attestati dalle organizzazioni di settore.`,
    stripLink: 'Vedi tutti i riconoscimenti',
    badge: 'Riconoscimenti Ufficiali',
    title: 'Awards & Riconoscimenti',
    quote: '"La passione, il piacere e la professionalità mi è stata riconosciuta dalle più prestigiose organizzazioni di settore."',
    count: (count: number) => `${count} attestati e premi`,
    photoAlt: (n: number) => `Attestato Tony Musto ${n}`,
  },
  en: {
    stripCount: (count: number) => `${count} certificates from industry organisations.`,
    stripLink: 'View all awards',
    badge: 'Official Recognition',
    title: 'Awards & Recognition',
    quote: '"My passion, my pleasure in the craft and my professionalism have been recognised by the most prestigious organisations in the industry."',
    count: (count: number) => `${count} certificates and awards`,
    photoAlt: (n: number) => `Tony Musto certificate ${n}`,
  },
  fr: {
    stripCount: (count: number) => `${count} attestations délivrées par des organisations du secteur.`,
    stripLink: 'Voir toutes les distinctions',
    badge: 'Distinctions officielles',
    title: 'Awards & Distinctions',
    quote: '« Ma passion, mon plaisir et mon professionnalisme ont été reconnus par les organisations les plus prestigieuses du secteur. »',
    count: (count: number) => `${count} attestations et prix`,
    photoAlt: (n: number) => `Attestation Tony Musto ${n}`,
  },
  es: {
    stripCount: (count: number) => `${count} certificados de organizaciones del sector.`,
    stripLink: 'Ver todos los reconocimientos',
    badge: 'Reconocimientos oficiales',
    title: 'Premios & Reconocimientos',
    quote: '"Mi pasión, mi placer y mi profesionalidad han sido reconocidos por las organizaciones más prestigiosas del sector."',
    count: (count: number) => `${count} certificados y premios`,
    photoAlt: (n: number) => `Certificado de Tony Musto ${n}`,
  },
  de: {
    stripCount: (count: number) => `${count} Urkunden von Branchenorganisationen.`,
    stripLink: 'Alle Auszeichnungen ansehen',
    badge: 'Offizielle Auszeichnungen',
    title: 'Awards & Auszeichnungen',
    quote: '„Meine Leidenschaft, meine Freude am Handwerk und meine Professionalität wurden von den renommiertesten Organisationen der Branche gewürdigt.“',
    count: (count: number) => `${count} Urkunden und Preise`,
    photoAlt: (n: number) => `Urkunde Tony Musto ${n}`,
  },
});
