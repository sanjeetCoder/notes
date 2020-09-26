import React, { Component } from 'react';

class Error extends Component {
    constructor(props){
        super(props);
        this.state={
            isError:false
        }
    }

    componentDidCatch(error,info)
    {
        this.setState({
            isError:true
        })

        console.log("Error is ",error);
        console.log("Information is ",info);
    }
    
    render() {
        if(this.state.isError)
        {
            return (
                <div>
                    <h1>Something went wrong</h1>
                </div>
            );
        }

        return this.props.children;
        
    }
}

export default Error;