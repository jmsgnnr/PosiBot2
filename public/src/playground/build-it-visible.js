let visibility = false;

const toggleVis = () => {
   visibility = !visibility;
   render(); 
}
const render = () => {
    const jsx = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleVis}>
        {visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {visibility && (
            <div>
            <p>Hey these are some details</p>
            </div>
        )}
        </div>
    );

ReactDOM.render( jsx, document.getElementById('app'));
};
render();