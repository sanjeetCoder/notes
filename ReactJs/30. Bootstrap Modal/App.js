import React, { Component } from 'react';
import { Button, Container, Row, Col, Modal } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      show:false
    }
  }

  handleModal(){
    this.setState({
      show:!this.state.show
    })
  }

  render() {

    return (
      <div className="App">
        <h1>Modal Bootstrap</h1>
        <p>Modal is used to create bootstrap dialogue boxes, notifications etc</p>
        


        <Button onClick={() => this.handleModal()}>Click here</Button>
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
          <Modal.Header closeButton>
            Modal Heading
          </Modal.Header>

            <Modal.Body>
              Modal Body
            </Modal.Body>
          <Modal.Footer>
              <Button  onClick={() => this.handleModal()}>Close</Button>
              <Button  onClick={() => this.handleModal()}>Save</Button>
          </Modal.Footer>

        </Modal>
        

      </div>
    )
  }
}



export default App;
