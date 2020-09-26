import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      jsonData:[]
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts").then((resp)=>{
      resp.json().then((result)=>{
        console.warn(result);
        this.setState({
          jsonData:result
        })
        console.log(this.state.jsonData)
        
      })
    })
  }
  render() {

   const final=this.state.jsonData.map((data)=>{
   return <p>Id: {data.userId}, Title : {data.title} , Body: {data.body}</p>
     

   })

    return (
      <div>
        <h1>Final Data: Use array[] or array{}, if you are getting an issue like, map function is not defined, 
    also try to print inner data like data.id or data.title</h1>
        {final}
      </div>
    );
  }
}

export default App;