import React , { Component } from 'react';
import './Style.css';
export default class App extends Component{

    render(){
        const h2={
            color:'green',
            fontSize:20
        }

        const h3={
            color:'blue',
            fontSize:20
        }

        return(
            <div className="Style">
                <h2 style={h2}>Global Style</h2>
                <p>Global Style :- We can create css file globally </p>
                <h2 style={h2}>Inline Style</h2>
                <p>Inline Style :- We can create css file internally</p>
                <h2 style={h2}>Conditional Style</h2>
                <p style={this.props.data=='changes'?h2:h3}>Conditional Style: We can apply css conditoionally</p>
            </div>
        )
    }
}