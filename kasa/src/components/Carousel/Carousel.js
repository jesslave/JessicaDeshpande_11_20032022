import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Carousel.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = React.Children.count(children);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      
    >
        <button className="previousButton"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <i className="fas fa-chevron-left fa-8x"></i>
        </button>
        <button className="nextButton"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <i className="fas fa-chevron-right fa-8x"></i>
        </button>
        <span className="currentPic">{activeIndex+1}/{total}</span>
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return <React.Fragment key={index}>
            {React.cloneElement(child, { width: "100%" })}
          </React.Fragment>;
        })}
      </div>
    </div>
  );
};

export default Carousel;
