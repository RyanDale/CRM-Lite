import React, { Component } from 'react';
import {
    Button,
    Modal,
    Form
} from 'react-bootstrap';
import PropTypes from 'prop-types';

class NoteCreate extends Component {
    static propTypes = {
        noteCreated: PropTypes.func.isRequired
    };

    state = {
        modal: false,
        title: '',
        message: '',
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
            const newNote = {
                title: this.state.title,
                message: this.state.message
            };
            this.props.noteCreated(newNote);
            this.toggle();
            this.setState({
                title: '',
                message: ''
            });
            this.setState({ validated: false });
        }
    };

    render() {
        const { validated } = this.state;
        return (
            <div>
                <Button style={{ marginBottom: '2rem' }} onClick={this.toggle}>
                        Create Note
                </Button>
                <Modal show={this.state.modal} onHide={this.toggle}>
                    <Modal.Header>Create Note</Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSubmit} noValidate validated={validated}>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Title"
                                    onChange={this.onChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    type="textarea"
                                    name="message"
                                    id="message"
                                    placeholder="Message"
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

export default NoteCreate;
