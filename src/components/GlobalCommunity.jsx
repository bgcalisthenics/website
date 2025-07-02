import React, { useRef, useEffect, useState } from 'react';

const GlobalCommunity = () => {
  const videoRefs = useRef([]);
  const [userPausedVideos, setUserPausedVideos] = useState({});
  const [isPlaying, setIsPlaying] = useState({});
  const [showPlayButton, setShowPlayButton] = useState({});

  const videos = [
    { src: '/videos/mu.mp4', location: 'United States', flag: '🇺🇸', skill: 'Muscle-Up' },
    { src: '/videos/hspu.mp4', location: 'Canada', flag: '🇨🇦', skill: 'Handstand Push-Up' },
    { src: '/videos/L-sit.mp4', location: 'Germany', flag: '🇩🇪', skill: 'L-Sit' },
    { src: '/videos/front-lever.mp4', location: 'Brazil', flag: '🇧🇷', skill: 'Front Lever' },
    { src: '/videos/tuck-planche-pu.mp4', location: 'United States', flag: '🇺🇸', skill: 'Tuck Planche Push-Up' },
    { src: '/videos/pistol-squat.mp4', location: 'Bangladesh', flag: '🇧🇩', skill: 'Pistol Squat' },
    { src: '/videos/l-sit-to-handstand.mp4', location: 'India', flag: '🇮🇳', skill: 'L-Sit to Handstand' },
    { src: '/videos/adv-tuck.mp4', location: 'France', flag: '🇫🇷', skill: 'Advanced Tuck' },
    { src: '/videos/wall-hspu.mp4', location: 'South Africa', flag: '🇿🇦', skill: 'Wall HSPU' },
    { src: '/videos/hspu1.mp4', location: 'India', flag: '🇮🇳', skill: 'HSPU' },
    { src: '/videos/mu1.mp4', location: 'Romania', flag: '🇷🇴', skill: 'Muscle-Up Variation' },
    { src: '/videos/muscle-up.mp4', location: 'Sweden', flag: '🇸🇪', skill: 'Muscle-Up' }
  ];

  // Initialize play button state for all videos
  useEffect(() => {
    const initialShowPlayButton = {};
    videos.forEach((_, index) => {
      initialShowPlayButton[index] = true;
    });
    setShowPlayButton(initialShowPlayButton);
  }, []);

  // Auto-play videos when they come into view (but respect user interaction)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoElement = entry.target;
          const videoIndex = parseInt(videoElement.dataset.index);

          if (entry.isIntersecting) {
            // Only auto-play if user hasn't interacted with this video yet
            if (videoElement && videoElement.paused && !userPausedVideos[videoIndex] && showPlayButton[videoIndex]) {
              videoElement.play().then(() => {
                setIsPlaying(prev => ({ ...prev, [videoIndex]: true }));
                setShowPlayButton(prev => ({ ...prev, [videoIndex]: false }));
              }).catch((error) => {
                console.log("Auto-play failed:", error);
              });
            }
          } else {
            if (videoElement && !videoElement.paused && !userPausedVideos[videoIndex]) {
              videoElement.pause();
              setIsPlaying(prev => ({ ...prev, [videoIndex]: false }));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [userPausedVideos, showPlayButton]);

  const handleVideoPause = (index) => {
    setUserPausedVideos(prev => ({ ...prev, [index]: true }));
    setIsPlaying(prev => ({ ...prev, [index]: false }));
  };

  const handleVideoPlay = (index) => {
    setUserPausedVideos(prev => ({ ...prev, [index]: false }));
    setIsPlaying(prev => ({ ...prev, [index]: true }));
  };

  const togglePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play().then(() => {
          setIsPlaying(prev => ({ ...prev, [index]: true }));
          setUserPausedVideos(prev => ({ ...prev, [index]: false }));
          setShowPlayButton(prev => ({ ...prev, [index]: false }));
        }).catch((error) => {
          console.log("Play failed:", error);
        });
      } else {
        video.pause();
        setIsPlaying(prev => ({ ...prev, [index]: false }));
        setUserPausedVideos(prev => ({ ...prev, [index]: true }));
      }
    }
  };

  const handlePlayButtonClick = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play().then(() => {
        setIsPlaying(prev => ({ ...prev, [index]: true }));
        setUserPausedVideos(prev => ({ ...prev, [index]: false }));
        setShowPlayButton(prev => ({ ...prev, [index]: false }));
      }).catch((error) => {
        console.log("Play failed:", error);
      });
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Our Global <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-left">
            Meet many students who have joined Makova and learned calisthenics skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="group relative">
              {/* Video Container - maintains aspect ratio without cropping */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-4 shadow-lg">
                <div className="relative overflow-hidden rounded-2xl bg-black cursor-pointer" onClick={() => togglePlayPause(index)}>
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    data-index={index}
                    src={video.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-auto object-contain transition-all duration-300"
                    onPause={() => handleVideoPause(index)}
                    onPlay={() => handleVideoPlay(index)}
                  />

                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>

                  {/* Location with flag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{video.flag}</span>
                      <p className="text-gray-900 text-sm font-bold">{video.location}</p>
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  {(showPlayButton[index] || !isPlaying[index]) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-16 h-16 bg-blue-600/90 hover:bg-blue-700/90 rounded-full flex items-center justify-center shadow-2xl"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (showPlayButton[index]) {
                            handlePlayButtonClick(index);
                          } else {
                            togglePlayPause(index);
                          }
                        }}
                      >
                        {isPlaying[index] ? (
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                          </svg>
                        ) : (
                          <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Skill info below video */}
                <div className="mt-4 px-2">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{video.skill}</h3>
                  <p className="text-gray-600 text-sm">Mastered with Makova</p>


                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-1">
                {['🌍', '🌎', '🌏'].map((globe, i) => (
                  <span key={i} className="text-3xl animate-pulse" style={{animationDelay: `${i * 0.5}s`}}>
                    {globe}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join Our Global Movement
            </h3>


            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">60 Countries Active</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">Real Success Stories</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">AI-Powered Training</span>
              </div>
            </div>

            <a
              href="/train"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-10 py-5 text-lg rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25"
            >
              <span>Start Your Transformation</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalCommunity;
