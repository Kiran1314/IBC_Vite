// src/Gallery.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactPaginate from 'react-paginate';
import './Gallery.css';
 

const imageData = [
  { id: 1, title: "Image 1", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F1.webp?alt=media&token=35ef9865-f965-4f20-8a18-22fdeef24093"},
  { id: 2, title: "Image 2", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F10.webp?alt=media&token=8747bd71-122a-41bb-9056-853323c19fbc" },
  { id: 3, title: "Image 3", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F11.webp?alt=media&token=c3ccfe24-f967-4d2a-9309-088224a99a64" },
  { id: 4, title: "Image 4", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F12.webp?alt=media&token=c5fdf84a-ebb2-4d1d-bc10-7907bf3e302c" },
  { id: 5, title: "Image 5", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F13.webp?alt=media&token=26cb7ff2-baef-49f6-bdda-4fe072cd1de4" },
  { id: 6, title: "Image 6", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F14.webp?alt=media&token=8ce17b29-a88d-4403-846c-3630052f2097" },
  { id: 7, title: "Image 7", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F15.webp?alt=media&token=3697da62-d2e1-4f22-953d-01e4f9ec3ce1" },
  { id: 8, title: "Image 8", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F16.webp?alt=media&token=46f7e581-f725-498a-b54a-31318e1e1bc2" },
  { id: 9, title: "Image 9", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F17.webp?alt=media&token=7aabad52-07b8-4a4a-af19-b44baa483464" },
  { id: 10, title: "Image 10", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F18.webp?alt=media&token=2330bec6-e41e-4c08-980e-dd97d7fe88bf" },
  { id: 11, title: "Image 11", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F19.webp?alt=media&token=766db922-8c01-4c62-b55f-33b235685148" },
  { id: 12, title: "Image 12", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F2.webp?alt=media&token=20ad3c81-62b1-4e7d-a4bd-e051c6956a4c" },
  { id: 13, title: "Image 13", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F20.webp?alt=media&token=dd08b64c-901f-4a13-95be-ad1072420765" },
  { id: 14, title: "Image 14", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F21.webp?alt=media&token=ebb027ba-4f6b-45ea-9d43-8668b14de54f" },
  { id: 15, title: "Image 15", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F22.webp?alt=media&token=a20b4857-9ae0-4113-9c97-8841be72daa2" },
  { id: 16, title: "Image 16", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F23.webp?alt=media&token=9e7f1f8d-4ddb-4daa-8b93-4491d5adb486" },
  { id: 17, title: "Image 17", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F24.webp?alt=media&token=0822b706-d8c5-4e43-9826-1c2f04e15873" },
  { id: 18, title: "Image 18", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F26.webp?alt=media&token=71bc8838-ce41-46c4-94c9-38d2b7f869e4" },
  { id: 19, title: "Image 19", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F27.webp?alt=media&token=27f59005-86ff-4132-b52c-032028d6d7ad" },
  { id: 20, title: "Image 20", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F28.webp?alt=media&token=218bc512-2579-4390-af4f-472536e35308" },
  { id: 21, title: "Image 21", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F29.webp?alt=media&token=b3cc3c26-5574-4133-a843-b40f4a1bbe13" },
  { id: 22, title: "Image 22", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F3.webp?alt=media&token=3f38e7b1-b3c0-40e3-8ce8-e089d2c6475a" },
  { id: 23, title: "Image 23", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F30.webp?alt=media&token=4d42eb1e-2cb4-4e81-8c32-b38724902ea0" },
  { id: 24, title: "Image 24", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F31.webp?alt=media&token=bc22f17e-f340-477f-bc2c-41430621423e" },
  { id: 25, title: "Image 25", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F32.webp?alt=media&token=da679b33-8f3e-4ab1-961f-cc4d18581222"},
  { id: 26, title: "Image 26", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F33.webp?alt=media&token=ca9bf138-8b94-4fa5-90d7-5c6ac4f411c4"},
  { id: 27, title: "Image 27", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F34.webp?alt=media&token=3c812c0d-f791-4b64-8896-4808ad9c4784"},
  { id: 28, title: "Image 28", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F36.webp?alt=media&token=d19e79cb-647c-45ff-9098-442d67738b4b"},
  { id: 29, title: "Image 29", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F37.webp?alt=media&token=717303c2-3b50-45f0-ba31-7fe9fe3ef44e"},
  { id: 30, title: "Image 30", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F38.webp?alt=media&token=e1c7e35a-a70f-4e07-9967-17a342a95f8c"},
  { id: 31, title: "Image 31", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F39.webp?alt=media&token=f6950294-5aae-4649-8f25-58753a1d32a7"},
  { id: 32, title: "Image 32", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F4.webp?alt=media&token=6466328f-b8a5-461c-83cc-794e058b313a"},
  { id: 33, title: "Image 33", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F40.webp?alt=media&token=3c2cc9d7-6d67-4091-b5a1-11d85261f5f2"},
  { id: 34, title: "Image 34", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F41.webp?alt=media&token=3a150a26-944d-4db1-b59d-d55102a3e450"},
  { id: 35, title: "Image 35", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F42.webp?alt=media&token=8645cf18-508b-4ef0-957d-2df69da414a5"},
  { id: 36, title: "Image 36", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F43.webp?alt=media&token=d20daa1a-6605-456b-9f95-d8013993232d"},
  { id: 37, title: "Image 37", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F44.webp?alt=media&token=72d52275-9c53-44ed-ba9b-66d57e6aa55d"},
  { id: 38, title: "Image 38", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F45.webp?alt=media&token=dc1272af-7beb-494c-986f-37b408b7b54c"},
  { id: 39, title: "Image 39", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F46.webp?alt=media&token=53a7d760-877a-471c-a6a4-c2b915793d7e"},
  { id: 40, title: "Image 40", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F47.webp?alt=media&token=232c1a97-78a6-43d6-8f8f-bba9a4e1a02e"},
  { id: 41, title: "Image 41", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F48.webp?alt=media&token=fa0fe607-20e4-4f9d-b55a-e001afc4f018"},
  { id: 42, title: "Image 42", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F49.webp?alt=media&token=fbc93704-7fd4-49f0-8678-b899a05f91c6"},
  { id: 43, title: "Image 43", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F5.webp?alt=media&token=a73e0c1d-a44e-4b48-884e-d60652092481"},
  { id: 44, title: "Image 44", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F51.webp?alt=media&token=b81e5e03-c490-4499-a7aa-764e7fc1d987"},
  { id: 45, title: "Image 45", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F52.webp?alt=media&token=70a5cc6b-ec20-48b6-b2db-a63093773ef6"},
  { id: 46, title: "Image 46", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F54.webp?alt=media&token=8ef45b3e-e8a4-4602-aad1-17e8b0336079"},
  { id: 47, title: "Image 47", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F55.webp?alt=media&token=67061f0f-d87b-4239-a24d-b082bf2eedfe"},
  { id: 48, title: "Image 48", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F56.webp?alt=media&token=98cb8d95-aabf-471d-a2c2-3c3944084ef5"},
  { id: 49, title: "Image 49", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F59.webp?alt=media&token=0c995a44-d950-4b39-9709-1e166f317381"},
  { id: 50, title: "Image 50", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F6.webp?alt=media&token=ddaf41bd-ef49-41a2-8525-671decc1b683"},
  { id: 51, title: "Image 51", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F60.webp?alt=media&token=5e8d6714-86b9-42b2-b0de-b2d050ff56b9"},
  { id: 52, title: "Image 52", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F62.webp?alt=media&token=eebf6ab8-4f9d-40e4-8a47-3e68fda36d84"},
  { id: 53, title: "Image 53", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F63.webp?alt=media&token=fed9a286-4ccf-4670-9887-060b8a8eb4fc"},
  { id: 54, title: "Image 54", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F64.webp?alt=media&token=e3382ec3-37f8-46fd-970c-feb310b1a604"},
  { id: 55, title: "Image 55", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F65.webp?alt=media&token=ceca10e6-d4fb-4e8f-9b19-a854e7d5e206"},
  { id: 56, title: "Image 56", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F66.webp?alt=media&token=232e588a-599d-40d0-a813-0a704d888a45"},
  { id: 57, title: "Image 57", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F7.webp?alt=media&token=09e39693-9fa0-490b-8ba8-3a14f0d76c72"},
  { id: 58, title: "Image 58", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F8.webp?alt=media&token=32f125ef-7994-4d8e-b7d5-f053c33c8bf6"},
  { id: 59, title: "Image 59", src: "https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FProduct%2F9.webp?alt=media&token=353ad86c-fcbc-4971-a12f-e4a268f86627"},

  




  

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
        ><button onClick={closeModal} className="close-button">✖ Close</button>
          <img src={selectedImage.src} alt={selectedImage.title} className="modal-image" />
        </Modal>
      )}
    </div>
  );
};

export default Gallery;
