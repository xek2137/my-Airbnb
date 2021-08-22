import React from 'react';

const LoggedInContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

LoggedInContext.displayName = 'LoggedInContext';

export default LoggedInContext;
