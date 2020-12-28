import { combineReducers } from 'redux';

import lists from './listsReducer';

const rootReducer = combineReducers({
  lists,
});

export default rootReducer;
