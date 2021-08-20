import {extendTheme} from '@chakra-ui/react';
import {ButtonStyles as Button} from '../components/ButtonStyles/buttonStyles';
import {ContainerStyles as Container} from '../components/ContainerStyles/containerStyles';

export const myNewTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'PHOTO',
      },
    },
  },
  colors: {
    primary: '#845EC2',
    secondary: '#FF6F91',
    highlight: '#00C9A7',
  },
  components: {
    Button,
    Container,
  },
});
