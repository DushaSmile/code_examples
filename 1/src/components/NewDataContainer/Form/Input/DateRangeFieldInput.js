import React from 'react';
import {
    FormGroup,
    FormControl,
    Col,
    ControlLabel,
    InputGroup,
    Glyphicon
} from 'react-bootstrap';

const DateRangeFieldInput = props => {
    return (
        <React.Fragment>
            <FormGroup controlId="daterange_input">
                <Col componentClass={ControlLabel} sm={2}>
                    From / Until
                </Col>
                <Col sm={4}>
                    <InputGroup>
                        <FormControl readOnly type="text" />
                        <InputGroup.Addon>
                            <Glyphicon glyph="calendar" />
                        </InputGroup.Addon>
                    </InputGroup>
                </Col>
            </FormGroup>
            <input type="hidden" {...props.daterange_start.input} />
            <input type="hidden" {...props.daterange_end.input} />
        </React.Fragment>
    )
};

export default DateRangeFieldInput;