import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Features from '@/components/Features';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
    </main>
  );
}
