// src/Gallery.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactPaginate from 'react-paginate';
import './Gallery.css';
 

const imageData = [
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-1.webp?alt=media&token=00cd8e35-5d9f-46d3-912d-9119fac2dece"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-10.webp?alt=media&token=cd41356b-35dc-460c-aa13-d73e2b5ed985"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-11.webp?alt=media&token=6b9c089f-d15e-4577-84fd-c84ec61db298"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-12.webp?alt=media&token=7ffa2e52-a97b-4faf-88a3-df8786d941d5"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-13.webp?alt=media&token=e794ba94-b152-49a9-b913-d4709a811819"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-14.webp?alt=media&token=449bd5a7-da02-4aba-9084-f2b4feb2715a"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-15.webp?alt=media&token=be030192-ce6c-4fc8-b97b-4c0d4d2136af"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-16.webp?alt=media&token=c8db49de-b94c-4e19-9f61-93bd5630f212"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-17.webp?alt=media&token=48aab0e4-ead4-4ae3-adb4-1a17c264b73e"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-18.webp?alt=media&token=bb772def-df72-4eb5-acea-b251f2e37726"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-19.webp?alt=media&token=6e506f0b-3f0f-42b0-8caa-fa5ea54541b8"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-2.webp?alt=media&token=0412d5c9-65ba-4a5d-a159-b583be1622bb"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-20.webp?alt=media&token=115522c3-f1a1-4898-aca4-f466ab4d1d07"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-21.webp?alt=media&token=4080dca5-2fcf-4036-aafa-aa4fbf6034c2"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-3.webp?alt=media&token=722baf48-577d-44cf-a8a8-03f73c87583c"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-4.webp?alt=media&token=3e442d56-2f30-4afc-a6b4-a3ce1865c62e"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-5.webp?alt=media&token=e203f73c-9748-45ce-9729-ba79d01b6086"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-6.webp?alt=media&token=d0f65e80-b702-450b-99b7-e5a46bd1711c"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-7.webp?alt=media&token=c03f059d-e7cc-4f55-bb6b-8e9a3d19da2a"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-8.webp?alt=media&token=8eed30fe-8f95-4dc5-9f8f-dd99daf615ef"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFood%2Ffood-9.webp?alt=media&token=672ea750-3f65-4031-8126-2b0cf2955289"},

    // Add more image objects as needed
  ];
  
  const itemsPerPage = 16;
  
  const Gallery = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
  
    const openModal = (image) => {
      setSelectedImage(image);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
      setSelectedImage(null);
    };
  
    const handlePageClick = (data) => {
      setCurrentPage(data.selected);
    };
  
    const offset = currentPage * itemsPerPage;
    const currentPageImages = imageData.slice(offset, offset + itemsPerPage);
  
    return (
      <div className="gallery-container">
        <div className="gallery">
          {currentPageImages.map((image) => (
            <div key={image.id} className="thumbnail" onClick={() => openModal(image)}>
              <img src={image.src} alt={image.title} style={{maxWidth:300}}/>
            </div>
          ))}
        </div>
  
        <ReactPaginate
          previousLabel={'← Previous'}
          nextLabel={'Next →'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(imageData.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
  
        {selectedImage && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            className="image-modal"
            overlayClassName="image-modal-overlay"
          >
             <button onClick={closeModal} className="close-button">Close</button>
            <img src={selectedImage.src} alt={selectedImage.title} className="modal-image" />
          </Modal>
        )}
      </div>
    );
  };
  
  export default Gallery;
  