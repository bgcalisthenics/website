import React, { useEffect, useRef } from 'react';

function VideoSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      console.log('Video element found:', videoRef.current);
      videoRef.current.play().catch(error => {
        console.error('Error playing video:', error);
      });
    }
  }, []);

  return (
    <div className="flex justify-center items-center my-16">
      <div className="relative">
        {/* Background overlay for contrast */}
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-black/60 z-0" />
        <div className="relative w-[600px] rounded-2xl overflow-hidden border-4 border-primary-blue shadow-2xl shadow-blue-900/40 z-10">
          <div className="relative aspect-video">
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-1">
                  <span className="text-white">MY INSANE TRANSFORMATION</span>
                </h2>
                <p className="text-2xl font-bold text-blue-500">
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