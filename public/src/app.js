console.table("App is running!");

const app = {
  title: "PosiBot V2",
  subtitle: "A Random positivity generator in REACT",
  options: ["One", "Two"],
};

const user = {
  age: 29,
  name: "Jms",
  location: "Philly",
};
const options = app.options;

function getLocation(location) {
  if (location) {
    return <p>Location : {location}</p>;
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

const test = (
  <div>
  <h1>{app.title}</h1>
    {app.subtitle && <p>description: {app.subtitle}</p>}
   <p>{options.length > 0 ? 'Here are your options' : 'No options'}</p>
  </div>
);

let count = 0; 
const addOne = () => {
console.log('addOne')
};
const testTwo = (
  <div>
  <h1>Count:{count}</h1>
  <button onClick={addOne}>+1</button>
  </div>
);
console.log(testTwo)
const appRoot = document.getElementById("app");

ReactDOM.render(testTwo, appRoot);
