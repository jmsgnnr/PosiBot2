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

const testTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(test, appRoot);
