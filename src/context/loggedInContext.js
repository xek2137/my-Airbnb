import React from 'react';

const LoggedInContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export default LoggedInContext;
