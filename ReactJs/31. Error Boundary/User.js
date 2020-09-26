import React, { Component } from 'react';

class ErrorBound extends Component{

    render(){
        if(true){
            throw new Error('Custome error');
        }
        return(
            <div>
                <h1>User Component</h1>
            </div>
        );
    }
}

export default ErrorBound;