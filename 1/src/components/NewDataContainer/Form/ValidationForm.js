const validate = values => {
    const errors = {};
    // if price input not entered
    if (!values.price_input) {
        errors.price_input = 'Required';
    }
    // if passengers count not entered
    if (!values.passengers_input) {
        errors.passengers_input = 'Required';
    }
    return errors;
};

export default validate;