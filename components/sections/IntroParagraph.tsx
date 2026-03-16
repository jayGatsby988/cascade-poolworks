'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { INTRO_IMAGE } from '@/lib/gallery';

export default function IntroParagraph() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src={INTRO_IMAGE}
          alt="Completed Cascade Poolworks project in Seattle"
          className="h-full w-full object-cover brightness-75 md:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/95" />
      </div>

      <div className="relative z-10 flex min-h-[90vh] flex-col justify-end px-6 pb-24 pt-32 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <p className="font-display mb-4 text-sm font-medium uppercase tracking-[0.35em] text-amber-300/90">
            Cascade Poolworks · Seattle, Washington
          </p>
          <h2 className="font-display mb-5 text-4xl font-medium leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-[0_8px_30px_rgba(0,0,0,0.7)]">
            The kind of pool you actually come home to.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            This is one of our courtyard builds—tight access, full structure, automatic cover, and clean tile work. It is what we do every week: engineer the shell, place the steel, pour the concrete, and deliver a pool that feels solid under your feet.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
