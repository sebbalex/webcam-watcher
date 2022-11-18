import React from "react";
import { data_images } from "./data";
import { Carousel as Gallery } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// https://github.com/leandrowd/react-responsive-carousel

const images = data_images;
const Carousel = () => {
  return (
    <Gallery showArrows={false} useKeyboardArrows showThumbs dynamicHeight swipeable>
      {images.map((x, i) => {
        return (
          <div key={i}>
            <img alt={x.thumbnailLabel} src={x.original} />
            <p className="legend">{x.thumbnailLabel}</p>
          </div>
        );
      })}
    </Gallery>
  );
};

export default Carousel;
