import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import LSitProgram from './l-sit-program/LSitProgram';
import ProgramCTA from './components/ProgramCTA';
import TimelineSection from './components/TimelineSection';
import FAQSection from './components/FAQSection';

function App() {
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

    // Add event listeners to prevent zoom
    document.addEventListener('touchstart', preventZoom, { passive: false });
    document.addEventListener('touchmove', preventZoom, { passive: false });
    document.addEventListener('gesturestart', preventDoubleTapZoom, { passive: false });
    document.addEventListener('gesturechange', preventDoubleTapZoom, { passive: false });
    document.addEventListener('gestureend', preventDoubleTapZoom, { passive: false });

    // Cleanup
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
      <div className="min-h-screen bg-[#10142c] text-white">
        <Routes>
          <Route path="/" element={
            <div className="space-y-0">
              <HeroSection />
              <TimelineSection />
              <ProgramCTA />
              <FAQSection />
            </div>
          } />
          <Route path="/l-sit-program" element={<LSitProgram />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
