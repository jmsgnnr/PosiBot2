// taking header and extending it to include all features of react
// react components require one method to be defined, render
class PosiBot2 extends React.Component {
  render() {
    const title = "PosiBot2";
    const subTitle = "A random positivity generator, now in React!";
    const options = ["laugh ", "joke ", "dance ", "frolic "];

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlepick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>Need Some Love?</button>
         </div>
    );
  }
}


class Options extends React.Component {
  removeAll() {
    console.log(this.props.options)
  }
  render() {
    return (
      <div>
      <button onClick={this.removeAll}>Remove All!</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}
class AddOption extends React.Component {
  handleAdd(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option)
    }
    
  }
  render() {
    return (
      <div>
        <Option />
        <form onSubmit={this.handleAdd}>
        <input type='text' name="option" />
        <button onSubmit={this.handleAdd}>ADD OPTIONS!</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<PosiBot2 />, document.getElementById("app"));

//$ babel public/src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
