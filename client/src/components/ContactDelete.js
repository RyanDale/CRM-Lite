import React, { Component } from 'react';
import {
    Button,
    Modal
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteContact } from '../actions/contactActions';

class ContactDelete extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    deleteRecord = () => {
        this.props.deleteContact(this.props.record._id);
        this.toggle();
    };

    render() {
        const record = this.props.record;
        return (
            <span>
                <Button onClick={this.toggle}>
                    <i className="material-icons md-18">delete</i>
                </Button>
                <Modal show={this.state.modal} onHide={this.toggle}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Contact</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Are you sure you wish to delete {record.firstName} {record.lastName}?
                        This action cannot be undone.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.deleteRecord} variant="primary">Yes</Button>
                        <Button onClick={this.toggle} variant="secondary">No</Button>
                    </Modal.Footer>
                </Modal>
            </span>
        );
    }
}

const mapStateToProps = state => ({
    contact: state.contact
});

export default connect(mapStateToProps, { deleteContact })(ContactDelete);
