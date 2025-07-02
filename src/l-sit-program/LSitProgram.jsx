import React from 'react';

function LSitProgram() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2fbfd7]/10 via-[#2196f3]/10 to-[#23a6bb]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-blue to-secondary-blue bg-clip-text text-transparent">
            L-Sit Mastery Program
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master the fundamental L-sit exercise with our comprehensive program
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-dark-card/50 backdrop-blur-lg p-8 rounded-xl border border-dark-border">
              <h2 className="text-3xl font-bold text-white mb-6">Program Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                Our L-sit program is designed to help you build the strength and flexibility needed to master this challenging exercise. Through systematic progression and expert guidance, you'll develop the core strength and hip flexibility required for a perfect L-sit.
              </p>
            </div>

            <div className="bg-dark-card/50 backdrop-blur-lg p-8 rounded-xl border border-dark-border">
              <h2 className="text-3xl font-bold text-white mb-6">What You'll Learn</h2>
              <ul className="space-y-4">
                {[
                  'Proper form and technique',
                  'Progressive exercises',
                  'Strength building routines',
                  'Flexibility training',
                  'Common mistakes to avoid',
                  'Advanced variations',
                  'Integration with other skills',
                  'Maintenance and progression'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-primary-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-dark-card/50 backdrop-blur-lg p-8 rounded-xl border border-dark-border">
              <h2 className="text-3xl font-bold text-white mb-6">Program Details</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-dark-border/30 rounded-lg">
                  <span className="text-gray-300">Duration</span>
                  <span className="text-white font-bold">8 Weeks</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-dark-border/30 rounded-lg">
                  <span className="text-gray-300">Workouts per Week</span>
                  <span className="text-white font-bold">3-4</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-dark-border/30 rounded-lg">
                  <span className="text-gray-300">Skill Level</span>
                  <span className="text-white font-bold">All Levels</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-dark-border/30 rounded-lg">
                  <span className="text-gray-300">Equipment Needed</span>
                  <span className="text-white font-bold">Minimal</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-blue/20 to-secondary-blue/20 p-8 rounded-xl border border-primary-blue/30">
              <h2 className="text-3xl font-bold text-white mb-6">Get Started Today</h2>
              <p className="text-gray-300 mb-6">
                Join thousands of students who have mastered the L-sit with our proven program.
              </p>
              <a
                href="https://whop.com/checkout/plan_P7h3rFzlRIdaX?d2c=true"
                className="button-primary w-full"
                style={{ textDecoration: 'none', display: 'block', cursor: 'pointer' }}
              >
                Start Your L-Sit Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LSitProgram; 