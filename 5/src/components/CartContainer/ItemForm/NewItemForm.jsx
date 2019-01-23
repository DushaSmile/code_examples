import React from 'react';

import { Button, Col, Form } from 'react-bootstrap';
import InputField from '../../common/InputField';

import { reduxForm, Field } from 'redux-form';

const NewItemForm = props => {
    const { pristine } = props;
    return (
        <Form inline={true} onSubmit={props.handleSubmit}>
            <Col xs={12} sm={6} md={5} lg={4}>
                <Field
                    name="name"
                    component={InputField}
                    placeholder="Продукт"
                    required={true}
                    type="text" />
                <Field
                    name="price"
                    component={InputField}
                    placeholder="Цена"
                    required={true}
                    min={1}
                    type="number" />
            </Col>
            <Col xs={12} sm={4} md={4} lg={5}>
                <Button bsStyle="success" type="submit" disabled={pristine}>Добавить</Button>
            </Col>
        </Form>
    )
};

export default reduxForm({
    form: 'ItemForm'
})(NewItemForm);