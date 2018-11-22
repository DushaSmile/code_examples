// React & Redux & Router-Link
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Table from '../components/DataContainer/Table/Table';

// Actions
import { getData } from "../actions/getDataActions";

class DataContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const api = 'http://localhost:3000/requests';
        this.props.getData(api);
    }

    render() {
        return(
            <div className="container">
                <h1>Requests</h1>
                <Link to="/add" className="btn btn-success btn-lg">Add new</Link>
                <Table requests={this.props.data} />
            </div>
        )
    }

}

// map Redux state to a prop
const mapStateToProps = state => ({data: state.data});

// map getData action creator to a getRequest prop
const mapDispatchToProps = dispatch => {
    return {
        getData: url => {
            dispatch(getData(url))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);