const initialState = {
  currentCity: `Amsterdam`
};

const locations = {
  'Amsterdam': {
    coords: [52.38333, 4.9]
  },
  'Tbilisi': {
    coords: [41.687834, 44.809531]
  },
  'Saint Petersburg': {
    coords: [59.882981, 30.226238]
  },
  'Beijing': {
    coords: [39.91651, 116.390747]
  },
  'Buenos Aires': {
    coords: [-34.621025, -58.341329]
  },
  'Summerside': {
    coords: [46.390642, -63.792638]
  }
};

const actionTypes = {
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`
};

const actionCreators = {
  changeCurrentCity(city) {
    return {
      type: actionTypes.CHANGE_CURRENT_CITY,
      city
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_CITY:
      return {currentCity: action.city};

    default:
      return state;
  }
};

export {locations, actionCreators};

export default reducer;
