export const SET_MOVIES = "SET_MOVIES";

const movies = (state = [], action) => {
  switch (action.type) {
    case SET_MOVIES:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default movies;
