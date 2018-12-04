// React
import React from 'react';

// Redux-Form
import { Field, reduxForm } from 'redux-form';

// React-Router
import { Link, Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Actions
import { change } from 'redux-form';
import { getUserListSuggestions, cleanUserListSuggestions } from '../../actions/transactionsReducer/userListSuggestionsActions';
import { createTransaction } from '../../actions/transactionsReducer/transactionsActions';

// Components
import Greeting from '../../components/Greeting';
import { Button, Form } from 'react-bootstrap';
import FieldInput from '../FieldInput';

const NewTransactionForm = props => {
    const { submitSucceeded, pristine } = props;
    const onNameChange = (e, name) => {
        if (name !== "") {
            props.getUserListSuggestions(props.user.token, name);
        } else {
            props.cleanUserListSuggestions();
        }
    };
    const onSuggestionClick = event => {
        props.change('name', event.target.innerHTML);
        props.cleanUserListSuggestions();
    };
    if (submitSucceeded) {
        return <Redirect to="/" />
    }
    if (!props.user.isLoggedIn) {
        return <Redirect to="/auth"/>
    }
    return (
        <Form horizontal={true} onSubmit={props.handleSubmit}>
            <h3>Create new transaction</h3>
            <Greeting user={props.user}/>
            <div>
                <div>
                    <Field
                        name="name"
                        component={FieldInput}
                        placeholder="Recipient name"
                        required={true}
                        type="text"
                        onChange={onNameChange} />
                </div>
                <div>
                    {props.suggestions.map(suggestion => (
                        <li key={suggestion.id} onClick={onSuggestionClick}>
                            {suggestion.name}
                        </li>
                    ))}
                </div>
            </div>
            <div>
                <div>
                    <Field
                        name="amount"
                        component={FieldInput}
                        placeholder="Transaction Amount"
                        required={true}
                        type="number"
                        min={1}
                        max={props.user.balance} />
                </div>
            </div>
            <div>
                <Button bsStyle="success" type="submit" disabled={pristine}>
                    Commit
                </Button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </div>
        </Form>
    )
};

const connectedReduxForm = reduxForm({
    form: 'NewTransactionForm'
})(NewTransactionForm);

export default connect(
    state => ({
        user: state.user,
        suggestions: state.transactions.suggestions,
    }),
    dispatch => {
        return {
            change: (fieldName, newValue) => {
                dispatch(
                    change('NewTransactionForm', fieldName, newValue)
                )
            },
            getUserListSuggestions: (token, suggestion) => {
                dispatch(
                    getUserListSuggestions(token, suggestion)
                )
            },
            cleanUserListSuggestions: () => {
                dispatch(
                    cleanUserListSuggestions()
                )
            },
            createTransaction: (token, transaction) => {
                dispatch(
                    createTransaction(token, transaction)
                )
            },
            onSubmit: (transaction, dispatch, props) => {
                props.createTransaction(props.user.token, transaction);
            }
        }
    }
)(connectedReduxForm);