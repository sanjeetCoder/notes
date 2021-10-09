import { GET_DETAILS, POST_DETAILS } from '../type';
import { GetApiDetails, PostApiDetails } from '../../api/axiosRequest';

const GetApi = () => {
  return function (dispatch) {
    return GetApiDetails().then((res) => {
      console.log('Response Data is __________', res);
      dispatch({
        type: GET_DETAILS,
        payload: res.data,
      });
    });
  };
};

const PostApi = (request) => {
  console.log('Request is _______________', request);
  return function (dispatch) {
    dispatch({
      type: POST_DETAILS,
      payload: false,
    });
    return PostApiDetails(request).then((res) => {
      console.log('Response Data is __________', res);
      dispatch({
        type: POST_DETAILS,
        payload: true,
      });
    });
  };
};

export { GetApi, PostApi };
