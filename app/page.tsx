import Hero from '@/components/sections/Hero';
import IntroParagraph from '@/components/sections/IntroParagraph';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Process from '@/components/sections/Process';
import WhyRRR from '@/components/sections/WhyRRR';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative overflow-x-hidden bg-[rgb(var(--warm-white))]">
        <Hero />
        <IntroParagraph />
        <Services />
        <Projects />
        <Process />
        <WhyRRR />
        <CTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
