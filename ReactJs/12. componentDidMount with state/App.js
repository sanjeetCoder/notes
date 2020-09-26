import React from 'react';
import './App.css';
import Home from './Components/Home'
import { render } from 'react-dom';

class App extends React.Component{
  constructor(){
    super();
    console.log("Constructtor is called");
    this.state={
      data:null
    }
}

componentDidMount(){
  this.setState({date:'updated'})
  console.log("ComponentDidMount is called")
}

render(){
  console.log("Render is called");
 
  return (
      <div className="App">
         
          <Home text="Home Component"/>

          <h1>ComponentDidMount() life cycle even</h1>
          <h1>Life cycle Stage: mounting, updating, unmounting</h1>
          <p>In component did mount we call API and update state also coz it runs when render methos is run and return html into the 
            browser</p>

          <p> First constructor is called</p>
          <p> Second Render is called</p>
          <p> Third ComponentDidMount is called</p>
          <p> fourth When Component updates something then render method is again called</p>

      </div>
    );
 }
}
export default App;
