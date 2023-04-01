
import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Portfolio() {
  return (
    <Container>
      <Row>
        <Col>
          <Card 
            style={{ width: "36rem" }}
            className="text-center m-3"
            text="dark"
          >
            <a href="https://did-i-need-that.herokuapp.com/">
              <Card.Header>DINT</Card.Header>
            </a>
            <Card.Img variant="top" src="./images/dint.jpg"></Card.Img>
            <Card.Body>
              <Card.Text>
                Full-stack app for tracking purchases.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card 
            style={{ width: "36rem" }}
            className="text-center m-3"
            text="dark"
          >
            <a href="https://bensbooksearchengine.herokuapp.com/">
              <Card.Header>Book Search Engine</Card.Header>
            </a>
            <Card.Img variant="top" src="./images/BookSearch.jpg"></Card.Img>
            <Card.Body>
              <Card.Text>
                Full stack app to search for differnt books
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card 
            style={{ width: "36rem" }}
            className="text-center m-3"
            text="dark"
          >
            <a href="https://bens-text-editor.herokuapp.com/">
              <Card.Header>Text Editor</Card.Header>
            </a>
            <Card.Img variant="top" src="./images/Text-Editor.jpg"></Card.Img>
            <Card.Body>
              <Card.Text>
                Downloadable Text Editor App
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card 
            style={{ width: "36rem" }}
            className="text-center m-3"
            text="dark"
          >
            <a href="https://benmarz10.github.io/Bens-daily-planner/">
              <Card.Header>Planner</Card.Header>
            </a>
            <Card.Img variant="top" src="./images/Work Day Planner.jpg"></Card.Img>
            <Card.Body>
              <Card.Text>
                Planner for your Work Day
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    
    </Container>
  );
}
export default Portfolio;
