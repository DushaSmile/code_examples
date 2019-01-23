import React from 'react';

import { FormGroup, FormControl } from 'react-bootstrap';

const InputField = props => {
    const { input, type, placeholder, required, min } = props;
    return (
        <FormGroup>
            <FormControl
                type={type}
                placeholder={placeholder}
                required={required}
                min={min}
                {...input}
            />
        </FormGroup>
    )
};

export default InputField;