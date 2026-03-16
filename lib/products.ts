import type { LucideIcon } from 'lucide-react';
import { Zap, Droplets, Thermometer, Cpu, Sparkles, Lightbulb, Wind } from 'lucide-react';

export type Product = {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  items: string[];
};

export const products: Product[] = [
  {
    slug: 'pumps-motors',
    title: 'Pumps & Motors',
    tagline: 'Efficient, quiet circulation',
    shortDescription: 'Variable-speed pumps and motors we install for reliable, energy-efficient pool circulation.',
    longDescription: 'We use only variable-speed pumps and premium motors so your pool runs quietly and efficiently. Pentair IntelliFlo, Hayward TriStar, and Jandy ePump are our go-to choices for new builds and replacements. They cut energy use, last longer, and give you precise control over flow and run times.',
    icon: Zap,
    items: ['Pentair IntelliFlo', 'Hayward TriStar', 'Jandy ePump', 'Variable-speed pumps'],
  },
  {
    slug: 'filtration',
    title: 'Filtration',
    tagline: 'Crystal-clear water',
    shortDescription: 'Cartridge, DE, and high-flow filters that keep your pool clean with minimal hassle.',
    longDescription: 'Clear water starts with the right filter. We install Pentair Clean & Clear, Hayward ProSeries, and other top-tier cartridge and DE systems sized for your pool. Proper filtration means less chemical use, easier maintenance, and water you’re proud to swim in.',
    icon: Droplets,
    items: ['Pentair Clean & Clear', 'Hayward ProSeries', 'Cartridge & DE filters', 'High-flow systems'],
  },
  {
    slug: 'heaters-heat-pumps',
    title: 'Heaters & Heat Pumps',
    tagline: 'Comfort when you want it',
    shortDescription: 'Gas heaters and electric heat pumps for extended swim seasons and consistent temperature.',
    longDescription: 'We specify gas heaters and electric heat pumps from Pentair, Jandy, and Hayward so you can extend your season and keep the water comfortable. Whether you want quick heat for a weekend or efficient long-term heating, we size and install the right unit for your pool and climate.',
    icon: Thermometer,
    items: ['Pentair MasterTemp', 'Jandy JXi', 'Hayward HeatPro', 'Electric heat pumps'],
  },
  {
    slug: 'automation-control',
    title: 'Automation & Control',
    tagline: 'Control from your phone',
    shortDescription: 'App-based automation for pumps, lights, heaters, and more from one interface.',
    longDescription: 'Run your pool from your phone. We install Pentair IntelliCenter, Jandy iAqualink, and Hayward OmniLogic so you can control pumps, lights, heaters, and features from one app. Schedules, timers, and diagnostics are all in your pocket—no more running to the equipment pad.',
    icon: Cpu,
    items: ['Pentair IntelliCenter', 'Jandy iAqualink', 'Hayward OmniLogic', 'App-controlled'],
  },
  {
    slug: 'finishes-surfaces',
    title: 'Finishes & Surfaces',
    tagline: 'Looks and durability',
    shortDescription: 'Pebble, glass tile, and exposed aggregate finishes built to last and look great.',
    longDescription: 'The finish defines how your pool looks and feels. We work with Pebble Tec, Wet Edge, glass tile, and exposed aggregate to match your style and budget. Every finish we install is chosen for durability, color retention, and ease of care so your pool stays beautiful for years.',
    icon: Sparkles,
    items: ['Pebble Tec', 'Wet Edge', 'Glass tile', 'Exposed aggregate'],
  },
  {
    slug: 'lighting',
    title: 'Lighting',
    tagline: 'Safe and stunning at night',
    shortDescription: 'LED and fiber-optic pool lighting for safety and ambiance after dark.',
    longDescription: 'Good lighting makes your pool usable and beautiful at night. We install Pentair IntelliBrite, Jandy WaterColors, and other LED and fiber-optic options so you get reliable, energy-efficient light and optional color effects. We place and wire everything for maximum impact and safety.',
    icon: Lightbulb,
    items: ['Pentair IntelliBrite', 'Jandy WaterColors', 'LED & fiber optic', 'Color-changing'],
  },
  {
    slug: 'cleaners-accessories',
    title: 'Cleaners & Accessories',
    tagline: 'Less work, more swim time',
    shortDescription: 'Robotic and pressure cleaners, skimmers, and covers we trust for daily care.',
    longDescription: 'We recommend and install robotic and pressure-side cleaners—including Dolphin and Polaris—plus skimmers, fittings, and premium covers. The right accessories mean less manual cleaning, better water quality, and more time enjoying your pool instead of maintaining it.',
    icon: Wind,
    items: ['Dolphin robotic', 'Polaris pressure', 'Skimmers & fittings', 'Premium covers'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
