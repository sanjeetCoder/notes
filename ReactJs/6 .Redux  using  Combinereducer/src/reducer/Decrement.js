// Reducer

const Decrement = (state = 20, action) => {
  switch (action.type) {
    case "Decrement":
      return state - 2;

    default:
      return state;
  }
};

export default Decrement;
