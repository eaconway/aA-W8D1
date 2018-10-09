import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  return currentUser ? (
    <ul>
      <h2>Hi, {currentUser.username}</h2>
      <button  onClick={logout}>Log Out!</button>
    </ul>
  ) : (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
};


export default Greeting;
