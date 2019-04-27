import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Card body>
        <Card.Title>Home</Card.Title>
          <Card.Subtitle>
            Welcome to the Contact Manager App. From here, you can create, view, delete, and add notes to your
            contacts and accounts.
          </Card.Subtitle>
      </Card>
    );
  }
}

export default Home;
