import React from "react";
import "./imageButton.css";

const ImageButton = ({ imageSrc, textBelow, imageId }) => (
  <div className="image-button">
    <img src={imageSrc} className="panel-image" alt="" />
    <label for={imageId} className="panel-image-label">
      {textBelow}
    </label>
  </div>
);

export default ImageButton;
