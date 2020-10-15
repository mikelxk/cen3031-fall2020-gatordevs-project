import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="Home">Get Started</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="I am a" id="collasible-nav-dropdown">
            <NavDropdown.Item href="donate">Donor</NavDropdown.Item>
            <NavDropdown.Item href="beneficiary">Beneficiary</NavDropdown.Item>
            <NavDropdown.Item href="worker">
              Worker at foodbank
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="features">Features</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login">Sign In</Nav.Link>
          <Nav.Link eventKey={2} href="signup">
            Sign Up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
