import React, {useState, useEffect, useReducer} from 'react';
import Header from './components/layout/Header/Header';
import MainLayout from './components/layout/MainLayout/MainLayout';
import MainAreaComponent from './components/layout/MainAreaComponent/MainAreaComponent';
import LoadingWidget from './components/UI/LoadingWidget/LoadingWidget';
import SearchBar from './components/UI/SearchBar/SearchBar';
import AppLayout from './components/layout/AppLayout/AppLayout';
import Footer from './components/layout/Footer/Footer';
import LoggedInContext from './context/loggedInContext';

const backendAreas = [
  {
    id: 1,
    name: 'Demacia',
    city: 'Zeffira',
    rating: '9.2',
    heroes: '100',
    image: '',
  },
  {
    id: 2,
    name: 'Noxus',
    city: 'Noxus Prime',
    rating: '9.2',
    heroes: '100',
    image: '',
  },
];

const reducer = (state, action)=>{
  switch (action.type) {
    case 'set-areas':
      return {...state, areas: action.areas};
    case 'set-loading':
      return {...state, loading: action.loading};
    case 'login':
      return {...state, isLoggedIn: true};
    case 'logout':
      return {...state, isLoggedIn: false};
    default:
      throw new Error('Something goes wrong:' + action.type);
  }
};

const initialState = {
  areas: [],
  loading: true,
  isLoggedIn: false,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchHandler = (term) => {
    const newAreas = [...backendAreas].filter(i => i.name.toUpperCase().includes(term.toUpperCase()));
    dispatch({type: 'set-areas', areas: newAreas});
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch({type: 'set-areas', areas: backendAreas});
      dispatch({type: 'set-loading', loading: false});
    }, 1000);
  }, []);

  const header = (
    <Header>
      <SearchBar onSearch={term => searchHandler(term)} />
    </Header>
  );
  const menu = (
    <MainLayout />
  );
  const content = (
    state.loading
      ? <LoadingWidget />
      : <MainAreaComponent areas={state.areas} />
  );
  const footer = (
    <Footer />
  );
  return (
    <LoggedInContext.Provider value={{
      isLoggedIn: state.isLoggedIn,
      login: () => dispatch({type: 'login'}),
      logout: () => dispatch({type: 'logout'}),
    }}>
      <AppLayout
        header={header}
        menu={menu}
        content={content}
        footer={footer}
      />
    </LoggedInContext.Provider>
  );
};

export default App;
