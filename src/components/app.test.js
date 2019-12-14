import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

it(`OfferList correctly renders after launch`, () => {
  const props = {
    offerCards: []
  };

  const tree = renderer
    .create(<App {...props}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
