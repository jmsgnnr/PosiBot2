var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
  console.log('addOne', count);
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
  console.log('minusOne');
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
  console.log('resetOne');
};
let count = 0; 
const addOne = () => {
  count++;
  renderCounterApp();
console.log('addOne', count)
};

const minusOne = () => {
  count--;
  renderCounterApp();
  console.log('minusOne') 
};
const reset = () => {
  count = 0;
  renderCounterApp();
  console.log('resetOne')
  
};

const renderCounterApp = () => {
    const testTwo = (
      <div>
      <h1>Count:{count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>RS1</button>
      </div>
    );
    ReactDOM.render(testTwo, appRoot);
  };
  renderCounterApp();
  