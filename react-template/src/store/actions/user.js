import * as userActionTypes from '../actionTypes/user';

export const login = (credentials) => ({
  type: userActionTypes.LOGIN.REQUEST,
  credentials,
});
