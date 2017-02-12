import React from 'react';

const WeatherMessage = ({ location, temp }) => {
  return (
    <div>
      <p className="text-center">It is {temp} in {location}.</p>
    </div>
  );
}

export { WeatherMessage };
