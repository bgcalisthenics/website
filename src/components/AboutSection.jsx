import React from 'react';

function AboutSection() {
  return (
    <div className="bg-dark-card py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center justify-center gap-2">
          Hey I'm Leo <span className="text-3xl">👋</span>
        </h2>

        {/* Profile Card */}
        <div className="bg-dark-bg rounded-2xl p-8 shadow-xl mb-12">
          <img
            src="/profile.jpg"
            alt="Leo profile"
            className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-primary-blue"
          />

          {/* Social Proof Bar */}
          <div className="flex items-center justify-center gap-6 mb-8 bg-dark-card/50 rounded-full p-4 max-w-md mx-auto">
            <div className="flex items-center gap-2">
              <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
              <span className="text-sm text-gray-300">361K followers</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/youtube-icon.png" alt="YouTube" className="w-6 h-6" />
              <span className="text-sm text-gray-300">472K subscribers</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/tiktok-icon.png" alt="TikTok" className="w-6 h-6" />
              <span className="text-sm text-gray-300">763.1K followers</span>
            </div>
          </div>

          {/* Bio Text */}
          <p className="text-lg text-gray-300 mb-6">
            I've been doing calisthenics for 6 years and during that time I've tried and tested more strength methods than I can name.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            The one I'm using right now is the one that's gotten me to my current level: 
            <span className="font-bold text-white"> it's the most effective system I've developed to date.</span>
          </p>

          <h3 className="text-2xl md:text-4xl font-bold mb-8">
            This Is The Calisthenics Blueprint That{' '}
            <span className="text-primary-blue">Got Me To My Current Level</span>...
          </h3>

          {/* Skills Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src="/skill1.jpg"
              alt="Calisthenics skill demonstration 1"
              className="w-full rounded-xl"
            />
            <img
              src="/skill2.jpg"
              alt="Calisthenics skill demonstration 2"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
