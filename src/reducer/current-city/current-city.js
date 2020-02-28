const initialState = {
  currentCity: `Amsterdam`,
};

const actionTypes = {
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
};

const actionCreators = {
  changeCurrentCity(city) {
    return {
      type: actionTypes.CHANGE_CURRENT_CITY,
      city
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.city
      };

    default:
      return state;
  }
};

export {
  actionTypes,
  actionCreators,
  reducer
};
