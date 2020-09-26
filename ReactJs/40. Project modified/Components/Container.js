import React from 'react';
import calculate  from '../Actions/Action'

import { connect } from 'react-redux';
const city = [
    {
        name : 'Delhi',
        discountPercentage : 10
    },
    {
        name : 'Mumbai',
        discountPercentage : 15
    },
    {
        name : 'Noida',
        discountPercentage : 20
    },
    {
        name : 'Chandigarh',
        discountPercentage : 25
    },
    {
        name : 'Gurgaon',
        discountPercentage : 30
    },
]

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            selectValue:"",
        }
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }
 
    handleDropdownChange(e) {
        // console.log(e.target.value);
        this.setState({ selectValue: e.target.value })
        const selectedValue = city.filter(item => item.name === e.target.value)[0]
        console.log("Selected city" , selectedValue)
        this.props.calculate(selectedValue.discountPercentage);
    }

    render() {
        return (
            <div className="form">
            <h4>Call 8976834832 or 8976834831 to know more. *T&C Apply.</h4><br /><br />
            <h3>FILL IN YOUR DETAILS TO VIEW THIS</h3>
            <h3>AMAZING OFFER.</h3><br /><br />
            <input type="text" placeholder="NAME" /><br /><br />
            <input type="text" placeholder="EMAIL" /><br /><br />
            <input type="number" placeholder="MOBILE" />
            <p>0 of 10 max characters</p><br />
            <h4>Choose Your Location To Avail Discount</h4><br />
            <select id="select" name="city" onChange={this.handleDropdownChange}>
                {
                    city.map((c)=>
                    <option key={c.name}>{`${c.name}`}</option>       
                    )
                }
            </select>  <br />
            <h2>Total Amount to be paid : {this.props.price}</h2><br /> 
            <p>Selected city : {this.state.selectValue} </p><br />

        </div>
        );
    };
}

const mapStateToProps = (amount) => {

    console.log('updated price*******', amount.price);
    return {
        price: amount.price
    }
}

const mapDispatchToProps= dispatch =>{
    return {
        calculate : (discountPercentage) => dispatch(calculate(discountPercentage))
    }
}

export default  connect(mapStateToProps,mapDispatchToProps) (Container);

