import React from "react";
import PanelTimeImage from "../images/time.png";

const TitlePanel = ({ dayNumber }) => (
  <div className="titlePanel">
    <div>
      <img src={PanelTimeImage} className="titlePanelImage" alt="" />
      <span className="titlePanelText">{"Day " + dayNumber}</span>
    </div>
    <div class="titlePanelHeadlineContainer">
      <span className="titlePanelHeadline">Day 1 Title</span>
    </div>
    <div />
  </div>
);

export default TitlePanel;
