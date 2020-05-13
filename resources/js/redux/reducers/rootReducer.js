import {combineReducers} from 'redux';
import { postReducers } from  './postReducers'
import {commentReducer} from  './commentReducer'

export default combineReducers({
   postReducers: postReducers,
   commentReducer: commentReducer
});