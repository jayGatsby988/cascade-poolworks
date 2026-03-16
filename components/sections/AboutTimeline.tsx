'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ABOUT_TIMELINE_IMAGES } from '@/lib/gallery';

const milestones = [
  {
    year: '2010',
    title: 'First dig',
    description:
      'We broke ground on our first custom pool and decided to focus the company entirely on pools—not decks, not houses, just pools.',
    image: ABOUT_TIMELINE_IMAGES[0],
  },
  {
    year: '2014',
    title: 'Dialing in the process',
    description:
      'After dozens of projects, we refined our design, engineering, and scheduling so crews, inspectors, and homeowners all stay in sync.',
    image: ABOUT_TIMELINE_IMAGES[1],
  },
  {
    year: '2018',
    title: 'Bigger systems, better finishes',
    description:
      'From steel and plumbing details to plaster and tile, we standardized the details that make our pools feel solid underfoot and easy to maintain.',
    image: ABOUT_TIMELINE_IMAGES[2],
  },
  {
    year: '2024',
    title: 'Pools across the Northwest',
    description:
      'Today our work ranges from tight urban backyards to large rural properties and community pools—still built by crews who only do pools.',
    image: ABOUT_TIMELINE_IMAGES[3],
  },
];

export default function AboutTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="relative min-h-screen bg-[rgb(var(--warm-white))] px-6 py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl">
        <Link
          href="/"
          className="mb-16 inline-flex items-center gap-2 text-sm font-medium text-amber-800/80 transition-colors hover:text-amber-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <p className="font-display mb-4 text-sm font-medium uppercase tracking-[0.35em] text-amber-800/80">
            Our Journey
          </p>
          <h1 className="font-display mb-6 text-5xl font-medium tracking-tight text-[rgb(var(--charcoal))] md:text-7xl">
            Our Story
          </h1>
          <p className="mb-4 text-xl text-[rgb(80,80,80)] md:text-2xl">
            Built on integrity, driven by craft
          </p>
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-[rgb(80,80,80)]/60">
            Since 2003 · 500+ pools built · Family owned and operated · Licensed, bonded & insured
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-amber-500 via-amber-300/40 to-transparent" />

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
                <div className="group overflow-hidden rounded-2xl border border-[rgb(230,228,225)] bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] backdrop-blur-sm transition-all duration-300 hover:border-amber-400/50 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)]">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--charcoal))]/80 via-[rgb(var(--charcoal))]/30 to-transparent" />
                    <div className="absolute bottom-4 left-0 right-0 px-8">
                      <div className="font-display text-5xl font-medium text-amber-400">
                        {milestone.year}
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-display mb-4 text-3xl font-medium text-[rgb(var(--charcoal))]">
                      {milestone.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-[rgb(80,80,80)]">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-amber-500 bg-[rgb(var(--warm-white))] shadow-sm" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
