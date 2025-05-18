import React from 'react';

const HowDifferent = () => (
  <section className="my-16">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary-blue">How It's Different</h2>
    <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 text-lg">
      <div className="bg-dark-card/70 rounded-xl p-6 shadow-lg">
        <h3 className="font-bold text-primary-blue mb-2">Other Programs</h3>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Random workouts</li>
          <li>Chasing 10 skills at once</li>
          <li>Burnout & plateaus</li>
          <li>No clear path</li>
        </ul>
      </div>
      <div className="bg-dark-card/90 rounded-xl p-6 shadow-lg border-2 border-primary-blue">
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