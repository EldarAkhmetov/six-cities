const initialState = {
  currentCity: `Amsterdam`,
};

const actionType = {
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
};

const actionCreator = {
  changeCurrentCity(city) {
    return {
      type: actionType.CHANGE_CURRENT_CITY,
      city
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CHANGE_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.city
      };

    default:
      return state;
  }
};

export {
  actionType,
  actionCreator,
  reducer
};
