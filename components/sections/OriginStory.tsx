'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ABOUT_TIMELINE_IMAGES } from '@/lib/gallery';

const milestones = [
  {
    year: '2010',
    title: 'A concrete crew turns pool builder',
    description:
      'Cascade started as a concrete and flatwork company. After our first pool shell, we shifted our focus to doing full pool structures from rebar to plaster.',
    image: ABOUT_TIMELINE_IMAGES[0],
  },
  {
    year: '2014',
    title: 'Learning every step of the process',
    description:
      'We invested in equipment, training, and vendors so we could own excavation, steel, plumbing, and shotcrete instead of handing work off to subs.',
    image: ABOUT_TIMELINE_IMAGES[1],
  },
  {
    year: '2018',
    title: 'From one-offs to a system',
    description:
      'Dozens of successful startups later, we had a repeatable build process for everything from simple rectangles to big multi-level projects.',
    image: ABOUT_TIMELINE_IMAGES[2],
  },
  {
    year: '2024',
    title: 'Cascade Poolworks today',
    description:
      'A tight crew that only builds pools and spas across the Northwest—no side jobs. The photos on this site are all our work, not stock.',
    image: ABOUT_TIMELINE_IMAGES[3],
  },
];

export default function OriginStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="relative min-h-screen bg-zinc-950 px-6 py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/95 to-black" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="mb-6 text-6xl font-bold tracking-tight text-white md:text-7xl">
            Our Story
          </h2>
          <p className="text-xl text-zinc-400 md:text-2xl">
            Built on integrity, driven by innovation
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-emerald-600 via-zinc-700 to-transparent" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-24 flex items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'text-right md:pr-16' : 'text-left md:pl-16'
                }`}
              >
                <div className="group rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:border-emerald-600/50 hover:bg-zinc-900 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                    <div className="absolute bottom-4 left-0 right-0 px-8">
                      <div className="text-5xl font-bold text-emerald-600">
                        {milestone.year}
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="mb-4 text-3xl font-bold text-white">
                      {milestone.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-zinc-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-emerald-600 bg-zinc-950" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
