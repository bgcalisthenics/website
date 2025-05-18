import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import CTASection from './components/CTASection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import LSitProgram from './l-sit-program/LSitProgram';
import WhatIsSkillSurge from './components/WhatIsSkillSurge';
import WhyItWorks from './components/WhyItWorks';
import HowDifferent from './components/HowDifferent';
import PathToSkill from './components/PathToSkill';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-white">
        <Routes>
          <Route path="/" element={
            <div className="space-y-20">
              <HeroSection />
              <WhatIsSkillSurge />
              <WhyItWorks />
              <HowDifferent />
              <PathToSkill />
              <TestimonialsSection />
              <FAQSection />
              <CTASection />
            </div>
          } />
          <Route path="/l-sit-program" element={<LSitProgram />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
