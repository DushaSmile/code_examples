// React
import React from 'react';

// Redux
import { connect } from 'react-redux';

// React-Router
import { Redirect } from 'react-router-dom';

// Actions
import { login, register }  from '../../actions/userReducer/authActions';

// Components
import LoginForm from '../../components/AuthContainer/LoginForm';
import RegisterForm from '../../components/AuthContainer/RegisterForm';

// Bootstrap
import { Tabs, Tab, Grid, Row, Col } from 'react-bootstrap';

// CSS
import './AuthContainer.css';

class AuthContainer extends React.Component {

    handleLogin(loginData) {
        this.props.login(loginData);
    }

    handleRegister(registerData) {
        this.props.register(registerData);
    }

    render() {
        if (this.props.isLoggedIn) {
            return <Redirect to="/" />
        }
        return (
            <Grid>
                <Row>
                    <Col xs={6} sm={6} md={6} xsOffset={3} smOffset={6} mdOffset={5}>
                        <Tabs id="auth" bsStyle="tabs">
                            <Tab eventKey={1} title="Login">
                                <LoginForm onSubmit={loginData => this.handleLogin(loginData)} />
                            </Tab>
                            <Tab eventKey={2} title="Register">
                                <RegisterForm onSubmit={registerData => this.handleRegister(registerData)} />
                            </Tab>
                        </Tabs>
                        {this.props.error && (
                            <p className="error">{this.props.error}</p>
                        )}
                    </Col>
                </Row>
            </Grid>
        )
    }

}

export default connect(
    state => ({
        isLoggedIn: state.user.isLoggedIn,
        error: state.user.error_message
    }),
    dispatch => {
        return {
            login: loginData => {
                dispatch(
                    login(loginData)
                )
            },
            register: registerData => {
                dispatch(
                    register(registerData)
                )
            }
        }
    }
)(AuthContainer);