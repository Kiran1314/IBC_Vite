import React, { useEffect, useRef } from 'react';

const LazyBackgroundVideo = ({ src, poster, type }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoElement.play();
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.25,
    });

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      playsInline
      autoPlay
      muted
      loop
      poster={poster}
      preload="auto"
       
    >
      <source src={src} type={type} /> 
    </video>
  );
};

export default LazyBackgroundVideo;
