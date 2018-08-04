import React from "react";
import PanelTimeImage from "../images/time.png";
import ImageButton from "./imageButton";

const TitlePanel = () => (
  <div className="itineraryCreator-panel">
    <ImageButton
      imageSrc={PanelCoverPhotoImage}
      textBelow="Cover Photo"
      imageId=""
    />
    <ImageButton
      imageSrc={PanelTripDatesImage}
      textBelow="Trip Dates"
      imageId=""
    />
    <ImageButton
      imageSrc={PanelGeneralDescriptionImage}
      textBelow="Description"
      imageId=""
    />
  </div>
);

export default TitlePanel;
