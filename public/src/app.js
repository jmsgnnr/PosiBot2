// taking header and extending it to include all features of react 
// react components require one method to be defined, render 
class PosiBot2 extends React.Component {
  render(){
    const title = 'PosiBot2'
    const subTitle ='A random positivity generator, now in React!'
    const options = ['laugh ', 'joke ', 'dance ', 'frolic '];


    return (
      <div>
      <Header title={title} subTitle={subTitle}/>
      <Action/>
      <Options options={options}/>
      <AddOption/>
      </div>
    )
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
  render(){
    return (
      <div>
      <button>Need Some Love?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return <div>
    {
    this.props.options.map((option) => <p key={option}>{option}</p>)
    }
    </div>
  }
}
class AddOption extends React.Component {
  render() {
    return <div>
    <Option/>
    <button>Add OPTIONS!</button>
    </div>
  }
}
class Option extends React.Component {
  render() {
    return <div>
    <p>Hello OPTION NEST</p>
    </div>
  }
}

ReactDOM.render(<PosiBot2/>, document.getElementById('app'))

//$ babel public/src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
