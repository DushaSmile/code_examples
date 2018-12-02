// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store/index';

// React-router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import NewTransactionForm from './components/HomeContainer/NewTransactionForm';
import TransactionsContainer from './containers/TransactionsContainer/TransactionsContainer';

// Containers
import Home from './containers/HomeContainer/HomeContainer';

// API urls
export const registerUserApi            = 'http://193.124.114.46:3001/users';
export const loginUserApi               = 'http://193.124.114.46:3001/sessions/create';
export const userTransactionsApi        = 'http://193.124.114.46:3001/api/protected/transactions';
export const userInfoApi                = 'http://193.124.114.46:3001/api/protected/user-info';
export const userListApi                = 'http://193.124.114.46:3001/api/protected/users/list';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/"                     component={Home}/>
                <Route       path="/login"                component={LoginForm} />
                <Route       path="/register"             component={RegisterForm} />
                <Route       path="/create_transaction"   component={NewTransactionForm} />
                <Route       path="/list_transactions"    component={TransactionsContainer} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
