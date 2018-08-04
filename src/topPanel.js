import React from "react";
import "./itinerayCreation.css";
import PanelCoverPhotoImage from "../images/digital-camera_blue.png";
import PanelTripDatesImage from "../images/passage-of-time_blue.png";
import PanelGeneralDescriptionImage from "../images/note_blue.png";
import ImageButton from "./imageButton";

const TopPanel = () => (
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

export default TopPanel;
