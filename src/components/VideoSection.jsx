import React, { useRef, useState, useEffect } from 'react';

function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  // New states for auto-play functionality
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [videoInView, setVideoInView] = useState(false);
  const [showSoundMessage, setShowSoundMessage] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [userPausedVideo, setUserPausedVideo] = useState(false);

  // Initialize volume when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0;
      videoRef.current.muted = true;
    }
  }, []);

  // Auto-play video when it comes into view and pause when it leaves
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoInView(true);
            // Only auto-play if user has never manually paused this video
            if (videoRef.current && videoRef.current.paused && !userPausedVideo) {
              videoRef.current.play().then(() => {
                setHasAutoPlayed(true);
                setIsPlaying(true);
                if (!hasAutoPlayed) {
                  setShowSoundMessage(true); // Show sound message when auto-playing for first time
                }
              }).catch((error) => {
                console.log("Auto-play failed:", error);
              });
            }
          } else {
            // Video is out of view - pause it (but don't set userPausedVideo flag)
            setVideoInView(false);
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the video is visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [userPausedVideo]); // Re-run when userPausedVideo changes

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const seekTime = (e.nativeEvent.offsetX / e.target.offsetWidth) * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        setHasStarted(true);
        setUserPausedVideo(false); // User is playing, reset pause flag
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        setUserPausedVideo(true); // User manually paused
      }
    }
  };

  // Special handler for play button click
  const handlePlayButtonClick = () => {
    setShowPlayButton(false);
    setHasUserInteracted(true);
    setShowSoundMessage(false); // Hide sound message when play button is clicked
    if (videoRef.current) {
      // Enable sound when user clicks play button
      videoRef.current.muted = false;
      setIsMuted(false);
      setVolume(0.5);
      videoRef.current.volume = 0.5;

      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
        setHasStarted(true);
      }
    }
  };

  // Handler for video click - acts like play button when visible
  const handleVideoClick = () => {
    if (showPlayButton) {
      // If play button is visible, clicking anywhere acts like clicking the play button
      handlePlayButtonClick();
    } else {
      // Normal video controls when play button is not visible
      togglePlayPause();
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      if (newMutedState) {
        // When muting, set volume to 0
        setVolume(0);
        videoRef.current.volume = 0;
      } else {
        // When unmuting, restore to previous volume or default to 0.5
        const newVolume = volume === 0 ? 0.5 : volume;
        setVolume(newVolume);
        videoRef.current.volume = newVolume;
      }
    }
  };

  const handleVolumeChange = (e) => {
    e.stopPropagation();
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      if (newVolume === 0) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else if (isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  return (
    <div className="flex justify-center items-center my-8 sm:my-16 px-2 sm:px-4">
      <div className="relative w-full max-w-5xl sm:max-w-4xl mx-auto">
        <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden border-[3px] border-[#2fbfd7] shadow-[0_0_30px_rgba(47,191,215,0.5),0_0_60px_rgba(47,191,215,0.3)]">
          <div className="relative aspect-video cursor-pointer" onClick={handleVideoClick}>
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover"
              muted={isMuted}
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            >
              <source src="/videos/mainVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play Button Overlay (visible until clicked or when paused after manual interaction) */}
            {(showPlayButton || (!isPlaying && !showPlayButton)) && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-20 h-20 bg-[#2fbfd7] rounded-full flex items-center justify-center opacity-80 hover:bg-[#23a6bb] transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (showPlayButton) {
                      handlePlayButtonClick();
                    } else {
                      togglePlayPause();
                    }
                  }}
                >
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}

            {/* Sound Message - Beautiful UI in top right */}
            {showSoundMessage && !hasUserInteracted && (
              <div className="absolute top-4 right-4 z-30">
                <div className="bg-gradient-to-r from-[#2fbfd7] to-[#23a6bb] text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                    <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Click video to play sound</span>
                  </div>
                  {/* Animated arrow pointing to video */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#23a6bb]"></div>
                  </div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2fbfd7] to-[#23a6bb] rounded-full opacity-30 blur-sm -z-10"></div>
                </div>
              </div>
            )}

            {/* Volume Controls */}
            <div
              className={`absolute right-4 flex items-center space-x-2 transition-all duration-300 ${showSoundMessage ? 'top-16' : 'top-4'}`}
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
            >
              {/* Volume Slider Container */}
              <div className={`relative h-24 transition-all duration-300 ${showVolumeSlider ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-24 bg-gray-600/30 rounded-full">
                  {/* Volume Fill */}
                  <div 
                    className="absolute bottom-0 left-0 w-full bg-[#2fbfd7] rounded-full transition-all duration-100"
                    style={{ height: `${volume * 100}%` }}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 appearance-none bg-transparent cursor-pointer"
                  style={{
                    writingMode: 'vertical-lr',
                    direction: 'rtl'
                  }}
                />
              </div>
              
              {/* Mute/Unmute Button */}
              <button
                onClick={toggleMute}
                className="w-10 h-10 bg-[#2fbfd7] rounded-full flex items-center justify-center opacity-80"
              >
                {isMuted ? (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                )}
              </button>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600/30 cursor-pointer" onClick={handleSeek}>
              <div 
                className="h-full transition-all duration-100"
                style={{ 
                  width: `${(currentTime / duration) * 100}%`,
                  background: 'linear-gradient(to right, #ff4444, #cc0000)'
                }}
              />
            </div>

            {/* Text Overlay - Hidden on mobile */}
            <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent hidden sm:block ${isPlaying || hasStarted ? 'hidden' : ''}`}>
              <div className="text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
                  <span className="text-white">MY INSANE TRANSFORMATION</span>
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#2fbfd7]">
                  1 YEAR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection; 