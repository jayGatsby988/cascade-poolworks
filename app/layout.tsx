import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import Header from '@/components/sections/Header';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Cascade Poolworks | Luxury Pool Design & Construction | Seattle, Washington',
  description: 'Cascade Poolworks designs and builds pools only—in Seattle and the greater Washington area. Infinity pools, spas, resort-style pools.',
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
