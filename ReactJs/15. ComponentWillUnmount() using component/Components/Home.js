import React from 'react';

class Home extends React.Component{
    componentWillUnmount(){
        alert("Component is being deleted");
    }
    render(){
        return(
            <div>
                <ul>
                    <li>Name: SanjeetCoder</li>
                    <li>Email:sanjeetcoders@gmail.com</li>
                    <li>Phone: 9877181062</li>
                </ul>
            </div>
        );
    }
    
}

export default Home;