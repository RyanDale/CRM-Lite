import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>CRM Lite</h1>
        <p>
          Welcome to the Contact Manager App. From here, you can create, view, delete, and add notes to your
          contacts and accounts.
        </p>
        <p>
          <Button variant="primary" href="https://github.com/RyanDale/CRM-Lite" target="_blank">
            View Source Code
          </Button>
        </p>
      </Jumbotron>
    );
  }
}

export default Home;
