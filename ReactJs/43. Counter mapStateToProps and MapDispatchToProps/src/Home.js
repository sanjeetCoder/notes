import React, { Component } from 'react';

class Home extends Component {
    render() {
        if(this.props.image==='')
        {
            throw new Error('Image Not Found');
        }
        return (
            <div>
                <h1>Home Component</h1>
                <img src={this.props.image} className="image"></img>
            </div>
        );
    }
}

export default Home;