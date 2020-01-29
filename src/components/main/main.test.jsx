import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({adapter: new Adapter()});

it(`Main correctly renders after relaunch`, () => {
  const props = {
    offerCards: [
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
      },
    ],

  };

  const tree = shallow(<Main {...props}/>);

  expect(tree).toMatchSnapshot();
});
