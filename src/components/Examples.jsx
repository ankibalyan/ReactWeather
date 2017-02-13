import React from 'react';
import { Link } from 'react-router';

const Examples = () => {
  return (
    <div>
      <h3 className="text-center page-title">Examples</h3>
      <p>Welcome to example page!</p>
      <ol>
        <li>
          <Link to="/?location=new delhi">New Delhi</Link>
        </li>
        <li>
          <Link to="/?location=bangalore">Bangalore</Link>
        </li>
      </ol>
    </div>
  );
}

export { Examples };
