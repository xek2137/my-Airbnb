import * as React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
// import {ComponentSelector} from '@emotion/react';
import Header from './components/layout/Header/Header';
import MainLayout from './components/layout/MainLayout/MainLayout';
import MainAreaComponent from './components/layout/MainAreaComponent/MainComponent';
import styles from './styles/App.module.scss';

const App = () => (
  <ChakraProvider>
    <div className={styles.section}>
      <Header />
      <MainLayout />
      <MainAreaComponent />
    </div>
  </ChakraProvider>
);

export default App;
