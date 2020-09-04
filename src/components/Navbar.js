import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavbarMain = () => {
  const loggedIn = useSelector(state => state.loggedIn);
  var rightNav;

  if (loggedIn) {
    rightNav = (
      <>
        <span>You are logged in!</span>
      </>
    );
  } else {
    rightNav = (
      <>
        <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
        <span className="ml-2 mr-2 text-muted">or</span>
        <Link to="/register" className="btn btn-outline-dark btn-sm">Register</Link>
      </>
    );
  }

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

          {rightNav}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;