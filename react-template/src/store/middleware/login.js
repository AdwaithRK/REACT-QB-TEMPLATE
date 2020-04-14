import { takeEvery, all, call, put } from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import apiCalls from "../../services/backend-services";
import utils from "../utils";

function* watchUserLogin() {
  yield takeEvery(
    actionTypes.LOGIN_ACTIONS.USER_LOGIN_REQUEST,
    userLoginWithDetails
  );
}

function* userLoginWithDetails(action) {
  try {
    let response = yield call(apiCalls.userLogin, action.credentials);
    if (response.data["success"]) {
      utils.storeUserToken(response.data.token);
      yield put({
        type: actionTypes.LOGIN_ACTIONS.STORE_LOGIN_TOKEN,
        payload: { authenticationToken: response.data.token }
      });
    }
  } catch (err) {
    console.log("The error is---", err);
  }
}

export default function* login() {
  yield all([watchUserLogin()]);
}
