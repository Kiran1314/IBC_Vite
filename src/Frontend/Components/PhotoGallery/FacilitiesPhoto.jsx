// src/Gallery.js
import React, { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import './Gallery.css';
 

const images = [
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1179.webp?alt=media&token=6f612165-a5b4-4435-9e0e-8269ce21314d', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1189.webp?alt=media&token=d7f712b2-c2f1-4a91-bad6-aa8f526f200c', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1532.webp?alt=media&token=3e81003a-0ab8-4ad0-96de-9afd1327940d', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1538.webp?alt=media&token=5c6c5e42-9bc7-44ea-9c3d-36599753f0dc', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1550.webp?alt=media&token=d0efae1e-3ebf-4cb5-be4a-020bd02c57d2', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1573.webp?alt=media&token=5f1ab2b4-5b49-40d9-9d17-9fbf1c86bc37', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1579.webp?alt=media&token=32f55a6a-9a25-4891-84e7-ab953f1d1ff2', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1582.webp?alt=media&token=6e53dd77-efb8-435b-b148-13fcadcef5d1', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1588.webp?alt=media&token=7f81d0fa-b22d-479d-9689-e3a73276d0ee', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1599.webp?alt=media&token=b5ffa402-da53-4008-a957-e00ed6680a50',  
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1600.webp?alt=media&token=ef47844f-6a2d-4b67-ab8a-ce13e8cbe881', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1604.webp?alt=media&token=3e42280c-7411-432b-95f5-d59e406c9be6', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1650.webp?alt=media&token=56c42c83-a38c-4b20-86f8-5c4283dc0ad7', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1652.webp?alt=media&token=01d0e8ea-2de3-4f8f-8601-cd4800a01f2a', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1655.webp?alt=media&token=0558af31-831e-44a1-b52f-d83275d85e0f', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1739.webp?alt=media&token=a30b5201-ed1e-458a-bd2e-5700f23d795f', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1742.webp?alt=media&token=e9f6f58b-424a-44eb-b964-b2cc3ac4e75c', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1765.webp?alt=media&token=73883d7c-d516-4cf1-b22f-de77dd9e115c', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_1794.webp?alt=media&token=deed399b-c3c1-4d22-b837-2cd4637c52ef', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_2741.webp?alt=media&token=cf3f5a9c-7cb0-4618-816b-fbc51e9b1760', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_2755.webp?alt=media&token=f4b041b8-ad7b-4cc2-814b-f115797ac017', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_2760.webp?alt=media&token=197864c8-017c-42e9-a8a6-22d8f9318fe7', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_2770.webp?alt=media&token=3249b0af-9cfb-4f17-a4a4-b2020df41a21', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_2789.webp?alt=media&token=1e749946-b0de-4d54-abd8-b05c70402a3b', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_2801.webp?alt=media&token=48a41aa3-bae6-4bac-a4a4-b28959a5d32f', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_2874.webp?alt=media&token=0cbd5940-d678-4467-977d-743df9e98ceb', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_2879.webp?alt=media&token=0cbe069f-2fa0-4d2c-961c-1535ae709e2c', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_2879.webp?alt=media&token=0cbe069f-2fa0-4d2c-961c-1535ae709e2c', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_3252.webp?alt=media&token=157999ed-b620-4706-b1c8-957965ba5811', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_3253.webp?alt=media&token=a56de226-f396-49b1-9e2c-9dafe356750a', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_3261.webp?alt=media&token=e6ff24b2-8d33-428d-bb36-038b2f7ae0c4',
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_3265.webp?alt=media&token=4128814d-e19b-430b-b214-fccd19783fec', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_3283.webp?alt=media&token=73f78058-b32a-47ee-8477-8c74eff13cc4', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_3303.webp?alt=media&token=7205f583-ecc7-4b31-840d-a0729b48ca44',
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_3386.webp?alt=media&token=f7b86b9d-9612-4317-ad28-b2e329be108c', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_3390.webp?alt=media&token=4d1e2d9a-794d-4053-bad0-e1e967736657', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_3421.webp?alt=media&token=1f1967ab-6f1f-4643-9488-bfa0a2050a82',
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_3676.webp?alt=media&token=8cbeb65c-afb4-452f-bf35-047989fffbb3', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_3682.webp?alt=media&token=aa773d71-2e27-4e6f-8b7f-4f158b5be98e', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_3691.webp?alt=media&token=d38c776d-e3d0-428c-af38-f48bbd8bdd8d',
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_3704.webp?alt=media&token=06a198b1-9bb2-4976-8c7f-43d6ae16597a', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_3709.webp?alt=media&token=62ae88c4-0c80-41da-a818-287fa3a1c42b', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_3813.webp?alt=media&token=1687c996-4834-4561-b678-872622399785',
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_3819.webp?alt=media&token=ab348d87-5457-46d2-874c-971582620a6d', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_3824.webp?alt=media&token=d5302608-1f26-41ae-aca8-2c5f094fe54e', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_4005.webp?alt=media&token=30947286-96ec-4481-b750-8054f3b84e61',
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_4008.webp?alt=media&token=7fc42947-7abe-461f-8f0e-0597fb131dbf', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_7314.webp?alt=media&token=81dcf0bf-62d3-4b75-bf00-7312d506cd80', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_7324.webp?alt=media&token=86e9f756-cd5e-4adf-bfef-60d49ae082b5',
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_7331.webp?alt=media&token=ae2d8798-764d-4b23-ae02-4b4882998155', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_7341.webp?alt=media&token=43812e1e-e896-44f5-a601-b3491296bc05', 
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_7352.webp?alt=media&token=0fba5640-4963-4f10-920b-e120b60681b7',
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_7405.webp?alt=media&token=b5f32b32-344e-4f8c-bd44-95fc5083f10e',
  'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FFacilities%2FDSC_7434.webp?alt=media&token=39f2c737-e6b4-40c5-9d91-014e0319623a',


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

    
  
