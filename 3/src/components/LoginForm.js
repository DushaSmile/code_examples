import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Actions
import { login } from '../actions/userReducer/authActions';

// API URL
import { loginUserApi } from '../index';

const LoginForm = props => {
    const { pristine, isLoggedIn } = props;
    // redirect to home page after login
    if (isLoggedIn) {
        return <Redirect to="/" />
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <h3>Login</h3>
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
                        requred={true}
                        type="password" />
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine}>
                    Login
                </button>
                <Link to="/register">
                    Register
                </Link>
            </div>
        </form>
    );
};

const connectedReduxForm = reduxForm({
    form: 'LoginForm'
})(LoginForm);

export default connect(
    state => ({
        isLoggedIn: state.user.isLoggedIn
    }),
    dispatch => {
        return {
            onSubmit: values => {
                dispatch(
                    login(loginUserApi, values)
                );
            }
        }
    }
)(connectedReduxForm);