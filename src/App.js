import React, {useEffect, useReducer, useCallback} from 'react';
import Header from './components/layout/Header/Header';
import MenuBar from './components/layout/MainLayout/MenuBar';
import MainAreaComponent from './components/layout/MainAreaComponent/MainAreaComponent';
import LoadingWidget from './components/UI/LoadingWidget/LoadingWidget';
import SearchBar from './components/UI/SearchBar/SearchBar';
import AppLayout from './components/layout/AppLayout/AppLayout';
import Footer from './components/layout/Footer/Footer';
import LoggedInContext from './context/loggedInContext';
import TopArea from './components/views/RUNETERRA__MAP/topArea/TopArea';
import useStateStorage from './hooks/useStateStorage';
import useWebsiteTitle from './hooks/useWebsiteTitle';

const backendAreas = [
  {
    id: 1,
    name: 'Demacia',
    city: 'Zeffira',
    rating: '9.5',
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
  const [storage, setStorage] = useStateStorage('id', 'default value');
  useWebsiteTitle('Stronghold');

  const searchHandler = (term) => {
    const newAreas = [...backendAreas].filter(i => i.name.toUpperCase()
      .includes(term.toUpperCase()));
    dispatch({type: 'set-areas', areas: newAreas});
  };

  const getTopArea = () => {
    if (state.areas.length < 2) {
      return null;
    } else {
      return state.areas
        .sort((a, b) => a.rating > b.rating ? -1 : 1)[0];
    }
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
    <MenuBar />
  );
  const content = (
    state.loading
      ? <LoadingWidget />
      : (
        <>
          <input type="text" value={storage} onChange={e => setStorage(e.target.value)} />
          {getTopArea(1) ? <TopArea getArea={getTopArea} /> : null}
          <MainAreaComponent areas={state.areas} />
        </>
      )
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
