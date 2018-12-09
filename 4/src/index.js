// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store/index';

// React-Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import EditCitiesForm from './components/WeatherContainer/EditCitiesForm/EditCitiesForm';

// Container
import WeatherContainer from './containers/WeatherContainer';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={WeatherContainer} />
                <Route path="/edit_cities" component={EditCitiesForm} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);