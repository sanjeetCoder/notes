import {
  GET_DETAILS,
  POST_DETAILS,
  UPDATE_DETAILS,
  DELETE_DETAILS,
} from '../type';
import {
  GetApiDetails,
  PostApiDetails,
  UpdateApiDetails,
  DeleteDetailsById,
} from '../../api/axiosRequest';

const GetApiAction = () => {
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

const PostApiAction = (request) => {
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

const UpdateApiAction = (request, id) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_DETAILS,
      payload: false,
    });
    return UpdateApiDetails(request, id).then((res) => {
      console.log('Response Data is __________', res);
      dispatch({
        type: UPDATE_DETAILS,
        payload: true,
      });
    });
  };
};

const DeleteApiAction = (id) => {
  console.log('Delete Request Id is +++++++++++', id);
  return function (dispatch) {
    dispatch({
      type: DELETE_DETAILS,
      payload: false,
    });
    return DeleteDetailsById(id).then((res) => {
      console.log('Delete Response Data is __________', res);
      dispatch({
        type: DELETE_DETAILS,
        payload: true,
      });
    });
  };
};

export { GetApiAction, PostApiAction, UpdateApiAction, DeleteApiAction };
