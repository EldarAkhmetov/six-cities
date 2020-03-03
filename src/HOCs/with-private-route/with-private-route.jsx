import React from 'react';
import {Redirect} from 'react-router-dom';

const withPrivateRoute = (Component, isLogin, url) => {
  return (
    isLogin ? <Component /> : <Redirect to={url} />
  );
};

export default withPrivateRoute;
