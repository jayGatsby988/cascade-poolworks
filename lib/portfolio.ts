import { PORTFOLIO_IMAGES_BY_SLUG } from '@/lib/gallery';

export type PortfolioProject = {
  slug: string;
  name: string;
  location: string;
  tag: string;
  image: string;
  description: string;
  details: string[];
  completed?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'queen-anne-infinity',
    name: 'Queen Anne courtyard pool',
    location: 'Queen Anne, Seattle',
    tag: 'Courtyard pool & spa',
    image: PORTFOLIO_IMAGES_BY_SLUG['queen-anne-infinity'],
    description:
      'Tight in-town lot, full resort feel. This compact courtyard pool and spa combo fits under a covered structure and still leaves room for dining and lounge furniture.',
    details: [
      'Infinity edge with glass tile waterline',
      'Integrated spa with spillover',
      'Natural stone coping and deck',
      'Automated cover and heating',
    ],
    completed: '2023',
  },
  {
    slug: 'mercer-island-estate',
    name: 'Mercer Island estate pool',
    location: 'Mercer Island, Washington',
    tag: 'Family pool & hardscape',
    image: PORTFOLIO_IMAGES_BY_SLUG['mercer-island-estate'],
    description:
      'A new rectangular pool wrapped in large-format pavers. Automatic cover, upgraded coping, and plenty of deck space for entertaining year-round.',
    details: [
      'Custom rectangular pool with baja shelf',
      'Spillover spa with therapy jets',
      'Fire bowl feature and ambient lighting',
      'Ipe decking and covered pavilion',
    ],
    completed: '2023',
  },
  {
    slug: 'kirkland-lakefront',
    name: 'Kirkland lap pool',
    location: 'Kirkland, Washington',
    tag: 'Lap pool with spa',
    image: PORTFOLIO_IMAGES_BY_SLUG['kirkland-lakefront'],
    description:
      'Long, clean geometry for true lap swimming with a raised spa at one end. The all-tile spa interior and cover system keep maintenance simple.',
    details: [
      'Freeform pool with vanishing edge toward lake',
      'Glass tile in blues and greens',
      'Raised deck with built-in seating',
      'Full automation and heating',
    ],
    completed: '2022',
  },
  {
    slug: 'edmonds-backyard',
    name: 'Edmonds backyard pool',
    location: 'Edmonds, Washington',
    tag: 'Backyard luxury pool',
    image: PORTFOLIO_IMAGES_BY_SLUG['edmonds-backyard'],
    description:
      'A straightforward rectangular pool that turned an underused yard into the favorite spot on the block. Clean deck lines and fencing keep everything tidy and safe.',
    details: [
      'Small-footprint pool with tanning ledge',
      'Integrated spa',
      'Custom concrete deck and planters',
      'LED color-changing lighting',
    ],
    completed: '2024',
  },
  {
    slug: 'bainbridge-cliffside',
    name: 'Bainbridge community pool',
    location: 'Bainbridge Island, Washington',
    tag: 'Community pool upgrade',
    image: PORTFOLIO_IMAGES_BY_SLUG['bainbridge-cliffside'],
    description:
      'A heavily-used community pool brought back to life with new plaster, tile, and updated equipment. Designed to handle long seasons and lots of swimmers.',
    details: [
      'Infinity edge facing the water',
      'Pebble Tec finish in dark gray',
      'Stainless steel perimeter overflow',
      'Gas fire line and outdoor kitchen prep',
    ],
    completed: '2022',
  },
  {
    slug: 'sammamish-residence',
    name: 'Sammamish residence pool',
    location: 'Sammamish, Washington',
    tag: 'Diving & play pool',
    image: PORTFOLIO_IMAGES_BY_SLUG['sammamish-residence'],
    description:
      'Deep-end diving, a generous shallow entry, and fountains for play. This pool was built for kids, but the clean coping and deck keep it looking sharp for adults, too.',
    details: [
      'Sport pool with shallow end and deep end',
      'Attached spa and tanning shelf',
      'Outdoor kitchen with grill and bar seating',
      'Pavers and low-maintenance landscaping',
    ],
    completed: '2024',
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return portfolioProjects.map((p) => p.slug);
}
