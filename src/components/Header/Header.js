import React from 'react';
import { Container, Navbar,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/home'>
            <img height={'70'} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/home'>Home</Nav.Link>
              <Nav.Link as={Link} to='/Services'>Services</Nav.Link>
              <Nav.Link as={Link} to='/About'>About</Nav.Link>
              <Nav.Link as={Link} to='/Sign In'>Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;