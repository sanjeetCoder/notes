import React from 'react';
import './App.css';
import Home from './Components/Home'

class App extends React.Component{
    
  render(){
    return (
      <div className="App">
        <h1>Hello World </h1>
        <Home text="Welcome to Home Component props" intro={{name:'sanjeet'}}/>
  
      </div>
    );
  }
}

export default App;
