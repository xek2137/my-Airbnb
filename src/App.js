import * as React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
// import {ComponentSelector} from '@emotion/react';
import Header from './components/layout/Header/Header';
import MainLayout from './components/layout/MainLayout/MainLayout';
import MainAreaComponent from './components/layout/MainAreaComponent/MainComponent';
import styles from './styles/App.module.scss';
import {myNewTheme} from './styles/theme';

const App = () => (
  <ChakraProvider resetCSS theme={myNewTheme}>
    <div className={styles.section}>
      <Header />
      <MainLayout />
      <MainAreaComponent />
    </div>
  </ChakraProvider>
);

export default App;
