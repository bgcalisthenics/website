import React from 'react';

const PathToSkill = () => (
  <section className="my-16 text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-blue">Your Path to Your First Calisthenics Skill</h2>
    <ol className="max-w-2xl mx-auto text-lg text-gray-200 space-y-4 list-decimal list-inside text-left md:text-center">
      <li>Pick your target skill</li>
      <li>Follow the <span className="text-primary-blue font-bold">Skill Surge System</span></li>
      <li>Unlock your first skill in <span className="text-primary-blue font-bold">14 days</span></li>
    </ol>
    <button className="button-primary mt-10">
      Start Your Skill Surge
    </button>
  </section>
);

export default PathToSkill; 