const initialState = {
  favourites: [],
  city: { city: {} },
  search: {},
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENT":
      return (state = {
        ...state,
        city: {
          city: action.payload.city,
        },
      });
    /* 
    case "SEARCH":
      return (state = {
        state,
        search: action.payload,
      }); */

    case "ADD_TO_FAV":
      return (state = {
        ...state,
        favourites: [...state.favourites, action.payload.city],
      });
    default:
      return state;
  }
};

export default appReducer;
