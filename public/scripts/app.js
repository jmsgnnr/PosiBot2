"use strict";

console.table("App is running!");

var app = {
  title: "PosiBot V2",
  subtitle: "A Random positivity generator in REACT",
  options: []
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
// will be called with event object aka 'e'
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  // points to element event starts on
  // .elements contains a list of elements by name
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderTest();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  renderTest();
};

var makeDecision = function makeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById("app");

var renderTest = function renderTest() {
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
      options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: makeDecision },
      "What Should I Do?"
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      "Remove all"
    ),
    React.createElement(
      "ol",
      null,

      // adding key allows us to keep track of location within array on rerendering
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option!"
      )
    )
  );
  ReactDOM.render(test, appRoot);
};
renderTest();

//$ babel public/src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
