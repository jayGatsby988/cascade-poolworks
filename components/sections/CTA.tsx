'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTA_IMAGE } from '@/lib/gallery';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" ref={ref} className="relative min-h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={CTA_IMAGE}
          alt="Cascade Poolworks pool and spa at dusk"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgb(30,30,32)]/70" />
      </div>

      <div className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="font-display mb-6 text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
            Ready to see water in your own backyard?
          </h2>
          <p className="mb-12 text-lg text-white/80 md:text-xl">
            Tell us how you want to use your pool—laps, kids, entertaining—and we’ll design and build a structure that fits your property and your budget.
          </p>
          <Button asChild size="lg" className="group bg-amber-600 px-10 py-7 text-lg font-semibold text-white transition-all hover:bg-amber-500 hover:scale-[1.02]">
            <Link href="/contact">
              Begin your project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
