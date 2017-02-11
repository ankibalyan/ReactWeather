import React from 'react';
import { Nav } from 'Components';

const Main = props => {
  return (
    <div>
      <Nav />
      <h2>main component</h2>
      {props.children}
    </div>
  );
}

export { Main };
