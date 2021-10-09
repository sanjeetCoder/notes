import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetApiAction } from '../redux/action/action';
import { Link } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.Reducer.details);

  console.log('responseData from action_______________', responseData);

  useEffect(() => {
    dispatch(GetApiAction());
  }, [dispatch]);

  const result = responseData.map((data, index) => {
    return (
      <tr key={index}>
        <th scope='row'>{data.id}</th>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.phone}</td>
        <td>{data.country}</td>
        <td>
          <Link to={`edit/${data.id}`}>
            <span className='material-icons edit'>edit</span>
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>React Redux Crud Operation | Read Operation</h1>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Country</th>
            <th scope='col'>Edit</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
    </div>
  );
};

export default Home;
