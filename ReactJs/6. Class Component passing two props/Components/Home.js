import React from 'react';

class Home extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.text}   </p>
                <p>{this.props.intro.name}</p>     
            </div>
        );
    }
    
}

export default Home;