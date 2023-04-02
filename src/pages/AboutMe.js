import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function AboutMe() {
  return (
    <Container>
      <Row>
        <Col sm style={{ display: "flex", justifyContent: "center" }}>
          <Card style={{ width: "26rem" }} className="text-center">
            <Card.Img variant="top" src="./images/IMG_5718.jpg"></Card.Img>
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                I live in Saint Paul, excited to learn and grow as a developer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
