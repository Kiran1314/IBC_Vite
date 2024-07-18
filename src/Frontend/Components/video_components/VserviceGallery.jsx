import React from 'react';
import VideoItem from './VserviceItem';
import './VideoGallery.css';

const VserviceGallery = ({ videos }) => {
  return (
    <div className="serv-video-gallery">
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VserviceGallery;
