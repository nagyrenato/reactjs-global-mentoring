export const SET_GENRE = "SET_GENRE";

const genreReducer = (state = null, action) => {
  switch (action.type) {
    case SET_GENRE: {
      state = action.payload;
      return state;
    }

    default:
      return state;
  }
};

export default genreReducer;
