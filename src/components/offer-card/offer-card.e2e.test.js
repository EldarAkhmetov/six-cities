import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import OfferCard from './offer-card';

const cardId = `${Math.floor(Math.random() * Math.floor(10))}`;

const mock = {
  id: cardId,
  key: 0,
  isPremium: false,
  isFavorite: false,
  previewImage: ``,
  price: 0,
  type: ``,
  title: ``
};

const itemClickHandler = jest.fn();

Enzyme.configure({adapter: new Adapter()});

it(`PlaceCard is correctly handle click`, () => {
  const offerCard = shallow(<OfferCard
    card={mock}
    itemClickHandler={itemClickHandler}
  />);

  const card = offerCard.find(`.place-card`);
  const cardImg = card.find(`.place-card__image-wrapper img`);

  cardImg.simulate(`click`, {
    preventDefault: () => {}
  });

  expect(itemClickHandler).toHaveBeenCalledWith(cardId);
});
