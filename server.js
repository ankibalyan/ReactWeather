const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(9000, function () {
  console.log('Your app is up and running at http://localhost:9000');
});
