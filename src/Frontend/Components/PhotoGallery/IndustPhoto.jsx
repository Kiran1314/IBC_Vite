// src/Gallery.js
import React, { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import './Gallery.css';
 

const images= [
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F1.webp?alt=media&token=688f1a27-1620-46ab-bb94-c669a425d7b2',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F10.webp?alt=media&token=4ef525b5-89fe-40f8-98e4-e64fc84fade0',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F11.webp?alt=media&token=652c8651-cc88-49aa-a317-c348159e6661',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F12.webp?alt=media&token=579f986f-4df9-4ed8-af4c-127fd0a1edf5',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F14.webp?alt=media&token=09dfbb7f-67cb-4345-a5a8-18e03025a286',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F15.webp?alt=media&token=eb0ce449-4f14-4f40-8ab5-05932c459b39',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F16.webp?alt=media&token=35a076bf-3b8f-49ac-880b-380f0ce386b5',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F17.webp?alt=media&token=829e080b-7cf7-4060-bb67-dcadc4fb9594',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F18.webp?alt=media&token=862aef69-a7b3-4b69-b803-f94633de2707',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F19.webp?alt=media&token=5401f634-73f5-4d3c-b98c-9b74c24844b5',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F2.webp?alt=media&token=cddee028-9ff0-4d7c-a0dd-cc59cdd7021c',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F20.webp?alt=media&token=fdb4c689-2c21-4276-b6f2-e6ca4028577d',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F21.webp?alt=media&token=ae942d27-6d1b-4e30-bb12-c4225414ce6a',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F22.webp?alt=media&token=0add5c1c-6bbc-416e-984a-40d47d573938',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F23.webp?alt=media&token=408fec8a-ea4d-45c2-8741-1b66267229b7',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F24.webp?alt=media&token=21cd553d-a452-481b-9ccf-f98dd827e80f',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F25.webp?alt=media&token=aac81671-0ded-4bb9-b2ee-69c36d1f30cf',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F26.webp?alt=media&token=d5fb83f0-8635-4b44-a1c7-c20082567dde',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F27.webp?alt=media&token=b22e1292-a15f-4381-955e-47ed22b39b36',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F28.webp?alt=media&token=b652e73e-de0c-4023-bc3b-97fbc5c39fa5',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F29.webp?alt=media&token=c6004f40-a3fc-498e-a6a9-bc75e193ae06',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F3.webp?alt=media&token=c687a702-5a1b-436f-b4e3-4c98f7a3c361',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F30.webp?alt=media&token=d2cf1cf7-6870-472d-b1cd-73a90f0c1441',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F31.webp?alt=media&token=530c5b17-b985-4af5-a92f-39378173f368',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F32.webp?alt=media&token=8d396144-c40d-4e0c-bb74-877b48e2ef9a',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F33.webp?alt=media&token=1e0b772d-8f82-4a36-9dfd-87309a41b04a',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F34.webp?alt=media&token=eaa3801d-8b62-48db-bd2f-8a3416532cd4',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F35.webp?alt=media&token=44c14ae0-8fee-438f-8762-59145f408ddc',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F36.webp?alt=media&token=be7d9dbf-6311-40c3-b3f9-7073ca71767f',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F37.webp?alt=media&token=a24e4ab0-c915-4b0c-950a-ae36a5937e94',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F38.webp?alt=media&token=ea6e9c40-7413-48b0-9e4a-a4f06acdaef3',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F39.webp?alt=media&token=536ee8c6-4143-48bc-8a10-cb0ebc6f92bc',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F4.webp?alt=media&token=b2fa3c7b-53ba-46c5-8894-cc8cfc844802',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F40.webp?alt=media&token=9ebfcc92-b162-4f7c-844f-d812ee9c2e5a',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F41.webp?alt=media&token=a969cfe7-369a-4dd1-a2aa-3b85c2667458',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F42.webp?alt=media&token=5163aa44-a55a-4961-9881-dd071efe5c4d',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F43.webp?alt=media&token=04e48bba-1004-4384-98bf-7b31e2086c88',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F44.webp?alt=media&token=e436d68f-7174-4f4f-bcaf-bf846bf66e57',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F45.webp?alt=media&token=aa39d601-83c9-4248-a4fd-7efec5cefb58',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F46.webp?alt=media&token=7b8e7e72-3eaf-4624-a8e7-23029f6ea3b2',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F47.webp?alt=media&token=8a0e3ead-32f5-4836-ba64-e4c8cbc1a837',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F48.webp?alt=media&token=308a0c4c-3cbc-4e52-8feb-d018d36d0d05',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F49.webp?alt=media&token=f29da035-616c-4b8b-8c54-9ad7689f5be8',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F5.webp?alt=media&token=29cde3ff-c0e4-44d1-b99d-d0ab3d3a936b',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F50.webp?alt=media&token=58fef103-ffb4-4a65-8f75-e24a16b7621a',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F51.webp?alt=media&token=a3b19bf5-f13f-4b79-8b86-41dc305659c6',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F52.webp?alt=media&token=62daa3c1-bd3e-4b5c-b764-fc5d363ec405',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F53.webp?alt=media&token=c42e3095-c6dd-4b15-bf60-bcac171673d7',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F54.webp?alt=media&token=6f5ffbe8-867c-429f-b3a4-ad1c93f69553',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F55.webp?alt=media&token=0dd2cc88-3d76-4879-9968-5d3c38fbe816',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F56.webp?alt=media&token=151c489d-d004-417c-a302-08e5f14e421a',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F57.webp?alt=media&token=9168114f-5122-4f48-83ec-4a28d3304251',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F58.webp?alt=media&token=71d914c6-4852-4573-b38c-1f189c88750e',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F59.webp?alt=media&token=0c68d0ff-efd9-4871-8530-9d1f2f06e765',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F6.webp?alt=media&token=6e15f92a-a521-46cc-b4c1-e9b2f8c030f4',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F60.webp?alt=media&token=7f83ae98-a183-4836-a9de-b2fd2590329c',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F61.webp?alt=media&token=f5959215-a88b-495e-a639-448047d7ea4c',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F62.webp?alt=media&token=2fa5ddc7-60c8-4d8b-97ca-ff409637e199',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F63.webp?alt=media&token=c4df54b5-bb1c-49e6-b66c-135f8aeea41b',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F7.webp?alt=media&token=5e438679-d5ad-4bc3-bf56-c7bf43f6c6b2',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F8.webp?alt=media&token=376523c7-2d87-49bc-958e-424ae249920e',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2F9.webp?alt=media&token=83303d70-2cfd-4881-8b11-62de22acb38d',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2FDSC_0309.webp?alt=media&token=cd1dc739-c027-45c4-a37b-da36f3581d06',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2FDSC_0323.webp?alt=media&token=077846b3-2dbc-4ff2-b20b-c8ee62c3547b',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2FDSC_0340.webp?alt=media&token=b2197140-a1c8-42d6-8429-93bfae0bde60',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2FDSC_0355.webp?alt=media&token=a1636e5c-1ec8-46dd-a39a-5e87de6e0a01',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2FDSC_0358.webp?alt=media&token=0e680c8b-148f-41ce-bda8-baee4910c5da',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2FDSC_0365.webp?alt=media&token=3fa98bd1-8291-462f-bdb2-dcce771adfd7',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2FDSC_9811.webp?alt=media&token=4079f20b-fc96-4a71-ab18-ec90d64f6fd8',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2FDSC_9824.webp?alt=media&token=78f15454-68f3-4d3b-a075-07161952226a',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2FDSC_9843.webp?alt=media&token=afa64686-d51c-4ba8-bad9-6eee6a5d42d0',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2FDSC_9850.webp?alt=media&token=792c93a7-d01b-4d07-8717-5538ae51a364',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2FDSC_9851.webp?alt=media&token=922ea954-f93f-4578-853f-32432dbc2394',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2FDSC_9859.webp?alt=media&token=d0ad5d4f-d7ec-4879-8af0-9b7c963a7fc6',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2FDSC_9863.webp?alt=media&token=f47a6a82-c8c3-43f2-9ec3-9a0ace041c65',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2FDSC_9876.webp?alt=media&token=c48fb0e6-761f-400e-9afa-8ab12caadabe',
    'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FIndustrial%2FDSC_9894.webp?alt=media&token=52263257-6d30-4802-a96b-f39a7fba65fc',








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

    