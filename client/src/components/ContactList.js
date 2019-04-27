import React, { Component } from 'react';
import { Card, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getContacts } from '../actions/contactActions';

class ContactList extends Component {
    static propTypes = {
        getContacts: PropTypes.func.isRequired,
        contactList: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        const { contacts } = this.props.contactList;
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
                        {contacts.map((contact) => (
                            <tr key={contact._id}>
                                <td>{`${contact.firstName} ${contact.lastName}`}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.lastContacted}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        );
    }
}

const mapStateToProps = state => ({
    contactList: state.contactList
});

export default connect(mapStateToProps, { getContacts })(ContactList);