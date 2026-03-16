import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/sections/Footer';

export default function BlogPage() {
  return (
    <main className="relative min-h-screen bg-[rgb(var(--warm-white))] pt-24">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-amber-800/80 transition-colors hover:text-amber-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="font-display text-5xl font-medium tracking-tight text-[rgb(var(--charcoal))] md:text-6xl">
          Blog
        </h1>
        <p className="mt-6 text-lg text-[rgb(80,80,80)]">
          Stories, tips, and inspiration for luxury pool design and outdoor living in Seattle and Washington. Coming soon.
        </p>
        <div className="mt-16 rounded-2xl border border-[rgb(230,228,225)] bg-white p-10 text-center shadow-sm">
          <p className="font-display text-xl text-[rgb(var(--charcoal))]">No posts yet.</p>
          <p className="mt-2 text-[rgb(80,80,80)]">Check back later for updates.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
