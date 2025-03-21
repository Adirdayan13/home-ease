import React, { useState } from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailsToShow = images.length < 9 ? images.length : 9; // Number of thumbnails displayed at a time

  if (!images || images.length === 0) return null;

  const handleShowModal = (index) => {
    if (window.innerWidth >= 992) { // Only allow fullscreen on desktops (992px+)
      setCurrentIndex(index);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  // Handle thumbnail wrap-around logic
  const half = Math.floor(thumbnailsToShow / 2);
  let startIdx = currentIndex - half;
  if (startIdx < 0) startIdx = images.length + startIdx;

  const thumbnailList = [
    ...images.slice(startIdx, startIdx + thumbnailsToShow),
    ...images.slice(
      0,
      Math.max(0, startIdx + thumbnailsToShow - images.length)
    ),
  ].slice(0, thumbnailsToShow);

  return (
    <>
      {/* Normal View Carousel */}
      <div className="container mt-3">
        <Carousel
          activeIndex={currentIndex}
          onSelect={handleSelect}
          indicators={false}
          controls
        >
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                onClick={() => handleShowModal(index)}
                src={image.big_url}
                alt={image.alt || `Slide ${index}`}
                className="he-carousel-img d-block mx-auto"
                style={{
                  maxHeight: '75vh',
                  width: 'auto',
                  cursor: 'pointer',
                  borderRadius: '8px',
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        {/* Thumbnails */}
        <div className="d-flex w-100 overflow-hidden justify-content-center mt-3">
          {thumbnailList.map((image, i) => {
            const realIndex = (startIdx + i) % images.length;
            return (
              <img
                key={i}
                src={image.small_thumb_url}
                alt={image.alt}
                onClick={() => handleSelect(realIndex)}
                className={`mx-2 rounded ${
                  realIndex === currentIndex ? 'border border-primary' : ''
                }`}
                style={{
                  width: '80px',
                  height: '80px',
                  cursor: 'pointer',
                  objectFit: 'cover',
                }}
              />
            );
          })}
        </div>
      </div>
      {/* Full-Screen Modal Carousel */}
      <Modal show={showModal} fullscreen onHide={handleCloseModal} centered>
        <Modal.Body className="d-flex flex-column justify-content-between he-white-b">
          <Carousel
            activeIndex={currentIndex}
            onSelect={handleSelect}
            indicators={false}
            controls={false}
          >
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  src={image.big_url}
                  alt={image.alt || `Slide ${index}`}
                  className="d-block mx-auto"
                  style={{
                    width: 'auto',
                    maxHeight: '85vh',
                    objectFit: 'contain',
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          {/* Custom Fixed Navigation Arrows */}
          <button
            className="carousel-btn left"
            onClick={() => handleSelect(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
          >
            ❮
          </button>
          <button
            className="carousel-btn right"
            onClick={() => handleSelect(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}
          >
            ❯
          </button>

          {/* Custom Close Button */}
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleCloseModal}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              color: 'black',
              border: 'none',
              borderRadius: '50%',
              padding: '10px',
              cursor: 'pointer',
              zIndex: 1000,
            }}
          ></button>

          {/* Thumbnails in Modal */}
          <div className="d-flex w-100 overflow-hidden justify-content-center mt-3">
            {thumbnailList.map((image, i) => {
              const realIndex = (startIdx + i) % images.length;
              return (
                <img
                  key={i}
                  src={image.small_thumb_url}
                  alt={image.alt}
                  onClick={() => handleSelect(realIndex)}
                  className={`mx-2 rounded ${
                    realIndex === currentIndex ? 'border border-primary' : ''
                  }`}
                  style={{
                    width: '80px',
                    height: '80px',
                    cursor: 'pointer',
                    objectFit: 'cover',
                  }}
                />
              );
            })}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CarouselComponent;
