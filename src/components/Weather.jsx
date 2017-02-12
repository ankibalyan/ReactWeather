import React from 'react';
import { WeatherForm, WeatherMessage } from 'Components';
import { getTemp } from 'Apis';

const Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
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
        isLoading: false
      });

      alert(err);
      console.log(err);
    });
  },
  render: function () {
    const { isLoading, location, temp } = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">fetching...</h3>
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }
    return (
      <div>
        <h3 className="text-center">Get Weather</h3>
        <WeatherForm onSearch={this.getWeather} />
        {renderMessage()}
      </div>
    );
  }
});

export { Weather };
