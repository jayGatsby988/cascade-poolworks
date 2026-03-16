'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';
import { portfolioProjects } from '@/lib/portfolio';

// Skip the Queen Anne project here so the "Signature work" grid
// shows different images than the second-page hero.
const projects = portfolioProjects.slice(1, 5);

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="relative bg-[rgb(30,30,32)] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="font-display mb-3 text-sm font-medium uppercase tracking-[0.3em] text-amber-200/70">
              Signature work
            </p>
            <h2 className="font-display text-4xl font-medium tracking-tight text-white md:text-5xl">
              Pools that define the property.
            </h2>
          </div>
          <p className="max-w-md text-white/70 md:text-right">
            A few recent Cascade Poolworks projects—from family play pools to long lap lanes and heavily used community pools. All built start to finish by our crew.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Link href={`/portfolio/${project.slug}`} className="block h-full w-full">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-800 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                  <div className="flex items-center gap-3 text-amber-200/90">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span className="text-sm font-medium tracking-wide">{project.location}</span>
                  </div>
                  <h3 className="font-display mt-2 text-3xl font-medium text-white md:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-widest text-white/70">
                    {project.tag}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
