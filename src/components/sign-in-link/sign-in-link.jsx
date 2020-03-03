import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import {getCurrentUserData} from '../../reducer/user/selectors';

const SignInLink = (props) => {
  const {userData} = props;
  let email = `Sign in`;
  let avatarUrl;
  let avatarStyles;
  let url = `/login`;

  if (userData) {
    email = userData.email;
    avatarUrl = userData.avatar_url;
    avatarStyles = {
      backgroundImage: `url(${avatarUrl})`,
    };
    url = `/favorites`;
  }

  return (
    <Link
      className="header__nav-link header__nav-link--profile" to={url}
    >
      <div
        className="header__avatar-wrapper user__avatar-wrapper"
        style={avatarStyles || null}
      >
      </div>
      <span className="header__login">{email}</span>
    </Link>
  );
};

SignInLink.propTypes = {
  userData: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    userData: getCurrentUserData(state)
  };
};

export {SignInLink};

export default connect(mapStateToProps)(SignInLink);
