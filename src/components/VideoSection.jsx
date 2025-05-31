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

  // Initialize volume when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0;
      videoRef.current.muted = true;
    }
  }, []);

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
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
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
    <div className="flex justify-center items-center my-16 px-4">
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="relative aspect-video rounded-2xl overflow-hidden border-[3px] border-[#2fbfd7] shadow-[0_0_30px_rgba(47,191,215,0.5),0_0_60px_rgba(47,191,215,0.3)]">
          <div className="relative aspect-video cursor-pointer" onClick={togglePlayPause}>
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
            
            {/* Play Button Overlay (visible when paused) */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#2fbfd7] rounded-full flex items-center justify-center opacity-80 hover:bg-[#23a6bb] transition-colors">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}

            {/* Volume Controls */}
            <div 
              className="absolute right-4 top-4 flex items-center space-x-2"
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
                    writingMode: 'bt-lr',
                    WebkitAppearance: 'slider-vertical',
                    '&::-webkit-slider-thumb': {
                      WebkitAppearance: 'none',
                      appearance: 'none',
                      width: '16px',
                      height: '16px',
                      background: '#2fbfd7',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      marginTop: '-6px'
                    },
                    '&::-moz-range-thumb': {
                      width: '16px',
                      height: '16px',
                      background: '#2fbfd7',
                      borderRadius: '50%',
                      cursor: 'pointer',
                      border: 'none'
                    }
                  }}
                />
              </div>
              
              {/* Mute/Unmute Button */}
              <button
                onClick={toggleMute}
                className="w-10 h-10 bg-[#2fbfd7] rounded-full flex items-center justify-center opacity-80 hover:bg-[#23a6bb] transition-all duration-300 transform hover:scale-110"
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

            {/* Text Overlay */}
            <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent ${isPlaying || hasStarted ? 'hidden' : ''}`}>
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