import React from "react";
import ReactDOM from "react-dom";
import { FormGroup } from "react-bootstrap";
import { ControlLabel } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { HelpBlock } from "react-bootstrap";
import { Form } from "react-bootstrap";
import ItineraryCreationPanel from "./itineraryCreationPanel";
import "./styles.css";

function App() {
  return (
    <div className="App itineraryCreator-container">
      <Form>
        <div className="itineraryCreator-panel">
          <ItineraryCreationPanel />
        </div>
        <hr />
        <FormGroup controlId="formBasicText">
          <ControlLabel>Day 1 Title</ControlLabel>
          <FormControl
            type="text"
            value=""
            placeholder="Enter description"
            className="itinerary-description-text"
          />
          <FormControl.Feedback />
          {/*<HelpBlock>Validation is based on string length.</HelpBlock>--> */}
        </FormGroup>
        <hr />
      </Form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
