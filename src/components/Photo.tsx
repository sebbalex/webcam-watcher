import React from "react";
import { RenderImageProps } from "react-photo-gallery";
import "./photo.css";

const imgWithClick = { cursor: "pointer" };
export type Globals =
  | "-moz-initial"
  | "inherit"
  | "initial"
  | "revert"
  | "revert-layer"
  | "unset";
export type Position =
  | Globals
  | "-webkit-sticky"
  | "absolute"
  | "fixed"
  | "relative"
  | "static"
  | "sticky";

interface ImgStyle {
  position?: Position;
  left: number;
  top: number;
  margin: string | undefined;
}
const Photo = ({
  index,
  onClick,
  photo,
  margin,
  direction,
  top,
  left,
}: RenderImageProps) => {
  const imgStyle: ImgStyle = { margin, left: 0, top: 0 };
  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left || 0;
    imgStyle.top = top || 0;
  }

  const handleClick = (event: React.MouseEvent) => {
    onClick && onClick(event, { index });
  };

  return (
    <div className="imgHolder">
      <img
        style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
        {...photo}
        sizes={undefined}
        srcSet={undefined}
        onClick={handleClick}
      />
      <span>{photo.alt}</span>
    </div>
  );
};

export default Photo;
