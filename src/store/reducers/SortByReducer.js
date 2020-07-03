export const SET_SORTBY = "SET_SORTBY";

const sortByReducer = (state = "Release date", action) => {
  switch (action.type) {
    case SET_SORTBY: {
      state = action.payload;
      return state;
    }

    default:
      return state;
  }
};

export default sortByReducer;
