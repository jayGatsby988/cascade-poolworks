'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Droplets, Mountain, Sparkles, Trees } from 'lucide-react';
import { SERVICE_IMAGES } from '@/lib/gallery';

const services = [
  {
    icon: Droplets,
    title: 'New pool builds',
    description: 'From raw dirt to first swim. Structural engineering, plumbing, steel, and concrete handled by one focused pool team.',
    image: SERVICE_IMAGES[0],
  },
  {
    icon: Mountain,
    title: 'Spas & shallow entries',
    description: 'Raised spas, spillways, and walk‑in shallow entries for kids or lounge chairs—all integrated into a single clean design.',
    image: SERVICE_IMAGES[1],
  },
  {
    icon: Sparkles,
    title: 'Tile, plaster & finishes',
    description: 'Hydrazzo and pebble interiors, glass tile, and specialty mosaics installed by crews who do this every week.',
    image: SERVICE_IMAGES[2],
  },
  {
    icon: Trees,
    title: 'Decks & equipment pads',
    description: 'Concrete and paver decks, steps, and equipment layouts that make it easy to live with your pool long-term.',
    image: SERVICE_IMAGES[3],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="relative bg-[rgb(var(--warm-white))] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-2xl"
        >
          <p className="font-display mb-3 text-sm font-medium uppercase tracking-[0.3em] text-amber-800/80">
            What we create
          </p>
          <h2 className="font-display text-4xl font-medium tracking-tight text-[rgb(var(--charcoal))] md:text-5xl">
            Pools only. Built for how you live.
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 36 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--charcoal))]/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 backdrop-blur-sm">
                      <Icon className="h-6 w-6 text-amber-200" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
                    <Icon className="h-5 w-5 text-amber-800" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display mb-3 text-2xl font-medium text-[rgb(var(--charcoal))] md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-[rgb(80,80,80)]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
