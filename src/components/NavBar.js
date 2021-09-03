import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Container, FormControl, Form, Button } from 'react-bootstrap'

// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBookOpen, faChalkboardTeacher, faUser, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {

  return (
    <Navbar collapseOnSelect expand="lg" className="navbarmain" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand className="navbarbrand" href="/">PSA Project - DI</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="mx-auto">
       <Nav.Link className="navli" href="/">Home</Nav.Link>
        <Nav.Link className="navli" disabled href="post">About me</Nav.Link>
        <Nav.Link className="navli" disabled href="post">Project Overview</Nav.Link>
        <Nav.Link className="navli" disabled href="post">Facts</Nav.Link>
        <Nav.Link className="navli" disabled href="post">Videos</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link className="dashboardbutton text-light btn btn-alert btn-hover color-1 mx-auto" href="#signin">Sign in</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}