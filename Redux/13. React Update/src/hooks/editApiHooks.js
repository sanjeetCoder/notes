import { useEffect, useState } from 'react';
import { GetDetailsById } from '../api/axiosRequest';

export default (props) => {
  const [detailsById, setDetailsById] = useState({});
  const EditApiAction = (requestId) => {
    GetDetailsById(requestId)
      .then((res) => {
        console.log('Response Data by Id __________', res);
        setDetailsById(res);
      })
      .catch((exp) => {
        console.log('Exception error is ', exp);
      });
  };
  useEffect(() => {
    EditApiAction(props);
  }, []);
  return [detailsById];
};
