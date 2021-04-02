console.log("App is running!");

// NEVER MANUALLY CHANGE THIS FILE USE SRC/APP.JS
// JSX - JAVASCRIPT XML
// you can only have one root element in jsx
const test = (
  <div>
    <h1>POSI-BOT2</h1>
    <p>This is a react refactor project</p>
    <ol>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ol>
  </div>
);
const user = {
  name: 'James',
  age: 29,
  location: 'Fort Collins',
}
const userName = 'James';
const userAge = 29;
const userLocation = 'Fort Collins';

const testTwo = (
  <div>
    <h1>{user.name.toUpperCase()}</h1>
    <p>Age: {user.age}</p>
    <p>City: {user.location}</p>
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(testTwo, appRoot);
