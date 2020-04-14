import * as actionTypes from "../actionTypes";

const INITIAL_STATE = {
  email: "",
  password: ""
};

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.LOGIN_ACTIONS.STORE_LOGIN_TOKEN:
      debugger;
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.LOGIN_ACTIONS.USER_LOGIN_REQUEST:
      return {
        ...state,
        ...action.credentials
      };
    default:
      return state;
  }
}
