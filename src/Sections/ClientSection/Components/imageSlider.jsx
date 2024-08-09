import React, { useEffect, useState } from "react";

const ImageSlider = () => {
  const images = [
    { url: "/Assets/cocacola.png", name: "" },
    { url: "/Assets/microsoft.png", name: "" },
    { url: "/Assets/twitter.png", name: "" },
    { url: "/Assets/adidas.png", name: "" },
    { url: "/Assets/unicef.png", name: "" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = 3;
  const totalImages = images.length;

  const goToPrevious = () => {
    const newIndex =
      currentIndex - imagesPerSlide < 0
        ? totalImages - imagesPerSlide
        : currentIndex - imagesPerSlide;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + imagesPerSlide) % totalImages;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Ensure currentIndex is within bounds
    if (currentIndex < 0) {
      setCurrentIndex(0);
    } else if (currentIndex >= totalImages) {
      setCurrentIndex(totalImages - 1);
    }

    // Calculate the slice of images to display
    const startIndex = currentIndex;
    const endIndex = Math.min(currentIndex + imagesPerSlide, totalImages);
    const toDisplayImages = images.slice(startIndex, endIndex);

    // Handle looping when reaching the end of images array
    if (toDisplayImages.length < imagesPerSlide) {
      const remainingImages = images.slice(
        0,
        imagesPerSlide - toDisplayImages.length
      );
      toDisplayImages.push(...remainingImages);
    }

    setDisplayedImages(toDisplayImages);
  }, [currentIndex]);

  const [displayedImages, setDisplayedImages] = useState([]);

  return (
    <div className="slider-container">
      <div className="slider">
        {displayedImages.map((image, index) => (
          <div className="slide" key={index}>
            <img
              src={image.url}
              alt={`Slide ${index}`}
              // className="slider-image"
            />
          </div>
        ))}
      </div>
      <button className="prev" onClick={goToPrevious}>
        ❮
      </button>
      <button className="next" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;
