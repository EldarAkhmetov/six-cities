import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {locations, actionCreators} from '../../reducer/reducer.js';

const LocationsList = (props) => {
  const {currentCity, changeCurrentCity} = props;

  return (
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.keys(locations).map((it, index) => {
            return (
              <li className="locations__item" key={index}>
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
  changeCurrentCity: PropTypes.func
};

const mapStateToProps = (state) => {
  return {currentCity: state.currentCity};
};

const mapDispatchToProps = (dispatch) => ({
  changeCurrentCity: (city) => dispatch(actionCreators.changeCurrentCity(city))
});

export {LocationsList};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationsList);
