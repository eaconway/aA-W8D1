import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  let preloadedContent;

  if (window.current_user) {
    preloadedContent = {session: {id: window.current_user.id}};
  }
  const store = configureStore(preloadedContent);

  ReactDOM.render(<Root store={store} />, root);
  window.createUser = APIUtil.createUser;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

});
