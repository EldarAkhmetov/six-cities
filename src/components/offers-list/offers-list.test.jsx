import React from 'react';
import renderer from 'react-test-renderer';
import {OffersList} from './offers-list';

it(`OffersList correctly renders after relaunch`, () => {
  const props = {
    offerCards: []
  };

  const tree = renderer
    .create(<OffersList {...props}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
