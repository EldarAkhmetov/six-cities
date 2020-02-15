const initialState = {
  offerCards: []
};

const actionType = {
  LOAD_OFFERS: `LOAD_OFFERS`
};

const actionCreator = {
  loadOffers(offerCards) {
    return {
      type: actionType.LOAD_OFFERS,
      offerCards
    };
  }
};

const operation = {
  loadOffers: () => (dispatch, _getState, api) => {
    return api.get(`\hotels`).then((response) => {
      dispatch(actionCreator.loadOffers(response.data));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_OFFERS:
      return {
        ...state,
        offerCards: action.offerCards
      };

    default:
      return state;
  }
};

export {
  actionType,
  actionCreator,
  operation,
  reducer
};
