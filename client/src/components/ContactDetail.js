import React, { Component } from 'react';
import { Card, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getContact } from '../actions/contactActions';

class ContactList extends Component {
    static propTypes = {
        getContact: PropTypes.func.isRequired,
        contact: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getContact(this.props.match.params.id);
    }

    render() {
        const { contact, loading } = this.props.contact;
        return (
            <Card body>
                <Card.Title>Contact Detail</Card.Title>
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
                        {loading
                            ? <tr>
                                <td colwidth="4">Loading...</td>
                            </tr>
                            : <tr>
                                <td>{`${contact.firstName} ${contact.lastName}`}</td>
                                <td>{loading} {contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.lastContacted}</td>
                            </tr>
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

export default connect(mapStateToProps, { getContact })(ContactList);