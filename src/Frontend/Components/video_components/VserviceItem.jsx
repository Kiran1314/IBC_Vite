import React, { useRef } from 'react';
import './VideoItem.css';

const VideoItem = ({ video }) => {
  const videoRef = useRef(null);

  const handleMouseOver = () => {
    videoRef.current.play();
  };

  const handleMouseOut = () => {
    videoRef.current.pause();
     
  };

  const handleClick = () => {
    window.location.href = video.link;
  };

  return (
    <div className="serv-video-item" onClick={handleClick}>
      <video
        ref={videoRef}
        src={video.videoSrc}
        className="video"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        muted
        width={500}
      />
      <div className="caption">{video.caption}</div>
    </div>
  );
};

export default VideoItem;
