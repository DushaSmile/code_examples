// React
import React from 'react';

// Redux
import { connect } from 'react-redux';

// React-Router
import { Redirect, Link } from 'react-router-dom';

// Components
import Table from '../../components/TransactionsContainer/Table/Table';

// Actions
import { getTransactions } from '../../actions/transactionsReducer/getTransactionsActions';

// API URL
import { userTransactionsApi } from '../../index';




class TransactionsContainer extends React.Component {

    // getTransactions only if user logged in.
    componentDidMount() {
        if (this.props.isLoggedIn) {
            this.props.getTransactions(userTransactionsApi, this.props.token)
        }
    }

    render() {
        const { balance, isLoggedIn, name, email, transactions } = this.props;
        if (!isLoggedIn) {
            return <Redirect to="/login"/>
        }
        return (
            <div>
                 <h4>Your transactions</h4>
                <h4>Hello, {name}</h4>
                <p>Your balance is {balance}</p>
                <p>Your E-Mail is {email}</p>
                <Table transactions={transactions} />
                <Link to="/">Back</Link>
            </div>
        )
    }

}

export default connect(
    state => ({
        token: state.user.token,
        isLoggedIn: state.user.isLoggedIn,
        balance: state.user.balance,
        name: state.user.name,
        email: state.user.email,
        transactions: state.transactions.recent_transactions
    }),
    dispatch => {
        return {
            getTransactions: (url, token) => {
                dispatch(getTransactions(url, token))
            }
        }
    }
)(TransactionsContainer);