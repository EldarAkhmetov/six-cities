import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.AUTHORIZATION_REQUIRED;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].isAuthorizationRequired;
};

export const getCurrentUserData = (state) => {
  return state[NAME_SPACE].userData;
};
