// React & Router
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Containers
import Data from '../containers/DataContainer';
import NewData from '../containers/NewDataContainer';

const App = () => {
    return(
        <Router>
            <div>
                <Route exact path="/" component={Data} />
                <Route path="/add" component={NewData} />
            </div>
        </Router>
    )
};

export default App;