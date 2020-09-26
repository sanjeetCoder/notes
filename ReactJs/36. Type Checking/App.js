import React, { Component } from 'react';
import About from './About';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Type Checking</h1>
        {/* <About data={"10"} /> */}     {/*It gives error */}
        <About data={10} name={"sanjeet"}/>

      </div>
    );
  }
}

export default App;
