import React from 'react';
import { Nav } from 'Components';

const Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav />
        <h2>main component</h2>
      </div>
    );
  }
});

export { Main };
