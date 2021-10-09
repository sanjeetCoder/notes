import React, { useState } from 'react';
import { PostApi } from '../redux/action/action';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';

const Forms = () => {
  const dispatch = useDispatch();
  const isResponse = useSelector((state) => state.Reducer.isResponse);

  console.log('isResponse is ________________', isResponse);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

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
    const details = {
      name: name,
      email: email,
      phone: phone,
      country: country,
    };
    dispatch(PostApi(details));
  };

  if (isResponse) {
    alert('Your data has been submitted successfully');
  }

  return (
    <div className='forms'>
      <form>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='inputName'>Name</label>
            <input
              type='text'
              className='form-control'
              id='inputName'
              placeholder='Name'
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
              onChange={(e) => emailHandler(e)}
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='inputEmail4'>Phone</label>
            <input
              type='text'
              className='form-control'
              id='inputEmail4'
              placeholder='Phone'
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
              onChange={(e) => countryHandler(e)}
            />
          </div>
        </div>
        <div className='btn'>
          <button
            type='submit'
            className='btn btn-primary'
            onClick={(e) => {
              clickHandler(e);
            }}
          >
            Submit Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
