//will need a picutre, actual text about yourself

import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function AboutMe() {
  return (
    <Container>
      <Row>
        <Col />
        <Card>
          <Card.Body className="primary">
            <Card.Title>About Me</Card.Title>
            <Card.Text>
              I live in Saint Paul, excited to learn and grow as a developer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default AboutMe;
