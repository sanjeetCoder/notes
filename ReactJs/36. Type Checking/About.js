import React, { Component } from 'react';
import PropTypes from 'prop-types';

class About extends Component {
    render() {
        return (
            <div>
                Value is : {this.props.data}
                <p>Name is : {this.props.name}</p>
            </div>
        );
    }
}
About.propTypes={
    data:PropTypes.number,
    // name:PropTypes.number---------Gives error
    name:PropTypes.string  // No Error

}
export default About;