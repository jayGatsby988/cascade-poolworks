'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion';
import CascadeLogo from '@/components/CascadeLogo';

const navLinks = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 50);
    if (latest > 300 && latest > prev) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgb(18,18,20)]/85 shadow-[0_4px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        {/* Gold accent line at the very top */}
        <motion.div
          className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
        />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <Link
              href="/"
              className="group relative flex items-center"
              aria-label="Cascade Poolworks home"
            >
              <div className="relative overflow-hidden rounded-lg px-3 py-2 transition-all duration-300 group-hover:bg-white/5">
                <CascadeLogo size={40} className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                {/* Subtle gold shimmer on hover */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber-400/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: 'easeOut' }}
                >
                  <Link
                    href={link.href}
                    className="group relative px-5 py-2.5"
                  >
                    <span
                      className={`relative z-10 text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                        isActive
                          ? 'text-amber-400'
                          : 'text-white/70 group-hover:text-white'
                      }`}
                    >
                      {link.label}
                    </span>

                    {/* Active indicator - gold underline */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-1/2 h-[2px] w-6 -translate-x-1/2 bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}

                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-lg bg-white/0 transition-all duration-300 group-hover:bg-white/[0.04]" />
                  </Link>
                </motion.div>
              );
            })}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
              className="ml-4"
            >
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full border border-amber-500/30 bg-amber-600/10 px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-amber-400 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/50 hover:bg-amber-600/20 hover:shadow-[0_0_20px_rgba(217,161,12,0.15)]"
              >
                <span className="relative z-10">Get a Quote</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber-400/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/80 transition-all duration-300 hover:border-amber-400/30 hover:bg-white/5 hover:text-white md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Bottom border - subtle gold gradient */}
        <div
          className={`h-[1px] w-full transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          } bg-gradient-to-r from-transparent via-amber-500/20 to-transparent`}
        />
      </motion.header>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[rgb(12,12,14)]/98 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-2">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="group relative block px-8 py-4 text-center"
                    >
                      <span
                        className={`font-display text-4xl font-light tracking-wide transition-colors duration-300 ${
                          isActive
                            ? 'text-amber-400'
                            : 'text-white/60 group-hover:text-white'
                        }`}
                      >
                        {link.label}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileNav"
                          className="mx-auto mt-2 h-[1px] w-12 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.07, ease: 'easeOut' }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full border border-amber-500/40 bg-amber-600/10 px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-amber-400 transition-all duration-300 hover:bg-amber-600/20"
                >
                  Get a Quote
                </Link>
              </motion.div>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-12 h-[1px] w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-4 text-xs uppercase tracking-[0.25em] text-white/25"
              >
                Cascade Poolworks
              </motion.p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
