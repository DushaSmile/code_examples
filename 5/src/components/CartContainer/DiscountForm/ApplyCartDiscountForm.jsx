import React from 'react';

import { connect } from 'react-redux';

import { Button, Col, Form } from 'react-bootstrap';
import InputField from '../../common/InputField'

import { reduxForm, Field } from 'redux-form';

const ApplyCartDiscountForm = props => {
    const { pristine } = props;
    return (
        <Form inline={true} onSubmit={props.handleSubmit}>
            <Col xs={7} sm={7} md={7} lg={7}>
                Применить скидку
                <Field
                    name="discount"
                    component={InputField}
                    required={true}
                    min={1}
                    type="number" />
                рублей
            </Col>
            <Col xs={4} sm={4} md={4} lg={3}>
                <Button bsStyle="success" type="submit" disabled={pristine}>Применить</Button>
            </Col>
        </Form>
    )
};

const connectedReduxForm = reduxForm({
    form: 'DiscountForm',
})(ApplyCartDiscountForm);

export default connect(
    state => ({
        initialValues: {
            discount: state.cart.discount
        }
    })
)(connectedReduxForm);