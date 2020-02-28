import axios from 'axios';
import {actionCreators} from './reducer/offers/offers';

const createApi = (dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 403) {
      dispatch(actionCreators.authorizationRequired(true));
    }

    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createApi;
