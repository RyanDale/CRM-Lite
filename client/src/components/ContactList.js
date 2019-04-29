import React, { Component } from 'react';
import { Card, Table, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import { getContacts } from '../actions/contactActions';
import ContactCreate from './ContactCreate';

class ContactList extends Component {
    static propTypes = {
        getContacts: PropTypes.func.isRequired,
        contact: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        const { contacts, loading } = this.props.contact;
        return (
            <Card body>
                <Card.Title>Contact List</Card.Title>
                <ContactCreate></ContactCreate>
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
                        {loading
                            ? <tr>
                                <td colwidth="4">Loading...</td>
                            </tr>
                            :
                            contacts.map((contact) => (
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

const mapStateToProps = state => ({
    contact: state.contact
});

export default connect(mapStateToProps, { getContacts })(ContactList);