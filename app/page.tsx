import { Carousel } from './components/LandingPage/Carousel';
import { Hero } from './components/LandingPage/Hero';

export default function Home() {
  return (
    <main className="">
      {/* Hero Section */}
      <Hero />
      {/* Carousel Section */}
      <Carousel />
    </main>
  );
}
