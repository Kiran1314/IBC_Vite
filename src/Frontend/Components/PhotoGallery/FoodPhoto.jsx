// src/Gallery.js
import React, { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import './Gallery.css';
 

const images = [
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-1.webp?alt=media&token=00cd8e35-5d9f-46d3-912d-9119fac2dece',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-10.webp?alt=media&token=cd41356b-35dc-460c-aa13-d73e2b5ed985',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-11.webp?alt=media&token=6b9c089f-d15e-4577-84fd-c84ec61db298',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-12.webp?alt=media&token=7ffa2e52-a97b-4faf-88a3-df8786d941d5',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-13.webp?alt=media&token=e794ba94-b152-49a9-b913-d4709a811819',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-14.webp?alt=media&token=449bd5a7-da02-4aba-9084-f2b4feb2715a',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-15.webp?alt=media&token=be030192-ce6c-4fc8-b97b-4c0d4d2136af',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-16.webp?alt=media&token=c8db49de-b94c-4e19-9f61-93bd5630f212',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-17.webp?alt=media&token=48aab0e4-ead4-4ae3-adb4-1a17c264b73e',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-18.webp?alt=media&token=bb772def-df72-4eb5-acea-b251f2e37726',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-19.webp?alt=media&token=6e506f0b-3f0f-42b0-8caa-fa5ea54541b8',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-2.webp?alt=media&token=0412d5c9-65ba-4a5d-a159-b583be1622bb',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-20.webp?alt=media&token=115522c3-f1a1-4898-aca4-f466ab4d1d07',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-21.webp?alt=media&token=4080dca5-2fcf-4036-aafa-aa4fbf6034c2',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-3.webp?alt=media&token=722baf48-577d-44cf-a8a8-03f73c87583c',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-4.webp?alt=media&token=3e442d56-2f30-4afc-a6b4-a3ce1865c62e',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-5.webp?alt=media&token=e203f73c-9748-45ce-9729-ba79d01b6086',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-6.webp?alt=media&token=d0f65e80-b702-450b-99b7-e5a46bd1711c',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-7.webp?alt=media&token=c03f059d-e7cc-4f55-bb6b-8e9a3d19da2a',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-8.webp?alt=media&token=8eed30fe-8f95-4dc5-9f8f-dd99daf615ef',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-9.webp?alt=media&token=672ea750-3f65-4031-8126-2b0cf2955289',

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
