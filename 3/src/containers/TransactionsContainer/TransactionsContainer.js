// React
import React from 'react';

// Redux
import { connect } from 'react-redux';

// React-Router
import { Redirect, Link } from 'react-router-dom';

// Components
import Table from '../../components/TransactionsContainer/Table';

// Actions
import { getTransactions } from '../../actions/transactionsReducer/transactionsActions';

// Components
import Greeting from '../../components/Greeting';

class TransactionsContainer extends React.Component {

    // getTransactions only if user logged in.
    componentDidMount() {
        if (this.props.user.isLoggedIn) {
            this.props.getTransactions(this.props.user.token)
        }
    }

    render() {
        if (!this.props.user.isLoggedIn) {
            return <Redirect to="/auth" />
        }
        return (
            <div>
                <h3>List Transactions</h3>
                <Greeting user={this.props.user}/>
                <Table transactions={this.props.transactions} />
                <Link to="/" className="btn btn-primary">Back</Link>
            </div>
        )
    }

}

export default connect(
    state => ({
        user: state.user,
        transactions: state.transactions.recent_transactions
    }),
    dispatch => {
        return {
            getTransactions: token => {
                dispatch(getTransactions(token))
            }
        }
    }
)(TransactionsContainer);