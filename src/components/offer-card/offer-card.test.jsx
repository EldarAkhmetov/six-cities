import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from './offer-card';

it(`OfferCard correctly renders after relaunch`, () => {
  const props = {
    id: 0,
    isPremium: false,
    previewImage: ``,
    isFavorite: false,
    price: 1,
    type: ``,
    title: ``,
  };

  const tree = renderer
    .create(<OfferCard {...props}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
