'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { STRIP_IMAGE } from '@/lib/gallery';

const stats = [
  { value: 2003, suffix: '', label: 'In business since' },
  { value: 500, suffix: '+', label: 'Pools built' },
  { value: 100, suffix: '%', label: 'Of work is referrals' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const [displayValue, setDisplayValue] = React.useState('0');

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsub = springValue.on('change', (latest) => {
      setDisplayValue(value % 1 === 0 ? Math.floor(latest).toString() : latest.toFixed(1));
    });
    return () => unsub();
  }, [springValue, value]);

  return (
    <span ref={ref} className="font-display text-5xl font-medium text-amber-400 md:text-6xl">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function WhyRRR() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative">
      <div className="relative h-[40vh] min-h-[280px] w-full overflow-hidden md:h-[45vh]">
        <img
          src={STRIP_IMAGE}
          alt="Detail of Cascade Poolworks tile and waterline"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgb(var(--charcoal))]/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-12 md:gap-20"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-sm font-medium uppercase tracking-[0.15em] text-white/90"
          >
            Family owned and operated · Licensed, bonded and insured
          </motion.p>
        </div>
      </div>

      <div className="bg-[rgb(var(--warm-white))] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-2xl font-medium leading-relaxed text-[rgb(var(--charcoal))] md:text-3xl md:leading-relaxed"
          >
            We only do pools. We design and build them to match the level of your property and the way you want to live.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
