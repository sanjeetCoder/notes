import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetApiAction, DeleteApiAction } from '../redux/action/action';
import { Link, useParams, useHistory } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const responseData = useSelector((state) => state.Reducer.details);

  // console.log('responseData from action_______________', responseData);
  const { id } = useParams();
  const history = useHistory();
  const isDeleteResponse = useSelector(
    (state) => state.Reducer.isDeleteResponse
  );
  // const deleteHandler = (e) => {
  //   console.log('Delete id is ______________', e);

  //   dispatch(DeleteApiAction(e));
  // };

  useEffect(() => {
    dispatch(GetApiAction());
  }, [dispatch]);

  if (isDeleteResponse) {
    alert('Your data has been deleted !');
    window.location.reload(false);
  }

  const result = responseData
    ? responseData.map((data, index) => {
        return (
          <tr key={index}>
            <th scope='row'>{data.id}</th>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.country}</td>
            <td>
              <Link to={`/edit/${data.id}`}>
                <span class='material-icons'>edit</span>
              </Link>
            </td>

            <td>
              <span
                class='material-icons'
                onClick={(e) => dispatch(DeleteApiAction(data.id))}
              >
                delete
              </span>
            </td>
          </tr>
        );
      })
    : null;
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
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
    </div>
  );
};

export default Home;
