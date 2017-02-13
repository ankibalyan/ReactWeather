import React from 'react';
import { WeatherForm, WeatherMessage, ErrorModal } from 'Components';
import { getTemp } from 'Apis';

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      errorMessage: undefined
    };
  },
  getWeather: function (location) {
    this.setState({
      isLoading: true
    });

    getTemp(location).then(res => {
      this.setState({
        location: location,
        temp: res,
        isLoading: false
      })
    }, err => {
      this.setState({
        isLoading: false,
        errorMessage: err.message
      });
    });
  },
  render: function () {
    const { isLoading, location, temp, errorMessage } = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">fetching...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }
    function renderError() {
      if (typeof errorMessage === 'string') {
        return <ErrorModal message={errorMessage} />;
      }
      return null;
    }
    return (
      <div>
        <h3 className="text-center">Get Weather</h3>
        <WeatherForm onSearch={this.getWeather} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

export { Weather };
