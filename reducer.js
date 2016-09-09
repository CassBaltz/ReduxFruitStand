const reducer = function (oldState, action) {
  switch(action.type) {
    case "ADD_ORANGE":
    return {fruit: [...oldState.fruit, action.fruit]};
    default:
      return oldState;
  }
};

// state shape
// {
//   fruit: 'orange';
// }

export default reducer;
