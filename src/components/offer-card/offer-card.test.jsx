import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card';

it(`OfferCard correctly renders after relaunch`, () => {
  const mock = {
    id: 0,
    isPremium: false,
    previewImage: ``,
    isFavorite: false,
    price: 1,
    type: ``,
    title: ``,
  };

  const tree = renderer
    .create(<OfferCard card={mock} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
