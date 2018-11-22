import React from "react";
import {
    FormGroup,
    FormControl,
    Col,
    ControlLabel
} from 'react-bootstrap';

const PassengersFieldInput = props => {
    const { input, type, placeholder, meta: { active, touched, error } } = props;
    return(
        <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
                Passengers
            </Col>
            <Col sm={4}>
                <FormControl
                    type={type}
                    placeholder={placeholder}
                    {...input}
                />
                {touched && error && <span>{error}</span>}
            </Col>
        </FormGroup>
    )
};

export default PassengersFieldInput;