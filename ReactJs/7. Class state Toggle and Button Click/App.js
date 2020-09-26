import React from 'react';
import './App.css';
import Home from './Components/Home'

class App extends React.Component{

  constructor(){
    super();
    this.state={
      name:'sahil',
      isValid:true
    }
  }

  toggle(){
    this.setState({
      isValid:!this.state.isValid
    })
  }
    
  render(){
    return (
      <div className="App">
        {
          this.state.isValid?
          <div>
          <h1>Hello World </h1>
          <Home text="Welcome to Home Component props" intro={{name:'sanjeet'}}/> 
          <p> {this.state.name}</p>
          
          </div>
          : null
        }
        
        <button onClick={()=>this.toggle()}>Click me</button>
  
      </div>
    );
  }
}

export default App;
