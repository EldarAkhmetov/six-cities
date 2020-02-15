import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {actionCreator} from '../../reducer/current-city/current-city';
import {getLocations, getCurrentCity} from '../../reducer/offers/selectors';

const LocationsList = (props) => {
  const {locations, currentCity, changeCurrentCity} = props;

  return (
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {[...locations.keys()].map((it, index) => {
            return (
              <li className="locations__item" key={`location-${index}`}>
                <a
                  className={`locations__item-link tabs__item${
                    it === currentCity ? ` tabs__item--active` : ``
                  }`}
                  onClick={() => {
                    changeCurrentCity(it);
                  }}>
                  <span>{it}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

LocationsList.propTypes = {
  currentCity: PropTypes.string,
  changeCurrentCity: PropTypes.func,
  locations: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    currentCity: getCurrentCity(state),
    locations: getLocations(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCity: (city) => dispatch(actionCreator.changeCurrentCity(city))
});

export {LocationsList};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationsList);
