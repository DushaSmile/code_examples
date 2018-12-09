// React
import React from 'react';

// Redux
import { connect } from 'react-redux';

// Redux-Form
import { Field, reduxForm } from 'redux-form';

// Components
import { Container, Form, Button, Header, List } from 'semantic-ui-react';
import FieldInput from './FieldInput';
import { Link } from "react-router-dom";

// Actions
import { getWeather, deleteWeather } from '../../../actions/weatherActions';

const EditCitiesForm = props => {
    return (
        <Container>
            <Header as="h1" textAlign="center">
                Cities list
            </Header>
            <p>Click on city name to delete</p>
            <List>
                {props.cities.map(city => (
                    <List.Item id={city.id} key={city.id} onClick={props.deleteWeather}>{city.name}</List.Item>
                ))}
            </List>
            <Form onSubmit={props.handleSubmit}>
                <Field
                    name="city_name"
                    component={FieldInput}
                    placeholder="City Name"
                    required={true}
                    type="text" />
                <div className="ui left floated buttons">
                    <Link className="ui button" role="button" to="/">Back</Link>
                </div>
                <div className="ui right floated buttons">
                    <Button type="submit">Add</Button>
                </div>
            </Form>
        </Container>
    )
};

const decoratedForm = reduxForm({
    form: 'EditCitiesform'
})(EditCitiesForm);

export default connect(
    state => ({
        cities: state.weather.cities
    }),
    dispatch => {
        return {
            onSubmit: (data) => {
                dispatch(
                    getWeather(data, 'name')
                )
            },
            deleteWeather: e => {
                dispatch(
                    deleteWeather(e.target.id)
                )
            }
        }
    }
)(decoratedForm);