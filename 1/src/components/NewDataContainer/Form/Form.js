import { Button, Col, ControlLabel, FormControl, FormGroup, Glyphicon, InputGroup, Form } from "react-bootstrap";
import { Field, Fields, reduxForm } from 'redux-form';
import React from "react";
import validate from './ValidationForm';
import PriceFieldInput from './Input/PriceFieldInput';
import PassengersFieldInput from './Input/PassengersFieldInput';
import DateRangeFieldInput from './Input/DateRangeFieldInput';

const NewRequestForm = props => {
    const { handleSubmit } = props;
    return(
        <Form horizontal onSubmit={handleSubmit}>
            <Field
                name="price_input"
                type="number"
                placeholder="Enter Price"
                component={PriceFieldInput}
            />
            <Field
                name="passengers_input"
                type="number"
                placeholder="Enter Passengers count"
                component={PassengersFieldInput}
            />
            <Fields
                names={[
                    'daterange_input',
                    'daterange_start',
                    'daterange_end'
                ]}
                component={DateRangeFieldInput}
            />
            <Button bsStyle="success" className="pull-right" bsSize="large" type="submit">Submit</Button>
        </Form>
    )
};

export default reduxForm({
    form: 'request',
    validate
})(NewRequestForm);