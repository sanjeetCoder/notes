import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {


  render() {

    return (
      <div className="App">
        <h1>Implementation of Bootstrap</h1>
        <p>Installation Command : npm install react-bootstrap bootstrap</p>
        <p>Bootstrap Layout</p>

        <Button onClick={() => alert("you clicked")}>Click here</Button>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              1 of 3
            </Col>

            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">
              3 of 3
            </Col>

          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col md="auto">Variable width content</Col>
            <Col xs lg="2">
              3 of 3
           </Col>

          </Row>
        </Container>

      </div>
    )
  }
}



export default App;
