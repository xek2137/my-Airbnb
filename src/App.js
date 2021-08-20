import React, {Component} from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import Header from './components/layout/Header/Header';
import MainLayout from './components/layout/MainLayout/MainLayout';
import MainAreaComponent from './components/layout/MainAreaComponent/MainAreaComponent';
import {myNewTheme} from './styles/theme';
import styles from './styles/App.module.scss';
import LoadingWidget from './components/UI/LoadingWidget/LoadingWidget';

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
    return (
      <ChakraProvider resetCSS theme={myNewTheme}>
        <div className={styles.container}>
          <Header onSearch={(term) => this.searchHandler(term)} />
          <MainLayout />
          {this.state.loading
            ? <LoadingWidget />
            : <MainAreaComponent areas={this.state.areas} />
          }
        </div>
      </ChakraProvider>
    );
  }
}

export default App;
