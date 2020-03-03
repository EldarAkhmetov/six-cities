import {createSelector} from 'reselect';
import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.OFFERS;

const getOffers = (state) => {
  return state[NAME_SPACE].offerCards;
};

const getCurrentCity = (state) => {
  return state[NameSpace.CURRENT_CITY].currentCity;
};

const getLocations = createSelector(
    getOffers,
    (offerCards) => {
      const locations = new Map();
      offerCards.forEach((card) => {
        locations.set(card.city.name, card.city.location);
      });

      return locations;
    }
);

const getCurrentCityOffers = createSelector(
    getCurrentCity,
    getOffers,
    (currentCity, offerCards) => {
      return offerCards.filter((card) => {
        return card.city.name === currentCity;
      });
    }
);

export {
  getCurrentCity,
  getLocations,
  getCurrentCityOffers
};
