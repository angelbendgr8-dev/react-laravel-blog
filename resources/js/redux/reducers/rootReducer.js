import {combineReducers} from 'redux';
import { postReducers } from  './postReducers'
import {commentReducer} from  './commentReducer'
import HistoryReducer from './HistoryReducer';

export default combineReducers({
   postReducers: postReducers,
   commentReducer: commentReducer,
   HistoryReducer: HistoryReducer
});