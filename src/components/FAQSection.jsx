import React, { useRef, useState, useEffect } from 'react';

const faqs = [
  {
    q: "I'm a beginner — is this program still for me?",
    a: "Absolutely. The program is designed for all levels. Each skill has many clear levels of progression, so you'll always know where you are and what to do next.",
  },
  {
    q: "What do I get?",
    a: (
      <ul style={{paddingLeft: 0, marginTop: 16, marginBottom: 0, listStyle: 'none'}}>
        <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: 12}}>
          <span style={{color: '#27ae60', fontSize: 22, marginRight: 10, marginTop: 2}}>✔️</span>
          <span>Full 8-week training program</span>
        </li>
        <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: 12}}>
          <span style={{color: '#27ae60', fontSize: 22, marginRight: 10, marginTop: 2}}>✔️</span>
          <span>Exact reps, sets, and workouts</span>
        </li>
        <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: 12}}>
          <span style={{color: '#27ae60', fontSize: 22, marginRight: 10, marginTop: 2}}>✔️</span>
          <span>Skill-specific PDFs</span>
        </li>
        <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: 12}}>
          <span style={{color: '#27ae60', fontSize: 22, marginRight: 10, marginTop: 2}}>✔️</span>
          <span>Video coaching (if you send in your form)</span>
        </li>
        <li style={{display: 'flex', alignItems: 'flex-start'}}>
          <span style={{color: '#27ae60', fontSize: 22, marginRight: 10, marginTop: 2}}>✔️</span>
          <span>Community support</span>
        </li>
      </ul>
    ),
  },
  {
    q: "Do I need a gym or any equipment?",
    a: "Nope. All you need is a pull-up bar and your bodyweight. That's it. No machines, no membership.",
  },
  {
    q: "How long until I see real progress?",
    a: "Most students see noticeable progress in 2–4 weeks, depending on consistency. The full program is 8 weeks, and many unlock their first skill before that.",
  },
  {
    q: "How much time do I need each day?",
    a: "Workouts take around 45–60 minutes, and you can train 3–6 days/week depending on your schedule. You'll be guided based on your goals.",
  },
  {
    q: "What if I can't even do a pull-up or push-up yet?",
    a: "The program includes beginner regressions and easier variations to build your baseline strength, and will continue for many other skills.",
  },
  {
    q: "Can I combine this with other workouts or sports?",
    a: "Yes! The program is designed to be flexible. If you're doing weight training, sports, or other activities, I'll show you how to adjust your schedule to avoid overtraining.",
  },
  {
    q: "Will I get support or feedback on my form?",
    a: "100%. You can send in your form videos, and I'll personally give you feedback inside the community.",
  },
  {
    q: "What happens after the 8 weeks?",
    a: "You'll move into the Advanced Training Phase with access to new skills like the planche, front lever, or one-arm handstand — and support will be continued, just a different way of training.",
  },
  {
    q: "Is this a one-time payment or subscription?",
    a: "One-time payment. You get lifetime access to the entire program, all future updates, and the private community.",
  },
  {
    q: "Do you offer refunds?",
    a: "There are no refunds. That's like asking for a refund on a gym membership because you didn't go. This only works if you do — and if you're ready, I'm ready to watch you succeed.",
  },
  {
    q: "How is this different from YouTube tutorials or free content online?",
    a: "YouTube gives you scattered pieces; the BG Method gives you a step-by-step roadmap built for real progression, with accountability, feedback, and coaching.",
  },
];

