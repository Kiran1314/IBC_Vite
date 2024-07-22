// src/Gallery.js
import React, { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import './Gallery.css';
 

const images = [
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2F02.jpg.webp?alt=media&token=2cb64899-df7f-4fcd-858b-9bcea4647ad7',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2FBlack_forest_cake.webp?alt=media&token=b05bcee7-b67e-406b-875f-a69ed314632c',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2FCoca-Cola-CNY-2016-can-designs_1a.webp?alt=media&token=1919c1f4-a54e-43d5-b5d1-f5564124fcff',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2FFruit-PNG-Image.webp?alt=media&token=b0c1329d-ffc3-477a-86e5-fe74256774db',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2FJuice-PNG-Clipart.webp?alt=media&token=d4964ec4-3318-4de0-a9e0-4b5a51514c4a',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2FNature-Fruits-apples.webp?alt=media&token=25794292-ef6a-489d-a5c1-690e7171adf2',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2FRS25J500DSR_005_Front-Open_Silver.webp?alt=media&token=c291eeec-f290-44fd-9b09-24881a4fa9a0',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2FRaw_Steaks_PNG_Clipart-335.webp?alt=media&token=53fffc00-4fac-45c5-9e25-fd888c936643',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2FRubens_apples_on_plate.webp?alt=media&token=6eed652c-a63b-4b86-8bb7-fca1acb298d3',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2FSteaks_PNG_Clipart-342.webp?alt=media&token=7fedd0ce-0f8d-4e70-9058-6292058d7cbc',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2FTenderloin.webp?alt=media&token=37b7572a-cdd7-4504-91e9-dc25ee5a864b',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2FVegetable-Free-Download-PNG.webp?alt=media&token=c8706f52-d144-4822-8c2e-75e85bef4838',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2Fa4f5c8d1-3c42-48aa-8ce6-6ebaa5a38800.webp?alt=media&token=1b398a23-e9dd-4285-b877-1380b1185348',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2Fbananen-ohne-hintergrund-freigestellt-bananas-transparent-2.webp?alt=media&token=53b609bd-3d8e-4c78-a3e3-a7e4f8056338',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2Fbowl-of-fruits.webp?alt=media&token=df36b395-9a9a-47e3-b609-b189c7e65980',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2Fc9ef082268b3f067d832cfd1aeda94c8.jpg.webp?alt=media&token=c08baffe-714f-4837-bd0d-e4dc2f491391',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2Fchicken-drum-stick.webp?alt=media&token=082ea86a-b2a5-42a0-a458-dd12023471be',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2Ffruits-and-vegetables.webp?alt=media&token=18547d9f-581d-46a3-92e0-62352815c911',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2Ffruits_1.webp?alt=media&token=5263a381-183e-43f1-82d4-13bc14191415',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2Fmeat_PNG3925.webp?alt=media&token=42f6ad08-d93d-48f0-b672-fd9cb00fc8a9',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2Fmix_fruit_background_png.webp?alt=media&token=e89eba38-b383-408e-bbaf-61305f413e52',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2Fonion_PNG3831.webp?alt=media&token=4a884431-8a4b-4fa5-af7c-3591db4e0814',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2Fpineapple-cut-open.webp?alt=media&token=579e6ee7-a969-4efd-933b-fd5765c364fd',
   'https://firebasestorage.googleapis.com/v0/b/ibc-studio.appspot.com/o/Images%2FPhotography%2FPerishable%2Fpineapple-pastry.webp?alt=media&token=21a7a1b9-0a86-458c-948a-2fb60f180d42',
    

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

    