export const GET_DETAILS = 'GET_DETAILS';

const initialState = {
  details: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        details: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
