import React from "react";
import PanelTimeImage from "../images/time.png";

const TitlePanel = ({ dayNumber }) => (
  <div className="titlePanel">
    <div>
      <img src={PanelTimeImage} className="titlePanelImage" alt="" />
      <span className="titlePanelText">{"Day " + dayNumber}</span>
    </div>
    <span className="titlePanelHeadline">Day 1 Title</span>
  </div>
);

export default TitlePanel;