const FAQSection = () => {
  // Video refs for the result videos
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);
  const video4Ref = useRef(null);
  const video5Ref = useRef(null);
  const video6Ref = useRef(null);
  const video7Ref = useRef(null);
  const video8Ref = useRef(null);
  const video9Ref = useRef(null);
  const video10Ref = useRef(null);
  const video11Ref = useRef(null);
  const video12Ref = useRef(null);

  // Video states
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);
  const [isPlaying4, setIsPlaying4] = useState(false);
  const [isPlaying5, setIsPlaying5] = useState(false);
  const [isPlaying6, setIsPlaying6] = useState(false);
  const [isPlaying7, setIsPlaying7] = useState(false);
  const [isPlaying8, setIsPlaying8] = useState(false);
  const [isPlaying9, setIsPlaying9] = useState(false);
  const [isPlaying10, setIsPlaying10] = useState(false);
  const [isPlaying11, setIsPlaying11] = useState(false);
  const [isPlaying12, setIsPlaying12] = useState(false);

  // Track if user manually paused videos
  const [userPausedVideo1, setUserPausedVideo1] = useState(false);
  const [userPausedVideo2, setUserPausedVideo2] = useState(false);
  const [userPausedVideo3, setUserPausedVideo3] = useState(false);
  const [userPausedVideo4, setUserPausedVideo4] = useState(false);
  const [userPausedVideo5, setUserPausedVideo5] = useState(false);
  const [userPausedVideo6, setUserPausedVideo6] = useState(false);
  const [userPausedVideo7, setUserPausedVideo7] = useState(false);
  const [userPausedVideo8, setUserPausedVideo8] = useState(false);
  const [userPausedVideo9, setUserPausedVideo9] = useState(false);
  const [userPausedVideo10, setUserPausedVideo10] = useState(false);
  const [userPausedVideo11, setUserPausedVideo11] = useState(false);
  const [userPausedVideo12, setUserPausedVideo12] = useState(false);

  // Hover states
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);
  const [isHovering6, setIsHovering6] = useState(false);
  const [isHovering7, setIsHovering7] = useState(false);
  const [isHovering8, setIsHovering8] = useState(false);
  const [isHovering9, setIsHovering9] = useState(false);
  const [isHovering10, setIsHovering10] = useState(false);
  const [isHovering11, setIsHovering11] = useState(false);
  const [isHovering12, setIsHovering12] = useState(false);

  // Auto-play videos when they come into view and pause when they leave
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoElement = entry.target;
          if (entry.isIntersecting) {
            // Video is in view - auto-play it only if user hasn't manually paused it
            if (videoElement && videoElement.paused) {
              let shouldPlay = false;
              let setIsPlaying = null;

              // Determine which video this is and if it should play
              if (videoElement === video1Ref.current && !userPausedVideo1) {
                shouldPlay = true;
                setIsPlaying = setIsPlaying1;
              } else if (videoElement === video2Ref.current && !userPausedVideo2) {
                shouldPlay = true;
                setIsPlaying = setIsPlaying2;
              } else if (videoElement === video3Ref.current && !userPausedVideo3) {
                shouldPlay = true;
                setIsPlaying = setIsPlaying3;
              } else if (videoElement === video4Ref.current && !userPausedVideo4) {
                shouldPlay = true;
                setIsPlaying = setIsPlaying4;
              } else if (videoElement === video5Ref.current && !userPausedVideo5) {
                shouldPlay = true;
                setIsPlaying = setIsPlaying5;
              } else if (videoElement === video6Ref.current && !userPausedVideo6) {
                shouldPlay = true;
                setIsPlaying = setIsPlaying6;
              } else if (videoElement === video7Ref.current && !userPausedVideo7) {
                shouldPlay = true;
                setIsPlaying = setIsPlaying7;
              } else if (videoElement === video8Ref.current && !userPausedVideo8) {
                shouldPlay = true;
                setIsPlaying = setIsPlaying8;
              } else if (videoElement === video9Ref.current && !userPausedVideo9) {
                shouldPlay = true;
                setIsPlaying = setIsPlaying9;
              } else if (videoElement === video10Ref.current && !userPausedVideo10) {
                shouldPlay = true;
                setIsPlaying = setIsPlaying10;
              } else if (videoElement === video11Ref.current && !userPausedVideo11) {
                shouldPlay = true;
                setIsPlaying = setIsPlaying11;
              } else if (videoElement === video12Ref.current && !userPausedVideo12) {
                shouldPlay = true;
                setIsPlaying = setIsPlaying12;
              }

              if (shouldPlay) {
                videoElement.play().then(() => {
                  if (setIsPlaying) setIsPlaying(true);
                }).catch((error) => {
                  console.log("Auto-play failed:", error);
                  if (setIsPlaying) setIsPlaying(false);
                });
              }
            }
          } else {
            // Video is out of view - pause it to save bandwidth
            if (videoElement && !videoElement.paused) {
              videoElement.pause();

              // Update the corresponding playing state
              if (videoElement === video1Ref.current) setIsPlaying1(false);
              else if (videoElement === video2Ref.current) setIsPlaying2(false);
              else if (videoElement === video3Ref.current) setIsPlaying3(false);
              else if (videoElement === video4Ref.current) setIsPlaying4(false);
              else if (videoElement === video5Ref.current) setIsPlaying5(false);
              else if (videoElement === video6Ref.current) setIsPlaying6(false);
              else if (videoElement === video7Ref.current) setIsPlaying7(false);
              else if (videoElement === video8Ref.current) setIsPlaying8(false);
              else if (videoElement === video9Ref.current) setIsPlaying9(false);
              else if (videoElement === video10Ref.current) setIsPlaying10(false);
              else if (videoElement === video11Ref.current) setIsPlaying11(false);
              else if (videoElement === video12Ref.current) setIsPlaying12(false);
            }
          }
        });
      },
      {
        threshold: 0.5, // Video needs to be 50% visible to trigger autoplay
        rootMargin: '0px 0px -10% 0px' // Start playing slightly before fully in view
      }
    );

    // Observe all video elements
    const videoRefs = [
      video1Ref, video2Ref, video3Ref, video4Ref, video5Ref, video6Ref,
      video7Ref, video8Ref, video9Ref, video10Ref, video11Ref, video12Ref
    ];

    videoRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      // Cleanup observers
      videoRefs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [
    userPausedVideo1, userPausedVideo2, userPausedVideo3, userPausedVideo4,
    userPausedVideo5, userPausedVideo6, userPausedVideo7, userPausedVideo8,
    userPausedVideo9, userPausedVideo10, userPausedVideo11, userPausedVideo12
  ]); // Re-run when any userPausedVideo changes

  // Ensure videos are loaded and visible on mobile
  useEffect(() => {
    const videoRefs = [
      video1Ref, video2Ref, video3Ref, video4Ref, video5Ref, video6Ref,
      video7Ref, video8Ref, video9Ref, video10Ref, video11Ref, video12Ref
    ];

    videoRefs.forEach((ref, index) => {
      if (ref.current) {
        const video = ref.current;

        // Force load the video
        video.load();

        // Ensure video is visible immediately
        video.style.opacity = '1';
        video.style.visibility = 'visible';

        // Set up event listeners for mobile compatibility
        const handleLoadedData = () => {
          console.log(`FAQ Video ${index + 1} loaded and ready`);
          video.style.opacity = '1';
          video.style.visibility = 'visible';
        };

        const handleCanPlay = () => {
          console.log(`FAQ Video ${index + 1} can play`);
          video.style.opacity = '1';
        };

        const handleLoadedMetadata = () => {
          console.log(`FAQ Video ${index + 1} metadata loaded`);
          video.style.opacity = '1';
          video.style.visibility = 'visible';
        };

        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('loadedmetadata', handleLoadedMetadata);

        // Cleanup function for this video
        return () => {
          video.removeEventListener('loadeddata', handleLoadedData);
          video.removeEventListener('canplay', handleCanPlay);
          video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
      }
    });
  }, []);

  const togglePlayPause = (videoRef, setIsPlaying, setUserPaused) => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        setUserPaused(false); // Reset user pause flag when user manually plays
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        setUserPaused(true); // Set user pause flag when user manually pauses
      }
    }
  };

  const handleClickVideoOrButton = (videoRef, setIsPlaying, setUserPaused) => {
    togglePlayPause(videoRef, setIsPlaying, setUserPaused);
  };

  return (
    <section style={{color: '#fff'}}>
      <div style={{maxWidth: 600, margin: '0 auto', padding: '0 1rem'}}>
        <h2 style={{textAlign: 'center', fontWeight: 800, fontSize: 38, marginBottom: 40, color: '#fff', letterSpacing: 0.5, textDecoration: 'underline', textUnderlineOffset: 6}}>FAQ</h2>
        <div>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{marginBottom: 40}}>
              <div style={{display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 8}}>
                <span style={{color: '#fff', fontSize: 28, marginTop: 2}}>❓</span>
                <span style={{fontWeight: 700, fontSize: 22, color: '#fff', lineHeight: 1.2}}>{faq.q}</span>
              </div>
              <div style={{paddingLeft: 44, color: '#fff', fontSize: 17, lineHeight: 1.6}}>{faq.a}</div>
            </div>
          ))}
        </div>

        {/* Additional heading after FAQ */}
        <div style={{textAlign: 'center', marginTop: 80, paddingTop: 40}}>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 relative" style={{color: '#fff', lineHeight: 1.2, marginBottom: 80, margin: 0}}>
            Here are more results of people<br />using the BG Method (10+ students)
          </h1>
        </div>

        {/* Results Videos - Mobile: Stacked, Desktop: 3x4 Grid Layout */}
        <div style={{maxWidth: '1400px', margin: '0 auto', padding: 0, marginTop: 0}} className="video-gallery-container">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-4 mb-0 sm:mb-6">
            {/* Front Lever Video */}
            <div
              className="aspect-[828/1792] relative flex items-center justify-center cursor-pointer"
              onClick={() => handleClickVideoOrButton(video1Ref, setIsPlaying1, setUserPausedVideo1)}
              onMouseEnter={() => setIsHovering1(true)}
              onMouseLeave={() => setIsHovering1(false)}
            >
              <video
                muted
                loop
                playsInline
                preload="auto"
                autoPlay
                className="w-full h-full object-cover rounded-xl border-[0.5px] border-[#2fbfd7] shadow-[0_0_15px_rgba(47,191,215,0.3),0_0_30px_rgba(47,191,215,0.15)]"
                ref={video1Ref}
                onPause={() => setUserPausedVideo1(true)}
                onPlay={() => setUserPausedVideo1(false)}
                onTimeUpdate={(e) => {
                  const video = e.target;
                  const progress = (video.currentTime / video.duration) * 100;
                  const progressBar = video.parentElement.querySelector('.progress-bar');
                  if (progressBar) progressBar.style.width = `${progress}%`;
                }}
              >
                <source src="/videos/front-lever.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/30">
                <div className="h-full transition-all duration-100 progress-bar" style={{ width: '0%', background: 'linear-gradient(to right, #ff4444, #cc0000)' }} />
              </div>

              {/* Blue Play Button (only visible when paused) */}
              {!isPlaying1 && (
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2fbfd7] rounded-full flex items-center justify-center opacity-80 absolute z-10" style={{ transition: 'none' }}>
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}

              {/* Small Play/Pause Button (visible only on hover) */}
              {isHovering1 && (
                <div className="absolute bottom-4 left-4 z-10 w-8 h-8 bg-[#2fbfd7] rounded-full flex items-center justify-center cursor-pointer" style={{ transition: 'none' }}>
                  {isPlaying1 ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
              )}
            </div>

            {/* L-sit Video */}
            <div
              className="aspect-[828/1792] relative flex items-center justify-center cursor-pointer"
              onClick={() => handleClickVideoOrButton(video2Ref, setIsPlaying2, setUserPausedVideo2)}
              onMouseEnter={() => setIsHovering2(true)}
              onMouseLeave={() => setIsHovering2(false)}
            >
              <video
                src="/videos/L-sit.mp4"
                muted
                loop
                playsInline
                preload="auto"
                autoPlay
                className="w-full h-full object-cover rounded-xl border-[0.5px] border-[#2fbfd7] shadow-[0_0_15px_rgba(47,191,215,0.3),0_0_30px_rgba(47,191,215,0.15)]"
                ref={video2Ref}
                onPause={() => setUserPausedVideo2(true)}
                onPlay={() => setUserPausedVideo2(false)}
                onTimeUpdate={(e) => {
                  const video = e.target;
                  const progress = (video.currentTime / video.duration) * 100;
                  const progressBar = video.parentElement.querySelector('.progress-bar');
                  if (progressBar) progressBar.style.width = `${progress}%`;
                }}
              >
                Your browser does not support the video tag.
              </video>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/30">
                <div className="h-full transition-all duration-100 progress-bar" style={{ width: '0%', background: 'linear-gradient(to right, #ff4444, #cc0000)' }} />
              </div>

              {/* Blue Play Button (only visible when paused) */}
              {!isPlaying2 && (
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2fbfd7] rounded-full flex items-center justify-center opacity-80 hover:bg-[#23a6bb] transition-colors absolute z-10">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}

              {/* Small Play/Pause Button (visible only on hover) */}
              {isHovering2 && (
                <div className="absolute bottom-4 left-4 z-10 w-8 h-8 bg-[#2fbfd7] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#23a6bb] transition-colors">
                  {isPlaying2 ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
              )}
            </div>

            {/* MU Video */}
            <div
              className="aspect-[828/1792] relative flex items-center justify-center cursor-pointer"
              onClick={() => handleClickVideoOrButton(video3Ref, setIsPlaying3, setUserPausedVideo3)}
              onMouseEnter={() => setIsHovering3(true)}
              onMouseLeave={() => setIsHovering3(false)}
            >
              <video
                src="/videos/mu.mp4"
                muted
                loop
                playsInline
                preload="auto"
                autoPlay
                className="w-full h-full object-cover rounded-xl border-[0.5px] border-[#2fbfd7] shadow-[0_0_15px_rgba(47,191,215,0.3),0_0_30px_rgba(47,191,215,0.15)]"
                ref={video3Ref}
                onPause={() => setUserPausedVideo3(true)}
                onPlay={() => setUserPausedVideo3(false)}
                onTimeUpdate={(e) => {
                  const video = e.target;
                  const progress = (video.currentTime / video.duration) * 100;
                  const progressBar = video.parentElement.querySelector('.progress-bar');
                  if (progressBar) progressBar.style.width = `${progress}%`;
                }}
              >
                Your browser does not support the video tag.
              </video>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/30">
                <div className="h-full transition-all duration-100 progress-bar" style={{ width: '0%', background: 'linear-gradient(to right, #ff4444, #cc0000)' }} />
              </div>

              {/* Blue Play Button (only visible when paused) */}
              {!isPlaying3 && (
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2fbfd7] rounded-full flex items-center justify-center opacity-80 hover:bg-[#23a6bb] transition-colors absolute z-10">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}

              {/* Small Play/Pause Button (visible only on hover) */}
              {isHovering3 && (
                <div className="absolute bottom-4 left-4 z-10 w-8 h-8 bg-[#2fbfd7] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#23a6bb] transition-colors">
                  {isPlaying3 ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-4 mb-0 sm:mb-6">
            {/* HSPU Video */}
            <div
              className="aspect-[828/1792] relative flex items-center justify-center cursor-pointer"
              onClick={() => handleClickVideoOrButton(video4Ref, setIsPlaying4, setUserPausedVideo4)}
              onMouseEnter={() => setIsHovering4(true)}
              onMouseLeave={() => setIsHovering4(false)}
            >
              <video
                src="/videos/hspu.mp4"
                muted
                loop
                playsInline
                preload="auto"
                autoPlay
                className="w-full h-full object-cover rounded-xl border-[0.5px] border-[#2fbfd7] shadow-[0_0_15px_rgba(47,191,215,0.3),0_0_30px_rgba(47,191,215,0.15)]"
                ref={video4Ref}
                onPause={() => setUserPausedVideo4(true)}
                onPlay={() => setUserPausedVideo4(false)}
                onTimeUpdate={(e) => {
                  const video = e.target;
                  const progress = (video.currentTime / video.duration) * 100;
                  const progressBar = video.parentElement.querySelector('.progress-bar');
                  if (progressBar) progressBar.style.width = `${progress}%`;
                }}
              >
                Your browser does not support the video tag.
              </video>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/30">
                <div className="h-full transition-all duration-100 progress-bar" style={{ width: '0%', background: 'linear-gradient(to right, #ff4444, #cc0000)' }} />
              </div>

              {/* Blue Play Button (only visible when paused) */}
              {!isPlaying4 && (
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2fbfd7] rounded-full flex items-center justify-center opacity-80 absolute z-10" style={{ transition: 'none' }}>
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}

              {/* Small Play/Pause Button (visible only on hover) */}
              {isHovering4 && (
                <div className="absolute bottom-4 left-4 z-10 w-8 h-8 bg-[#2fbfd7] rounded-full flex items-center justify-center cursor-pointer" style={{ transition: 'none' }}>
                  {isPlaying4 ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
              )}
            </div>

            {/* HSPU1 Video */}
            <div
              className="aspect-[828/1792] relative flex items-center justify-center cursor-pointer"
              onClick={() => handleClickVideoOrButton(video5Ref, setIsPlaying5, setUserPausedVideo5)}
              onMouseEnter={() => setIsHovering5(true)}
              onMouseLeave={() => setIsHovering5(false)}
            >
              <video
                src="/videos/hspu1.mp4"
                muted
                loop
                playsInline
                preload="auto"
                autoPlay
                className="w-full h-full object-cover rounded-xl border-[0.5px] border-[#2fbfd7] shadow-[0_0_15px_rgba(47,191,215,0.3),0_0_30px_rgba(47,191,215,0.15)]"
                ref={video5Ref}
                onPause={() => setUserPausedVideo5(true)}
                onPlay={() => setUserPausedVideo5(false)}
                onTimeUpdate={(e) => {
                  const video = e.target;
                  const progress = (video.currentTime / video.duration) * 100;
                  const progressBar = video.parentElement.querySelector('.progress-bar');
                  if (progressBar) progressBar.style.width = `${progress}%`;
                }}
              >
                Your browser does not support the video tag.
              </video>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/30">
                <div className="h-full transition-all duration-100 progress-bar" style={{ width: '0%', background: 'linear-gradient(to right, #ff4444, #cc0000)' }} />
              </div>

              {/* Blue Play Button (only visible when paused) */}
              {!isPlaying5 && (
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2fbfd7] rounded-full flex items-center justify-center opacity-80 absolute z-10" style={{ transition: 'none' }}>
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}

              {/* Small Play/Pause Button (visible only on hover) */}
              {isHovering5 && (
                <div className="absolute bottom-4 left-4 z-10 w-8 h-8 bg-[#2fbfd7] rounded-full flex items-center justify-center cursor-pointer" style={{ transition: 'none' }}>
                  {isPlaying5 ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
              )}
            </div>

            {/* L-sit to Handstand Video */}
            <div
              className="aspect-[828/1792] relative flex items-center justify-center cursor-pointer"
              onClick={() => handleClickVideoOrButton(video6Ref, setIsPlaying6, setUserPausedVideo6)}
              onMouseEnter={() => setIsHovering6(true)}
              onMouseLeave={() => setIsHovering6(false)}
            >
              <video
                src="/videos/l-sit-to-handstand.mp4"
                muted
                loop
                playsInline
                preload="auto"
                autoPlay
                className="w-full h-full object-cover rounded-xl border-[0.5px] border-[#2fbfd7] shadow-[0_0_15px_rgba(47,191,215,0.3),0_0_30px_rgba(47,191,215,0.15)]"
                ref={video6Ref}
                onPause={() => setUserPausedVideo6(true)}
                onPlay={() => setUserPausedVideo6(false)}
                onTimeUpdate={(e) => {
                  const video = e.target;
                  const progress = (video.currentTime / video.duration) * 100;
                  const progressBar = video.parentElement.querySelector('.progress-bar');
                  if (progressBar) progressBar.style.width = `${progress}%`;
                }}
              >
                Your browser does not support the video tag.
              </video>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/30">
                <div className="h-full transition-all duration-100 progress-bar" style={{ width: '0%', background: 'linear-gradient(to right, #ff4444, #cc0000)' }} />
              </div>

              {/* Blue Play Button (only visible when paused) */}
              {!isPlaying6 && (
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2fbfd7] rounded-full flex items-center justify-center opacity-80 hover:bg-[#23a6bb] transition-colors absolute z-10">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}

              {/* Small Play/Pause Button (visible only on hover) */}
              {isHovering6 && (
                <div className="absolute bottom-4 left-4 z-10 w-8 h-8 bg-[#2fbfd7] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#23a6bb] transition-colors">
                  {isPlaying6 ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-4 mb-0 sm:mb-6">
            {/* Adv Tuck Video */}
            <div
              className="aspect-[828/1792] relative flex items-center justify-center cursor-pointer"
              onClick={() => handleClickVideoOrButton(video7Ref, setIsPlaying7, setUserPausedVideo7)}
              onMouseEnter={() => setIsHovering7(true)}
              onMouseLeave={() => setIsHovering7(false)}
            >
              <video
                src="/videos/adv-tuck.mp4"
                muted
                loop
                playsInline
                preload="auto"
                autoPlay
                className="w-full h-full object-cover rounded-xl border-[0.5px] border-[#2fbfd7] shadow-[0_0_15px_rgba(47,191,215,0.3),0_0_30px_rgba(47,191,215,0.15)]"
                ref={video7Ref}
                onPause={() => setUserPausedVideo7(true)}
                onPlay={() => setUserPausedVideo7(false)}
                onTimeUpdate={(e) => {
                  const video = e.target;
                  const progress = (video.currentTime / video.duration) * 100;
                  const progressBar = video.parentElement.querySelector('.progress-bar');
                  if (progressBar) progressBar.style.width = `${progress}%`;
                }}
              >
                Your browser does not support the video tag.
              </video>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/30">
                <div className="h-full transition-all duration-100 progress-bar" style={{ width: '0%', background: 'linear-gradient(to right, #ff4444, #cc0000)' }} />
              </div>

              {/* Blue Play Button (only visible when paused) */}
              {!isPlaying7 && (
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2fbfd7] rounded-full flex items-center justify-center opacity-80 hover:bg-[#23a6bb] transition-colors absolute z-10">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}

              {/* Small Play/Pause Button (visible only on hover) */}
              {isHovering7 && (
                <div className="absolute bottom-4 left-4 z-10 w-8 h-8 bg-[#2fbfd7] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#23a6bb] transition-colors">
                  {isPlaying7 ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
              )}
            </div>

            {/* Pistol Squat Video */}
            <div
              className="aspect-[828/1792] relative flex items-center justify-center cursor-pointer"
              onClick={() => handleClickVideoOrButton(video8Ref, setIsPlaying8, setUserPausedVideo8)}
              onMouseEnter={() => setIsHovering8(true)}
              onMouseLeave={() => setIsHovering8(false)}
            >
              <video
                src="/videos/pistol-squat.mp4"
                muted
                loop
                playsInline
                preload="auto"
                autoPlay
                className="w-full h-full object-cover rounded-xl border-[0.5px] border-[#2fbfd7] shadow-[0_0_15px_rgba(47,191,215,0.3),0_0_30px_rgba(47,191,215,0.15)]"
                ref={video8Ref}
                onPause={() => setUserPausedVideo8(true)}
                onPlay={() => setUserPausedVideo8(false)}
                onTimeUpdate={(e) => {
                  const video = e.target;
                  const progress = (video.currentTime / video.duration) * 100;
                  const progressBar = video.parentElement.querySelector('.progress-bar');
                  if (progressBar) progressBar.style.width = `${progress}%`;
                }}
              >
                Your browser does not support the video tag.
              </video>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/30">
                <div className="h-full transition-all duration-100 progress-bar" style={{ width: '0%', background: 'linear-gradient(to right, #ff4444, #cc0000)' }} />
              </div>

              {/* Blue Play Button (only visible when paused) */}
              {!isPlaying8 && (
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2fbfd7] rounded-full flex items-center justify-center opacity-80 hover:bg-[#23a6bb] transition-colors absolute z-10">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}

              {/* Small Play/Pause Button (visible only on hover) */}
              {isHovering8 && (
                <div className="absolute bottom-4 left-4 z-10 w-8 h-8 bg-[#2fbfd7] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#23a6bb] transition-colors">
                  {isPlaying8 ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
              )}
            </div>

            {/* MU1 Video */}
            <div
              className="aspect-[828/1792] relative flex items-center justify-center cursor-pointer"
              onClick={() => handleClickVideoOrButton(video9Ref, setIsPlaying9, setUserPausedVideo9)}
              onMouseEnter={() => setIsHovering9(true)}
              onMouseLeave={() => setIsHovering9(false)}
            >
              <video
                src="/videos/mu1.mp4"
                muted
                loop
                playsInline
                preload="auto"
                autoPlay
                className="w-full h-full object-cover rounded-xl border-[0.5px] border-[#2fbfd7] shadow-[0_0_15px_rgba(47,191,215,0.3),0_0_30px_rgba(47,191,215,0.15)]"
                ref={video9Ref}
                onPause={() => setUserPausedVideo9(true)}
                onPlay={() => setUserPausedVideo9(false)}
                onTimeUpdate={(e) => {
                  const video = e.target;
                  const progress = (video.currentTime / video.duration) * 100;
                  const progressBar = video.parentElement.querySelector('.progress-bar');
                  if (progressBar) progressBar.style.width = `${progress}%`;
                }}
              >
                Your browser does not support the video tag.
              </video>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/30">
                <div className="h-full transition-all duration-100 progress-bar" style={{ width: '0%', background: 'linear-gradient(to right, #ff4444, #cc0000)' }} />
              </div>

              {/* Blue Play Button (only visible when paused) */}
              {!isPlaying9 && (
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2fbfd7] rounded-full flex items-center justify-center opacity-80 hover:bg-[#23a6bb] transition-colors absolute z-10">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}

              {/* Small Play/Pause Button (visible only on hover) */}
              {isHovering9 && (
                <div className="absolute bottom-4 left-4 z-10 w-8 h-8 bg-[#2fbfd7] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#23a6bb] transition-colors">
                  {isPlaying9 ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-4 mb-0">
            {/* Muscle Up Video */}
            <div
              className="aspect-[828/1792] relative flex items-center justify-center cursor-pointer"
              onClick={() => handleClickVideoOrButton(video10Ref, setIsPlaying10, setUserPausedVideo10)}
              onMouseEnter={() => setIsHovering10(true)}
              onMouseLeave={() => setIsHovering10(false)}
            >
              <video
                src="/videos/muscle-up.mp4"
                muted
                loop
                playsInline
                preload="auto"
                autoPlay
                className="w-full h-full object-cover rounded-xl border-[0.5px] border-[#2fbfd7] shadow-[0_0_15px_rgba(47,191,215,0.3),0_0_30px_rgba(47,191,215,0.15)]"
                ref={video10Ref}
                onPause={() => setUserPausedVideo10(true)}
                onPlay={() => setUserPausedVideo10(false)}
                onTimeUpdate={(e) => {
                  const video = e.target;
                  const progress = (video.currentTime / video.duration) * 100;
                  const progressBar = video.parentElement.querySelector('.progress-bar');
                  if (progressBar) progressBar.style.width = `${progress}%`;
                }}
              >
                Your browser does not support the video tag.
              </video>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/30">
                <div className="h-full transition-all duration-100 progress-bar" style={{ width: '0%', background: 'linear-gradient(to right, #ff4444, #cc0000)' }} />
              </div>

              {/* Blue Play Button (only visible when paused) */}
              {!isPlaying10 && (
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2fbfd7] rounded-full flex items-center justify-center opacity-80 hover:bg-[#23a6bb] transition-colors absolute z-10">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}

              {/* Small Play/Pause Button (visible only on hover) */}
              {isHovering10 && (
                <div className="absolute bottom-4 left-4 z-10 w-8 h-8 bg-[#2fbfd7] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#23a6bb] transition-colors">
                  {isPlaying10 ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
              )}
            </div>

            {/* Tuck Planche PU Video */}
            <div
              className="aspect-[828/1792] relative flex items-center justify-center cursor-pointer"
              onClick={() => handleClickVideoOrButton(video11Ref, setIsPlaying11, setUserPausedVideo11)}
              onMouseEnter={() => setIsHovering11(true)}
              onMouseLeave={() => setIsHovering11(false)}
            >
              <video
                src="/videos/tuck-planche-pu.mp4"
                muted
                loop
                playsInline
                preload="auto"
                autoPlay
                className="w-full h-full object-cover rounded-xl border-[0.5px] border-[#2fbfd7] shadow-[0_0_15px_rgba(47,191,215,0.3),0_0_30px_rgba(47,191,215,0.15)]"
                ref={video11Ref}
                onPause={() => setUserPausedVideo11(true)}
                onPlay={() => setUserPausedVideo11(false)}
                onTimeUpdate={(e) => {
                  const video = e.target;
                  const progress = (video.currentTime / video.duration) * 100;
                  const progressBar = video.parentElement.querySelector('.progress-bar');
                  if (progressBar) progressBar.style.width = `${progress}%`;
                }}
              >
                Your browser does not support the video tag.
              </video>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/30">
                <div className="h-full transition-all duration-100 progress-bar" style={{ width: '0%', background: 'linear-gradient(to right, #ff4444, #cc0000)' }} />
              </div>

              {/* Blue Play Button (only visible when paused) */}
              {!isPlaying11 && (
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2fbfd7] rounded-full flex items-center justify-center opacity-80 hover:bg-[#23a6bb] transition-colors absolute z-10">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}

              {/* Small Play/Pause Button (visible only on hover) */}
              {isHovering11 && (
                <div className="absolute bottom-4 left-4 z-10 w-8 h-8 bg-[#2fbfd7] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#23a6bb] transition-colors">
                  {isPlaying11 ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
              )}
            </div>

            {/* Wall HSPU Video */}
            <div
              className="aspect-[828/1792] relative flex items-center justify-center cursor-pointer"
              onClick={() => handleClickVideoOrButton(video12Ref, setIsPlaying12, setUserPausedVideo12)}
              onMouseEnter={() => setIsHovering12(true)}
              onMouseLeave={() => setIsHovering12(false)}
            >
              <video
                src="/videos/wall-hspu.mp4"
                muted
                loop
                playsInline
                preload="auto"
                autoPlay
                className="w-full h-full object-cover rounded-xl border-[0.5px] border-[#2fbfd7] shadow-[0_0_15px_rgba(47,191,215,0.3),0_0_30px_rgba(47,191,215,0.15)]"
                ref={video12Ref}
                onPause={() => setUserPausedVideo12(true)}
                onPlay={() => setUserPausedVideo12(false)}
                onTimeUpdate={(e) => {
                  const video = e.target;
                  const progress = (video.currentTime / video.duration) * 100;
                  const progressBar = video.parentElement.querySelector('.progress-bar');
                  if (progressBar) progressBar.style.width = `${progress}%`;
                }}
              >
                Your browser does not support the video tag.
              </video>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/30">
                <div className="h-full transition-all duration-100 progress-bar" style={{ width: '0%', background: 'linear-gradient(to right, #ff4444, #cc0000)' }} />
              </div>

              {/* Blue Play Button (only visible when paused) */}
              {!isPlaying12 && (
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2fbfd7] rounded-full flex items-center justify-center opacity-80 hover:bg-[#23a6bb] transition-colors absolute z-10">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}

              {/* Small Play/Pause Button (visible only on hover) */}
              {isHovering12 && (
                <div className="absolute bottom-4 left-4 z-10 w-8 h-8 bg-[#2fbfd7] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#23a6bb] transition-colors">
                  {isPlaying12 ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Final START NOW Button */}
        <div className="flex flex-col items-center justify-center mt-16 mb-8">
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
            <span className="font-black w-full text-center">START NOW</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
