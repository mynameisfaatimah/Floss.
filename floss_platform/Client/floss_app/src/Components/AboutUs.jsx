import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png'

const AboutUs = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
          />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="about-container">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan diam sit amet posuere laoreet. Nunc sagittis ex mauris, et bibendum mi varius vel. Aenean sed nulla quis tellus dictum posuere at eu tellus. Suspendisse potenti. Fusce quis suscipit velit. Duis sit amet massa eget velit elementum iaculis vel at nisi. Donec ut dolor erat. Donec vitae sapien eget metus consectetur gravida ut eu eros.</p>
      </div>
    </>
  );
};

export default AboutUs;
