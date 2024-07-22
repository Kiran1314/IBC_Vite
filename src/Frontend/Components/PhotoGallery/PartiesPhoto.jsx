// src/Gallery.js
import React, { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import './Gallery.css';
 

const images = [
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2F20170608-715A0042_313.webp?alt=media&token=bd6112bd-32c3-4ea2-b8c4-c3f00d1eda24',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2F20170608-715A9634_9-1.webp?alt=media&token=4be326e1-d7e5-40b8-9d45-c2de8f74b19c',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FDSC_0329.webp?alt=media&token=7feb4060-0967-4500-919c-36cbe05b56e0',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FDSC_0391.webp?alt=media&token=eab70a4b-d5ac-46c6-b2d1-16dcdc1d51f9',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FDSC_0437.webp?alt=media&token=76bceb98-37c8-4572-9548-48d8e7f13fae',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FDSC_0626.webp?alt=media&token=1c094887-04e3-413b-91e2-404b818fd9b7',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FDSC_3742.webp?alt=media&token=d7974fbd-9639-4388-9354-f072c3568ab9',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FDSC_3747.webp?alt=media&token=67790f25-c69e-4c1c-9a96-64ad9097f527',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FDSC_3819.webp?alt=media&token=f30c591f-6312-4097-ab0f-def0add321d8',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FDSC_3822.webp?alt=media&token=91dcc563-a637-424d-88c6-b7058e95e98d',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FDSC_3829.webp?alt=media&token=908df39b-0107-4dde-9ae8-e580c3e3c5d2',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FDSC_4415.webp?alt=media&token=3f1de792-f85b-4fae-a096-8513744031e4',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FDSC_8084.webp?alt=media&token=7a5f8ab6-20d6-4f46-9e91-f0417e756d37',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FIMG_6524.webp?alt=media&token=3c80ccd7-7b2d-4765-8be2-e522f81f93d9',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FIMG_6548.webp?alt=media&token=62fe2296-a1c5-4aa0-8fc8-c2e6887a1429',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FIMG_6562.webp?alt=media&token=7be9890e-feb2-484b-a773-008a8bbee374',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FIMG_6598.webp?alt=media&token=0eba3daf-ad96-480e-b71d-4ad5dc64e457',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FIMG_6643.webp?alt=media&token=4eddba7b-3451-41d8-9ced-0e9e3e03f31a',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FIMG_6749.webp?alt=media&token=49fe424d-2638-48ed-ab34-ed87b11aa6e5',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FParties%2FIMG_6817.webp?alt=media&token=c8e29105-ffce-48cd-bce6-54580947b430',
 

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

    