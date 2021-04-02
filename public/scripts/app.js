'use strict';

console.log("App is running!");

// NEVER MANUALLY CHANGE THIS FILE USE SRC/APP.JS
// JSX - JAVASCRIPT XML
// you can only have one root element in jsx
var test = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'POSI-BOT2'
  ),
  React.createElement(
    'p',
    null,
    'This is a react refactor project'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'one'
    ),
    React.createElement(
      'li',
      null,
      'two'
    ),
    React.createElement(
      'li',
      null,
      'three'
    )
  )
);
var user = {
  name: 'James',
  age: 29,
  location: 'Fort Collins'
};
var userName = 'James';
var userAge = 29;
var userLocation = 'Fort Collins';

var testTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name.toUpperCase()
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'City: ',
    user.location
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(testTwo, appRoot);
