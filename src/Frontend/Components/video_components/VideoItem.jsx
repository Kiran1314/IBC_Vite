import React from 'react';
import './VideoItem.css';
import play_icon from '../../assets/img/images/play_icon.png'

const VideoItem = ({ video, onOpenModal }) => {
  return (
    <div className="video-item" onClick={() => onOpenModal(video)}>
      <img src={video.thumbnail} alt="Video Thumbnail" className="thumbnail" />
      <div className="play-button"><img src={play_icon} alt='img' style={{width:35}}/></div>
    </div>
  );
};

export default VideoItem;
