import React, {Component } from 'react';
import './App.css';
import { render } from 'react-dom';
import Form from './Components/Form'


class App extends React.Component{
  constructor(){
    super();
    this.state={
      list:[
        {name:'Sanjeet',email:"sanjeetcoders@gmail.com", phone:'9877181062'},
        {name:'Suraj',email:"Suraj@gmail.com", phone:'9977181062'},
        {name:'sanjana',email:"sanjana@gmail.com", phone:'9977181062'},
        {name:'Tarjan',email:"Tarjan@gmail.com", phone:'7877181062'},

      ]
    }
  }
  render(){
    const data=this.state.list.map((item)=>{
      return(
      <div  style={{color:'white',backgroundColor:'black',paddingTop:10,paddingBottom:10,marginBottom:10}}>
        <span style={{color:'white'}}>Name : {item.name} , Email: {item.email} , Phone : {item.phone} </span>
      </div>
      )
      })
    return(
      <div className="App">
        <h1>Submit Form</h1>
  
        {data}
      </div>
    )
  }
}


export default App;
