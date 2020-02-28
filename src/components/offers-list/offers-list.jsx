import React from 'react';
import {connect} from 'react-redux';
import OfferCard from '../offer-card/offer-card.jsx';
import PropTypes from 'prop-types';

import {getCurrentCityOffers} from '../../reducer/offers/selectors';

import withActiveItem from '../../HOCs/with-active-item/with-active-item.jsx';


const OffersList = (props) => {
  const {offerCards, activeItemId, changeActiveItemId} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offerCards ? offerCards.map((card) => <OfferCard
        key={`card-${card.id}`}
        card={card}
        activeItemId={activeItemId}
        itemClickHandler={changeActiveItemId}
      />) : null}
    </div>
  );

};

OffersList.propTypes = {
  offerCards: PropTypes.arrayOf(PropTypes.object),
  activeItemId: PropTypes.number,
  changeActiveItemId: PropTypes.func
};

const mapStateToProps = (state) => {
  return {offerCards: getCurrentCityOffers(state)};
};

export {OffersList};

export default connect(mapStateToProps)(withActiveItem(OffersList));
