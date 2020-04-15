import { takeEvery, all, call, put } from 'redux-saga/effects';
import * as userActionTypes from '../actionTypes/user';
import userApi from '../../services/backend-services/user';
import { storeUserToken } from '../../utils';

function* watchUserLogin() {
  yield takeEvery(userActionTypes.LOGIN.REQUEST, userLoginWithDetails);
}

function* userLoginWithDetails(action) {
  try {
    let response = yield call(userApi.login, action.credentials);
    storeUserToken(response.data.token);
    yield put({
      type: userActionTypes.STORE_LOGIN_TOKEN,
      payload: { authenticationToken: response.data.token },
    });
  } catch (err) {
    console.log('The error is---', err);
  }
}

export default function* login() {
  yield all([watchUserLogin()]);
}
