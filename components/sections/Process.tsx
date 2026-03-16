'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { number: '01', title: 'Consultation', body: 'We listen to your vision, site, and lifestyle. No two pools are the same.' },
  { number: '02', title: 'Design & Plans', body: 'Custom pool plans, 3D visuals, and specs. You see your pool before we build it.' },
  { number: '03', title: 'Build', body: 'Our pool crews, premium materials, and clear communication. We only do pools, so we do them right.' },
  { number: '04', title: 'Handover', body: 'Final walkthrough, care guide, and support. Your pool, done.' },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative bg-[rgb(var(--warm-white))] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-24 text-center"
        >
          <p className="font-display mb-3 text-sm font-medium uppercase tracking-[0.3em] text-amber-800/80">
            How we work
          </p>
          <h2 className="font-display text-4xl font-medium tracking-tight text-[rgb(var(--charcoal))] md:text-5xl">
            From idea to first swim.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group flex flex-col border-b border-[rgb(230,228,225)] py-12 last:border-0 md:flex-row md:items-center md:gap-16 md:py-14"
            >
              <span className="font-display mb-2 text-4xl font-medium text-amber-800/40 transition-colors group-hover:text-amber-800/70 md:mb-0 md:w-24 md:shrink-0 md:text-5xl">
                {step.number}
              </span>
              <div className="md:flex-1">
                <h3 className="font-display text-2xl font-medium text-[rgb(var(--charcoal))] md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-[rgb(80,80,80)]">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
