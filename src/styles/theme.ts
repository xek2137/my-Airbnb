import {extendTheme} from '@chakra-ui/react';
import {ButtonStyles as Button} from '../components/ButtonStyles/buttonStyles';

export const myNewTheme = extendTheme({
  colors: {
    primary: '#845EC2',
    secondary: '#FF6F91',
    highlight: '#00C9A7',
  },
  components: {
    Button,
  },
});
