import React, {Component } from 'react';
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state={
      users:[]
    }
  }

  componentDidMount(){
    fetch("https://reqres.in/api/users").then((resp)=>{
        resp.json().then((result)=>{
          console.log(result);
            this.setState({
              users:result.data
            })
        })
    })
  }
  render(){
    
      const finalData=this.state.users.map((data,id)=>{
          return(
          <div key={id}>
            <p> Id : {id} , First_Name : {data.first_name} , Last_Name : {data.last_name} , Email :  {data.email}</p>
            <img src={data.avatar} alt="Image"/>
          </div>
        )
      })
    
    return(
      <div className="App">
        <h1>API call</h1>
            {finalData}
            
      </div>
    )
  }
}



export default App;
