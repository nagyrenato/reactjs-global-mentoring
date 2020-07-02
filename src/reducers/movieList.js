const movieList = (state = [], action) => {
  switch (action.type) {
    case "ADD-MOVIE":
      return state.concat([action.item]);
    default:
      return state;
  }
};

export default movieList;
