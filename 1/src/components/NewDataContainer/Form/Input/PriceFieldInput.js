import React from "react";
import {
    FormGroup,
    FormControl,
    Col,
    ControlLabel,
    InputGroup
} from 'react-bootstrap';


const PriceFieldInput = props => {
    const { input, type, placeholder, meta: { active, touched, error } } = props;
    return(
        <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
                Price
            </Col>
            <Col sm={4}>
                <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl
                        type={type}
                        placeholder={placeholder}
                        {...input}
                    />
                    <InputGroup.Addon>.00</InputGroup.Addon>
                </InputGroup>
                {touched && error && <span>{error}</span>}
            </Col>
        </FormGroup>
    )
};

export default PriceFieldInput;