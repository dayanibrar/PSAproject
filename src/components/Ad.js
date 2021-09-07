import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Container, FormControl, Form, Button } from 'react-bootstrap'

export default function AdBar() {

  return (
    <Navbar collapseOnSelect expand="lg" className="" bg="dark" variant="dark">
    <Container>
    <Nav.Link className="navli text-light">Join the beta testing list for our social network &quot;Apprise&quot; for Xidas Academy</Nav.Link>
      <Nav.Link className="float-right adbutton text-light btn btn-alert btn-hover w-50 color-1 " href="https://www.xidasacademy.com/reserve.html">Join</Nav.Link>
    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
     
      </Nav>
    </Navbar.Collapse> */}
    </Container>
  </Navbar>
  );
}