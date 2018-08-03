import React from "react";
import "./itinerayCreation.css";
import PanelCoverPhotoImage from "../images/digital-camera_blue.png";
import PanelTripDatesImage from "../images/passage-of-time_blue.png";
import PanelGeneralDescriptionImage from "../images/note_blue.png";

const ItineraryCreationPanel = () => (
  <div className="itineraryCreator-panel">
    <img src={PanelCoverPhotoImage} className="panel-image" alt="" />
    <img src={PanelTripDatesImage} className="panel-image" alt="" />
    <img src={PanelGeneralDescriptionImage} className="panel-image" alt="" />
  </div>
);

export default ItineraryCreationPanel;
