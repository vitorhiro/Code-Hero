import { combineReducers } from 'redux';

import heroes from './heroes/reducer';

export default combineReducers({
  heroes,
});
