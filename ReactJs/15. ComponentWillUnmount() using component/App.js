import React from 'react';
import './App.css';
import Home from './Components/Home'
import { render } from 'react-dom';

class App extends React.Component{
  constructor(){
    super();
    console.log("Constructtor is called");
    this.state={
      data:true
    }
}

render(){
  console.log("Render is called");
 
  return (
      <div className="App">
         {
           this.state.data==true?
           <div>
          <Home text="Home Component"/>

          <h1>ComponentWillUnmount() life cycle event</h1>
          <h1>Life cycle Stage: mounting, updating, unmounting</h1>
         
          <p>In ComponentWillUnmount is called just before a component is unmounted or ended. Note: It is used to remove timer, 
            and cancelling network request and cleaning subscription kind of things.
            Note: Also note that do not try to call setState() method   
            </p>

          <p> First constructor is called</p>
          <p> Second Render is called</p>
          <p> Third ComponentDidMount is called</p>
          <p> fourth When Component updates something then render method is again called</p>
          </div> : null
         }

          <button onClick={()=>this.setState({data:!this.state.data})}>Click here to update</button>

      </div>
    );
 }
}
export default App;
