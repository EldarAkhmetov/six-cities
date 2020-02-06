import offers from '../mocks/offers.js';

const initialState = {
  currentCity: `Amsterdam`,
  offers: [...offers]
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
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
  GET_OFFERS: `GET_OFFERS`
};

const actionCreators = {
  changeCurrentCity(city) {
    return {
      type: actionTypes.CHANGE_CURRENT_CITY,
      city
    };
  },

  getOffers() {
    return {
      type: actionTypes.GET_OFFERS,
      offers
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_CITY:
      return {
        ...state,
        currentCity: action.city
      };

    case actionTypes.GET_OFFERS:
      return {
        ...state,
        offers: action.offers
      };

    default:
      return state;
  }
};

export {locations, actionCreators};

export default reducer;
