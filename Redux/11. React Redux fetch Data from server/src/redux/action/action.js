import { GET_DETAILS } from '../type';
import GetApiDetails from '../../api/axiosRequest';

const Action = () => {
  return function (dispatch) {
    return GetApiDetails()
      .then((res) => {
        console.log('res is_________________', res);
        dispatch({
          type: GET_DETAILS,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log('Response Error_____________', error);
      });
  };
};

export default Action;
