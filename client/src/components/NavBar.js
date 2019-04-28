import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashRouter, Route } from "react-router-dom";

import Home from './Home';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

class NavBar extends Component {
  render() {
    return (
      <HashRouter>
        <Navbar bg="primary" variant="dark" style={{marginBottom: '20px'}}>
          <Navbar.Brand href="#/">Contact Manager</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/contact-list">Contacts</Nav.Link>
            <Nav.Link href="#/account-list">Accounts</Nav.Link>
          </Nav>
        </Navbar>
        <Container>
          <Route path="/" exact component={Home} />
          <Route path="/contact-list" component={ContactList} />
          <Route path="/contact-detail/:id" component={ContactDetail} />
        </Container>
      </HashRouter>
    );
  }
}

export default NavBar;
