import React, { useState, useEffect } from 'react';
import { PostApiAction, UpdateApiAction } from '../redux/action/action';
import EditApiAction from '../hooks/editApiHooks';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditForm = () => {
  const { id } = useParams();
  //   console.log('Id is ____________', id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();
  const isResponse = useSelector((state) => state.Reducer.isResponse);
  const [detailsById] = EditApiAction(id);

  const isUpdateResponse = useSelector(
    (state) => state.Reducer.isUpdateResponse
  );

  console.log('Details by Id is ____________', detailsById);

  useEffect(() => {
    const data = () => {
      if (detailsById.data) {
        setName(detailsById.data.name);
        setEmail(detailsById.data.email);
        setPhone(detailsById.data.phone);
        setCountry(detailsById.data.country);
      }
    };
    data();
  }, [detailsById.data]);

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
    alert('Your data has been updated !');
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
              placeholder=''
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
              placeholder=''
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
              placeholder=''
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
              placeholder=''
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
          Sign in
        </button>
      </form>
    </div>
  );
};

export default EditForm;
