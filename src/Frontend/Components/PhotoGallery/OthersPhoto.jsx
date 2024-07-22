// src/Gallery.js
import React, { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import './Gallery.css';
 

const images = [
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FOthers%2F1.webp?alt=media&token=979f4290-0e6e-48eb-bd0e-258a5e0d8a0b', 
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FOthers%2F2.webp?alt=media&token=439221d2-1085-4226-b3c3-353709f0394c', 
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FOthers%2F3.webp?alt=media&token=7584e734-e6ac-4d7a-bbcd-8ea7d078b285', 
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FOthers%2F4.webp?alt=media&token=5b37fab6-c3b1-4551-91ba-de792b938a2c', 
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FOthers%2F5.webp?alt=media&token=91d7dff7-3682-4f3c-9d47-48cda52e4248', 
 
     
    
    // Add more image objects as needed
  ];
  
  const ITEMS_PER_PAGE = 5;

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