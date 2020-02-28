import {reducer, actionCreators} from './current-city.js';

it(`Reducer change currentCity in state correctly`, () => {
  expect(
      reducer(
          {currentCity: `Amsterdam`},
          actionCreators.changeCurrentCity(`Moscow`)
      )
  ).toEqual({
    currentCity: `Moscow`
  });
});
