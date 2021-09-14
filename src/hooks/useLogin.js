import React, {useContext} from 'react';
import LoggedInContext from '../context/loggedInContext';

const useLogin = () => {
  const loginContext = useContext(LoggedInContext);

  const login = loginContext.isLoggedIn;
  const setLogin = (value) => {
    {value ? loginContext.login() : loginContext.logout();}
  };

  return [login, setLogin];
};

export default useLogin;
