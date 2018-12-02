import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { register } from '../actions/userReducer/authActions';

// API URL
import { registerUserApi } from '../index';

const RegisterForm = props => {
    const { pristine, isLoggedIn } = props;
    // after register redirect to home page
    if (isLoggedIn) {
        return <Redirect to="/"/>
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <h3>Register</h3>
            <div>
                <label>Username</label>
                <div>
                    <Field
                        name="username"
                        component="input"
                        required={true}
                        type="text" />
                </div>
            </div>
            <div>
                <label>Email</label>
                <div>
                    <Field
                        name="email"
                        component="input"
                        required={true}
                        type="email" />
                </div>
            </div>
            <div>
                <label>Password</label>
                <div>
                    <Field
                        name="password"
                        component="input"
                        required={true}
                        type="password" />
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine}>
                    Register
                </button>
                <Link to="/login">
                    Cancel
                </Link>
            </div>
        </form>
    )
};

const connectedReduxForm = reduxForm({
    form: 'RegisterForm'
})(RegisterForm);

export default connect(
    state => ({
        isLoggedIn: state.user.isLoggedIn
    }),
    dispatch => {
        return {
            onSubmit: values => {
                dispatch(
                    register(registerUserApi, values)
                );
            }
        }
    }
)(connectedReduxForm);