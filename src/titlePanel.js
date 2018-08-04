import React from "react";
import PanelTimeImage from "../images/time.png";
import "./titlePanel.css";

const TitlePanel = ({ dayNumber }) => (
  <div className="titlePanel">
    <img src={PanelTimeImage} className="titlePanelImage" alt="" />
    <span className="titlePanelText">{"Day " + dayNumber}</span>
  </div>
);

export default TitlePanel;
