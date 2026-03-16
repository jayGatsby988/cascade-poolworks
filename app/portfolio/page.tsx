'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/sections/Footer';
import { portfolioProjects } from '@/lib/portfolio';

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-[rgb(var(--warm-white))] pt-24">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-amber-800/80 transition-colors hover:text-amber-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-16"
        >
          <p className="font-display mb-3 text-sm font-medium uppercase tracking-[0.3em] text-amber-800/80">
            Our work
          </p>
          <h1 className="font-display text-5xl font-medium tracking-tight text-[rgb(var(--charcoal))] md:text-6xl">
            Portfolio
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[rgb(80,80,80)]">
            A selection of our pool and outdoor living projects across Seattle and Washington.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group relative aspect-[4/3] block overflow-hidden rounded-2xl bg-[rgb(30,30,32)] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.12)] transition-shadow duration-500 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.25)]"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="text-sm font-medium text-amber-200/90">{project.location}</p>
                  <h2 className="font-display mt-1 text-2xl font-medium text-white">
                    {project.name}
                  </h2>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-widest text-white/70">
                    {project.tag}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
