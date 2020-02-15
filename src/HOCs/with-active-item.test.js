import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item';
import {OffersList} from '../components/offers-list/offers-list.jsx';

const mock = [
  {
    id: 1,
    previewImage: `img/apartment-01.jpg`,
    images: [`../img/room.jpg`, `../img/apartment-01.jpg`, `../img/apartment-02.jpg`, `../img/apartment-03.jpg`,
      `../img/studio-01.jpg`, `../img/apartment-01.jpg`],
    title: `Beautiful & luxurious studio at great location`,
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
    type: `apartment`,
    bedrooms: 3,
    maxAdults: 4,
    price: 120,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Cofee machine`, `Dishwasher`],
    host: {
      id: 3,
      isPro: true,
      name: `Angelina`,
      avatarUrl: `../img/avatar-angelina.jpg`,
    },
    description: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.`,
    coordinates: [52.3909553943508, 4.85309666406198],
    city: `Amsterdam`,
  }
];

configure({adapter: new Adapter()});

const MockComponentWrapped = withActiveItem(OffersList);

it(`Should change activeItemId correctly when item img was clicked`, () => {
  const wrapper = mount(<MockComponentWrapped offerCards={mock} />);

  const itemImg = wrapper.find(`img`);

  itemImg.simulate(`click`, {
    preventDefault: () => {}
  });

  wrapper.update();

  expect(wrapper.state().activeItemId).toEqual(1);
});
