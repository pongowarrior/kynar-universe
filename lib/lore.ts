export type FactionSlug = 'velin' | 'thalen' | 'orren' | 'velkan' | 'serath' | 'kyreth';

export interface Faction {
  slug: FactionSlug;
  name: string;
  tagline: string;
  color: string;
  coreValue: string;
  role: string;
  aesthetic: string;
  description: string;
}

export const FACTIONS: Faction[] = [
  {
    slug: 'velin',
    name: 'Velin',
    tagline: 'The Ascendants',
    color: 'bg-indigo-700',
    coreValue: 'Power / Order',
    role: 'Elite leaders, judges, and enforcers.',
    aesthetic: 'Dark academia, regal, power fantasy.',
    description: "Velin believes control through mastery is the path to stability. They are the supreme authority, judges, and protectors of the Fold's political structure. Their Manifestation often results in powers of command and ultimate force."
  },
  {
    slug: 'thalen',
    name: 'Thalen',
    tagline: 'The Seekers',
    color: 'bg-green-700',
    coreValue: 'Knowledge / Discovery',
    role: 'Scholars, historians, and researchers.',
    aesthetic: 'Mystery, intellectual, clean sci-fi.',
    description: "Thalen dedicates itself to seeking truth through insight. They manage the vast libraries, technologies, and history of the Kynar, often leading research into new powers and the secrets of the Fold's creation. Their powers are often mental or elemental in nature."
  },
  {
    slug: 'orren',
    name: 'Orren',
    tagline: 'The Wardens',
    color: 'bg-red-700',
    coreValue: 'Defense / Duty',
    role: 'Protectors, peacekeepers, and combat trainers.',
    aesthetic: 'Action, military, honor codes, stark.',
    description: "Orren embodies honor through service. They are the Fold's primary defensive and offensive force, training all Kynar in combat. Their Manifestation typically grants them physical enhancements, energy projection, or kinetic manipulation."
  },
  {
    slug: 'velkan',
    name: 'Velkan',
    tagline: 'The Veil Walkers',
    color: 'bg-cyan-700',
    coreValue: 'Mediation / Secrecy',
    role: 'Diplomats, spies, and covert operatives.',
    aesthetic: 'Spy thriller, shapeshifter, adaptive minimalism.',
    description: "Velkan's mission is to maintain the delicate balance and secrecy between the Fold and Earth. They are masters of adaptation and espionage, handling all cross-dimensional threats. Their powers include illusions, shapeshifting, and mental suggestion."
  },
  {
    slug: 'serath',
    name: 'Serath',
    tagline: 'The Inherents',
    color: 'bg-yellow-700',
    coreValue: 'Continuity / Unity',
    role: 'The general population, culture, and infrastructure.',
    aesthetic: 'Cozy, community, vibrant, cottagecore.',
    description: "Serath is the heart of Kynar life, focused on maintaining culture, arts, and the infrastructure of the Fold cities. They are the largest faction. Their powers are often subtle, focused on creation, healing, or community support."
  },
  {
    slug: 'kyreth',
    name: 'Kyreth',
    tagline: 'The Broken / Exiled',
    color: 'bg-gray-700',
    coreValue: 'Freedom / Rejection',
    role: 'Outcasts, rebels, and possessors of Forbidden Powers.',
    aesthetic: 'Dark, rebel, anti-hero, apocalyptic.',
    description: "Kyreth consists of Kynar exiled to the Kyrrath region. They reject the ruling factions and champion radical freedom. Often possessing volatile or 'Forbidden Powers' (like death or mind control), they are the Fold's most dangerous internal threat."
  },
];
