import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loggedOutAction } from '../actions/loggedInAction';
import tokenAction from '../actions/tokenAction';

const NavbarMain = () => {
  const loggedIn = useSelector(state => state.loggedIn);
  var rightNav;
  const dispatch = useDispatch();

  if (loggedIn) {
    rightNav = (
      <>
        <Button
          variant='secondary'
          size='sm'
          onClick={
            () => {
              dispatch(loggedOutAction());
              dispatch(tokenAction(''));
              localStorage.removeItem('token');
            }
          }
        >
          Logout
        </Button>
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
        <Navbar.Brand as={Link} to='/'>RoastMe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Trending</Nav.Link>
            <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
          </Nav>

          {rightNav}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;