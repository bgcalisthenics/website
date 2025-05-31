import React, { useEffect, useRef } from 'react';

const MembershipBenefits = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    // Observe all section refs
    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      // Cleanup observation
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section className="bg-[#10142c] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col space-y-24 relative w-full">
          {/* 1. Courses */}
          <div 
            ref={(el) => (sectionRefs.current[0] = el)}
            className="flex flex-col md:flex-row md:justify-end transform transition-all duration-700 opacity-0 translate-y-10"
          >
            <div className="custom-rounded-img mx-auto md:mx-0 max-w-[240px] md:max-w-[320px] mb-6 md:mb-0 px-4 md:ml-8">
              <img 
                src="/images/Beginner to Intermediate Calisthenics Program.png" 
                alt="Beginner to Intermediate Calisthenics Program Thumbnail"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="md:w-1/2 w-full max-w-lg text-gray-300 text-base md:px-6 space-y-6 text-left">
              <div>
                <div className="font-bold text-xl mb-2 flex items-center">
                  <span className="mr-2 text-primary-blue">&rsaquo;</span> Start Learning & Achieve Skills
                </div>
                <p>
                  This program helps you start <br />
                  learning the basics, while <br />
                  simultaneously achieving skills <br />
                  because of the way it's <br />
                  structured.
                </p>
              </div>
              <div>
                <div className="font-bold text-xl mb-2 flex items-center">
                  <span className="mr-2 text-primary-blue">&rsaquo;</span> Levels for Any Level
                </div>
                <p>
                  There are levels for <br />
                  any level just in <br />
                  case you can't move <br />
                  to the next one.
                </p>
              </div>
              <div>
                <div className="font-bold text-xl mb-2 flex items-center">
                  <span className="mr-2 text-primary-blue">&rsaquo;</span> 5 Skills in 2 Weeks
                </div>
                <p>
                  By the end, you will <br />
                  learn 5 skills: Headstand, <br />
                  L-sit, Tuck Planche, Crow <br />
                  Pose, and Frog Pose. <br />
                  Preferably in 2 weeks.
                </p>
              </div>
            </div>
          </div>
          
          {/* Arrow */}
          <div 
            ref={(el) => (sectionRefs.current[1] = el)}
            className="absolute left-0 md:left-1/4 transform -translate-x-1/2 transform transition-all duration-500 opacity-0 translate-y-10"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-card border border-dark-border">
              <span className="text-2xl text-secondary-blue animate-bounce">&#9660;</span>
            </div>
          </div>
          
          {/* Price & Refund Policy Section */}
          <div className="bg-[#181a2e] rounded-xl p-8 shadow-lg mb-8 text-left text-white max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Now, let's talk about price.</h2>
            <p className="mb-4">Many ask if I offer refunds.</p>
            <p className="mb-4">That's a fair thing to wonder.<br/>So let me ask you this:</p>
            <p className="mb-4">Have you ever bought a journal, wrote one page, and then left it on your shelf?</p>
            <p className="mb-4">Most people have.<br/>But it wasn't because the journal didn't work — it was because they didn't use it long enough to feel the change.</p>
            <p className="mb-4">This program? It's kind of like that.</p>
            <p className="mb-4">You're not just buying information — you're stepping into something that only works if you work it.</p>
            <p className="mb-4">It's a full roadmap. Built with experience, tested by thousands, and laid out to remove all the guesswork. But just like a journal won't rewrite your story for you, this plan won't build your body unless you show up for it.</p>
            <p className="mb-4">So no, we don't do refunds — not because we're trying to be tough — but because transformation doesn't come with a receipt. It comes with commitment.</p>
            <p className="mb-4">And if that's something you're ready for —<br/>I'll be right there with you inside the community.<br/>Let's get to it.</p>
          </div>
          
          {/* 2. Q&A */}
          <div 
            ref={(el) => (sectionRefs.current[2] = el)}
            className="flex flex-col md:flex-row md:justify-end transform transition-all duration-700 opacity-0 translate-y-10"
          >
            <div className="custom-rounded-img mx-auto md:mx-0 max-w-[240px] md:max-w-[320px] mb-6 md:mb-0 px-4 md:ml-8">
              <img 
                src="/images/Intermediate to Advanced Calisthenics Program.png" 
                alt="Intermediate to Advanced Calisthenics Program Thumbnail"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="md:w-1/2 w-full max-w-lg text-gray-300 text-base md:px-6 space-y-6 text-left">
              <div>
                <div className="font-bold text-xl mb-3 flex items-center">
                  <span className="mr-2 text-primary-blue">&rsaquo;</span> ASK THE ELITE
                </div>
                <p>
                  Get personalized responses from elite <br />
                  athletes and even world champions. <br />
                  Ask questions, get feedback, and <br />
                  apply real expert knowledge to <br />
                  your training.
                </p>
              </div>
              <div>
                <div className="font-bold text-xl mb-3 flex items-center">
                  <span className="mr-2 text-primary-blue">&rsaquo;</span> 5 hours support
                </div>
                <p>
                  All our Athletes together invest <br />
                  5 hours daily to answer <br />
                  all your questions.<br />
                  <span className="font-bold text-white">Yeah you heard right! 5 HOURS</span><br />
                  So no worries, almost all <br />
                  your questions will get answered.
                </p>
              </div>
            </div>
          </div>
          
          {/* Arrow */}
          <div 
            ref={(el) => (sectionRefs.current[3] = el)}
            className="absolute left-0 md:left-1/4 transform -translate-x-1/2 transform transition-all duration-500 opacity-0 translate-y-10"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-card border border-dark-border">
              <span className="text-2xl text-secondary-blue animate-bounce">&#9660;</span>
            </div>
          </div>
          
          {/* 3. Challenges */}
          <div 
            ref={(el) => (sectionRefs.current[4] = el)}
            className="flex flex-col md:flex-row md:justify-end transform transition-all duration-700 opacity-0 translate-y-10"
          >
            <div className="z-10 w-36 h-36 mb-6 md:mb-0 bg-dark-card rounded-full flex items-center justify-center text-2xl font-bold shadow-xl border-2 border-dark-border relative md:w-1/2 md:ml-8">
              <div className="absolute inset-0 rounded-full bg-primary-blue opacity-10"></div>
              Challenges
            </div>
            <div className="md:w-1/2 w-full max-w-lg text-gray-300 text-base md:px-6 text-left">
              <div className="font-bold text-xl mb-3 flex items-center">
                <span className="mr-2 text-primary-blue">&rsaquo;</span> CHALLENGES
              </div>
              <p>
                Inside our community, we regularly <br />
                host exciting challenges where <br />
                members can test their skills, <br />
                set new goals, and push <br />
                past limits — together.
              </p>
            </div>
          </div>
          
          {/* Arrow */}
          <div 
            ref={(el) => (sectionRefs.current[5] = el)}
            className="absolute left-0 md:left-1/4 transform -translate-x-1/2 transform transition-all duration-500 opacity-0 translate-y-10"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-card border border-dark-border">
              <span className="text-2xl text-secondary-blue animate-bounce">&#9660;</span>
            </div>
          </div>
          
          {/* 4. Gear */}
          <div 
            ref={(el) => (sectionRefs.current[6] = el)}
            className="flex flex-col md:flex-row md:justify-end transform transition-all duration-700 opacity-0 translate-y-10"
          >
            <div className="z-10 w-36 h-36 mb-6 md:mb-0 bg-dark-card rounded-full flex items-center justify-center text-2xl font-bold shadow-xl border-2 border-dark-border relative md:w-1/2 md:ml-8">
              <div className="absolute inset-0 rounded-full bg-primary-blue opacity-10"></div>
              Gear
            </div>
            <div className="md:w-1/2 w-full max-w-lg text-gray-300 text-base md:px-6 text-left">
              <div className="font-bold text-xl mb-3 flex items-center">
                <span className="mr-2 text-primary-blue">&rsaquo;</span> EQUIPMENT
              </div>
              <p>
                No more guessing. We show <br />
                you exactly which equipment <br />
                makes sense — from budget <br />
                options to pro gear.
              </p>
            </div>
          </div>
          
          {/* Arrow */}
          <div 
            ref={(el) => (sectionRefs.current[7] = el)}
            className="absolute left-0 md:left-1/4 transform -translate-x-1/2 transform transition-all duration-500 opacity-0 translate-y-10"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-card border border-dark-border">
              <span className="text-2xl text-secondary-blue animate-bounce">&#9660;</span>
            </div>
          </div>
          
          {/* 5. Nutrition */}
          <div 
            ref={(el) => (sectionRefs.current[8] = el)}
            className="flex flex-col md:flex-row md:justify-between transform transition-all duration-700 opacity-0 translate-y-10"
          >
            <div className="z-10 w-36 h-36 mb-6 md:mb-0 bg-dark-card rounded-full flex items-center justify-center text-2xl font-bold shadow-xl border-2 border-dark-border relative md:w-1/2">
              <div className="absolute inset-0 rounded-full bg-primary-blue opacity-10"></div>
              Nutrition
            </div>
            <div className="md:w-1/2 w-full max-w-lg text-gray-300 text-base md:px-6 text-left">
              <div className="font-bold text-xl mb-3 flex items-center">
                <span className="mr-2 text-primary-blue">&rsaquo;</span> NUTRITION
              </div>
              <p>
                Get access to nutrition guides, <br />
                meal plans, and expert advice <br />
                to fuel your progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipBenefits; 