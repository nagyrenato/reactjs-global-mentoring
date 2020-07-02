export const FILL_MOVIES = "FILL_MOVIES";

const movies = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case FILL_MOVIES:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default movies;
