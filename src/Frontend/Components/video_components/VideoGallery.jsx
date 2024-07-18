import React from 'react';
import VideoItem from './VideoItem';
import './VideoGallery.css';

const VideoGallery = ({ videos, onOpenModal }) => {
  return (
    <div className="video-gallery">
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} onOpenModal={onOpenModal} />
      ))}
    </div>
  );
};

export default VideoGallery;
