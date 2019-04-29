import React, { Component } from 'react';
import { Card, Table, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import NoteTimeline from './NoteTimeline';
import { getAccount } from '../actions/accountActions';

class AccountList extends Component {
    static propTypes = {
        getAccount: PropTypes.func.isRequired,
        account: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getAccount(this.props.match.params.id);
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
                                    <td colwidth="4">Loading...</td>
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
                <Card body>
                    <Card.Title>Notes</Card.Title>
                    <NoteTimeline notes={account.notes}></NoteTimeline>
                </Card>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    account: state.account
});

export default connect(mapStateToProps, { getAccount })(AccountList);