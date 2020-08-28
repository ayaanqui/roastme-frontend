import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'react-router-dom/Link';

const NavbarMain = () => {
  return (
    <Navbar bg="white" expand="md">
      <Container>
        <Navbar.Brand href="#home">RoastMe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Trending</Nav.Link>
            <Nav.Link href="#link">Explore</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
          <span className="ml-2 mr-2 text-muted">or</span>
          <Link to="/register" className="btn btn-outline-dark btn-sm">Register</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;