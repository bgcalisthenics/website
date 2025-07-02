import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import ProgramSection from './components/ProgramSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import TrainSection from './components/TrainSection';
import PricingSection from './components/PricingSection';
import ImpactSection from './components/ImpactSection';
import FinalCTA from './components/FinalCTA';

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProgramSection />
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}

export default function App() {
  // Prevent zoom gestures
  useEffect(() => {
    const preventZoom = (e) => {
      if (e.touches && e.touches.length > 1) {
        e.preventDefault();
      }
    };
    const preventDoubleTapZoom = (e) => {
      e.preventDefault();
    };
    document.addEventListener('touchstart', preventZoom, { passive: false });
    document.addEventListener('touchmove', preventZoom, { passive: false });
    document.addEventListener('gesturestart', preventDoubleTapZoom, { passive: false });
    document.addEventListener('gesturechange', preventDoubleTapZoom, { passive: false });
    document.addEventListener('gestureend', preventDoubleTapZoom, { passive: false });
    return () => {
      document.removeEventListener('touchstart', preventZoom);
      document.removeEventListener('touchmove', preventZoom);
      document.removeEventListener('gesturestart', preventDoubleTapZoom);
      document.removeEventListener('gesturechange', preventDoubleTapZoom);
      document.removeEventListener('gestureend', preventDoubleTapZoom);
    };
  }, []);
  return (
    <Router>
      <div className="min-h-screen bg-background text-text font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/programs" element={<ProgramSection />} />
            <Route path="/testimonials" element={<TestimonialsSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/train" element={<TrainSection />} />
            <Route path="/pricing" element={<PricingSection />} />
            <Route path="/impact" element={<ImpactSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
