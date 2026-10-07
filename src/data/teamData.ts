import type { TeamMember } from '../types';

export const teamData: Pick<TeamMember, 'id' | 'name' | 'image'>[] = [
  {
    id: 'tony-musto',
    name: 'Tony Musto',
    image: 'https://tonymusto.it/wp-content/uploads/2022/06/Tony_8-2-scaled.jpg'
  },
  {
    id: 'atelier-equipe-1',
    name: 'Elena Ricciardi',
    image: 'https://tonymusto.it/wp-content/uploads/2022/06/IMG_5204-2-scaled.jpeg'
  },
  {
    id: 'atelier-equipe-2',
    name: 'Marco Ferrara',
    image: 'https://tonymusto.it/wp-content/uploads/2022/06/Remini20210925145506712-scaled.jpg'
  }
];
