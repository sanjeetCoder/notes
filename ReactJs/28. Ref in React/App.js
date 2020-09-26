import React, {Component } from 'react';
import './App.css';

class App extends Component{

  constructor(){
    super()
    this.userText=React.createRef();
  }

  refText(){
    // console.log(this.userText);
    // this.userText.current.focus();
    this.userText.current.value=10000;


  }
  render(){
    
    return(
      <div className="App">
        <h1>Ref Property</h1>
        <p>It is basically used to manage focus, text selection, media playback, interacting with third party Dom </p>
        <p>It is basically avoidable</p>

        <input ref={this.userText} type="text" placeholder="Enter Something"/>
        <button onClick={()=>this.refText()}>Click here</button>
            
      </div>
    )
  }
}



export default App;
