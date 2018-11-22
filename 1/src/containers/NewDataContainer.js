// React
import React from 'react';

// Redux
import { connect } from 'react-redux';
import { change } from 'redux-form';

// Bootstrap components
import { Grid, PageHeader } from 'react-bootstrap';

// Form
import NewRequestForm from '../components/NewDataContainer/Form/Form';

// Actions
import { addData } from '../actions/addDataActions';

// React-router
import { Redirect } from 'react-router-dom';


class NewDataContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    // after form submit added data to API and redirect
    handleSubmit(values) {
        this.props.addData(values);
        this.setState({redirect: true});
    }


    dateRangePickerInit() {
        // Set default values for daterangepicker input
        const daterange_input = $('input[id="daterange_input"]');
        daterange_input.val('2018/01/01 - 2018/01/02');
        this.props.change('daterange_start', '2018/01/01');
        this.props.change('daterange_end', '2018/01/02');

        // daterangepicker library settings
        daterange_input.daterangepicker({
            autoApply: true,
            locale: {
                format: 'YYYY/MM/DD'
            }
        }, (start, end) => {
            const startDate = start.format('YYYY/MM/DD');
            const endDate = end.format('YYYY/MM/DD');

            // dispatch an action for update hidden inputs
            this.props.change('daterange_start', startDate);
            this.props.change('daterange_end', endDate);
        });
    }

    componentDidMount() {
        this.dateRangePickerInit();
    }

    render() {
        // redirect after submit
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/"/>
        }
        return (
            <Grid>
                <PageHeader>Create Request</PageHeader>
                <NewRequestForm onSubmit={this.handleSubmit.bind(this)}/>
            </Grid>
        )
    }

}


const mapDispatchToProps = dispatch => {
    return {
        change: (fieldName, value) => {
            dispatch(
                change('request', fieldName, value)
            )
        },
        addData: data => {
            dispatch(
                addData(data)
            )
        }
    }
};

export default connect(null,mapDispatchToProps)(NewDataContainer);