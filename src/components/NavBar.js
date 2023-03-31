import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar  from "react-bootstrap/NavBar";

function NavigationBar({ currentPage, setCurrentPage }) {
  return (
    <NavBar>
      <Container>
        <Nav>
          <Nav.Link
            href="#aboutme"
            onClick={() => setCurrentPage("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About Me
          </Nav.Link>
          <Nav.Link
            href="#Contact"
            onClick={() => setCurrentPage("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact Me
          </Nav.Link>
          <Nav.Link
            href="#Portfolio"
            onClick={() => setCurrentPage("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            href="#Resume"
            onClick={() => setCurrentPage("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </NavBar>
  );
}
export default NavigationBar;
