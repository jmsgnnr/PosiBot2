// taking header and extending it to include all features of react 
// react components require one method to be defined, render 

class Header extends React.Component {
  render() {
    return <p>This is from header!</p>
  }

}

//$ babel public/src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
