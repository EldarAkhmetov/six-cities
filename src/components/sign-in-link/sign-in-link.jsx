import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
  getAuthorizationStatus,
  getCurrentUserData
} from '../../reducer/user/selectors';
import {actionCreators} from '../../reducer/user/user';

const SignInLink = (props) => {
  const {onClickHandler, userData} = props;
  let name = `Sign in`;
  let avatarUrl;
  let avatarStyles;

  if (userData) {
    name = userData.name;
    avatarUrl = userData.avatar_url;
    avatarStyles = {
      backgroundImage: `url(${avatarUrl})`,
    };
  }

  return (
    <a
      className="header__nav-link header__nav-link--profile"
      onClick={(evt) => {
        evt.preventDefault();
        if (!userData) {
          onClickHandler(true);
        }
      }}
      href="#"
    >
      <div
        className="header__avatar-wrapper user__avatar-wrapper"
        style={avatarStyles || null}
      >
      </div>
      <span className="header__login">{name}</span>
    </a>
  );
};

SignInLink.propTypes = {
  isAuthorizationRequired: PropTypes.bool,
  userData: PropTypes.any,
  onClickHandler: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    isAuthorizationRequired: getAuthorizationStatus(state),
    userData: getCurrentUserData(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClickHandler: (status) => {
    dispatch(actionCreators.authorizationRequired(status));
  }
});

export {SignInLink};

export default connect(mapStateToProps, mapDispatchToProps)(SignInLink);
