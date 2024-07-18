// src/Gallery.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactPaginate from 'react-paginate';
import './Gallery.css';
 

const imageData = [
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2FDSC_0692.webp?alt=media&token=19923aac-9ff6-4da2-93db-169875a44031"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2FDSC_0710.webp?alt=media&token=9a0a28ea-1029-41e7-8636-2b45955bc5c3"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2FDSC_0723.webp?alt=media&token=2929599d-ae71-4031-a4f0-a7e437922873"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2FDSC_0729.webp?alt=media&token=c22a915e-a7c3-4534-b0cd-aedc4128ed32"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2FDSC_0743.webp?alt=media&token=8be61776-3af1-4bb1-9f7f-ce50b3d5051b"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2FDSC_0766.webp?alt=media&token=a48dc972-368f-479f-97f4-55bb095ea74f"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2FDSC_0782.webp?alt=media&token=6f69b50c-c452-49a9-8b6d-b8e79c45074c"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2FDSC_0797.webp?alt=media&token=f90b0efa-709d-47da-bf4c-8f473f6f6b4b"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2FDSC_0836.webp?alt=media&token=42a4f529-f483-41d9-8b3c-45364861c6c5"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2FDSC_0890.webp?alt=media&token=fc9e5dc1-e7fd-49c3-b5df-e0929bf13683"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2FDSC_0965.webp?alt=media&token=6285151b-7d55-4d56-a5b8-6fb5c32b8ab7"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2FDSC_1000.webp?alt=media&token=51c45e89-77e8-4cba-8c24-d2c9ce44d53d"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2FDSC_7148.webp?alt=media&token=33ccd730-41a2-480d-b9a2-c5befada76b7"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2FDSC_7150.webp?alt=media&token=d697870d-a652-4353-85f0-036297d63fb5"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2FDSC_7156.webp?alt=media&token=012a63c2-f9fc-4060-8122-bc57d33192b8"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2FDSC_7160.webp?alt=media&token=4fc4f5ef-5722-47cf-8660-b533d85891f6"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2FDSC_9688.webp?alt=media&token=7e9c81a0-4076-4776-b79c-6e45c021ed2f"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-1.webp?alt=media&token=af387401-9807-4db6-a71d-b6940f111372"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-10.webp?alt=media&token=4cb494f6-474d-463e-81b6-7c1bcefe3e99"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-11.webp?alt=media&token=d25d0ae5-e07b-4830-9f27-f868d3bb149e"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-12.webp?alt=media&token=08e0cadb-4762-4656-bf3e-48a6a2f3cb25"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-13.webp?alt=media&token=bda5d111-84b2-47a2-b47e-3ac6a75a2cc8"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-14.webp?alt=media&token=36b574c0-6ebd-4eba-92b1-5b42295c97ea"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-15.webp?alt=media&token=4d52afb0-f9c9-463b-a5c3-c13e50bf29da"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-16.webp?alt=media&token=bc30702a-fb95-4c8b-bfc4-60a6594c2115"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-17.webp?alt=media&token=1cdafa6f-9082-402c-bd55-eccf11a70877"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-18.webp?alt=media&token=524be796-11b7-4823-881d-e80cd4b77309"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-19.webp?alt=media&token=6e5d698b-c68d-4ac1-9125-23cf20ab04f8"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-2.webp?alt=media&token=1698eb2a-e5ab-4b2a-8489-a04b532b49a4"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-20.webp?alt=media&token=2572b3c3-4b03-49a3-922a-c590f763ed23"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-21.webp?alt=media&token=17e2e8b6-0f1c-4983-b8b2-d4f46d0e651e"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-22.webp?alt=media&token=0411c5b1-0fde-4592-ae66-a049cd579d41"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-23.webp?alt=media&token=b0b8d007-0043-452c-88ce-33d31f85801b"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-24.webp?alt=media&token=5f64024f-102c-4827-b15e-79489d89e9b6"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-25.webp?alt=media&token=ba0e8e9f-611b-46ed-a5ff-9c3b369e0e6f"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-26.webp?alt=media&token=3e701643-31e9-4435-ab91-b8077bfae405"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-27.webp?alt=media&token=c3c33acd-a2be-4a20-8f03-532f3b55d35d"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-28.webp?alt=media&token=3a191ae5-42ab-4556-954a-8ca2f2add066"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-29.webp?alt=media&token=312204d9-bfbf-4684-80cf-83636e75fc00"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-3.webp?alt=media&token=3aebb0a8-8ebb-4b90-a64d-cc9c326902a2"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-30.webp?alt=media&token=6c008ab7-274c-460b-8fe1-8a1dff63a094"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-31.webp?alt=media&token=cf979aa7-b243-4684-bb7e-0b74556f9ec9"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-32.webp?alt=media&token=60873d69-c88c-4df3-a2dc-3e7c52e75660"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-33.webp?alt=media&token=a90bd9bf-5fb0-4a36-b893-00a12ff1ce45"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-34.webp?alt=media&token=67d08f45-04d6-4cd4-abec-b60b09eb145d"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-35.webp?alt=media&token=2644acec-f655-4263-8818-4fa5915ad8d4"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-36.webp?alt=media&token=33e89413-0a30-42a7-abc5-070154cd11b9"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-37.webp?alt=media&token=7705c20c-58ef-4e91-9d1b-279aada46544"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-38.webp?alt=media&token=8e606b93-a4ac-422d-92d0-17fcc8a5f8c4"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-39.webp?alt=media&token=8e344f80-501a-45d0-b31b-98bf3ea425f0"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-4.webp?alt=media&token=f48d8f66-019b-426c-bc45-7b2c17eb8efb"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-40.webp?alt=media&token=d3db004b-c9df-41e2-ba7b-b9cbc5c7fde6"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-41.webp?alt=media&token=ce545e67-22c8-42ab-a17e-b964181d109c"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-42.webp?alt=media&token=5b18d1c8-eb23-4e7c-b666-2a56aa90cba4"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-43.webp?alt=media&token=676f2969-8fbd-4c2e-ad7b-1d3c7cd978b0"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-44.webp?alt=media&token=11b67245-801f-4f23-a7cf-85db56e643ca"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-45.webp?alt=media&token=490c3301-4160-4286-bd21-132433adc5a0"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-5.webp?alt=media&token=727bb9fe-0624-4d3c-ac8d-e68f6d993468"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-6.webp?alt=media&token=b28a254b-faf1-470d-a8e9-1f74a8fa4e49"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-7.webp?alt=media&token=1271681e-ee6b-4dfe-a748-1addcab13a93"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-8.webp?alt=media&token=2d114979-1668-47c5-ab00-c64bade18ecb"},
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FTravels%2Ftravel-9.webp?alt=media&token=6f817e4d-9045-47d0-8b4d-549118850713"},

   

  // Add more image objects as needed
];

const itemsPerPage = 20;

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
        ><button onClick={closeModal} className="close-button">✖ Close</button>
          <img src={selectedImage.src} alt={selectedImage.title} className="modal-image" />
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
