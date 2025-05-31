import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import LSitProgram from './l-sit-program/LSitProgram';
import ProgramCTA from './components/ProgramCTA';
import TimelineSection from './components/TimelineSection';
import FAQSection from './components/FAQSection';

function App() {
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
