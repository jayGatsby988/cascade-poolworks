'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import CascadeLogo from '@/components/CascadeLogo';

const navigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Process', href: '#' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Infinity Pools', href: '#' },
    { name: 'Resort-Style', href: '#' },
    { name: 'Spa & Fire Features', href: '#' },
  ],
  areas: [
    { name: 'Seattle', href: '#' },
    { name: 'Bellevue', href: '#' },
    { name: 'Kirkland', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative bg-[rgb(30,30,32)] px-6 py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600/90 text-white">
                  <CascadeLogo size={28} />
                </div>
                <span className="font-display text-2xl font-medium text-white">Cascade Poolworks</span>
              </div>
              <p className="mb-4 max-w-sm leading-relaxed text-white/60">
                We design and build pools only—in Seattle and Washington. Infinity edges, spas, resort-style pools, built for the way you live.
              </p>
              <p className="mb-6 text-sm font-medium text-white/50">
                Since 2003 · Over 50 years experience · Family owned and operated · Licensed, bonded and insured
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white/60 transition-all hover:border-amber-500/50 hover:text-amber-400"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Company</h3>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/80 transition-colors hover:text-amber-400">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Services</h3>
            <ul className="space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/80 transition-colors hover:text-amber-400">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Areas</h3>
            <ul className="space-y-4">
              {navigation.areas.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/80 transition-colors hover:text-amber-400">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/40">© {new Date().getFullYear()} Cascade Poolworks. Seattle, Washington.</p>
            <div className="flex gap-8">
              {navigation.legal.map((item) => (
                <a key={item.name} href={item.href} className="text-sm text-white/40 transition-colors hover:text-amber-400">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
