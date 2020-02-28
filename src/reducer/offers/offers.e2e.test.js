import MockAdapter from 'axios-mock-adapter';
import createApi from '../../api.js';
import {actionCreators, operations} from './offers';

const mock = {
  offerCards: [
    {
      id: `14`,
      img: `https://es31-server.appspot.com/six-cities/static/hotel/3.jpg`,
      isPremium: false,
      price: 374,
      rating: 3.6,
      title: `The Pondhouse`,
      type: `hotel`,
      coordinates: [
        51.204402,
        6.7773140000000005
      ],
      city: `Dusseldorf`,
      cityCoords: [
        51.225402,
        6.776314
      ],
      cityZoom: 13
    }
  ]
};

it(`Action creator should return correct offers`, () => {
  expect(actionCreators.loadOffers(mock.offerCards)).toEqual({
    type: `LOAD_OFFERS`,
    offerCards: mock.offerCards
  });
});

it(`Should make correct API call`, () => {
  const dispatch = jest.fn();
  const api = createApi(dispatch);
  const apiMock = new MockAdapter(api);
  const offersLoader = operations.loadOffers();

  apiMock
    .onGet(`/hotels`)
    .reply(200, [{fake: true}]);

  return offersLoader(dispatch, jest.fn(), api).then(() => {
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: `LOAD_OFFERS`,
      offerCards: [{fake: true}]
    });
  });
});
