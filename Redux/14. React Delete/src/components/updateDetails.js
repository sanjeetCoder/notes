import React, { useState, useEffect } from 'react';
import { PostApiAction, UpdateApiAction } from '../redux/action/action';
import { useDispatch, useSelector } from 'react-redux';
import GetDetailsByHooks from '../hooks/getDetailsByHooks';
import { useParams } from 'react-router-dom';

const UpdateDetails = () => {
  const { id } = useParams();
  console.log('Params id is__________', id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();
  const isUpdateResponse = useSelector(
    (state) => state.Reducer.isUpdateResponse
  );

  const [detialById] = GetDetailsByHooks(id);

  console.log('detialById is ************', detialById);

  useEffect(() => {
    const data = () => {
      if (detialById.data) {
        setName(detialById.data.name);
        setEmail(detialById.data.email);
        setPhone(detialById.data.phone);
        setCountry(detialById.data.country);
      }
    };
    data();
  }, [detialById.data]);
  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const countryHandler = (e) => {
    setCountry(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    const finalData = {
      name: name,
      email: email,
      phone: phone,
      country: country,
    };
    dispatch(UpdateApiAction(finalData, id));
  };

  if (isUpdateResponse) {
    alert('Your data has been Updated !');
  }
  return (
    <div>
      <form>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='inputName'>Name</label>
            <input
              type='text'
              className='form-control'
              id='inputName'
              placeholder='Name'
              defaultValue={name}
              onChange={(e) => nameHandler(e)}
            />
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='inputEmail'>Email</label>
            <input
              type='email'
              className='form-control'
              id='inputEmail'
              placeholder='Email'
              defaultValue={email}
              onChange={(e) => emailHandler(e)}
            />
          </div>
        </div>

        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='inputPhone'>Phone</label>
            <input
              type='text'
              className='form-control'
              id='inputPhone'
              placeholder='Phone'
              defaultValue={phone}
              onChange={(e) => phoneHandler(e)}
            />
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='inputCountry'>Country</label>
            <input
              type='text'
              className='form-control'
              id='inputCountry'
              placeholder='Country'
              defaultValue={country}
              onChange={(e) => countryHandler(e)}
            />
          </div>
        </div>

        <button
          type='submit'
          className='btn btn-primary'
          onClick={(e) => {
            clickHandler(e);
          }}
        >
          Update Details
        </button>
      </form>
    </div>
  );
};

export default UpdateDetails;
