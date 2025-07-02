import React from 'react';

const programs = [
  {
    title: 'Beginner to Intermediate',
    image: '/public/images/Beginner to Intermediate Calisthenics Program.png',
    description: 'Build a strong foundation with progressive bodyweight exercises. Perfect for those new to calisthenics or looking to master the basics.',
  },
  {
    title: 'Intermediate to Advanced',
    image: '/public/images/Intermediate to Advanced Calisthenics Program.png',
    description: 'Take your skills to the next level with advanced progressions and skill training. Designed for athletes ready to push their limits.',
  },
  {
    title: 'Skill Mastery Pathways',
    image: '/public/images/skills.png',
    description: 'Focused programs for mastering specific skills like muscle-ups, handstands, and planches. Step-by-step guidance for every level.',
  },
];

export default function ProgramSection() {
  return (
    <section id="programs" className="bg-white pt-20 pb-0 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">Our 13 Skill Progressions Calisthenics Programs</h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Choose from expertly crafted programs designed to help you progress safely and efficiently, no matter your starting point.
        </p>

        {/* Programs Image */}
        <div className="text-center mb-8">
          <img src="/images/programs_2.png" alt="Calisthenics Programs" className="mx-auto w-[700px] h-auto" />
        </div>

        {/* Skills List */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-black text-center mb-6">Calisthenics Skills You'll Master:</h3>
          <div className="text-center">
            <ul className="text-lg text-gray-700 leading-relaxed inline-block text-left">
              <li>• Headstand</li>
              <li>• Crow Pose</li>
              <li>• Frog Pose</li>
              <li>• L-sit</li>
              <li>• Tuck Planche</li>
              <li>• One arm Push ups</li>
              <li>• HSPU (Handstand Push Up)</li>
              <li>• Muscle-ups</li>
              <li>• 90degree HSPU</li>
              <li>• L sit to handstand</li>
              <li>• Full Planche</li>
              <li>• Front Lever</li>
              <li>• One arm handstand</li>
            </ul>
          </div>
        </div>


      </div>
    </section>
  );
}
