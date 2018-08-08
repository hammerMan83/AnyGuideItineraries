import React from "react";
import PanelTimeImage from "../images/time.png";
import PlaceHolderImage from "../images/placeholder.png";

const TitlePanel = ({ dayNumber }) => (
  <div className="titlePanel">
    <div>
      <img src={PanelTimeImage} className="titlePanelImage" alt="" />
      <span className="titlePanelText">{"Day " + dayNumber}</span>
    </div>
    <div class="dayTitleContainer">
      <span className="dayTitle">Day 1 Title</span>
    </div>
    <div class="dayLocationContainer">
      <img src={PlaceHolderImage} className="dayLocationImage" alt="" />
    </div>
    <div />
  </div>
);

export default TitlePanel;
