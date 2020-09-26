import React, { Component } from 'react';
import {Increment,Decrement} from './Action/Action'
import {connect} from 'react-redux'

const mapStateToProps=(props)=>{
    // console.log("props",props)
    return {
        inc:props.increment,
        dec:props.decrement
    }
}

const mapDispatchToProps=(dispatch)=>{

    return {
        increment:()=>dispatch(Increment()),
        decrement:()=>dispatch(Decrement())
    }
}

class App extends Component {
    render() {
        return (
            <div>
            <h1>Counter Increment : {this.props.inc}</h1>
            <h1>Counter Decrement : {this.props.dec}</h1>
            <button onClick={()=>this.props.increment()}>Add</button>
            <button onClick={()=>this.props.decrement()}>Sub</button>
            
        </div>
        );
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (App);