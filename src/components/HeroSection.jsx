import React, { useRef, useState, useEffect } from 'react';
import VideoSection from './VideoSection';
import '../index.css';
import useInView from "../hooks/useInView";

function HeroSection() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const arrowRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);

  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);

  const [ref, inView] = useInView({ threshold: 0.5 });
  const [studentsRef, studentsInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
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
  }, [hasAnimated]);

  const togglePlayPause = (videoRef, setIsPlaying) => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handlePlay = (setIsPlaying) => setIsPlaying(true);
  const handlePause = (setIsPlaying) => setIsPlaying(false);

  const handleClickVideoOrButton = (videoRef, setIsPlaying) => {
    togglePlayPause(videoRef, setIsPlaying);
  };

  return (
    <div className="min-h-screen bg-[#10142c] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="hero-radial-glow">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-black text-center mb-6 animate-fade-in bg-cover bg-center text-white py-4"
            style={{ backgroundImage: 'url("/images/bg-headline.png")' }}
          >
            Here's How You can{' '}
            <span className="relative inline-block text-white">
              Achieve
              <span className="absolute bottom-0 left-0 w-full h-3 bg-[#2fbfd7] opacity-30 -z-10"></span>
            </span> Your First{' '}
            <span className="text-white">Calisthenics Skill</span>{' '}
            in Just
            <br />
            <span className="gradient-text font-black">14 Days</span> in 2025 by Following
            <br />
            <span className="gradient-text font-black bg-method">the BG Method<span className="tm">™</span></span>
          </h1>
        </div>

        {/* Video Section */}
        <div className="my-12 animate-slide-up">
          <VideoSection />
          {/* Decorative Arrow */}
          <div className="relative w-40 h-40 mx-auto -mt-24 mb-1">
            <svg 
              ref={arrowRef} 
              className={`w-full h-full ${hasAnimated ? 'arrow-completed' : ''}`} 
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
              {/* Arrow Path */}
              <path
                d="M 20 90 Q 40 40 60 60 T 80 30 L 85 35 M 80 30 L 75 35"
                className={`arrow-path ${isVisible ? 'animate' : ''} ${hasAnimated ? 'arrow-path-completed' : ''}`}
              />
            </svg>
          </div>
          {/* Additional context about my journey */}
          <p className="text-center text-lg text-white -mt-4 max-w-2xl mx-auto relative group">
            <span className="relative inline-block">
              <span className="text-[#2fbfd7] text-3xl">"</span>
              I've been doing calisthenics for 3 years, but this is my 1-year progress
              <span className="text-[#2fbfd7] text-3xl">"</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#2fbfd7] to-[#23a6bb] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </span>
          </p>
        </div>

        {/* Introduction Section */}
        <section className="my-16 text-center">
          {/* Profile and Social Media Info */}
          <h2 className="text-3xl md:text-4xl font-black mb-8 gradient-text">Hi, I'm Ben</h2>

          {/* Profile Image */}
          <div className="mx-auto w-full max-w-xl aspect-video rounded-xl mb-8 overflow-hidden">
            <img src="/images/ben.jpg" alt="Ben's profile" className="w-full h-full object-cover" />
          </div>

          {/* Rounded bar containing the profile picture and social media icons */}
          <div className="-mt-16 w-full max-w-sm sm:max-w-2xl mx-auto rounded-full py-1 sm:py-3 px-2 sm:px-4 shadow-lg flex flex-row items-center justify-center space-x-2 sm:space-x-4 overflow-x-hidden whitespace-nowrap z-50 relative glass-card">
            {/* Profile Picture inside the bar */}
            <div className="w-9 h-9 sm:w-16 sm:h-16 rounded-full flex-shrink-0 overflow-hidden img-hover-zoom">
              <img src="/images/png.jpg" alt="Ben's Profile Picture" className="w-full h-full object-cover" />
            </div>
            {/* Social Media Links */}
            <div className="flex flex-row items-center space-x-2 sm:space-x-4">
              {/* Instagram */}
              <div className="flex items-center space-x-1 sm:space-x-2 p-0.5 sm:p-2 rounded-lg flex-shrink-0">
                <img src="/images/instagram.webp" alt="Instagram" className="w-4 h-4 sm:w-6 sm:h-6"/>
                <div className="text-left">
                  <p className="text-white font-black text-[9px] sm:text-sm leading-none">BGCALISTHENICS</p>
                  <p className="text-gray-400 text-[8px] sm:text-xs leading-none">250k</p>
                </div>
              </div>
              {/* TikTok */}
              <div className="flex items-center space-x-1 sm:space-x-2 p-0.5 sm:p-2 rounded-lg flex-shrink-0">
                <img src="/images/tiktok.webp" alt="TikTok" className="w-4 h-4 sm:w-8 sm:h-8"/>
                <div className="text-left">
                  <p className="text-white font-black text-[9px] sm:text-sm leading-none">BGCALISTHENICS</p>
                  <p className="text-gray-400 text-[8px] sm:text-xs leading-none">137k</p>
                </div>
              </div>
              {/* YouTube */}
              <div className="flex items-center space-x-1 sm:space-x-2 p-0.5 sm:p-2 rounded-lg flex-shrink-0">
                <img src="/images/youtube.webp" alt="YouTube" className="w-4 h-4 sm:w-6 sm:h-6"/>
                <div className="text-left">
                  <p className="text-white font-black text-[9px] sm:text-sm leading-none">BGCALISTHENICS</p>
                  <p className="text-gray-400 text-[8px] sm:text-xs leading-none">17k</p>
                </div>
              </div>
            </div>
          </div>

          {/* Paragraph below the icon bar */}
          <div className="mt-8 mb-6 max-w-xl mx-auto text-lg text-white/90 leading-relaxed space-y-4 text-left">
            <p className="section-transition">
              For years, I chased calisthenics skills the hard way: endless push-ups, random tutorials, and wasted time. After 3 years of consistent training, I realized that the typical "master the basics first" advice was making skill learning take a really long time — especially for skills like the planche, front lever, or muscle-up.
            </p>
            <p className="section-transition">
              So, I designed a system built specifically for learning calisthenics skills faster.
            </p>
            <p className="section-transition">
              The BG Method — an 8-week program. It has made learning skills much faster and easier.
            </p>
            <p className="section-transition">
              This doesn't just work for me; thousands of my students have found this method effective as well.
            </p>
          </div>
        </section>

        {/* BG Method Results */}
        <section className="my-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
            These Are the Results Achieved by Over<br />
            <span
              ref={studentsRef}
              className="relative inline-block text-[#2fbfd7] font-black pb-4 z-0"
            >
              5000+ Students
              <svg
                className="pointer-events-none absolute left-0 right-0 bottom-0 w-full h-2 z-[-1]"
                viewBox="0 0 480 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="10" y1="4" x2="470" y2="4"
                  stroke="#2fbfd7"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 460,
                    strokeDashoffset: studentsInView ? 0 : 460,
                    transition: studentsInView
                      ? "stroke-dashoffset 1.2s cubic-bezier(0.77,0,0.18,1)"
                      : "none"
                  }}
                />
              </svg>
            </span> Using the BG Method
          </h2>
          
          {/* Stacked Transformation Video Placeholders */}
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Header for Video 1 */}
            <h3 className="text-lg md:text-xl text-white/90 text-center mb-2 font-normal">
              Here's one of my students performing muscle-ups and 90-degree handstand push-ups after just a few months of training.
            </h3>
            
            {/* Video Placeholder 1 */}
            <div
              className="aspect-video rounded-xl relative flex items-center justify-center overflow-hidden cursor-pointer border-[3px] border-[#2fbfd7] shadow-[0_0_10px_rgba(47,191,215,0.5),0_0_20px_rgba(47,191,215,0.3)]"
              onClick={() => handleClickVideoOrButton(videoRef1, setIsPlaying1)}
              onMouseEnter={() => setIsHovering1(true)}
              onMouseLeave={() => setIsHovering1(false)}
            >
              <video
                src="/videos/video1.mp4"
                muted
                loop
                playsInline
                mainVideo
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                ref={videoRef1}
                onPlay={() => handlePlay(setIsPlaying1)}
                onPause={() => handlePause(setIsPlaying1)}
                onTimeUpdate={(e) => {
                  const video = e.target;
                  const progress = (video.currentTime / video.duration) * 100;
                  video.parentElement.querySelector('.progress-bar').style.width = `${progress}%`;
                }}
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/30">
                <div className="h-full transition-all duration-100 progress-bar" style={{ width: '0%', background: 'linear-gradient(to right, #ff4444, #cc0000)' }} />
              </div>

              {/* Blue Play Button (only visible when paused) */}
              {!isPlaying1 && (
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2fbfd7] rounded-full flex items-center justify-center opacity-80 hover:bg-[#23a6bb] transition-colors absolute z-10">
                  {/* Play Icon */}
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}

              {/* Small White Play/Pause Button (visible only on hover) */}
              {isHovering1 && (
                <div className="absolute bottom-4 left-4 z-10 w-8 h-8 bg-[#2fbfd7] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#23a6bb] transition-colors">
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

            {/* Header for Video 2 */}
            <h3 className="text-lg md:text-xl text-white/90 text-center mb-2 font-normal">
              Here is another student's <span className="text-white underline">6-month transformation</span> — from struggling with the tuck planche to achieving the straddle planche, performing presses, and learning handstand push-ups.
            </h3>
            
            {/* Video Placeholder 2 */}
            <div
              className="aspect-video rounded-xl relative flex items-center justify-center overflow-hidden cursor-pointer border-[3px] border-[#2fbfd7] shadow-[0_0_15px_rgba(47,191,215,0.3),0_0_30px_rgba(47,191,215,0.15)]"
              onClick={() => handleClickVideoOrButton(videoRef2, setIsPlaying2)}
              onMouseEnter={() => setIsHovering2(true)}
              onMouseLeave={() => setIsHovering2(false)}
            >
              <video
                src="/videos/video2.mp4"
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                ref={videoRef2}
                onPlay={() => handlePlay(setIsPlaying2)}
                onPause={() => handlePause(setIsPlaying2)}
                onTimeUpdate={(e) => {
                  const video = e.target;
                  const progress = (video.currentTime / video.duration) * 100;
                  video.parentElement.querySelector('.progress-bar').style.width = `${progress}%`;
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
                  {/* Play Icon */}
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}

              {/* Small White Play/Pause Button (visible only on hover) */}
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

            {/* Header for Video 3 */}
            <h3 className="text-lg md:text-xl text-white/90 text-center mb-2 font-normal">
              Another student focused on different skills and ended up achieving the one-arm handstand, one-arm pull-up, and handstand push-ups down.
            </h3>
            
            {/* Video Placeholder 3 */}
            <div
              className="aspect-video rounded-xl relative flex items-center justify-center overflow-hidden cursor-pointer border-[3px] border-[#2fbfd7] shadow-[0_0_15px_rgba(47,191,215,0.3),0_0_30px_rgba(47,191,215,0.15)]"
              onClick={() => handleClickVideoOrButton(videoRef3, setIsPlaying3)}
              onMouseEnter={() => setIsHovering3(true)}
              onMouseLeave={() => setIsHovering3(false)}
            >
              <video
                src="/videos/video3.mp4"
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                ref={videoRef3}
                onPlay={() => handlePlay(setIsPlaying3)}
                onPause={() => handlePause(setIsPlaying3)}
                onTimeUpdate={(e) => {
                  const video = e.target;
                  const progress = (video.currentTime / video.duration) * 100;
                  video.parentElement.querySelector('.progress-bar').style.width = `${progress}%`;
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
                  {/* Play Icon */}
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}

              {/* Small White Play/Pause Button (visible only on hover) */}
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

            {/* New text below video 3 */}
            <p className="text-center text-lg italic text-white mt-8 flex items-center justify-center">
              <img src="/images/up.png" alt="Up arrow icon" className="w-5 h-5 text-white mr-2"/>
              All of these student's achieved crazy strength with ‎  <span className="text-[#2fbfd7]">the BG Method</span>
            </p>

            <h3 className="text-2xl md:text-3xl font-black text-center mt-12 mb-6 text-white">And you are probably wondering how these students achieved these skills so fast...</h3>

            <div className="max-w-lg mx-auto space-y-8 text-lg text-gray-200 text-left">
              <p className="leading-relaxed">
                It all comes down to how the BG Method is built.
              </p>
              <p className="leading-relaxed">
                From day one, we train basics and skills together—and every part of the program is designed to make that approach effective. We start conditioning your joints and tendons right away, which lays the foundation for learning advanced skills faster and more safely.
              </p>
              <p className="leading-relaxed">
                The structure of the BG Method helps your body adapt more quickly to high-level moves like the planche and 90-degree handstand push-up—so you're not just training hard, you're training smart.
              </p>
              <p className="leading-relaxed">
                As you progress, the program shifts into an intermediate-to-advanced phase, where you'll start learning more complex skills and how to integrate them into your workouts. And if you don't want to build your own routines, you'll get PDFs for each skill, with pre-built workouts ready to go.
              </p>
              <p className="leading-relaxed">
                This method is how I learned skills so fast, and why so many others inside the program are doing the same.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
