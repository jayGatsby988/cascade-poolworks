'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Newspaper } from 'lucide-react';
import Footer from '@/components/sections/Footer';

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-[rgb(var(--warm-white))] pt-24">
      <div className="mx-auto max-w-3xl px-6 py-20">
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
        >
          <p className="font-display mb-3 text-sm font-medium uppercase tracking-[0.3em] text-amber-800/80">
            Insights & Inspiration
          </p>
          <h1 className="font-display text-5xl font-medium tracking-tight text-[rgb(var(--charcoal))] md:text-6xl">
            Blog
          </h1>
          <p className="mt-6 text-lg text-[rgb(80,80,80)]">
            Stories, tips, and inspiration for luxury pool design and outdoor living in Seattle and Washington.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 overflow-hidden rounded-2xl border border-[rgb(230,228,225)] bg-white p-12 text-center shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50"
          >
            <Newspaper className="h-8 w-8 text-amber-700" strokeWidth={1.5} />
          </motion.div>
          <p className="font-display text-2xl font-medium text-[rgb(var(--charcoal))]">Coming soon</p>
          <p className="mt-3 text-[rgb(80,80,80)]">
            We are working on articles about pool design, maintenance tips, and project stories. Check back soon.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mx-auto mt-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
          />
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
