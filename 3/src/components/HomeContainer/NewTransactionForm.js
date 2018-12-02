import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { change } from 'redux-form';
import { getFilteredTransactions } from '../../actions/transactionsReducer/getFilteredTransactionsActions';
import { cleanFilteredTransactions } from '../../actions/transactionsReducer/cleanFilteredTransactionsActions';
import { createTransaction } from '../../actions/transactionsReducer/createTransactionActions';

// API URL
import { userListApi } from '../../index';
import { userTransactionsApi } from '../../index';

const NewTransactionForm = props => {
    const { suggestions, token, balance, submitSucceeded, isLoggedIn, pristine } = props;
    const onNameChange = (e, newValue) => {
        if (newValue !== "") {
            props.getFilteredTransactions(userListApi, token, newValue);
        } else {
            props.cleanFilteredTransactions();
        }
    };
    const onSuggestionClick = event => {
        props.change('name', event.target.innerHTML);
        props.cleanFilteredTransactions();
    };
    if (submitSucceeded) {
        return <Redirect to="/"/>
    }
    if (!isLoggedIn) {
        return <Redirect to="/login"/>
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <h3>Create new transaction</h3>
            <p>Your balance is {balance}</p>
            <div>
                <label>Recipient name</label>
                <div>
                    <Field
                        name="name"
                        component="input"
                        type="text"
                        required={true}
                        onChange={onNameChange} />
                </div>
                <div>
                    {suggestions.map(suggestion => (
                        <li key={suggestion.id} onClick={onSuggestionClick}>
                            {suggestion.name}
                        </li>
                    ))}
                </div>
            </div>
            <div>
                <label>Transaction Amount</label>
                <div>
                    <Field
                        name="amount"
                        component="input"
                        type="number"
                        min={1}
                        required={true}
                        max={balance} />
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine}>
                    Commit
                </button>
                <Link to="/">Cancel</Link>
            </div>
        </form>
    )
};

const connectedReduxForm = reduxForm({
    form: 'NewTransactionForm'
})(NewTransactionForm);

export default connect(
    state => ({
        isLoggedIn: state.user.isLoggedIn,
        token: state.user.token,
        suggestions: state.transactions.suggestions,
        balance: state.user.balance
    }),
    dispatch => {
        return {
            change: (fieldName, newValue) => {
                dispatch(
                    change('NewTransactionForm', fieldName, newValue)
                )
            },
            getFilteredTransactions: (url, token, value) => {
                dispatch(
                    getFilteredTransactions(url, token, value)
                )
            },
            cleanFilteredTransactions: () => {
                dispatch(
                    cleanFilteredTransactions()
                )
            },
            createTransaction: (url, token, values) => {
                dispatch(
                    createTransaction(url, token, values)
                )
            },
            onSubmit: (values, dispatch, props) => {
                props.createTransaction(userTransactionsApi, props.token, values);
            }
        }
    }
)(connectedReduxForm);