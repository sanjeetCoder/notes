import React, { Component } from 'react';
import {memo} from 'react';

class User extends Component{

    render(){
            console.warn(this.props.data);
        return(
            <div>
                <h1>User Component</h1>
            </div>
        );
    }
}

export default memo(User);