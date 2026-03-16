'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import type { CarouselApi } from '@/components/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { products } from '@/lib/products';
import Footer from '@/components/sections/Footer';

const AUTOPLAY_DELAY_MS = 5500;

export default function ProductsPage() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.5 });
  const [api, setApi] = useState<CarouselApi>(undefined);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_DELAY_MS);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <main className="relative min-h-screen bg-[rgb(var(--warm-white))] pt-24">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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

        <motion.header
          ref={headerRef}
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="font-display mb-3 text-sm font-medium uppercase tracking-[0.3em] text-amber-800/80">
            What we use
          </p>
          <h1 className="font-display text-5xl font-medium tracking-tight text-[rgb(var(--charcoal))] md:text-6xl">
            Our Products
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[rgb(80,80,80)]">
            We build pools with industry-leading equipment and finishes. Click a product to learn more.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative px-4 md:px-20"
          style={{ perspective: '1200px' }}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: 'center',
              loop: true,
              dragFree: false,
              duration: 45,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product) => {
                const Icon = product.icon;
                return (
                  <CarouselItem key={product.slug} className="basis-full pl-4 md:basis-4/5 md:pl-6">
                    <Link
                      href={`/products/${product.slug}`}
                      className="group block h-full"
                    >
                      <div
                        className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/25 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.5)_inset] backdrop-blur-2xl transition-all duration-500 hover:border-white/60 hover:bg-white/35 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)]"
                        style={{
                          transform: 'translateZ(0) rotateY(-1deg)',
                          transformStyle: 'preserve-3d',
                        }}
                      >
                        <div className="flex min-h-[380px] flex-col p-8 md:flex-row md:items-center md:gap-12 md:p-12">
                          {/* 3D transparent "product" shape */}
                          <div
                            className="relative flex shrink-0 items-center justify-center md:order-2 md:w-2/5"
                            style={{ perspective: '800px' }}
                          >
                            <motion.div
                              className="flex h-44 w-44 items-center justify-center rounded-[2.5rem] md:h-52 md:w-52"
                              style={{
                                background: 'linear-gradient(145deg, rgba(251,191,36,0.25) 0%, rgba(245,158,11,0.15) 40%, rgba(255,255,255,0.4) 100%)',
                                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -2px 20px rgba(245,158,11,0.1), 0 20px 40px -20px rgba(0,0,0,0.2)',
                                border: '1px solid rgba(255,255,255,0.5)',
                                transform: 'rotateY(-8deg) rotateX(5deg) translateZ(20px)',
                              }}
                              whileHover={{
                                rotateY: -4,
                                rotateX: 2,
                                scale: 1.02,
                                transition: { duration: 0.3 },
                              }}
                            >
                              <div className="rounded-2xl bg-white/30 p-6 backdrop-blur-sm">
                                <Icon className="h-14 w-14 text-amber-700/90 md:h-16 md:w-16" strokeWidth={1.25} />
                              </div>
                            </motion.div>
                          </div>

                          <div className="flex flex-1 flex-col justify-center pt-6 md:order-1 md:pt-0">
                            <h2 className="font-display mb-2 text-3xl font-medium text-[rgb(var(--charcoal))] md:text-4xl">
                              {product.title}
                            </h2>
                            <p className="mb-4 text-base font-medium text-amber-800/90">
                              {product.tagline}
                            </p>
                            <p className="mb-6 text-[rgb(80,80,80)] line-clamp-2 md:text-lg">
                              {product.shortDescription}
                            </p>
                            <span className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 group-hover:gap-2 transition-all">
                              Learn more
                              <ChevronRight className="h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-left-2 border border-white/50 bg-white/40 text-[rgb(var(--charcoal))] backdrop-blur-md hover:bg-white/60 md:-left-10" />
            <CarouselNext className="-right-2 border border-white/50 bg-white/40 text-[rgb(var(--charcoal))] backdrop-blur-md hover:bg-white/60 md:-right-10" />
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 rounded-2xl border border-amber-200/60 bg-amber-50/50 p-10 text-center"
        >
          <p className="font-display text-xl text-[rgb(var(--charcoal))] md:text-2xl">
            We choose every product for durability, efficiency, and long-term performance. Questions about a specific brand or upgrade? Ask us.
          </p>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
