import React from "react";
import { Card, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="card1.png" className="Card" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="card2.jpg" className="Card" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="card3.jpg" className="Card" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
