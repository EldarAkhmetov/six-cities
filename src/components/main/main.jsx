import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import OffersList from '../offers-list/offers-list.jsx';
import Map from '../map/map.jsx';
import LocationsList from '../locations-list/locations-list.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import SignInLink from '../sign-in-link/sign-in-link.jsx';

import {getAuthorizationStatus} from '../../reducer/user/selectors';

const Main = (props) => {
  const {isAuthorizationRequired} = props;

  if (isAuthorizationRequired) {
    return <SignIn />;
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <SignInLink />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
              </form>
              <OffersList />
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    isAuthorizationRequired: getAuthorizationStatus(state)
  };
};

export {Main};

export default connect(mapStateToProps)(Main);
