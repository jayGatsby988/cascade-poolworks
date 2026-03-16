'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-slate-100">
      <motion.div style={{ y }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-80"
        >
          <source
            src="https://assets.mixkit.co/videos/32075/32075-720.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-slate-900/20 to-slate-900/80" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-60"
      />

      <motion.div style={{ opacity }} className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center"
        >
          <motion.h1
            className="font-display mb-6 text-6xl font-medium tracking-tight text-white md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Pools that belong in the frame.
          </motion.h1>

          <motion.p
            className="mb-12 max-w-xl text-xl text-white/90 md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            We design and build pools only. Infinity edges, spas, and resort-style pools across Seattle and Washington.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <Button asChild size="lg" className="group bg-amber-600 px-8 py-6 text-lg font-semibold text-white transition-all hover:bg-amber-500 hover:scale-[1.02]">
              <Link href="/portfolio">
                View our work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white/80 bg-white/10 px-8 py-6 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white hover:scale-[1.02]">
              <Link href="/contact">
                Start a project
              </Link>
            </Button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-white/80"
          >
            Since 2003 · 500+ pools built · Licensed, bonded & insured
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <div className="h-16 w-[2px] bg-gradient-to-b from-amber-400/80 to-transparent" />
      </motion.div>
    </section>
  );
}
