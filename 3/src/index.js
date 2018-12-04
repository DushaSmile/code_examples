// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store/index';

// React-router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import NewTransactionForm from './components/HomeContainer/NewTransactionForm';

// Containers
import HomeContainer from './containers/HomeContainer/HomeContainer';
import TransactionsContainer from './containers/TransactionsContainer/TransactionsContainer';
import AuthContainer from './containers/AuthContainer/AuthContainer';

// CSS
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/"                     component={HomeContainer}/>
                <Route       path="/list_transactions"    component={TransactionsContainer} />
                <Route       path="/create_transaction"   component={NewTransactionForm} />
                <Route       path="/auth"                 component={AuthContainer} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
