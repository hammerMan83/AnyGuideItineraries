import React from "react";
import ReactDOM from "react-dom";
import { FormGroup } from "react-bootstrap";
import { ControlLabel } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { HelpBlock } from "react-bootstrap";
import { Form } from "react-bootstrap";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Form>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Day 1 Title</ControlLabel>
          <FormControl type="text" value="" placeholder="Enter description" />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </Form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
