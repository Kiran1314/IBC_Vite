// src/Gallery.js
import React, { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import './Gallery.css';
 

const images = [
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2F1.webp?alt=media&token=a5e871a7-a6b1-4895-85b9-b4f88d6d8722',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2F2.webp?alt=media&token=de56ad63-0ca2-4c7e-af14-30f2fea40815',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2F4.webp?alt=media&token=4197a315-fcbe-48e4-8773-f892eee9c34f',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2F6.webp?alt=media&token=1b05ebde-518e-49cf-b75e-b965bbfa63da',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2F7.webp?alt=media&token=ed671507-4d31-41a8-8302-5b1f15af8d4b',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2F8.webp?alt=media&token=318e3eeb-cdbd-49fc-b048-7072109f08dc',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2F9.webp?alt=media&token=a28eea74-baa3-45b0-927f-8d42b1b08495',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0065.webp?alt=media&token=8fb2251a-4f84-44d8-94b5-523d81675760',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0106.webp?alt=media&token=19f18a75-2b6c-4116-b241-25a302807089',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0108.webp?alt=media&token=2f9e2ceb-efe9-439f-911c-a6a047bb627c',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0113.webp?alt=media&token=f1180acf-0596-4097-90e1-5da5a77bd7f1',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0129.webp?alt=media&token=6f93609e-494c-47fa-b584-0130df659d29',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0135.webp?alt=media&token=b15b8604-535f-471a-86d7-88db1197a1a7',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0189.webp?alt=media&token=7e95fecc-c5b1-4fc4-ac04-5f8a12ef129c',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0239.webp?alt=media&token=5b5b2076-ac2d-4aeb-a14b-078289bbba62',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0245.webp?alt=media&token=2f8a9a76-c998-4a0b-b506-99eb8aae727c',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_9990.webp?alt=media&token=10e49cb7-198b-417a-95cc-6d72f48abba9',

    // Add more image objects as needed
  ];
  
  const ITEMS_PER_PAGE = 16;

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const selectedImages = images.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="gallery-container">
      <div className="gallery">
        {selectedImages.map((image, index) => (
          <div className="thumbnail" key={index}>
            <img
              src={image}
              alt={`Gallery`}
              className="img-fluid"
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(images.length / ITEMS_PER_PAGE)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />

      <Modal show={showModal} onHide={closeModal}  centered size="xl">
        <Modal.Body>
          <img src={selectedImage} alt="Selected" className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={prevImage}>
            Previous
          </Button>
          <Button variant="primary" onClick={nextImage}>
            Next
          </Button>
          <Button variant="danger" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
  
  export default Gallery;