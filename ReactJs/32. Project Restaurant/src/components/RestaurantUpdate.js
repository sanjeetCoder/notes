import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu'

class RestaurantUpdate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            rating: null,
            address: null,
            id:null

        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/restaurant/"+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result);
                this.setState({ 
                    name: result.name,
                    email:result.email,
                    id:result.id,
                    rating:result.rating,
                    address:result.address

                 })
            })
        })
        }

        update(){
            fetch("http://localhost:3000/restaurant/"+this.state.id, {
                method: "PUT",
                headers:{
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(this.state)
            }).then((result)=>{
                result.json().then((resp)=>{
                    alert('restaurant has been updated'); 
                    // console.warn(resp);
                })
            })
        }
    render() {
        // console.log(this.props.match.params.id);
        // console.warn(this.state);
        return (
            <div>
                <NavBarMenu/>
                <h1>Restaurant Update</h1>
                <div>
                    <input 
                    onChange={(event) => this.setState({ name: event.target.value })} 
                    value={this.state.name}
                    placeholder="Restaurant Name" /><br /><br />
                    <input onChange={(event) => this.setState({ email: event.target.value })} 
                    value={this.state.email} 
                    placeholder="Restaurant Email" /><br /><br />
                    <input 
                    onChange={(event) => this.setState({ rating: event.target.value })} 
                    value={this.state.rating} 
                    placeholder="Restaurant Rating" /><br /><br />
                    <input onChange={(event) => this.setState({ address: event.target.value })} 
                    value={this.state.address} 
                    placeholder="Restaurant Address" /><br /><br />

                    <button onClick={() => this.update()}>Update Restaurant</button>
                </div>
            </div>
        );
    }
}

export default RestaurantUpdate;