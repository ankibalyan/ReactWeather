import React from 'react';

const About = () => {
  return (
    <div>
      <h3 className="text-center page-title">About</h3>
      <p>Hi! This is a weather app built with reactJs</p>
      <p>Here are the some tools that I have used in this app</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React JS</a> --a Javascript framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open weather map</a> --api to get weather detail.
        </li>
      </ul>
    </div>
  );
};

export { About };
