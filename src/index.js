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

function App() {
  return (
    <div className="App">
      <Form>
        <TopPanel />
        <hr />
        <TitlePanel dayNumber="1" />
        <FormGroup controlId="formBasicText">
          {/* <ControlLabel>Day 1 Title</ControlLabel> */}
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
          {/*<FormControl
            type="text"
            value=""
            placeholder="Enter description"
            className="itinerary-description-text"
          />
          <FormControl.Feedback />*/}

          {/*<HelpBlock>Validation is based on string length.</HelpBlock>--> */}
        </FormGroup>
        <hr />
      </Form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
