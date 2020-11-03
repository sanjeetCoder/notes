// Reducer

const Increment = (state = 0, action) => {
  switch (action.type) {
    case "Increment":
      return state + action.payload;

    default:
      return state;
  }
};

export default Increment;
