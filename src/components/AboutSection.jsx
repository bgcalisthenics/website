import React, { useRef, useEffect, useState } from 'react';
import useInView from "../hooks/useInView";

function AboutSection() {
  const [arrowAnimRef, arrowInView] = useInView({ threshold: 0.1 });
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  const timelineSections = [
    { id: "courses", label: "Courses" },
    { id: "qa", label: "Q&A" },
    { id: "challenges", label: "Challenges" },
    { id: "gear", label: "Gear" },
    { id: "nutrition", label: "Nutrition" },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    console.log("Arrow in view:", arrowInView);
  }, [arrowInView]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.timeline-content section');
      let current = 0;
      sections.forEach((section, idx) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY + window.innerHeight / 2 >= sectionTop) {
          current = idx;
        }
      });
      setActiveIdx(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#10142c] py-20 px-4">
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
              <div className="p-[3px] rounded-full bg-gradient-to-tr from-primary-blue via-blue-400 to-blue-500">
                <div className="bg-dark-card rounded-full p-1 flex items-center justify-center">
                  <img src="/images/instagram.webp" alt="Instagram" className="w-6 h-6" />
                </div>
              </div>
              <span className="text-sm text-gray-300">361K followers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-[3px] rounded-full bg-gradient-to-tr from-primary-blue via-blue-400 to-blue-500">
                <div className="bg-dark-card rounded-full p-1 flex items-center justify-center">
                  <img src="/youtube-icon.png" alt="YouTube" className="w-6 h-6" />
                </div>
              </div>
              <span className="text-sm text-gray-300">472K subscribers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-[3px] rounded-full bg-gradient-to-tr from-primary-blue via-blue-400 to-blue-500">
                <div className="bg-dark-card rounded-full p-1 flex items-center justify-center">
                  <img src="/tiktok-icon.png" alt="TikTok" className="w-6 h-6" />
                </div>
              </div>
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

          <div className="flex justify-center my-12">
            <div className="relative flex flex-col items-center">
              <div className="absolute w-1 bg-gray-700 h-full left-1/2 -translate-x-1/2" style={{height: `${timelineSections.length * 100}px`}} />
              {timelineSections.map((section, idx) => (
                <div
                  key={section.id}
                  className={`timeline-point w-6 h-6 rounded-full mb-12 z-10 border-4 ${activeIdx === idx ? 'bg-yellow-400 border-white' : 'bg-gray-700 border-gray-700'}`}
                  style={{ transition: 'background 0.3s, border 0.3s' }}
                />
              ))}
            </div>
          </div>

          <div ref={arrowAnimRef} className="relative w-40 h-40 mx-auto -mt-24 mb-1">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 100 100" 
              fill="none" 
              stroke="url(#gradient)" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2fbfd7" />
                  <stop offset="100%" stopColor="#23a6bb" />
                </linearGradient>
              </defs>
              <path
                ref={pathRef}
                d="M 20 90 Q 40 40 60 60 T 80 30 L 85 35 M 80 30 L 75 35"
                style={{
                  strokeDasharray: pathLength,
                  strokeDashoffset: arrowInView ? 0 : pathLength,
                  transition: "stroke-dashoffset 1.2s cubic-bezier(0.77,0,0.18,1)"
                }}
              />
            </svg>
          </div>

          <div className="timeline-container">
            <div className="timeline"></div>
            <div className="timeline-content">
              {timelineSections.map((section, idx) => (
                <section key={section.id} id={section.id}>
                  <h3>{section.label}</h3>
                  <p>{section.label === "Courses" ? "Hours of exclusive video courses, step-by-step instructions, and more." : section.label === "Q&A" ? "Personalized responses from elite athletes and world champions." : section.label === "Challenges" ? "Regularly hosted challenges to test your skills and set new goals." : section.label === "Gear" ? "Guidance on the best equipment, from budget to pro gear." : section.label === "Nutrition" ? "Nutrition tips and plans to support your training." : ""}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
