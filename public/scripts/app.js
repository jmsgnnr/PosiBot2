"use strict";

console.table("App is running!");

var app = {
  title: "PosiBot V2",
  subtitle: "A Random positivity generator in REACT",
  options: ["One", "Two"]
};

var user = {
  age: 29,
  name: "Jms",
  location: "Philly"
};
var options = app.options;

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location : ",
      location
    );
  }
}

// function getOptions(options) {
//   if (options.length > 0) {
//     return <p> Here are your options: {app.options.length}</p>;
//   } else {
//     return "There are no options";
//   }
// }
// {getOptions(options)}

var test = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    "description: ",
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    options.length > 0 ? 'Here are your options' : 'No options'
  )
);

var count = 0;
var addOne = function addOne() {
  console.log('addOne');
};
var testTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count:",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  )
);
console.log(testTwo);
var appRoot = document.getElementById("app");

ReactDOM.render(testTwo, appRoot);
