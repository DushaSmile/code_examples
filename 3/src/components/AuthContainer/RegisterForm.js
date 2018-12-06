// React
import React from 'react';

// Redux-Form
import { Field, reduxForm } from 'redux-form';

// Components
import FieldInput from "../FieldInput";
import { Button, Form } from 'react-bootstrap';

const RegisterForm = props => {
    const { pristine } = props;
    return (
        <Form horizontal={true} onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field
                        name="username"
                        component={FieldInput}
                        placeholder="Username"
                        required={true}
                        type="text" />
                </div>
            </div>
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
                        required={true}
                        type="password" />
                </div>
            </div>
            <div>
                <Button bsStyle="success" type="submit" disabled={pristine}>
                    Register
                </Button>
            </div>
        </Form>
    )
};

export default reduxForm({
    form: 'RegisterForm'
})(RegisterForm);