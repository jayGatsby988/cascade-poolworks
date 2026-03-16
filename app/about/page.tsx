import AboutTimeline from '@/components/sections/AboutTimeline';
import Footer from '@/components/sections/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function AboutPage() {
  return (
    <SmoothScroll>
      <main className="relative overflow-x-hidden bg-white pt-24">
        <AboutTimeline />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
