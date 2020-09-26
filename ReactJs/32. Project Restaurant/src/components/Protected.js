import React from 'react';
import { Redirect,Route } from 'react-router-dom'
const Protected = ({component:Cmp,...rest}) => (
    <Route 
    {...rest}
    render={(props)=>
        localStorage.getItem('login') ?(
            <Cmp {...props} />
        ):
        <Redirect
        to="/login"
        />
    } 
    />
)
export default Protected;