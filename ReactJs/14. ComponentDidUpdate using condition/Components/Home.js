import React from 'react';

class Home extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.text}   </p>
            </div>
        );
    }
    
}

export default Home;