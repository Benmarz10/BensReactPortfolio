import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import FaGithub from "react-icons/FaGithub";

function Footer() {
  return (
    <Navbar fixed="bottom">
      <Container>
        <Navbar.Brand href="https://github.com/Benmarz10">
          <i><FaGithub/></i>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
export default Footer;
