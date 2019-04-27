import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Home';
import ContactList from './ContactList';

class NavBar extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="primary" variant="dark" style={{marginBottom: '20px'}}>
          <Navbar.Brand href="/">Contact Manager</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact-list">Contacts</Nav.Link>
            <Nav.Link href="/account-list">Accounts</Nav.Link>
          </Nav>
        </Navbar>
        <Container>
          <Route path="/" exact component={Home} />
          <Route path="/contact-list" component={ContactList} />
        </Container>
      </Router>
    );
  }
}

export default NavBar;
