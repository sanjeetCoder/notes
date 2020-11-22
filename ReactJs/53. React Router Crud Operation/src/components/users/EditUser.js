import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  //   alert(id);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/users/${id}`, user); //update
    history.push("/");
  };

  const loadUser = async () => {
    // const result = await axios.get("http://localhost:3001/users/" + id);
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    // console.log(result);
    setUser(result.data); // It will load into the field
  };

  return (
    <div className="conatiner">
      <div className="w-50 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter User Name"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter phone"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control  form-control-lg"
              placeholder="Website"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button type="submit" className="btn btn-warning btn-block">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
