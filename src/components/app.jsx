import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Switch, Route, Redirect} from 'react-router-dom';

import {getAuthorizationStatus} from '../reducer/user/selectors';

import SignIn from './sign-in/sign-in.jsx';
import Main from './main/main.jsx';
import Favorites from './favorites/favorites.jsx';

import withPrivateRoute from '../HOCs/with-private-route/with-private-route.jsx';


const App = (props) => {
  const {isAuthorizationRequired} = props;
  const PrivateFavorites = withPrivateRoute(
      Favorites,
      !isAuthorizationRequired,
      `/`
  );

  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact render={() => {
        return isAuthorizationRequired ? <SignIn /> : <Redirect to="/" />;
      }} />
      <Route path="/favorites" render={() => PrivateFavorites} />
      <Redirect to="/" />
    </Switch>
  );
};

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    isAuthorizationRequired: getAuthorizationStatus(state)
  };
};

export {App};

export default connect(mapStateToProps)(App);
