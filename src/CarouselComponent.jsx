import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const CarouselComponent = ({ images }) => {
  const [index, setIndex] = useState(0);
  const thumbnailsToShow = 9;

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  // Calculate the middle position
  const half = Math.floor(thumbnailsToShow / 2);
  let startIdx = index - half; 

  // Handle wrap-around logic
  if (startIdx < 0) {
    startIdx = images.length + startIdx; // Wrap from the end
  }

  // Create the sliced array dynamically
  const thumbnailList = [
    ...images.slice(startIdx, startIdx + thumbnailsToShow), // Main part
    ...images.slice(0, Math.max(0, startIdx + thumbnailsToShow - images.length)) // Wrap-around part
  ].slice(0, thumbnailsToShow); 
  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
      {images.map((image, i) => (
        <Carousel.Item key={i}>
            <img
              className="d-block"
              style={{ height: '540px', objectFit: 'cover', width: '75%', margin: 'auto' }}
              src={image.big_url}
              alt="Slide"
              />
          </Carousel.Item>
        
      ))}
        </Carousel>
      <div className="d-flex w-100 overflow-hidden justify-content-center mt-3">
      {thumbnailList.map((image, i) => {
          const realIndex = (startIdx + i) % images.length; // Get actual index
          return (
            <img
              key={i}
              src={image.small_thumb_url}
              alt={image.alt}
              onClick={() => handleSelect(realIndex)}
              className={`mx-2 rounded ${realIndex === index ? "border border-primary" : ""}`}
              style={{ width: "80px", height: "80px", cursor: "pointer", objectFit: "cover" }}
            />
          );
        })}
        {/* {thumbnailList.slice(index, index + 9).concat(images.slice(0, Math.max(0, index + 9 - images.length))).map((image, i) => (
          <img
          key={i}
          src={image.medium_url}
          alt={image.alt}
          onClick={() => handleSelect((index + i) % images.length)}
          className={`mx-2 rounded ${i === index ? "border border-primary" : ""}`}
          style={{ width: "100px", height: "50px", cursor: "pointer", objectFit: "cover" }}
          />
        ))} */}
      </div>
        </>
  );
};

export default CarouselComponent;
