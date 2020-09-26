import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';
class Login extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            password:""

        }
    }

    login(){
        console.log(this.state);
        fetch("http://localhost:3000/login?q="+this.state.name).then((data)=>{
            data.json().then((res)=>{
                console.warn("resp", res);
                if(res.length>0){
                    localStorage.setItem('login',JSON.stringify(res));
                    console.warn(this.props.history.push('list'));
                }
                else{
                    alert("Please check correct user name and password");
                }
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarMenu/>
                <h1>User Login</h1>
                <input type="text" placeholder="Enter name" onChange={(event)=>this.setState({name:event.target.value})}/><br/><br/>
                <input type="password" placeholder="Enter password" onChange={(event)=>this.setState({password:event.target.value})}/><br/><br/>
                <button onClick={()=>this.login()}>Login</button>

               
            </div>
        );
    }
}

export default Login;