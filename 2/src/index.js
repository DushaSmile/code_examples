// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store/index';

// Components
import Settings from './containers/Settings';

// api url
export const api = 'http://localhost:3000/settings?userId=2';

ReactDOM.render(
    <Provider store={store}>
        <Settings />
    </Provider>,
    document.getElementById('root')
);
