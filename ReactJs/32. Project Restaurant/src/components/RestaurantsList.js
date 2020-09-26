import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Table } from 'react-bootstrap';
import NavBarMenu from './NavBarMenu'

class RestaurantsList extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.getData();
    }
    getData() {
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                // console.warn(result);
                this.setState({ list: result })
            })
        })
    }
 
delete(id){
    
    fetch("http://localhost:3000/restaurant/" +id, {
        method: "DELETE",
        // headers:{
        //     'Content-Type': 'application/json'
        // }, 
        // body: JSON.stringify(this.state)
    }).then((result) => {
        result.json().then((resp) => {
            alert('restaurant has been deleted');
            this.getData();
            // console.warn(resp);
        })
    })
}
render() {
    // console.warn(this.state);
    const data = this.state.list.map((item, id) => {
        return (

            <tbody>
                <tr>
                    <td>{id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.rating}</td>
                    <td><span><Link to={"/update/" + item.id}><FontAwesomeIcon icon={faEdit} />Edit</Link></span>
                        <span className="delete" onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} />Delete</span>
                    </td>

                </tr>
            </tbody>



        )
    })

    return (
        <div>
            <NavBarMenu/>
            <h1>Restaurants List</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Rating</th>
                        <th>Operation</th>

                    </tr>
                </thead>
                {data}

            </Table>




        </div>
    );
}
}

export default RestaurantsList;
