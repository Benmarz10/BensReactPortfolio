//will need a picutre

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
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              consequuntur rerum, unde voluptatibus facilis laboriosam omnis
              incidunt error voluptatem aliquam rem facere enim totam?
              Praesentium tempore accusamus aliquam cum ipsa.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default AboutMe;
