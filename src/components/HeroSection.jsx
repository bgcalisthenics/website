import React, { useRef, useState, useEffect } from 'react';
import VideoSection from './VideoSection';
import '../index.css';
import useInView from "../hooks/useInView";

export default function HeroSection() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const arrowRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ teens: 0, countries: 0, programs: 0 });

  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);

  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);

  // Track if user manually paused videos
  const [userPausedVideo1, setUserPausedVideo1] = useState(false);
  const [userPausedVideo2, setUserPausedVideo2] = useState(false);
  const [userPausedVideo3, setUserPausedVideo3] = useState(false);

  const [ref, inView] = useInView({ threshold: 0.5 });
  const [studentsRef, studentsInView] = useInView({ threshold: 0.5 });

  // Animated counters effect
  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const finalValues = { teens: 10000, countries: 50, programs: 25 };

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters({
          teens: Math.floor(finalValues.teens * progress),
          countries: Math.floor(finalValues.countries * progress),
          programs: Math.floor(finalValues.programs * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [inView]);

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
  }, [hasAnimated]);

  // Auto-play videos when they come into view and pause when they leave
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoElement = entry.target;
          if (entry.isIntersecting) {
            if (videoElement && videoElement.paused) {
              let shouldPlay = false;
              if (videoElement === videoRef1.current && !userPausedVideo1) shouldPlay = true;
              if (videoElement === videoRef2.current && !userPausedVideo2) shouldPlay = true;
              if (videoElement === videoRef3.current && !userPausedVideo3) shouldPlay = true;

              if (shouldPlay) {
                videoElement.play().then(() => {
                  if (videoElement === videoRef1.current) setIsPlaying1(true);
                  if (videoElement === videoRef2.current) setIsPlaying2(true);
                  if (videoElement === videoRef3.current) setIsPlaying3(true);
                }).catch((error) => {
                  console.log("Auto-play failed:", error);
                  if (videoElement === videoRef1.current) setIsPlaying1(false);
                  if (videoElement === videoRef2.current) setIsPlaying2(false);
                  if (videoElement === videoRef3.current) setIsPlaying3(false);
                });
              }
            }
          } else {
            if (videoElement && !videoElement.paused) {
              videoElement.pause();
              if (videoElement === videoRef1.current) setIsPlaying1(false);
              if (videoElement === videoRef2.current) setIsPlaying2(false);
              if (videoElement === videoRef3.current) setIsPlaying3(false);
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (videoRef1.current) observer.observe(videoRef1.current);
    if (videoRef2.current) observer.observe(videoRef2.current);
    if (videoRef3.current) observer.observe(videoRef3.current);

    return () => {
      if (videoRef1.current) observer.unobserve(videoRef1.current);
      if (videoRef2.current) observer.unobserve(videoRef2.current);
      if (videoRef3.current) observer.unobserve(videoRef3.current);
    };
  }, [userPausedVideo1, userPausedVideo2, userPausedVideo3]);

  // Ensure videos are loaded and visible on mobile
  useEffect(() => {
    const videos = [
      { ref: videoRef1.current, index: 1 },
      { ref: videoRef2.current, index: 2 },
      { ref: videoRef3.current, index: 3 }
    ];

    videos.forEach(({ ref: video, index }) => {
      if (video) {
        video.load();
        video.style.opacity = '1';
        video.style.visibility = 'visible';

        const handleLoadedData = () => {
          console.log(`Video ${index} loaded and ready`);
          video.style.opacity = '1';
          video.style.visibility = 'visible';
        };

        const handleCanPlay = () => {
          console.log(`Video ${index} can play`);
          video.style.opacity = '1';
        };

        const handleLoadedMetadata = () => {
          console.log(`Video ${index} metadata loaded`);
          video.style.opacity = '1';
          video.style.visibility = 'visible';
        };

        video.addEventListener('loadeddata', handleLoadedData);
        video.addEventListener('canplay', handleCanPlay);
        video.addEventListener('loadedmetadata', handleLoadedMetadata);

        video.currentTime = 0.1;

        return () => {
          video.removeEventListener('loadeddata', handleLoadedData);
          video.removeEventListener('canplay', handleCanPlay);
          video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
      }
    });
  }, []);

  const togglePlayPause = (videoRef, setIsPlaying) => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        if (videoRef === videoRef1) setUserPausedVideo1(false);
        if (videoRef === videoRef2) setUserPausedVideo2(false);
        if (videoRef === videoRef3) setUserPausedVideo3(false);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        if (videoRef === videoRef1) setUserPausedVideo1(true);
        if (videoRef === videoRef2) setUserPausedVideo2(true);
        if (videoRef === videoRef3) setUserPausedVideo3(true);
      }
    }
  };

  const handlePlay = (setIsPlaying) => setIsPlaying(true);
  const handlePause = (setIsPlaying) => setIsPlaying(false);

  const handleClickVideoOrButton = (videoRef, setIsPlaying) => {
    togglePlayPause(videoRef, setIsPlaying);
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20 pb-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-bg-element absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="hero-bg-element absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="hero-bg-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center px-4">
        {/* Hero Content */}
        <div className="mb-6">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="block">
              <span className="empowering-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient">
                Empowering
              </span>
              <span className="text-gray-800"> teenagers around</span>
            </span>
            <span className="block text-gray-800">the world to workout at</span>
            <span className="block text-gray-800">home without a</span>
            <span className="block text-gray-800">gym or equipment</span>
          </h1>

          {/* Trust Badge - Moved Below Headline */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-xs font-medium mb-4 shadow-md">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Trusted by 10,000+ teens & parents worldwide
          </div>

          {/* Hero Image */}
          <div className="relative mb-2">
            <img
              src="/images/header_image.png"
              alt="Teen Fitness Transformation"
              className="w-full max-w-4xl mx-auto"
            />
          </div>


          <div className="w-full mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                The Teen Fitness <span className="gradient-text bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Crisis</span>
              </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto mb-8">
              <div className="bg-black rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="text-4xl font-bold text-white">81%</div>
                </div>
                <div className="text-sm font-normal mb-2">of teens don't meet daily physical activity guidelines</div>
                <a href="https://www.who.int/news-room/fact-sheets/detail/physical-activity" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium">
                  SOURCE
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              <div className="bg-black rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="text-4xl font-bold text-white">7+</div>
                </div>
                <div className="text-sm font-normal mb-2">Teens average 7+ hours of screen time daily and only 30 minutes of physical activity</div>
                <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8270173/?utm_source" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium">
                  SOURCE
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              <div className="bg-black rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="text-4xl font-bold text-white">3.49/5</div>
                </div>
                <div className="text-sm font-normal mb-2">is the mean barrier score of teenagers who lacked resources to workout</div>
                <a href="https://pubmed.ncbi.nlm.nih.gov/39165912/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium">
                  SOURCE
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              <div className="bg-black rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="text-4xl font-bold text-white">1/4</div>
                </div>
                <div className="text-sm font-normal mb-2">Only 1 in 4 teens get enough exercise, which leads to higher rates of anxiety, depression, and lower academic performance</div>
                <a href="https://www.heart.org/en/news/2020/04/09/most-of-the-nations-teens-arent-getting-enough-exercise" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium">
                  SOURCE
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* What Makova Offers */}
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-3xl p-8 md:p-12 mb-16 border border-blue-200 w-full max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Makova helps teenagers solve these issues by offering
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 rounded-full p-6 mb-4 w-20 h-20 mx-auto flex items-center justify-center">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M12 4v16m8-8H4"/>
                  </svg>
                </div>
                <h4 className="font-extrabold text-xl text-gray-900 mb-3">AI-powered tools</h4>
                <p className="text-gray-600">ChatBot and RepBot to guide your fitness journey with personalized assistance and real-time form feedback.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 text-green-600 rounded-full p-6 mb-4 w-20 h-20 mx-auto flex items-center justify-center">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path stroke="currentColor" strokeWidth="2" d="M8 12l2 2 4-4"/>
                  </svg>
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">Calisthenics skill programs</h4>
                <p className="text-gray-600">Structured programs designed to help you master bodyweight skills from beginner to advanced levels.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 text-purple-600 rounded-full p-6 mb-4 w-20 h-20 mx-auto flex items-center justify-center">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-4-4h-1M7 20H2v-2a4 4 0 014-4h1m4-4a4 4 0 100-8 4 4 0 000 8zm0 0v4"/>
                  </svg>
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">Global Community</h4>
                <p className="text-gray-600">Join thousands of teenagers in the community who have the same mindset and goals as you.</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 w-full max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">
                {counters.teens.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium mb-1">Teens Transformed</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">
                50+
              </div>
              <div className="text-gray-600 font-medium mb-1">Countries Reached</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a
              href="/train"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-10 py-5 text-xl rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Now
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="/impact"
              className="group flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold px-6 py-3 rounded-xl border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              Watch Success Stories
            </a>
          </div>


        </div>








        </div>


    </section>
  );
}
