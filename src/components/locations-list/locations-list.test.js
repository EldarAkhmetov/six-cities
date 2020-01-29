import React from 'react';
import renderer from 'react-test-renderer';
import {LocationsList} from './locations-list.jsx';

it(`LocationsList correctly renders`, () => {
  const tree = renderer
    .create(<LocationsList currentCity={`Amsterdam`} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
