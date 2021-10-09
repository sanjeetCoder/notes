import { GET_DETAILS, POST_DETAILS } from '../type';

const initialState = {
  details: [],
  isResponse: false,
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

    default:
      return state;
  }
};

export default Reducer;
