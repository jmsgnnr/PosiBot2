console.table("App is running!");

const app = {
  title: "PosiBot V2",
  subtitle: "A Random positivity generator in REACT",
  options: [],
};

const options = app.options;

function getLocation(location) {
  if (location) {
    return <p>Location : {location}</p>;
  }
}
// will be called with event object aka 'e'
const onFormSubmit = (e) => {
  e.preventDefault();
  // points to element event starts on
  // .elements contains a list of elements by name
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderTest();
  }
};

const removeAll = () => {
  app.options = [];
  renderTest();
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

const renderTest = () => {
  const test = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>description: {app.subtitle}</p>}
      <p>{options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={makeDecision}>What Should I Do?</button>
      <button onClick={removeAll}>Remove all</button>
      <ol>
      {
        // adding key allows us to keep track of location within array on rerendering
        app.options.map((option) => <li key={option}>{option}</li>)
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option!</button>
      </form>
    </div>
  );
  ReactDOM.render(test, appRoot);
};
renderTest();

//$ babel public/src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
