import React from 'react';

const WeatherForm = React.createClass({
  submitWeatherForm: function (e) {
    e.preventDefault();

    const cityName = this.refs.cityName.value;
    if (cityName.length > 0) {
      this.props.onSubmit(cityName);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.submitWeatherForm}>
        <input type="text" ref="cityName" placeholder="Enter city name" />
        <button>Get Weather</button>
      </form>
    );
  }
});

export { WeatherForm };
