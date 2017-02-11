import React from 'react';

const WeatherMessage = React.createClass({
  render: function () {
    const { location, temp } = this.props;
    return (
      <div>
        <p>It is {temp} in {location}.</p>
      </div>
    );
  }
});

export { WeatherMessage };
