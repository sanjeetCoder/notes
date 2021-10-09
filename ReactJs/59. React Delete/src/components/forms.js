import React, { useState } from 'react';
import { PostApiAction } from '../redux/action/action';
import { useDispatch, useSelector } from 'react-redux';
const Forms = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();
  const isResponse = useSelector((state) => state.Reducer.isResponse);

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
    dispatch(PostApiAction(finalData));
  };

  if (isResponse) {
    alert('Your response has been submitted !');
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
            <label htmlFor='inputPhone'>Phone</label>
            <input
              type='text'
              className='form-control'
              id='inputPhone'
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

        <button
          type='submit'
          className='btn btn-primary'
          onClick={(e) => {
            clickHandler(e);
          }}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Forms;
