import React from 'react';

const HowDifferent = () => (
  <section className="my-16">
    <div className="text-center mb-8">
      <span className="relative inline-block text-primary-blue font-bold text-xl group pb-3">
        5000+ Students
        <span className="absolute left-0 right-0 bottom-0 h-4 bg-primary-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
        <span className="absolute left-0 right-0 bottom-0 h-4 bg-primary-blue/30 transform origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-300 ease-out"></span>
      </span>
      <br />
      <span className="text-white">Using the BG Method</span>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary-blue">How It's Different</h2>
    <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 text-lg">
      <div className="bg-[#10142c] rounded-xl p-6 shadow-lg">
        <h3 className="font-bold text-primary-blue mb-2">Other Programs</h3>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Random workouts</li>
          <li>Chasing 10 skills at once</li>
          <li>Burnout & plateaus</li>
          <li>No clear path</li>
        </ul>
      </div>
      <div className="bg-[#10142c] rounded-xl p-6 shadow-lg border-2 border-primary-blue">
        <h3 className="font-bold text-primary-blue mb-2">Skill Surge System</h3>
        <ul className="list-disc list-inside text-gray-200 space-y-2">
          <li>Step-by-step, focused system</li>
          <li>One skill at a time</li>
          <li>Smart progressions & adjustments</li>
          <li>Momentum toward your first skill</li>
        </ul>
      </div>
    </div>
  </section>
);

export default HowDifferent; 