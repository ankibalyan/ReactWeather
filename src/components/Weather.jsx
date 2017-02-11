import React from 'react';
import { WeatherForm, WeatherMessage } from 'Components';

const Weather = React.createClass({
  getDefaultState: function () {
    return {
      city: '',
      message: ''
    };
  },
  getInitialState: function () {
    return {
      city: '',
      message: ''
    };
  },
  getWeather: function (city) {
    console.log(city);
    this.setState({
      city: city,
      message: `${city} temperature is 24`
    })
  },
  render: function () {
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSubmit={this.getWeather} />
        <WeatherMessage message={this.state.message} />
      </div>
    );
  }
});

export { Weather };
