
import { combineReducers } from 'redux';
import sliceFile from './sliceFile';
import sliceUser from './sliceUser';


const rootReducer = combineReducers({
   user: sliceUser,
   files: sliceFile,
   // другие редукторы, если они есть
});

export default rootReducer;
