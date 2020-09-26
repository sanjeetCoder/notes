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
        
        
        {/* <button onClick={()=>this.toggle()}>Click me</button> */}
        {/* We use arrow function to bind the function coz onClick lose its scope once it is clicked, and it think like this
         keywork is for my scope.  We can use bind keyword and remove arrow function also 
    
      */}
        
        <button onClick={this.toggle.bind(this)}>Click me</button>
  
      </div>
    );
  }
}

export default App;
