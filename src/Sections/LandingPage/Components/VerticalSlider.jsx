import React from "react";
import "./VerticalSlider.css"; // Import the CSS file

const VerticalSlider = () => {
  const sections = [
    {
      imgUrl: "/Assets/dp1.png",
      heading: "Andrew Schultz",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      imgUrl: "/Assets/dp2.png",
      heading: "Andrew Schultz",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      imgUrl: "/Assets/dp3.png",
      heading: "Andrew Schultz",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      imgUrl: "/Assets/dp3.png",
      heading: "Andrew Schultz",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      imgUrl: "/Assets/dp3.png",
      heading: "Andrew Schultz",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  return (
    <div className="vertical-slider-container">
      <div className="vertical-slider">
        {sections.map((item, index) => (
          <div className="slider-section" key={index}>
            <div className="image-container">
              <img alt="logo" src={item.imgUrl} className="slider-image" />
            </div>
            <div className="text-container">
              <p className="slider-heading">{item.heading}</p>
              <p className="slider-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSlider;
