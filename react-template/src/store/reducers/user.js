import * as userActionTypes from "../actionTypes/user";

const INITIAL_STATE = {
  email: "",
  password: ""
};

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case userActionTypes.STORE_LOGIN_TOKEN:
      return {
        ...state,
        ...action.payload
      };
    case userActionTypes.LOGIN.REQUEST:
      return {
        ...state,
        ...action.credentials
      };
    default:
      return state;
  }
}
