// React
import React from 'react';

// Redux
import { connect } from 'react-redux';

// Components
import { Header, Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import WeatherCard from '../components/WeatherContainer/WeatherCard';

// Actions
import { getWeather } from '../actions/weatherActions';


// CSS
import './WeatherContainer.css';


class WeatherContainer extends React.Component {

    componentDidMount() {
        const { geolocation } = window.navigator;
        // get default weather data by geoposition
        if (this.props.weather.cities.length === 0) {
            geolocation.getCurrentPosition(
                position => {
                    const data = {
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    };
                    this.props.getWeather(data, 'coords');
                },
                error => {
                    alert(error);
                }
            )
        }
    }

    render() {
        if (this.props.weather.isFetching) {
            return (
                <Container textAlign="center">
                    <Loader type="RevolvingDot" color="red" width="50" height="50"/>
                </Container>
            )
        }
        return (
            <Container>
                <Header as="h1" textAlign="center">
                    Weather
                </Header>
                <Grid>
                    {this.props.weather.cities.map(city => (
                        <Grid.Column className="weather_card" key={city.id}>
                            <WeatherCard weather={city} />
                        </Grid.Column>
                    ))}
                </Grid>
                <div className="ui right floated buttons">
                    <Link className="ui button" role="button" to="/edit_cities">Add or delete cities</Link>
                </div>
            </Container>
        );
    }
}

export default connect(
    state => ({
        weather: state.weather
    }),
    dispatch => {
        return {
            getWeather: (data, kind) => {
                dispatch(
                    getWeather(data, kind)
                )
            }
        }
    }
)(WeatherContainer);
