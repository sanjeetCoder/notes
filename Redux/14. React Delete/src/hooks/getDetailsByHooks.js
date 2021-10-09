import React, { useEffect, useState } from 'react';
import { GetDetailsById } from '../api/axiosRequest';

export default (props) => {
  const [detialById, setDetailsById] = useState({});
  const GetDetailsByHooks = (requestId) => {
    console.log('requestId is _______________', requestId);
    return GetDetailsById(requestId).then((res) => {
      console.log('Response Data is __________', res);
      setDetailsById(res);
    });
  };
  useEffect(() => {
    GetDetailsByHooks(props);
  }, []);
  return [detialById];
};
