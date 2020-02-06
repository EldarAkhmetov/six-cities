import React from 'react';
import {connect} from 'react-redux';
import OfferCard from '../offer-card/offer-card.jsx';
import PropTypes from 'prop-types';

import {getOffersByCity} from '../../utils/utils.js';
import withActiveItem from '../../HOCs/with-active-item.jsx';


const OffersList = (props) => {
  const {offerCards, activeItemId, changeActiveItemId} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offerCards.map((card) => <OfferCard
        key={`card-${card.id}`}
        card={card}
        activeItemId={activeItemId}
        itemClickHandler={changeActiveItemId}
      />)}
    </div>
  );

};

OffersList.propTypes = {
  offerCards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    isPremium: PropTypes.bool,
    isFavorite: PropTypes.bool.isRequired,
    previewImage: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string,
    title: PropTypes.title,
  })),
  activeItemId: PropTypes.string,
  changeActiveItemId: PropTypes.func
};

const mapStateToProps = (state) => {
  return {offerCards: getOffersByCity(state.offers, state.currentCity)};
};

export {OffersList};

export default connect(mapStateToProps)(withActiveItem(OffersList));
