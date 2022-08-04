import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
// import service from '../../../services/auth';
import { setToken, setError } from './actions';

function* login({ payload, success }) {
  try {
    // const { data } = yield service.getToken(payload);
    success(payload.token, payload.userId);
  } catch (error) {
    yield put(setError(error.message));
  }
}

function* validate({ payload }) {
  try {
    // Handle token verify logic here
    yield put(setToken(payload.token));
    window.location.pathname = '';
  } catch (error) {
    yield put(setError(error.message));
  }
}

export default function* deliveriesSaga() {
  yield takeLatest(types.AUTH_LOGIN, login);
  yield takeLatest(types.AUTH_VERIFY, validate);
}
