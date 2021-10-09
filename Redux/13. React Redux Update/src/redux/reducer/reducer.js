import { GET_DETAILS, POST_DETAILS, UPDATE_DETAILS } from '../type';

const initialState = {
  details: [],
  detailsById: [],
  isResponse: false,
  isUpdateResponse: false,
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        details: action.payload,
      };
    case POST_DETAILS:
      return {
        isResponse: action.payload,
      };

    case UPDATE_DETAILS:
      return {
        isUpdateResponse: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
