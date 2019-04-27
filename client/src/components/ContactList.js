import React, { Component } from 'react';
import { Card, Table } from 'react-bootstrap';

class ContactList extends Component {
    render() {
        return (
            <Card body>
                <Card.Title>Contact List</Card.Title>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Last Contacted</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
        );
    }
}

export default ContactList;
