import React from 'react';

const WeatherMessage = React.createClass({
  render: function () {
    const message = this.props.message;
    return (
      <div>
        <p>{message}</p>
      </div>
    );
  }
});

export { WeatherMessage };
