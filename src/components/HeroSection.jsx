import React, { useRef, useState, useEffect } from 'react';
import VideoSection from './VideoSection';
import '../index.css';

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
    <div className="min-h-screen bg-dark-bg py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Here's How You can <span className="underline text-white">Achieve</span> Your First{' '}
          <span className="text-primary-blue">Calisthenics Skill</span>{' '}in Just{' '}
          <span className="text-white">14 Days</span>{' '}in 2025 by Following
          <br />
          <span className="animated-highlight text-primary-blue font-bold">the BG Method</span>
        </h1>

        {/* Video Section */}
        <div className="my-12">
          <VideoSection />
          {/* Decorative Arrow */}
          <div className="relative w-40 h-40 mx-auto -mt-24 mb-1">
            <svg 
              ref={arrowRef} 
              className={`w-full h-full ${hasAnimated ? 'arrow-completed' : ''}`} 
              viewBox="0 0 100 100" 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Arrow Path */}
              <path
                d="M 20 90 Q 40 40 60 60 T 80 30 L 85 35 M 80 30 L 75 35"
                className={`arrow-path ${isVisible ? 'animate' : ''} ${hasAnimated ? 'arrow-path-completed' : ''}`}
              />
            </svg>
          </div>
          {/* Additional context about my journey */}
          <p className="text-center text-xl text-white -mt-4 max-w-2xl mx-auto relative">
            <span className="relative inline-block">
              <span className="text-primary-blue text-5xl">"</span>
              I've been doing calisthenics for 3-years, but this is my 1-year progress
              <span className="text-primary-blue text-5xl">"</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-blue transform scale-x-0 transition-transform duration-500 arrow-underline"></span>
            </span>
          </p>
        </div>

        {/* Introduction Section */}
        <section className="my-16 text-center">
          
          {/* Profile and Social Media Info */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Hi, I'm Ben</h2>

          {/* Profile Image */}
          <div className="mx-auto w-full max-w-xl aspect-video rounded-xl mb-8 overflow-hidden">
            <img src="/images/ben.jpg" alt="Ben's profile" className="w-full h-full object-cover" />
          </div>

          {/* Rounded bar containing the profile picture and social media icons */}
          <div className="-mt-16 max-w-2xl mx-auto rounded-full py-3 px-4 shadow-lg flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-6 z-50 relative" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.9))' }}>
            {/* Profile Picture inside the bar */}
            <div className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden">
              <img src="/images/png.jpg" alt="Ben's Profile Picture" className="w-full h-full object-cover" />
            </div>
            {/* Social Media Links */}
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
              {/* Instagram */}
              <div className="flex items-center space-x-2">
                <img src="/images/instagram.webp" alt="Instagram" className="w-6 h-6"/>
                <div className="text-left">
                  <p className="text-white font-bold text-sm">BGCALISTHENICS</p>
                  <p className="text-gray-400 text-xs">250k followers</p>
                </div>
              </div>
              {/* TikTok */}
              <div className="flex items-center space-x-2">
                <img src="/images/tiktok.webp" alt="TikTok" className="w-8 h-8"/>
                <div className="text-left">
                  <p className="text-white font-bold text-sm">BGCALISTHENICS</p>
                  <p className="text-gray-400 text-xs">137k followers</p>
                </div>
              </div>
              {/* YouTube */}
              <div className="flex items-center space-x-2">
                <img src="/images/youtube.webp" alt="YouTube" className="w-6 h-6"/>
                <div className="text-left">
                  <p className="text-white font-bold text-sm">BGCALISTHENICS</p>
                  <p className="text-gray-400 text-xs">17k subscribers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Paragraph below the icon bar */}
          <div className="mt-8 max-w-2xl mx-auto text-lg text-white leading-relaxed space-y-4">
            <p>
              I have been training calisthenics for 3 years, and I have always been testing out different training methods. My goal was to learn calisthenics skills extremely fast, however, many training methods I came across simply lacked the design for calisthenics skills - skills that need specific training and exercises.
            </p>
            <p>
              Therefore, after 3 years of experience, I finally found a workout method: I call this the "BG Method". It has made learning skills much faster and easier.
            </p>
            <p>
              This is does not just work for me, as there are thousands of my students who found this method effective as well.
            </p>
          </div>

        </section>

        {/* BG Method Results */}
        <section className="my-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            These Are the Results Achieved by Over<br />
            <span className="text-primary-blue">5000+ Students</span> Using the BG Method
          </h2>
          
          {/* Stacked Transformation Video Placeholders */}
          <div className="max-w-2xl mx-auto space-y-8">
            
            {/* Header for Video 1 */}
            <h3 className="text-lg md:text-xl text-white text-center mb-2 font-normal">Here's one of my students performing muscle-ups and 90-degree handstand push-ups after just a few months of training.</h3>
            
            {/* Video Placeholder 1 */}
            <div
              className="aspect-video rounded-xl border border-primary-blue relative flex items-center justify-center overflow-hidden cursor-pointer"
               onClick={() => handleClickVideoOrButton(videoRef1, setIsPlaying1)}
               onMouseEnter={() => {/* Keep hover state for small button if needed later */}}
               onMouseLeave={() => {/* Keep hover state for small button if needed later */}}
            >
               {/* Video Component will go here */}
               <video
                 src="/videos/video1.mp4"
                 muted
                 loop
                 playsInline
                 className="absolute top-0 left-0 w-full h-full object-cover"
                 ref={videoRef1}
                 onPlay={() => handlePlay(setIsPlaying1)}
                 onPause={() => handlePause(setIsPlaying1)}
               >
                 Your browser does not support the video tag.
               </video>
              
              {/* Blue Play Button (only visible when paused) */}
              {!isPlaying1 && (
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 bg-primary-blue rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity absolute z-10"
                  >
                    {/* Play Icon */}
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                )}

               {/* Small White Play/Pause Button (always visible) */}
                 <div
                   className="absolute bottom-4 left-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center cursor-pointer"
                 >
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
            </div>

            {/* Header for Video 2 */}
            <h3 className="text-lg md:text-xl text-white text-center mb-2 font-normal">This is his <span className="text-white underline">6-month transformation</span> from struggling with the tuck planche to achieving the straddle planche, performing presses, and learning handstand push-ups.</h3>
            
            {/* Video Placeholder 2 */}
            <div
              className="aspect-video rounded-xl border border-primary-blue relative flex items-center justify-center overflow-hidden cursor-pointer"
               onClick={() => handleClickVideoOrButton(videoRef2, setIsPlaying2)}
               onMouseEnter={() => {/* Keep hover state for small button if needed later */}}
               onMouseLeave={() => {/* Keep hover state for small button if needed later */}}
            >
               {/* Video Component will go here */}
               <video
                 src="/videos/video2.mp4"
                 muted
                 loop
                 playsInline
                 className="absolute top-0 left-0 w-full h-full object-cover"
                 ref={videoRef2}
                 onPlay={() => handlePlay(setIsPlaying2)}
                 onPause={() => handlePause(setIsPlaying2)}
               >
                 Your browser does not support the video tag.
               </video>
              
              {/* Blue Play Button (only visible when paused) */}
              {!isPlaying2 && (
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 bg-primary-blue rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity absolute z-10"
                  >
                    {/* Play Icon */}
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                )}

               {/* Small White Play/Pause Button (always visible) */}
                 <div
                   className="absolute bottom-4 left-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center cursor-pointer"
                 >
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
            </div>

            {/* Header for Video 3 */}
            <h3 className="text-lg md:text-xl text-white text-center mb-2 font-normal">He learned the one-arm handstand, one-arm pull-up, and handstand push-ups.</h3>
            
            {/* Video Placeholder 3 */}
            <div
              className="aspect-video rounded-xl border border-primary-blue relative flex items-center justify-center overflow-hidden cursor-pointer"
               onClick={() => handleClickVideoOrButton(videoRef3, setIsPlaying3)}
               onMouseEnter={() => {/* Keep hover state for small button if needed later */}}
               onMouseLeave={() => {/* Keep hover state for small button if needed later */}}
            >
               {/* Video Component will go here */}
               <video
                 src="/videos/video3.mp4"
                 muted
                 loop
                 playsInline
                 className="absolute top-0 left-0 w-full h-full object-cover"
                 ref={videoRef3}
                 onPlay={() => handlePlay(setIsPlaying3)}
                 onPause={() => handlePause(setIsPlaying3)}
               >
                 Your browser does not support the video tag.
               </video>
              
              {/* Blue Play Button (only visible when paused) */}
              {!isPlaying3 && (
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 bg-primary-blue rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity absolute z-10"
                  >
                    {/* Play Icon */}
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                )}

               {/* Small White Play/Pause Button (always visible) */}
                 <div
                   className="absolute bottom-4 left-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center cursor-pointer"
                 >
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
            </div>
          </div>

          {/* New text below video 3 */}
          <p className="text-center text-lg italic text-white mt-8 flex items-center justify-center">
            <img src="/images/up.png" alt="Up arrow icon" className="w-5 h-5 text-white mr-2"/>
            All of these student's achieved crazy strength with ‎<span className="text-primary-blue underline">the BG Method</span>
          </p>

        </section>

        {/* Why it works (Core Ideas) */}
        <section className="my-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary-blue">What is the BG Method?</h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 text-lg text-gray-200">
            <ul className="space-y-4">
              <li><span className="text-primary-blue font-bold">1.</span> Pick 2-3 exercises directly related to your target skill (based on ebooks)</li>
              <li><span className="text-primary-blue font-bold">2.</span> Use easier and harder progressions to stay challenged without plateauing</li>
              <li><span className="text-primary-blue font-bold">3.</span> Train the fundamentals (push, pull, core, balance) the right way — no wasted reps</li>
              <li><span className="text-primary-blue font-bold">4.</span> Stick to 3 sets to maximize strength without burning out</li>
            </ul>
            <ul className="space-y-4">
              <li><span className="text-primary-blue font-bold">5.</span> Adjust every 1-2 weeks based on how your body adapts — slight increases in difficulty, and then add exercises after you reach 70% mastery</li>
              <li><span className="text-primary-blue font-bold">6.</span> Focus on one skill at a time (ex: Frog Pose → L-Sit → Tuck Planche)</li>
              <li><span className="text-primary-blue font-bold">7.</span> Every move you make builds momentum toward unlocking your first real skill</li>
            </ul>
          </div>
        </section>

        {/* How it's different */}
        <section className="my-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary-blue">How It's Different</h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 text-lg">
            <div className="bg-dark-card/70 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-primary-blue mb-2">Other Programs</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Random workouts</li>
                <li>Chasing 10 skills at once</li>
                <li>Burnout & plateaus</li>
                <li>No clear path</li>
              </ul>
            </div>
            <div className="bg-dark-card/90 rounded-xl p-6 shadow-lg border-2 border-primary-blue">
              <h3 className="font-bold text-primary-blue mb-2">Skill Surge System</h3>
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>Step-by-step, focused system</li>
                <li>One skill at a time</li>
                <li>Smart progressions & adjustments</li>
                <li>Momentum toward your first skill</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Your Path to Your First Skill */}
        <section className="my-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary-blue">Your Path to Your First Calisthenics Skill</h2>
          <ol className="max-w-2xl mx-auto text-lg text-gray-200 space-y-4 list-decimal list-inside text-left md:text-center">
            <li>Pick your target skill</li>
            <li>Follow the Skill Surge System</li>
            <li>Unlock your first skill in <span className="text-primary-blue font-bold">14 days</span></li>
          </ol>
          <button className="mt-10 bg-gradient-to-r from-primary-blue to-secondary-blue text-white text-2xl font-bold px-12 py-5 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-blue/20">
            Start Your Skill Surge
          </button>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
