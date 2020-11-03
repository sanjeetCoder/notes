// Reducer

const Increment = (state = 0, action) => {
  switch (action.type) {
    case "Increment":
      return state + 2;

    default:
      return state;
  }
};

export default Increment;
