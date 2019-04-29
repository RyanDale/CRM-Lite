import React, { Component } from 'react';
import {
    Button,
    Modal,
    Form
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { createContact } from '../actions/contactActions';

class ContactCreate extends Component {
    state = {
        modal: false,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        validated: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = event => {
        event.preventDefault();

        const form = event.currentTarget;
        if (!form.checkValidity()) {
          event.stopPropagation();
          this.setState({ validated: true });
        } else {
            const newContact = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                phone: this.state.phone,
            };
            this.props.createContact(newContact);
            this.toggle();
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
            });
            this.setState({ validated: false });
        }
    };

    render() {
        const { validated } = this.state;
        return (
            <div>
                <Button style={{ marginBottom: '2rem' }} onClick={this.toggle}>
                        Create Contact
                </Button>
                <Modal show={this.state.modal} onHide={this.toggle}>
                    <Modal.Header>Create Contact</Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSubmit} noValidate validated={validated}>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    placeholder="First Name"
                                    onChange={this.onChange}
                                    required
                                />
                                <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    placeholder="Last Name"
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Phone"
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Button type="submit" block>
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    contact: state.contact
});

export default connect(
    mapStateToProps,
    { createContact }
)(ContactCreate);
