import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "../types";
//git api access token
// const gitDevAPIAccessToken = process.env.GIT_API_ACCESS_TOKEN;

function getApi(query) {
    console.log("query: ", query);
    return fetch(`https://api.github.com/search/users?q=${query}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .catch((error) => {
            throw error;
        });
}

function* fetchUsers(action) {
    try {
        const users = yield call(getApi, action.query);
        yield put({ type: "GET_USERS_SUCCESS", users: users });
    } catch (e) {
        yield put({ type: "GET_USERS_FAILED", message: e.message });
    }
}

function* userSaga() {
    yield takeEvery(types.GET_SEARCH_REQUESTED, fetchUsers);
}

export default userSaga;