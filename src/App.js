import React, {useState, useEffect} from 'react';
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

const App = () => {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const searchHandler = (term) => {
    const newAreas = [...backendAreas].filter(i => i.name.toUpperCase().includes(term.toUpperCase()));
    setAreas(newAreas);
  };

  useEffect(() => {
    setTimeout(() => {
      setAreas(backendAreas);
      setLoading(false);
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
    loading
      ? <LoadingWidget />
      : <MainAreaComponent areas={areas} />
  );
  const footer = (
    <Footer />
  );
  return (
    <LoggedInContext.Provider value={{
      isLoggedIn: isLoggedIn,
      login: () => setIsLoggedIn(true),
      logout: () => setIsLoggedIn(false),
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
