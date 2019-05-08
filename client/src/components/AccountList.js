import React, { Component } from 'react';
import { Card, Table, Nav, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import AccountCreate from './AccountCreate';
import { getAccounts } from '../actions/accountActions';

class AccountList extends Component {
    static propTypes = {
        getAccounts: PropTypes.func.isRequired,
        account: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.getAccounts();
    }

    render() {
        const { accounts, loading } = this.props.account;
        return (
            <Card body>
                <Card.Title>Account List</Card.Title>
                <AccountCreate></AccountCreate>
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
                                <td className="text-center" colSpan="3">
                                    <Spinner animation="border" />
                                </td>
                            </tr>
                            :
                            accounts.map(account => (
                                <tr key={account._id}>
                                    <td>
                                        <Nav.Link href={`#/account-detail/${account._id}`}>
                                            {account.name}
                                        </Nav.Link>
                                    </td>
                                    <td>{account.industry}</td>
                                    <td>{moment(account.created).format('LL')}</td>
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
    account: state.account
});

export default connect(mapStateToProps, { getAccounts })(AccountList);