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
componentDidUpdate(){
  console.log("ComponentDidUpdate is called");
  if(this.state.date==null){
  this.setState({date:'updated'});
}
}
render(){
  console.log("Render is called");
 
  return (
      <div className="App">
         
          <Home text="Home Component"/>

          <h1>ComponentDidUpdate() life cycle even</h1>
          <h1>Life cycle Stage: mounting, updating, unmounting</h1>
          <p>ComponentWillount has been removed after ES6 using constructor coz it run before rendered so it becomes problematic 
            while updating state or API call that is done better by componentDidMount</p>
          <p>In componentDidUpdate is called when any updattion occurs whether clicked event of update state. So try to give condition
            while using it
            </p>

          <p> First constructor is called</p>
          <p> Second Render is called</p>
          <p> Third ComponentDidMount is called</p>
          <p> fourth When Component updates something then render method is again called</p>

          <button onClick={()=>this.setState({date:'updated'})}>Click here to update</button>

      </div>
    );
 }
}
export default App;
