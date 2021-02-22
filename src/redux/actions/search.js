import * as types from '../types';

export function getSearchUsers(query) {
    return {
        type: types.GET_SEARCH_REQUESTED,
        query: query
    }
}