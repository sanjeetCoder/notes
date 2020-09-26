import React from 'react';
import './App.css';
import Home from './Components/Home'
import { render } from 'react-dom';

class App extends React.Component{
  constructor(){
    super();
    console.log("Constructtor is called");
}

componentDidMount(){
  console.log("ComponentDidMount is called")
}

render(){
  console.log("Render is called");
 
  return (
      <div className="App">
         
          <Home text="Home Component"/>

          <h1>ComponentDidMount() life cycle even</h1>
          <p> First constructor is called</p>
          <p> Second Render is called</p>
          <p> Third ComponentDidMount ids called</p>

      </div>
    );
 }
}
export default App;
