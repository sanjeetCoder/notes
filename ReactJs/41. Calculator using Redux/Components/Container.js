import React, { Component } from 'react';
import {connect} from 'react-redux';
import Action from '../Actions/Action'

const arithmetic=

    [
        {operation:"addition",symbol:"+"},
        {operation:"subtraction",symbol:"-"},
        {operation:"multiplication",symbol:"*",},
        {operation:"division",symbol:"/"},
    ]

class Container extends Component {
    constructor(){
        super();
        this.state={
            selectedValue:"",
            firstNumber:null,
            secondNumber:null,
            
        }

        this.selectHandler=this.selectHandler.bind(this);
    }

     selectHandler = (e) => {
        this.setState({
            ...this.state,
            selectedValue:e.target.value,

        })
        console.log(this.state.firstNumber)

        const operate=arithmetic.filter(val=>val.operation===e.target.value)[0]
        console.log("Operation value " , operate.operation);
        var firstNumber=parseInt(this.state.firstNumber)
        var secondNumber=parseInt(this.state.secondNumber)

        this.props.Action(operate.operation,operate.symbol,firstNumber,secondNumber);
        
    }

    firstNumberHandler = (e) => {
        this.setState({
            ...this.state,
            firstNumber:e.target.value,
        })
    }

    secondNumberHandler = (e) => {
        this.setState({
            ...this.state,
            secondNumber:e.target.value
        })
    }
 
    render() {
        return (
            <div>

                <h2>Calculator using Redux</h2>
                <ul>
                    <li>First Number:<br/> <input type="text" onChange={(event)=>this.firstNumberHandler(event)}></input></li><br/>
                    <li>Second Number:<br/> <input type="text" onChange={(event)=>this.secondNumberHandler(event)}></input></li>
                </ul>

                <select id="select" name="operation" onChange={this.selectHandler}>
                   
                    {
                    arithmetic.map((val)=>
                        <option key={val.operation}>{val.operation}</option>
                    )
                    
                    }
                </select>
                <h3>Selected Operation: {this.state.selectedValue}</h3>
                <h4> Result is : {this.props.final}</h4>

                
            </div>
        );
    }
}

const mapStateToProps=({reducer})=>{
    console.log("Value is " ,reducer.result)
    return{
        final:reducer.result
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        Action:(operation,symbol,first,second)=>dispatch(Action(operation,symbol,first,second))
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Container);