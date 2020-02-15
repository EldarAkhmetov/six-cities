import React from 'react';
import renderer from 'react-test-renderer';
import {LocationsList} from './locations-list.jsx';

const mock = new Map();

mock.set(`Amsterdam`, {latitude: 48.85661, longitude: 2.351499, zoom: 13});

it(`LocationsList correctly renders`, () => {
  const tree = renderer
    .create(<LocationsList currentCity={`Amsterdam`} locations={mock} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
