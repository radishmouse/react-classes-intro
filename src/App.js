import React from 'react';
import Output from './Output';
import Increment from './Increment';
import Decrement from './Decrement';
import './App.css';

class App extends React.Component {
  // How to store values that can change over time:
  // 1. define the constructor() 
  //    this is the initializer for App
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
      message: 'waiting...'
    };
    // make sure the `this` keyword inside of 
    // _decrementCount only points at _this_ App Component
    this._decrementCount = this._decrementCount.bind(this);
    // Equivalent to using an Arrow Function property
  }

  componentDidMount() {
    // We're ready!!!
    // This is the first lifecycle method where you can 
    // call this.setState()
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
      .then(r => r.json())
      .then((data) => {
        this.setState({
          message: data.value
        });
      });
  }

  render() {
    // NEVER EVER EVAAAARRRR call this.setState() inside of render.
    // It's OK if an onClick or a child component does.
    // But not the render() method itself.
    // this.setState({
    //   count: this.state.count + 1
    // });
    // NOOOOOOOOOOOOOOOOOOOOOOO
    return (
      <div className="App">
        <h1>Hello!</h1>
        <h2>{this.state.message}</h2>
        <Output 
          value={`Balance: ${this.state.count}`}
        />
        <Increment 
          // 3. pass a reference to the helper method
          //    as a prop
          handleClick={this._incrementCount}        
        />
        <Decrement 
          handleClick={this._decrementCount}
        />
      </div>
    );
  }
  // 2. write a "helper method arrow function"
  //    that changes the value using this.setState()
  _incrementCount = () => {
    // 💩
    // this.state.count++; // NOOOOOOOOOOOOOO!

    // YASSS
    this.setState({
      // You must pass it an object,
      // and you include the keys you want to update.
      count: this.state.count + 1
    });
  }

  _logCount = () => {
    console.log(`this is the new count: ${this.state.count}`);
  }

  _logNonArrow() {
    console.log(`this is the new count: ${this.state.count}`);
  }

  _decrementCount() {

    // make sure we never go below zero!
    if (this.state.count > 0) {
      console.log('they are decrementing!');
      console.log(`it should print ${this.state.count - 1}`);
      // this.setState is asynchronous!!!
      this.setState({
        count: this.state.count - 1
      }, () => {
        this._logNonArrow();
        this._logCount();
      });
    }

  }
}
export default App;
