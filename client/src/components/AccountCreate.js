import React, { Component } from 'react';
import {
    Button,
    Modal,
    Form
} from 'react-bootstrap';
import { connect } from 'react-redux';
import mixpanel from 'mixpanel-browser';
import { createAccount } from '../actions/accountActions';

class AccountCreate extends Component {
    state = {
        modal: false,
        name: '',
        industry: '',
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
            const newAccount = {
                name: this.state.name,
                industry: this.state.industry
            };
            this.props.createAccount(newAccount);
            this.toggle();
            this.setState({
                name: '',
                industry: ''
            });
            this.setState({ validated: false });
            mixpanel.track('Account Created', newAccount);
        }
    };

    render() {
        const { validated } = this.state;
        return (
            <div>
                <Button style={{ marginBottom: '2rem' }} onClick={this.toggle}>
                        Create Account
                </Button>
                <Modal show={this.state.modal} onHide={this.toggle}>
                    <Modal.Header>Create Account</Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSubmit} noValidate validated={validated}>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    onChange={this.onChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="industry"
                                    id="industry"
                                    placeholder="Industry"
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
    account: state.account
});

export default connect(
    mapStateToProps,
    { createAccount }
)(AccountCreate);
