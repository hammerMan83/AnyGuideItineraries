import React from "react";
import ReactDOM from "react-dom";
import { FormGroup } from "react-bootstrap";
import { ControlLabel } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { HelpBlock } from "react-bootstrap";
import { Form } from "react-bootstrap";
import TopPanel from "./topPanel";
import "./styles.css";
import TitlePanel from "./titlePanel";
import AddDayImage from "../images/plus.png";

function App() {
  return (
    <div className="App">
      <Form>
        <TopPanel />

        <hr className="topHr" />

        <FormGroup controlId="formBasicText">
          <TitlePanel dayNumber="1" />

          <FormControl
            componentClass="textarea"
            placeholder="Enter description"
            rows="3"
            style={{
              display: "block",
              marginLeft: "1em",
              marginRight: "1em",
              resize: "none"
            }}
          />

          <hr className="bottomHr" />

          <div class="addDayImageButton">
            <img src={AddDayImage} className="dayLocationImage" alt="" />
          </div>

          {/*<HelpBlock>Validation is based on string length.</HelpBlock>--> */}
        </FormGroup>
      </Form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
