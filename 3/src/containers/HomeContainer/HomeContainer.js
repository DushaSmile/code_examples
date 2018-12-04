// React
import React from 'react';

// Redux
import {connect} from 'react-redux';

// React-Router
import {Redirect, Link} from 'react-router-dom';

// Actions
import {getUserInfo} from '../../actions/userReducer/getUserInfoActions';
import {userLogout} from '../../actions/userReducer/authActions';

// Components
import Greeting from '../../components/Greeting';
import { Button } from 'react-bootstrap';

// CSS
import './HomeContainer.css';

class HomeContainer extends React.Component {

    // get user info only if user logged in
    componentDidMount() {
        if (this.props.user.isLoggedIn) {
            this.props.getUserInfo(this.props.user.token);
        }
    }

    render() {
        // if user is not logged in redirect to login page
        if (!this.props.user.isLoggedIn) {
            return <Redirect to="/auth"/>
        }
        return (
            <div>
                <h3>Home</h3>
                <Greeting user={this.props.user} />
                <Link to="/create_transaction" className="btn btn-info">Create Transaction</Link>
                <Link to="/list_transactions" className="btn btn-info">List Transactions</Link>
                <div>
                    <Button bsStyle="danger" onClick={this.props.userLogout}>Logout</Button>
                </div>
            </div>
        );
    }

}

export default connect(
    state => ({
        user: state.user
    }),
    dispatch => {
        return {
            getUserInfo: token => {
                dispatch(getUserInfo(token));
            },
            userLogout: () => {
                dispatch(userLogout())
            }
        };
    }
)(HomeContainer);
