import React, {Component } from 'react';
import './App.css';
import OtherDom from './OtherDom';

class App extends Component{

  render(){
    
    return(
      <div className="App">
        <h1>React Portals</h1>
        <p>In this, we basically create a new root id and render component in new div</p>
        <OtherDom />
            
      </div>
    )
  }
}



export default App;
