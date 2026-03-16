import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getProductBySlug, getAllProductSlugs } from '@/lib/products';
import Footer from '@/components/sections/Footer';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const Icon = product.icon;

  return (
    <main className="relative min-h-screen bg-[rgb(var(--warm-white))] pt-24">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/products"
          className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-amber-800/80 transition-colors hover:text-amber-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
          <Icon className="h-8 w-8" strokeWidth={1.5} />
        </div>

        <h1 className="font-display text-4xl font-medium tracking-tight text-[rgb(var(--charcoal))] md:text-5xl">
          {product.title}
        </h1>
        <p className="mt-3 text-lg font-medium text-amber-800/90">
          {product.tagline}
        </p>

        <div className="prose prose-lg mt-10 max-w-none">
          <p className="text-[rgb(60,60,60)] leading-relaxed">
            {product.longDescription}
          </p>
        </div>

        {product.items.length > 0 && (
          <div className="mt-12 rounded-2xl border border-[rgb(230,228,225)] bg-white p-8 shadow-sm">
            <h2 className="font-display mb-4 text-xl font-medium text-[rgb(var(--charcoal))]">
              Brands & options we use
            </h2>
            <ul className="space-y-2">
              {product.items.map((item) => (
                <li key={item} className="text-[rgb(80,80,80)]">
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-16">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-500"
          >
            <ArrowLeft className="h-4 w-4" />
            View all products
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
