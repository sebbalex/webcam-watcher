import React from "react";
import { data_images } from "./data";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

// https://github.com/xiaolin/react-image-gallery


const images = data_images;

const Carousel = () => (<ImageGallery items={images} lazyLoad  />)

export default Carousel;
