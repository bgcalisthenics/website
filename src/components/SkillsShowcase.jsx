import React from 'react';

function SkillsShowcase() {
  return (
    <div className="bg-[#10142c] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Weighted Skills Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Check Out How Cere Is Doing{' '}
            <span className="text-primary-blue">WEIGHTED SKILLS</span>
          </h2>
          <h3 className="text-xl md:text-2xl text-gray-300 mb-8">
            6 Months In The Program
          </h3>
          
          <div className="aspect-w-16 aspect-h-9">
            <div className="relative">
              <video 
                className="w-full rounded-2xl border-[3px] border-[#2fbfd7] shadow-[0_0_15px_rgba(47,191,215,0.3),0_0_30px_rgba(47,191,215,0.15)]"
                controls
                poster="/weighted-skills-thumbnail.jpg"
                onTimeUpdate={(e) => {
                  const video = e.target;
                  const progress = (video.currentTime / video.duration) * 100;
                  video.parentElement.querySelector('.progress-bar').style.width = `${progress}%`;
                }}
              >
                <source src="/weighted-skills.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/30">
                <div className="h-full transition-all duration-100 progress-bar" style={{ width: '0%', background: 'linear-gradient(to right, #ff4444, #cc0000)' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Defying Gravity Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Check Out This Short Video Of{' '}
            <div className="mt-2">
              My Students{' '}
              <span className="text-primary-blue">Defying Gravity</span>
            </div>
          </h2>
          <h3 className="text-2xl text-white mb-8">
            With Calisthenics Skills
          </h3>

          <div className="aspect-w-16 aspect-h-9">
            <div className="relative">
              <video 
                className="w-full rounded-2xl border-[3px] border-[#2fbfd7] shadow-[0_0_15px_rgba(47,191,215,0.3),0_0_30px_rgba(47,191,215,0.15)]"
                controls
                poster="/defying-gravity-thumbnail.jpg"
                onTimeUpdate={(e) => {
                  const video = e.target;
                  const progress = (video.currentTime / video.duration) * 100;
                  video.parentElement.querySelector('.progress-bar').style.width = `${progress}%`;
                }}
              >
                <source src="/defying-gravity.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/30">
                <div className="h-full transition-all duration-100 progress-bar" style={{ width: '0%', background: 'linear-gradient(to right, #ff4444, #cc0000)' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            'Zero Weight Mastery',
            'Build Strength and Control',
            'Customizable For All Levels',
            'Measurable Results Fast',
          ].map((benefit, index) => (
            <div 
              key={index}
              className="bg-dark-card/50 backdrop-blur-lg p-6 rounded-xl border border-primary-blue/30 hover:border-primary-blue transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-white mb-2">{benefit}</h4>
              <p className="text-gray-400">Most students see strength, skill, and physique changes in just weeks.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsShowcase; 