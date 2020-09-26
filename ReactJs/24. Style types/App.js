import React, {Component } from 'react';
import './App.css';
import { render } from 'react-dom';
import Style from './Components/Style'


class App extends React.Component{

  render(){
    
    return(
      <div className="App">
        <h1>CSS Style</h1>
      <Style data="change"/>
     
      </div>
    )
  }
}



export default App;
