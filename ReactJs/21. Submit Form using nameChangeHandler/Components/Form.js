import React from 'react';

class Form extends React.Component{
    constructor(){
        super();
        this.state={
            user:null,
            password:null
        }
    }
nameChangeHandler(event){
    this.setState({
        user:event.target.value
    })
}

passwordChangeHandler(event){
    this.setState({
        password:event.target.value
    })
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
                    onChange={(event)=>this.nameChangeHandler(event)} 
                     />
                     </li><br></br>
                   
                    <li>Password : <input 
                    type='password'
                     placeholder="Enter password"
                     onChange={(event)=>this.passwordChangeHandler(event)}
                     /></li><br></br>

                    <button onClick={()=>this.submitForm()}>Submit</button>
                    
                </ul>
            </div>
        );
    }
    
}

export default Form;