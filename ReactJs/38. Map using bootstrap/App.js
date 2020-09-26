import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      jsonData: []
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts").then((resp) => {
      resp.json().then((result) => {
        console.warn(result);
        this.setState({
          jsonData: result
        })
        console.log(this.state.jsonData)

      })
    })
  }
  render() {

    const final = this.state.jsonData.map((data) => {
      return(
        <tbody>
          <tr>
          <td>{data.id}</td>
            <td>{data.userId}</td>
            <td>{data.title}</td>
            <td>{data.body}</td>
          </tr>
        </tbody>
      )
    })

    return (
      <div>
        <h1>Final Data: Use array[] or array{}, if you are getting an issue like, map function is not defined,
    also try to print inner data like data.id or data.title</h1>

        <table class="table table-bordered table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Id</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
            </tr>
          </thead>
          {final}

        </table>
      </div>
    );
  }
}

export default App;