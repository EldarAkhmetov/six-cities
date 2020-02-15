import reducer from './reducer';

it(`Reducer should return initial state by default`, () => {
  expect(reducer(undefined, {})).toEqual({
    CURRENT_CITY: {
      currentCity: `Amsterdam`
    },

    OFFERS: {
      offerCards: []
    }
  });

});
