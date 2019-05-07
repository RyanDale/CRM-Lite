import React, { Component } from 'react';
import { Card, Table, Container, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NoteTimeline from './NoteTimeline';
import { getContact, updateContact } from '../actions/contactActions';
import NoteCreate from './NoteCreate';

class ContactList extends Component {
    static propTypes = {
        getContact: PropTypes.func.isRequired,
        contact: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getContact(this.props.match.params.id);
    }

    createNote(note) {
        const { contact } = this.props.contact;
        this.props.updateContact({
            notes: [...contact.notes, note],
            _id: contact._id
        });
    }

    render() {
        const { contact, loading } = this.props.contact;
        return (
            <Container>
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
                                    <td class="text-center" colspan="4">
                                        <Spinner animation="border" />
                                    </td>
                                </tr>
                                : <tr>
                                    <td>{`${contact.firstName} ${contact.lastName}`}</td>
                                    <td>
                                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                                    </td>
                                    <td>
                                        <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                                    </td>
                                    <td>{contact.lastContacted}</td>
                                </tr>
                            }
                        </tbody>
                    </Table>
                </Card>
                <br />
                <Card body>
                    <Card.Title>Notes</Card.Title>
                    <NoteCreate noteCreated={this.createNote.bind(this)}></NoteCreate>
                    {!contact._id
                        ? null
                        : <NoteTimeline notes={contact.notes} id={contact._id} action={updateContact}></NoteTimeline>
                    }
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    contact: state.contact
});

export default connect(mapStateToProps, { getContact, updateContact })(ContactList);