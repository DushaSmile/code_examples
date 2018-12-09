// React
import React from 'react';

// Components
import { Form, Input } from 'semantic-ui-react';

const FieldInput = props => {
    const { input, placeholder, required, type } = props;
    return (
        <Form.Field>
            <Input
                type={type}
                placeholder={placeholder}
                required={required}
                {...input}
            />
        </Form.Field>
    )
};

export default FieldInput;