import React from 'react';

class Home extends React.Component{
    render(){
        return(
            <div>
                {this.props.text}        
            </div>
        );
    }
    
}

export default Home;