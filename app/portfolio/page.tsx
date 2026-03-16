import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/sections/Footer';
import { portfolioProjects } from '@/lib/portfolio';

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-[rgb(var(--warm-white))] pt-24">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-amber-800/80 transition-colors hover:text-amber-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <div className="mb-16">
          <h1 className="font-display text-5xl font-medium tracking-tight text-[rgb(var(--charcoal))] md:text-6xl">
            Portfolio
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[rgb(80,80,80)]">
            A selection of our pool and outdoor living projects across Seattle and Washington.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group relative aspect-[4/3] block overflow-hidden rounded-2xl bg-[rgb(30,30,32)]"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <p className="text-sm font-medium text-amber-200/90">{project.location}</p>
                <h2 className="font-display mt-1 text-2xl font-medium text-white">
                  {project.name}
                </h2>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-widest text-white/70">
                  {project.tag}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
