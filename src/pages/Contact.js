//Email info, GitHub etc
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function Contact() {
  function verifyEmail(email) {
    let regEx = /^([a-z0-9_\.-]+)@([\a-z\.-]+)\.([a-z\.]{2,6})$/;
    return regEx.test(String(email).toLocaleLowerCase());
  }

  const [required, setRequired] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const checkForText = (e) => {
    if (!e.target.value) {
      setRequired("Required!");
      return;
    }
  };

  const verify = (e) => {
    e.preventDefault();
    if (!verifyEmail(email)) {
      alert("Enter a Valid Email...");
      return;
    }
    alert("Thank You!");
    setEmail("");
    setMessage("");
    setName("");
  };

  const inputChange = (e) => {
    const { target } = e;
    const inputValue = target.value;
    setEmail(inputValue);
  };

  return (
    <Container>
      <h1>Contact Me</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            as="textarea"
            onBlur={(e) => {
              checkForText(e);
            }}
            value={email}
            onChange={(e) => {
              inputChange(e);
            }}
          />
          <Form.Text className="text-muted">{required}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="ControlTextarea2">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Enter name"
            as="textarea"
            onBlur={(e) => {
              checkForText(e);
            }}
            value={name}
            onChange={(e) => {
              inputChange(e);
            }}
          />
          <Form.Text className="text-muted">{required}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="form.ControlTextarea1">
          <Form.Label>Include a message</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter message"
            rows={3}
            onBlur={(e) => {
              checkForText(e);
            }}
            value={message}
            onChange={(e) => {
              inputChange(e);
            }}
          />
          <Form.Text className="text-muted">{required}</Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            verify(e);
          }}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}
export default Contact;
