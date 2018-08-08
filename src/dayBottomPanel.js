import React from "react";
import DigiCameraImage from "../images/digital-camera.png";
import VideoCamImage from "../images/videocam-filled-tool.png";

const DayBottomPanel = ({ dayNumber }) => (
  <div className="dayBottomPanel">
    <div>
      <img src={DigiCameraImage} className="titlePanelImage" alt="" />
    </div>
    <div>
      <img src={VideoCamImage} className="dayLocationImage" alt="" />
    </div>
    <div />
  </div>
);

export default DayBottomPanel;
