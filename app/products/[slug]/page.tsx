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
        <div className="animate-[fadeInLeft_0.5s_ease-out]">
          <Link
            href="/products"
            className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-amber-800/80 transition-colors hover:text-amber-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>

        <div className="animate-[fadeInUp_0.6s_ease-out_0.1s_both]">
          <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 shadow-sm">
            <Icon className="h-8 w-8 text-amber-700" strokeWidth={1.5} />
          </div>
        </div>

        <div className="animate-[fadeInUp_0.7s_ease-out_0.2s_both]">
          <h1 className="font-display text-4xl font-medium tracking-tight text-[rgb(var(--charcoal))] md:text-5xl">
            {product.title}
          </h1>
          <p className="mt-3 text-lg font-medium text-amber-800/90">
            {product.tagline}
          </p>
        </div>

        <div className="animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
          <div className="prose prose-lg mt-10 max-w-none">
            <p className="text-[rgb(60,60,60)] leading-relaxed">
              {product.longDescription}
            </p>
          </div>
        </div>

        {product.items.length > 0 && (
          <div className="animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
            <div className="mt-12 rounded-2xl border border-[rgb(230,228,225)] bg-white p-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)]">
              <h2 className="font-display mb-4 text-xl font-medium text-[rgb(var(--charcoal))]">
                Brands & options we use
              </h2>
              <ul className="space-y-3">
                {product.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[rgb(80,80,80)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="mt-16 animate-[fadeInUp_0.6s_ease-out_0.8s_both]">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(217,161,12,0.2)] transition-all hover:shadow-[0_0_30px_rgba(217,161,12,0.35)] hover:scale-[1.02]"
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
