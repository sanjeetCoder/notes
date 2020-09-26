import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            nameError: '',
            emailError: '',
            passwordError: ''
        }
    }
   // Validations

   valid=()=>{

    if (this.state.name.includes("@")) {
        this.setState({
            nameError:"name must be valid"
        })
    }
    else if(this.state.name.length<5){
        this.setState({
            nameError:"name length must be greter than 5"
        })
    }

    else if (!this.state.email.includes("@")) {
        this.setState({
            emailError:"email is invalid"
        })
    }
    
    else if (this.state.email.length<10) {
        this.setState({
            emailError:"email must be greater than 10"
        })
    }


    else if (!this.state.password.includes("@")) {
        this.setState({
            passwordError:"password must incluse @ symbol"
        })
    }


    else if (this.state.password.length<6) {
        this.setState({
            passwordError:"email must be greater than equal to 6"
        })
    }

    else{
        return true;
    }
}
    // nameChangeHandler 

    nameChangeHandler(event) {
        this.setState({
            name: event.target.value
        })
    }

    // emailChangeHandler 

    emailChangeHandler(event) {
        this.setState({
            email: event.target.value
        })
    }

    // passwordChangeHandler 

    passwordChangeHandler(event) {
        this.setState({
            password: event.target.value
        })
    }


    // Submit form

    submitForm() {
        this.setState({
            nameError:"",
            emailError:"",
            passwordError:""
        })
        if (this.valid()) {
            console.log(this.state);
            alert("Your form has been submitted");
        }
    }
    render() {
        return (
            <div>
                <h1></h1>
                <ul>
                    <li>User Name :  <input
                        type='text'
                        placeholder="Enter your name"
                        onChange={(event) => this.nameChangeHandler(event)}
                    />
                    </li>
                    <p style={{color:'red',fontSize:14}}>{this.state.nameError}</p>
                    <br></br>

                    <li>User Email :  <input
                        type='text'
                        placeholder="Enter your email"
                        onChange={(event) => this.emailChangeHandler(event)}
                    />
                    </li>
                    <p style={{color:'red',fontSize:14}}>{this.state.emailError}</p>
                    <br></br>

                    <li>Password : <input
                        type='password'
                        placeholder="Enter password"
                        onChange={(event) => this.passwordChangeHandler(event)}
                    /></li>

                    <p style={{color:'red',fontSize:14}}>{this.state.passwordError}</p>

                    <br></br>

                    <button onClick={() => this.submitForm()}>Submit</button>

                </ul>
            </div>
        );
    }

}

export default Form;