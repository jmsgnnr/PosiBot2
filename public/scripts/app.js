'use strict';

console.log('App is running!');

// NEVER MANUALLY CHANGE THIS FILE USE SRC/APP.JS
// JSX - JAVASCRIPT XML
var test = React.createElement(
  'p',
  null,
  'WHATEVER 33333!'
);

var appRoot = document.getElementById('app');

ReactDOM.render(test, appRoot);
