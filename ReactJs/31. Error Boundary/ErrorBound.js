import React, { Component } from 'react';

export default class ErrorBound extends Component{
    constructor(){
        super();
          this.state = { hasError: false };

    }

    static getDerivedStateFromError(error){
        return {error:true}
    }
    render(){

        return(
            <div>
                {
                 this.state.error ? <h1>Custom Page for Error Handling</h1>:this.props.children
                }
            </div>
        );
    }
}