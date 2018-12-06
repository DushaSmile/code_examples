// React
import React from 'react';

// Redux-Form
import { Field, reduxForm } from 'redux-form';

// Components
import FieldInput from "../FieldInput";
import { Button, Form } from 'react-bootstrap';

const LoginForm = props => {
    const { pristine, error } = props;
    return (
        <Form horizontal={true} onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field
                        name="email"
                        component={FieldInput}
                        placeholder="Email"
                        required={true}
                        type="email" />
                </div>
            </div>
            <div>
                <div>
                    <Field
                        name="password"
                        component={FieldInput}
                        placeholder="Password"
                        requred={true}
                        type="password" />
                </div>
            </div>
            {error && <strong>{error}</strong>}
            <div>
                <Button  bsStyle="success" type="submit" disabled={pristine}>
                    Login
                </Button>
            </div>
        </Form>
    );
};

export default reduxForm({
    form: 'LoginForm'
})(LoginForm);