// src/Gallery.js
import React, { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import './Gallery.css';
 

const images = [
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2F1st_design.webp?alt=media&token=1e42b030-49ec-40a5-aacc-fd002b7bbbf9',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2F2nd_design.webp?alt=media&token=2195229c-3519-455b-a80d-550d0221ccfd',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2F3rd_design.webp?alt=media&token=4cfda086-0f0f-433b-a624-04bbbd012ed2',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2FAK-GROUP.webp?alt=media&token=d97d7e49-2021-4e5b-90d1-9b18f73895c6',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2FARCANE.webp?alt=media&token=4c9f9fbf-abb0-4ec0-b6d9-093aabdd64d3',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2FDr_nutrition.webp?alt=media&token=20541c04-73e0-42ce-8222-55eed748d7fc',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2Ffold1.webp?alt=media&token=c7b51860-17e7-44d1-9317-105319d8cba4',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2Ffold2.webp?alt=media&token=cc26a98d-7fa9-4076-b872-b0be00ab6b35',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2Ffold22.webp?alt=media&token=588ed2ce-d6bb-46f7-a5f0-2cb9fd16e48f',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2Ffolder2-design.webp?alt=media&token=2fc07f96-092b-4076-b70c-92862babe503',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2Fibc_new_32.webp?alt=media&token=fa383bb3-15b7-49cb-abeb-23563158401f',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2Fibc_new_6.webp?alt=media&token=af4cf5f6-542c-4c7f-85d1-4a280c946a7f',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2Finnercover_copy.webp?alt=media&token=6f3e5fa1-6543-4dcb-8776-fda3f0c74373',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2Finnerpage_backbuldingshot_copy.webp?alt=media&token=62d0b17a-6e36-4283-afbd-5fd9563b6617',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2Fmagazie-2.webp?alt=media&token=2cac551f-456c-4ab3-b8e8-5857052fce27',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2Fqatar_4-6-10.webp?alt=media&token=00116348-dcb3-4888-8cfe-088a551d6905',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2Fvisiting-card.webp?alt=media&token=9b72837a-9290-45a1-a5ad-9ab0f594a3ef',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2FENGLISH-4-6-10.webp?alt=media&token=889bb930-17f2-4ef6-8bdd-72662c3e3f0a',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2FHOTLINE.webp?alt=media&token=e60883cc-1630-457e-be40-cec559f8aea8',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2FMukarram_p2.webp?alt=media&token=3b9416e8-705b-4583-970c-c6e593887287',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2Faspen1.webp?alt=media&token=24dc4dc8-146f-4adb-aba4-534dae06639a',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2Faspen2.webp?alt=media&token=ae2f1557-8820-491a-a05e-6fa69572711e',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FGraphicsDesign%2Fenvelop.webp?alt=media&token=b1944d8b-dbd0-454d-b981-4e89a080848e',
   


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
  