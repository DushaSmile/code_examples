import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/index';

import CartContainer from './containers/CartContainer';

ReactDOM.render(
    <Provider store={store}>
        <CartContainer />
    </Provider>,
    document.getElementById('root')
);
