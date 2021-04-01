console.log('App is running!');


// JSX - JAVASCRIPT XML
// const test = <p>Testing JSX TESTING JSX!</p>;
var test = React.createElement(
    "h1",
    { id: "someid" },
    "Something New"
);
var appRoot = document.getElementById('app');

ReactDOM.render(test, appRoot);
