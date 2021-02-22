import { all } from 'redux-saga/effects'
import userSaga from './userSaga'
import userSearchSaga from './userSearchSaga'

export default function* rootSaga() {
    yield all([
        userSaga(),
        userSearchSaga(),
    ])
}