import React from 'react';

const WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    const location = this.refs.location.value;
    if (location.length > 0) {
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="search" ref="location" placeholder="Search weather by city" />
        <button className="hollow button expanded">Get Weather</button>
      </form>
    );
  }
});

export { WeatherForm };
