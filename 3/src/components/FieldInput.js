import React from "react";
import {
    FormGroup,
    FormControl,
    Col,
} from 'react-bootstrap';

const FieldInput = props => {
    const { input, type, placeholder, required, min, max } = props;
    return(
        <FormGroup>
            <Col sm={4}>
                <FormControl
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    min={min}
                    max={max}
                    {...input}
                />
            </Col>
        </FormGroup>
    )
};

export default FieldInput;