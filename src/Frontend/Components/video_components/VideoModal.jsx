import React from 'react';
import Modal from 'react-modal';
import './VideoModal.css';

const VideoModal = ({ video, onCloseModal }) => {
  return (
    <Modal isOpen onRequestClose={onCloseModal} className="video-modal">
      <button onClick={onCloseModal} className="close-button">X Close </button>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${video.videoId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Video"
      />
    </Modal>
  );
};

export default VideoModal;
