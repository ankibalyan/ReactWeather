import React from 'react';

const WeatherMessage = ({ location, temp }) => {
  return (
    <div>
      <p>It is {temp} in {location}.</p>
    </div>
  );
}

export { WeatherMessage };
