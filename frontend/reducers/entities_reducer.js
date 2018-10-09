// import React from 'react'
import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import benchesReducer from './benches_reducer';

export default combineReducers({
  users: usersReducer,
  errors: errorsReducer,
  session: sessionReducer,
  benches: benchesReducer
});
