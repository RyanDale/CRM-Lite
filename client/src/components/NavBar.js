import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';

class NavBar extends Component {
    render() {
      return (
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Contact Manager</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#contacts">Contacts</Nav.Link>
          <Nav.Link href="#accounts">Accounts</Nav.Link>
        </Nav>
      </Navbar>
      );
    }
  }
  
 export default NavBar;
 