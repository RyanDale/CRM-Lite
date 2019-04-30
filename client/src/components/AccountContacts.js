import React, { Component } from 'react';
import { Card, Table, Nav } from 'react-bootstrap';
import moment from 'moment';
import _ from 'lodash';

class AccountContacts extends Component {
    render() {
        const contacts = _.get(this, 'props.contacts', []);
        return (
            <Card body>
                <Card.Title>Contacts</Card.Title>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map(contact => (
                                <tr key={contact._id}>
                                    <td>
                                        <Nav.Link href={`#/contact-detail/${contact._id}`}>
                                            {`${contact.firstName} ${contact.lastName}`}
                                        </Nav.Link>
                                    </td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phone}</td>
                                    <td>{moment(contact.created).format('LL')}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Card>
        );
    }
}

export default AccountContacts;
