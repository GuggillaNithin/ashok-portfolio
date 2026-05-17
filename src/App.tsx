import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Works from './components/Works';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SplashScreen from './components/SplashScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white bg-bg-cream">
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>
      
      {!showSplash && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Experience />
            <Works />
            <Testimonials />
          </main>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </div>
  );
}
