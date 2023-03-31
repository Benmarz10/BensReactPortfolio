import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Navbar fixed="bottom">
      <Container>
        <Navbar.Brand href="https://github.com/Benmarz10" target="_blank">
          <i><FaGithub/></i>
        </Navbar.Brand>
        <Navbar.Brand href="https://www.linkedin.com/in/ben-marz-196259270/" target="_blank">
          <i><FaLinkedin/></i>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
export default Footer;
