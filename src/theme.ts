import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark'
};

const theme = extendTheme({
  config,
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1202px",
    '2xl': "1550px",
    '3xl': "1950px"
  },
  colors: {
    gray: {
      50: '#f9f9f9',
      100: '#ededed',
      200: '#d3d3d3',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#6c6c6c',
      700: '#202020',
      800: '#121212',
      900: '#111'
    }
  }
});

export default theme;
