// React
import React from 'react';

// Redux
import {connect} from 'react-redux';

// React-Router
import {Redirect, Link} from 'react-router-dom';

// Actions
import {getUserInfo} from '../../actions/userReducer/getUserInfoActions';
import {userLogout} from '../../actions/userReducer/authActions';

// API URL
import {userInfoApi} from '../../index';

// CSS
import './HomeContainer.css';

class Home extends React.Component {

    // get user info only if user logged in
    componentDidMount() {
        if (this.props.isLoggedIn) {
            this.props.getUserInfo(userInfoApi, this.props.token);
        }
    }

    render() {
        const {isLoggedIn, name, balance, email} = this.props;
        // if user is not logged in redirect to login page
        if (!isLoggedIn) {
            return <Redirect to="/login"/>
        }
        return (
            <div>
                <h4>Hello, {name}</h4>
                <p>Your balance is {balance}</p>
                <p>Your E-Mail is {email}</p>
                <Link to="/create_transaction">Create Transaction</Link>
                <Link to="/list_transactions">List Transactions</Link>
                <button onClick={this.props.userLogout}>Logout</button>
            </div>
        );
    }

}

export default connect(
    state => ({
        isLoggedIn: state.user.isLoggedIn,
        token: state.user.token,
        name: state.user.name,
        balance: state.user.balance,
        email: state.user.email
    }),
    dispatch => {
        return {
            getUserInfo: (url, token) => {
                dispatch(getUserInfo(url, token));
            },
            userLogout: () => {
                dispatch(userLogout())
            }
        };
    }
)(Home);
