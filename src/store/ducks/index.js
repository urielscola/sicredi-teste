import { combineReducers } from 'redux';

import dragons from './dragons';
import users from './users';

export default combineReducers({
  dragons,
  users
});
