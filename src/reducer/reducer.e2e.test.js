import reducer from './reducer';
import {actionCreators} from './reducer';

it(`Reducer should return initial state by default`, () => {
  expect(reducer(undefined, {})).toEqual({
    currentCity: `Amsterdam`
  });
});

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
