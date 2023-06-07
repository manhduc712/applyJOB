import { combineReducers } from 'redux';
import postReducers from './postReducers';

const reducers = combineReducers({
    post: postReducers
});


export default (state, action) => reducers(state, action);