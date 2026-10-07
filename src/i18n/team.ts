import { useMemo } from 'react';
import { defineStrings } from './strings';
import { useLang, type Lang } from './LanguageContext';
import { teamData } from '../data/teamData';
import type { TeamMember } from '../types';

export const teamStrings = defineStrings({
  it: {
    badge: 'Gli Specialisti del Salone',
    title: 'I Maestri dello Stile',
    intro: "Guidati dall'esperienza e dalla passione di Tony Musto, un team dedicato alla valorizzazione della tua personalità.",
    bookWith: (name: string) => `Prenota con ${name}`,
    members: {
      'tony-musto': {
        role: 'Founder & Master Hair Stylist',
        experience: 'Oltre 25 anni di passione',
        specialty: 'Taglio Sartoriale, Color Couture & Fashion Hair',
        quote: 'Chi sceglie il nostro salone sceglie un’esperienza totale che coinvolge tutti i sensi, affidandosi a professionisti dello stile che sanno esaltare ogni sfumatura della personalità.',
      },
      'atelier-equipe-1': {
        role: 'Senior Colorist & Curl Specialist',
        experience: '12 anni nel settore',
        specialty: 'Bio Organic Curl Up, Balayage & Hair Spa',
        quote: 'La cura del capello è alchimia pura: la natura incontra la tecnica per rivelare la luce più autentica.',
      },
      'atelier-equipe-2': {
        role: 'Stylist & Men’s Grooming Specialist',
        experience: '9 anni nel settore',
        specialty: 'Taglio Sartoriale Maschile & Texturizzazione Matt',
        quote: 'Precisione geometrica e morbidezza visiva: ogni taglio è un abito su misura cucito sulla persona.',
      },
    },
  },
  en: {
    badge: 'The Salon Specialists',
    title: 'The Masters of Style',
    intro: 'Led by the experience and passion of Tony Musto, a team devoted to bringing out your personality.',
    bookWith: (name: string) => `Book with ${name}`,
    members: {
      'tony-musto': {
        role: 'Founder & Master Hair Stylist',
        experience: 'Over 25 years of passion',
        specialty: 'Bespoke Cutting, Color Couture & Fashion Hair',
        quote: 'Whoever chooses our salon chooses a complete experience that engages all the senses, placing themselves in the hands of style professionals who know how to enhance every nuance of personality.',
      },
      'atelier-equipe-1': {
        role: 'Senior Colorist & Curl Specialist',
        experience: '12 years in the industry',
        specialty: 'Bio Organic Curl Up, Balayage & Hair Spa',
        quote: 'Hair care is pure alchemy: nature meets technique to reveal the most authentic light.',
      },
      'atelier-equipe-2': {
        role: 'Stylist & Men’s Grooming Specialist',
        experience: '9 years in the industry',
        specialty: 'Men’s Bespoke Cutting & Matte Texturizing',
        quote: 'Geometric precision and visual softness: every cut is a made-to-measure suit, tailored to the person.',
      },
    },
  },
  fr: {
    badge: 'Les Spécialistes du Salon',
    title: 'Les Maîtres du Style',
    intro: 'Guidée par l’expérience et la passion de Tony Musto, une équipe dédiée à la mise en valeur de votre personnalité.',
    bookWith: (name: string) => `Réserver avec ${name}`,
    members: {
      'tony-musto': {
        role: 'Fondateur & Master Hair Stylist',
        experience: 'Plus de 25 ans de passion',
        specialty: 'Coupe sur Mesure, Color Couture & Fashion Hair',
        quote: 'Choisir notre salon, c’est choisir une expérience totale qui mobilise tous les sens, en s’en remettant à des professionnels du style qui savent révéler toutes les nuances de votre personnalité.',
      },
      'atelier-equipe-1': {
        role: 'Coloriste Senior & Spécialiste des Boucles',
        experience: '12 ans d’expérience',
        specialty: 'Bio Organic Curl Up, Balayage & Hair Spa',
        quote: 'Soigner les cheveux est une pure alchimie : la nature rencontre la technique pour révéler la lumière la plus authentique.',
      },
      'atelier-equipe-2': {
        role: 'Styliste & Spécialiste Grooming Homme',
        experience: '9 ans d’expérience',
        specialty: 'Coupe Homme sur Mesure & Texturisation Mate',
        quote: 'Précision géométrique et douceur visuelle : chaque coupe est un costume sur mesure, taillé pour la personne.',
      },
    },
  },
  es: {
    badge: 'Los Especialistas del Salón',
    title: 'Los Maestros del Estilo',
    intro: 'Guiados por la experiencia y la pasión de Tony Musto, un equipo dedicado a realzar tu personalidad.',
    bookWith: (name: string) => `Reservar con ${name}`,
    members: {
      'tony-musto': {
        role: 'Fundador & Master Hair Stylist',
        experience: 'Más de 25 años de pasión',
        specialty: 'Corte a Medida, Color Couture & Fashion Hair',
        quote: 'Quien elige nuestro salón elige una experiencia total que involucra todos los sentidos, poniéndose en manos de profesionales del estilo que saben realzar cada matiz de la personalidad.',
      },
      'atelier-equipe-1': {
        role: 'Colorista Senior & Especialista en Rizos',
        experience: '12 años en el sector',
        specialty: 'Bio Organic Curl Up, Balayage & Hair Spa',
        quote: 'El cuidado del cabello es pura alquimia: la naturaleza se encuentra con la técnica para revelar la luz más auténtica.',
      },
      'atelier-equipe-2': {
        role: 'Estilista & Especialista en Grooming Masculino',
        experience: '9 años en el sector',
        specialty: 'Corte Masculino a Medida & Texturizado Mate',
        quote: 'Precisión geométrica y suavidad visual: cada corte es un traje a medida, confeccionado para la persona.',
      },
    },
  },
  de: {
    badge: 'Die Spezialisten des Salons',
    title: 'Die Meister des Stils',
    intro: 'Unter der Leitung von Tony Musto, mit seiner Erfahrung und Leidenschaft, widmet sich ein Team ganz der Betonung Ihrer Persönlichkeit.',
    bookWith: (name: string) => `Bei ${name} buchen`,
    members: {
      'tony-musto': {
        role: 'Gründer & Master Hair Stylist',
        experience: 'Über 25 Jahre Leidenschaft',
        specialty: 'Maßschnitt, Color Couture & Fashion Hair',
        quote: 'Wer sich für unseren Salon entscheidet, wählt ein Erlebnis für alle Sinne und vertraut auf Stilprofis, die jede Nuance der Persönlichkeit zur Geltung bringen.',
      },
      'atelier-equipe-1': {
        role: 'Senior Colorist & Curl Specialist',
        experience: '12 Jahre Berufserfahrung',
        specialty: 'Bio Organic Curl Up, Balayage & Hair Spa',
        quote: 'Haarpflege ist pure Alchemie: Die Natur trifft auf Technik und bringt den authentischsten Glanz zum Vorschein.',
      },
      'atelier-equipe-2': {
        role: 'Stylist & Men’s Grooming Specialist',
        experience: '9 Jahre Berufserfahrung',
        specialty: 'Maßgeschneiderter Herrenschnitt & Matt-Texturierung',
        quote: 'Geometrische Präzision und visuelle Weichheit: Jeder Schnitt ist ein Maßanzug, genäht für den jeweiligen Menschen.',
      },
    },
  },
});

export const localizeTeam = (lang: Lang): TeamMember[] =>
  teamData.map(member => ({
    ...member,
    ...teamStrings[lang].members[member.id as keyof typeof teamStrings.it.members],
  }));

export const useTeam = (): TeamMember[] => {
  const { lang } = useLang();
  return useMemo(() => localizeTeam(lang), [lang]);
};
