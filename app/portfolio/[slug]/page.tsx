import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MapPin } from 'lucide-react';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/portfolio';
import Footer from '@/components/sections/Footer';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="relative min-h-screen bg-[rgb(var(--warm-white))] pt-24">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Link
          href="/portfolio"
          className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-amber-800/80 transition-colors hover:text-amber-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>

        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[rgb(30,30,32)]">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-3 text-amber-200/90">
              <MapPin className="h-4 w-4 shrink-0" />
              <span className="text-sm font-medium tracking-wide">{project.location}</span>
            </div>
            <h1 className="font-display mt-2 text-4xl font-medium text-white md:text-5xl">
              {project.name}
            </h1>
            <p className="mt-1 text-sm font-medium uppercase tracking-widest text-white/80">
              {project.tag}
            </p>
          </div>
        </div>

        {project.completed && (
          <p className="mt-6 text-sm font-medium text-amber-800/80">
            Completed {project.completed}
          </p>
        )}

        <div className="prose prose-lg mt-8 max-w-none">
          <p className="text-[rgb(60,60,60)] leading-relaxed">
            {project.description}
          </p>
        </div>

        {project.details.length > 0 && (
          <div className="mt-12 rounded-2xl border border-[rgb(230,228,225)] bg-white p-8 shadow-sm">
            <h2 className="font-display mb-4 text-xl font-medium text-[rgb(var(--charcoal))]">
              Project highlights
            </h2>
            <ul className="space-y-3">
              {project.details.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[rgb(80,80,80)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-16">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-500"
          >
            <ArrowLeft className="h-4 w-4" />
            View all projects
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
