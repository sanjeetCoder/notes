import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  // useEffect isused when we load pages or components
  useEffect(() => {
    loadUsers();
  }, []); // [] acts as dependency otherwise will run infinitely

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    // console.log(result);
    // setUsers(result.data);
    setUsers(result.data.reverse()); // will add data at the begining
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    to=""
                    className="btn btn-primary mr-2"
                    to={`/users/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    to={`/users/edit/${user.id}`}
                    className="btn btn-outline-primary mr-2"
                  >
                    Edit
                  </Link>
                  <Link
                    to=""
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
