import {combineReducers} from 'redux';
import {reducer as offerCards} from './offers/offers';
import {reducer as currentCity} from './current-city/current-city';
import NameSpace from './name-spaces';

export default combineReducers({
  [NameSpace.CURRENT_CITY]: currentCity,
  [NameSpace.OFFERS]: offerCards,
});
