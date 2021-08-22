import React, {Component} from 'react';
import Header from './components/layout/Header/Header';
import MainLayout from './components/layout/MainLayout/MainLayout';
import MainAreaComponent from './components/layout/MainAreaComponent/MainAreaComponent';
import styles from './styles/App.module.scss';
import LoadingWidget from './components/UI/LoadingWidget/LoadingWidget';
import SearchBar from './components/UI/SearchBar/SearchBar';
import AppLayout from './components/layout/AppLayout/AppLayout';
import Footer from './components/layout/Footer/Footer';
import LoggedInContext from './context/loggedInContext';

class App extends Component {

  areas = [
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

  state = {
    areas: this.areas,
    loading: true,
    isLoggedIn: false,
  };

  searchHandler(term) {
    console.log('szukaj z app', term);
    const areas = [...this.state.areas]
      .filter(i => i.name
        .toUpperCase()
        .includes(term.toUpperCase()));
    this.setState({areas});
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        areas: this.areas,
        loading: false,
      });
    }, 1000);
  }

  render() {

    const header = (
      <Header>
        <SearchBar onSearch={term => this.searchHandler(term)} />
      </Header>
    );
    const menu = (
      <MainLayout />
    );
    const content = (
      this.state.loading
        ? <LoadingWidget />
        : <MainAreaComponent areas={this.state.areas} />
    );
    const footer = (
      <Footer />
    );

    return (
      <LoggedInContext.Provider value={{
        isLoggedIn: this.state.isLoggedIn,
        login: () => this.setState({isLoggedIn: true}),
        logout: () => this.setState({isLoggedIn: false}),
      }}>
        <AppLayout
          header={header}
          menu={menu}
          content={content}
          footer={footer}
        />
      </LoggedInContext.Provider>
    );
  }
}

export default App;
