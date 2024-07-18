// src/Gallery.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactPaginate from 'react-paginate';
import './Gallery.css';
 

const imageData = [
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2F1.webp?alt=media&token=a5e871a7-a6b1-4895-85b9-b4f88d6d8722"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2F2.webp?alt=media&token=de56ad63-0ca2-4c7e-af14-30f2fea40815"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2F4.webp?alt=media&token=4197a315-fcbe-48e4-8773-f892eee9c34f"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2F6.webp?alt=media&token=1b05ebde-518e-49cf-b75e-b965bbfa63da"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2F7.webp?alt=media&token=ed671507-4d31-41a8-8302-5b1f15af8d4b"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2F8.webp?alt=media&token=318e3eeb-cdbd-49fc-b048-7072109f08dc"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2F9.webp?alt=media&token=a28eea74-baa3-45b0-927f-8d42b1b08495"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0065.webp?alt=media&token=8fb2251a-4f84-44d8-94b5-523d81675760"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0106.webp?alt=media&token=19f18a75-2b6c-4116-b241-25a302807089"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0108.webp?alt=media&token=2f9e2ceb-efe9-439f-911c-a6a047bb627c"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0113.webp?alt=media&token=f1180acf-0596-4097-90e1-5da5a77bd7f1"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0129.webp?alt=media&token=6f93609e-494c-47fa-b584-0130df659d29"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0135.webp?alt=media&token=b15b8604-535f-471a-86d7-88db1197a1a7"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0189.webp?alt=media&token=7e95fecc-c5b1-4fc4-ac04-5f8a12ef129c"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0239.webp?alt=media&token=5b5b2076-ac2d-4aeb-a14b-078289bbba62"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_0245.webp?alt=media&token=2f8a9a76-c998-4a0b-b506-99eb8aae727c"},
    { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FModel%26Portrait%2FDSC_9990.webp?alt=media&token=10e49cb7-198b-417a-95cc-6d72f48abba9"},

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