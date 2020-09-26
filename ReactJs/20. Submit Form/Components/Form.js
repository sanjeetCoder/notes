import React from 'react';

class Form extends React.Component{
    constructor(){
        super();
        this.state={
            user:null,
            password:null
        }
    }
submitForm(){
    console.warn(this.state);
}
    render(){
        return(
            <div>
                <h1></h1>
                <ul>
                    <li>User Name :  <input 
                    type='text'
                    placeholder="Enter your name"
                    onChange={(e)=>{this.setState({user:e.target.value})}} 
                     />
                     </li><br></br>
                   
                    <li>Password : <input 
                    type='password'
                     placeholder="Enter password"
                     onChange={(e)=>{this.setState({password:e.target.value})}} 
                     /></li><br></br>

                    <button onClick={()=>this.submitForm()}>Submit</button>
                    
                </ul>
            </div>
        );
    }
    
}

export default Form;