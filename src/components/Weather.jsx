import React from 'react';
import { WeatherForm, WeatherMessage } from 'Components';

const Weather = React.createClass({
  getDefaultState: function () {
    return {
      location: '',
      temp: ''
    };
  },
  getInitialState: function () {
    return {
      location: 'Miami',
      temp: 88
    };
  },
  getWeather: function (location) {
    this.setState({
      location: location,
      temp: 23
    })
  },
  render: function () {
    const { location, temp } = this.state;
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.getWeather} />
        <WeatherMessage location={location} temp={temp} />
      </div>
    );
  }
});

export { Weather };
