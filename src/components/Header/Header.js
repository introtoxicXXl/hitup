import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
  
  return (
    <div className='nav-bar w-100'>
      <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to='/home'>
              <img height={'70'} src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <CustomLink as={Link} to="/home">Home</CustomLink>
                <CustomLink as={Link} to="/about">About</CustomLink>
                <CustomLink as={Link} to="/signin">Sign In</CustomLink>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;