import React, { useState } from "react";
import Gallery, { PhotoProps } from "react-photo-gallery";
import Lightbox from "react-image-lightbox";
import { data_images } from "./data";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import Photo from "./Photo";

const GalleryBox = () => {
  const images: PhotoProps[] = data_images.map((x) => {
    return {
      src: x.original,
      width: x.thumbnailWidth,
      height: x.thumbnailHeight,
      alt: x.thumbnailLabel,
    };
  });

  const [currentImage, setCurrentImage] = useState<number>(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState<boolean>(false);

  const openLightbox = (event: React.MouseEvent, obj: { index: number }) => {
    console.log("open", obj);
    setCurrentImage(obj.index);
    setLightboxIsOpen(true);
  };
  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };
  const gotoPrevious = () => {
    setCurrentImage(currentImage - 1);
  };
  const gotoNext = () => {
    setCurrentImage(currentImage + 1);
  };
  return (
    <div>
      <Gallery
        photos={images}
        onClick={openLightbox}
        renderImage={(props) => <Photo {...props} />}
      />
      {lightboxIsOpen && (
        <Lightbox
          mainSrc={images[currentImage].src}
          clickOutsideToClose
          imageCaption={images[currentImage].alt}
          mainSrcThumbnail={data_images[currentImage].thumbnail}
          nextSrc={images[(currentImage + 1) % images.length].src}
          prevSrc={
            images[(currentImage + images.length - 1) % images.length].src
          }
          // https://github.com/frontend-collective/react-image-lightbox/issues/672
          onImageLoad={() => {
            window.dispatchEvent(new Event("resize"));
          }}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={gotoPrevious}
          onMoveNextRequest={gotoNext}
        />
      )}
    </div>
  );
};

export default GalleryBox;
