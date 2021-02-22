import { combineReducers } from 'redux';
import users from './users'; // here we load the data from api as a rep.

const rootReducer = combineReducers({
    root: users,
});

export default rootReducer;