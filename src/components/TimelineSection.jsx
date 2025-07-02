import React, { useRef, useEffect, useState } from 'react';

function TimelineSection() {
  const timelineRef = useRef(null);
  const headingRef = useRef(null);
  const arrowRef = useRef(null);
  const [arrowHasAnimated, setArrowHasAnimated] = useState(false);
  const [arrowIsVisible, setArrowIsVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            if (entry.target === headingRef.current) {
              // Reset animation by briefly setting to false
              setIsVisible(false);
              // Use setTimeout to ensure the reset is visible
              setTimeout(() => {
                setIsVisible(true);
              }, 50);
            }
          } else {
            if (entry.target === headingRef.current) {
              setIsVisible(false);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !arrowHasAnimated) {
            setArrowIsVisible(true);
            setArrowHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    if (arrowRef.current) {
      observer.observe(arrowRef.current);
    }
    return () => {
      if (arrowRef.current) {
        observer.unobserve(arrowRef.current);
      }
    };
  }, [arrowHasAnimated]);

  const timelineData = [
    {
      title: "Skill Building",
      description: "Lay the groundwork by learning basics while learning beginner skills",
      image: "/images/Beginner to Intermediate Calisthenics Program.png",
      date: "Week 1-4",
      skills: [
        { name: "Headstand", icon: "" },
        { name: "Crow Pose", icon: "" },
        { name: "Frog Pose", icon: "" },
        { name: "L-sit", icon: "" },
        { name: "Tuck Planche", icon: "" },
        { name: "One Arm Push-ups", icon: "" }
      ]
    },
    {
      title: "Strength Development",
      description: "Build strength for harder skills with structured routines",
      image: "/images/Intermediate to Advanced Calisthenics Program.png",
      date: "Week 4-8",
      skills: [
        { name: "HSPU", icon: "" },
        { name: "Muscle-Ups", icon: "" },
        { name: "90° HSPU", icon: "" },
        { name: "L-sit to Handstand", icon: "" }
      ]
    },
    {
      title: "Advanced Skills",
      description: "This is where the PDFS for skills will help you achieve harder skills.",
      image: "/images/programs.png",
      date: "Week 8+",
      skills: [
        { name: "Full Planche", icon: "" },
        { name: "Front Lever", icon: "" },
        { name: "One Arm Handstand", icon: "" },
      //{ name: "One Arm Pull-up", icon: "" },
      //{ name: "Human Flag", icon: "" }
      ]
    }
  ];

  return (
    <div className="bg-[#10142c] px-4 pt-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-8">
          Here's how your <span className="relative inline-block text-[#2fbfd7]">
            8-week journey
            <span className="absolute bottom-0 left-0 w-full h-3 bg-[#2fbfd7] opacity-50 -z-10"></span>
          </span> will look like
        </h2>
        
        <div className="relative" ref={timelineRef}>
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#2fbfd7]/30"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item relative flex flex-col md:flex-row items-center gap-8 transform transition-all duration-700 opacity-0 translate-y-10 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#2fbfd7] z-10 shadow-[0_0_15px_rgba(47,191,215,0.5)]"></div>
                
                {/* Content */}
                <div className="w-full md:w-1/2 bg-dark-card p-6 rounded-2xl shadow-xl border border-[#2fbfd7]/20">
                  <div className="text-[#2fbfd7] font-black mb-2">{item.date}</div>
                  <h3 className="text-xl font-black mb-3">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  
                  {/* Skills Section */}
                  <div className="mt-4">
                    <h4 className="text-[#2fbfd7] font-black mb-2">Skills You'll Learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className="flex items-center gap-1 bg-[#2fbfd7]/10 px-3 py-1 rounded-full text-sm"
                        >
                          <span className="text-[#2fbfd7]">{skill.icon}</span>
                          <span className="text-gray-300">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className={`w-[280px] ${index === 2 ? 'md:w-[450px] md:-ml-16' : ''} rounded-xl overflow-hidden ${index === 2 ? '' : 'shadow-[0_0_15px_rgba(47,191,215,0.3)]'}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* START NOW Button - Improved CTA */}
        <div className="flex flex-col items-center justify-center mt-12 mb-8">
          <a
            href="https://whop.com/checkout/plan_Qg84sNINhx4IG?d2c=true"
            className="button-primary relative w-[280px] h-[60px] flex items-center justify-center rounded-full shadow-2xl border-none outline-none"
            style={{
              fontWeight: 800,
              fontSize: '1.3rem',
              letterSpacing: '0.02em',
              textShadow: '0 2px 8px #000a',
              border: 'none',
              outline: 'none',
              WebkitBackdropFilter: 'blur(8px)',
              backdropFilter: 'blur(8px)',
              transition: 'none',
              transform: 'none',
              textDecoration: 'none',
              display: 'flex',
              cursor: 'pointer'
            }}
          >
            <span className="font-black w-full text-center">JOIN NOW</span>
          </a>
          <div className="flex items-center mt-4">
            {/* Avatars */}
            <div className="flex items-center">
              <img src="/images/people2x.png" alt="People who joined" className="w-24 h-auto object-contain" />
            </div>
            {/* Text */}
            <span className="ml-4 text-white/90 font-medium text-base tracking-wide" style={{ textShadow: '0 2px 8px #000a' }}>
              5k+ people have already joined
            </span>
          </div>
        </div>
        {/* New Section: What you will get */}
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <h2 ref={headingRef} className="text-3xl md:text-4xl font-black mb-2 relative">
            This is what you will get in the{' '}
            <span className="relative inline-block text-white">
              BG Method<span className="tm">™</span>
              <span 
                className={`absolute bottom-0 left-0 w-full h-3 bg-[#2fbfd7] opacity-30 -z-10 transition-transform duration-[2000ms] ease-out ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}
                style={{ transformOrigin: 'left' }}
              ></span>
            </span>{' '}
            to help you with the journey
          </h2>
          <div className="py-4 -mx-4 sm:mx-0 sm:px-0">
            <img
              src="/images/vids.png"
              alt="What you will get"
              className="w-screen sm:w-full max-w-none sm:max-w-[900px] rounded-none sm:rounded-2xl transform scale-125 sm:scale-100"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="mt-8 mb-6 max-w-md">
            <ul className="space-y-4 text-left">
              <li className="flex items-start">
                <span className="text-[#2fbfd7] mr-3 text-xl">•</span>
                <span className="text-gray-200 text-lg">Step-by-step explanations for every exercise</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2fbfd7] mr-3 text-xl">•</span>
                <span className="text-gray-200 text-lg">In-depth breakdowns of proper form and technique</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2fbfd7] mr-3 text-xl">•</span>
                <span className="text-gray-200 text-lg">Clear guidance on how to structure and progress your routine</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#2fbfd7] mr-3 text-xl">•</span>
                <span className="text-gray-200 text-lg">Exercises explained with purpose, progressions, and common mistakes to avoid</span>
              </li>
            </ul>
          </div>
          {/* img.png after the text */}
          <div className="px-4 sm:px-0 -mx-4 sm:mx-0 my-8 sm:my-6">
            <img
              src="/images/img.png"
              alt="Additional visual"
              className="w-screen sm:w-full max-w-none sm:max-w-[900px] rounded-none sm:rounded-2xl transform scale-150 sm:scale-100"
              loading="eager"
              decoding="async"
            />
          </div>
          {/* Additional bullet points under img.png */}
          <ul className="space-y-4 text-left mt-6 max-w-md">
            <li className="flex items-start">
              <span className="text-[#2fbfd7] mr-3 text-xl">•</span>
              <span className="text-gray-200 text-lg">Customizable for every level — whether you're a total beginner or already training, the program includes multiple levels to match your progress.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#2fbfd7] mr-3 text-xl">•</span>
              <span className="text-gray-200 text-lg">Complete workout structure and training strategies to build strength and master calisthenics skills efficiently.</span>
            </li>
          </ul>
          {/* bng.png after hj.png */}
          <div className="px-4 sm:px-0 -mx-4 sm:mx-0 mt-6 my-8 sm:my-6">
            <img
              src="/images/bng.png"
              alt="bng visual"
              className="w-screen sm:w-full max-w-none sm:max-w-[900px] rounded-none sm:rounded-2xl transform scale-125 sm:scale-100"
              loading="eager"
              decoding="async"
            />
          </div>
          {/* Bullet points under bng.png */}
          <ul className="space-y-4 text-left mt-6 max-w-md">
            <li className="flex items-start">
              <span className="text-[#2fbfd7] mr-3 text-xl">•</span>
              <span className="text-gray-200 text-lg">5 different pdfs; 5 different skills</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#2fbfd7] mr-3 text-xl">•</span>
              <span className="text-gray-200 text-lg">Customizable at any level (beginner, intermediate, advanced)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#2fbfd7] mr-3 text-xl">•</span>
              <span className="text-gray-200 text-lg">Join thousands of students in the community</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#2fbfd7] mr-3 text-xl">•</span>
              <span className="text-gray-200 text-lg">Post your form videos and get advice from other people</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#2fbfd7] mr-3 text-xl">•</span>
              <span className="text-gray-200 text-lg">..And you can also ask any questions with people who have similar mindsets to you.</span>
            </li>
          </ul>



          <div className="mt-10"></div>
        </div>
      </div>
    </div>
  );
}

export default TimelineSection; 