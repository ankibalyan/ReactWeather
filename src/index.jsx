import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Main, Weather, About, Examples } from 'Components';

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="examples" component={Examples} />
      <Route path="about" component={About} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);
