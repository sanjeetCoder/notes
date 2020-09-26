import React, {Component } from 'react';
import './App.css';
import { render } from 'react-dom';
import Form from './Components/Form'

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>Submit Form</h1>
        <Form />
      </div>
    )
  }
}


export default App;
