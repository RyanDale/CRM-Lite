import React, { Component } from 'react';
import { Card, Table, Container, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import AccountContacts from './AccountContacts';
import NoteTimeline from './NoteTimeline';
import NoteCreate from './NoteCreate';
import { getAccount, updateAccount } from '../actions/accountActions';

class AccountList extends Component {
    static propTypes = {
        getAccount: PropTypes.func.isRequired,
        account: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getAccount(this.props.match.params.id);
    }

    createNote(note) {
        const {account} = this.props.account;
        this.props.updateAccount({
          notes: [...account.notes, note],
          _id: account._id
        });
    }

    render() {
        const { account, loading } = this.props.account;
        return (
            <Container>
                <Card body>
                    <Card.Title>Account Detail</Card.Title>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Industry</th>
                                <th>Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading
                                ? <tr>
                                    <td class="text-center" colspan="3">
                                        <Spinner animation="border" />
                                    </td>
                                </tr>
                                : <tr>
                                    <td>{account.name}</td>
                                    <td>{account.industry}</td>
                                    <td>{moment(account.created).format('LL')}</td>
                                </tr>
                            }
                        </tbody>
                    </Table>
                </Card>
                <br />
                <AccountContacts contacts={account.contacts}></AccountContacts>
                <br />
                <Card body>
                    <Card.Title>Notes</Card.Title>
                    <NoteCreate noteCreated={this.createNote.bind(this)}></NoteCreate>
                    <NoteTimeline notes={account.notes}></NoteTimeline>
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    account: state.account
});

export default connect(mapStateToProps, { getAccount, updateAccount })(AccountList);