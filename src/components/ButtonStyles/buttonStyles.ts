import {whiten} from '@chakra-ui/theme-tools';

export const ButtonStyles = {
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    search: () => ({
      bg: 'secondary',
      color: 'white',
      _hover: {
        bg: whiten('secondary', 20),
      },
      _focus: {
        outline: 'none',
        borderColor: '#9ecaed',
        boxShadow: '0 0 10px #9ecaed',
      },
    }),
  },
  // The default `size` or `variant` values
  defaultProps: {},
};
