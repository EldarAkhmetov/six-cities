const initialState = {
  offerCards: []
};

const actionTypes = {
  LOAD_OFFERS: `LOAD_OFFERS`
};

const actionCreators = {
  loadOffers(offerCards) {
    return {
      type: actionTypes.LOAD_OFFERS,
      offerCards
    };
  }
};

const operations = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(`\hotels`).then((response) => {
      dispatch(actionCreators.loadOffers(response.data));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_OFFERS:
      return {
        ...state,
        offerCards: action.offerCards
      };

    default:
      return state;
  }
};

export {
  actionTypes,
  actionCreators,
  operations,
  reducer
};
