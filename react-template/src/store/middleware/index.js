import user from './user';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([fork(user)]);
}
