import React from 'react';
import './App.css';
import { render } from 'react-dom';

class App extends React.Component{
  constructor(){
    super();
    console.log("Constructtor is called");
    this.state={
      data:10
    }
}

render(){
console.log('The value of data is 10'); // 
  return (
      <div className="App">
          <h1>Pure Component</h1>
          <p>It is used when we want to render the same state again and again</p>
          <button onClick={()=>this.setState({data:this.state.data})}>Click here to update</button>

      </div>
    );
 }
}
export default App;
